import { NextRequest, NextResponse } from 'next/server';
import { WebClient } from '@slack/web-api';
import { db } from '@/lib/db';

const SLACK_CLIENT_ID = process.env.SLACK_CLIENT_ID || process.env.NEXT_PUBLIC_SLACK_CLIENT_ID;
const SLACK_CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET;
const SLACK_REDIRECT_URI = process.env.SLACK_REDIRECT_URI || 'http://localhost:3000/api/slack/callback';

export async function GET(request: NextRequest) {
    console.log('🔵 Slack OAuth callback received');
    console.log('   Request URL:', request.url);
    
    try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');
    
    console.log('   Query params:', { 
      hasCode: !!code, 
      hasState: !!state, 
      stateLength: state?.length,
      statePreview: state?.substring(0, 100),
      error: error || 'none' 
    });
    
    // Check if user denied access
    if (error) {
      console.log('❌ User denied Slack authorization:', error);
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                      process.env.SITE_URL || 
                      'https://staffix.co';
      console.log('   Redirecting to error page:', `${siteUrl}/onboarding/slack-error?error=${error}`);
      return NextResponse.redirect(
        `${siteUrl}/onboarding/slack-error?error=${error}`
      );
    }
    
    if (!code || !state) {
      console.error('❌ Missing required parameters:', { code: !!code, state: !!state });
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                      process.env.SITE_URL || 
                      'https://staffix.co';
      return NextResponse.redirect(
        `${siteUrl}/onboarding/slack-error?error=missing_parameters`
      );
    }
    
    if (!SLACK_CLIENT_ID || !SLACK_CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'Slack integration is not configured' },
        { status: 500 }
      );
    }
    
    // Decode state to get organization ID
    // State might be URL-encoded, so decode it first
    let stateData: { org_id: string; timestamp: number };
    try {
      // Try URL decoding first (Slack may encode it)
      let decodedState = state;
      try {
        decodedState = decodeURIComponent(state);
      } catch {
        // If URL decode fails, use original state
        decodedState = state;
      }
      
      // Try to decode from base64
      let stateString: string;
      try {
        stateString = Buffer.from(decodedState, 'base64').toString('utf-8');
      } catch (base64Error) {
        // If base64 decode fails, try treating it as plain JSON
        console.log('⚠️ Base64 decode failed, trying as plain JSON');
        stateString = decodedState;
      }
      
      // Parse JSON
      stateData = JSON.parse(stateString);
      
      // Validate state structure
      if (!stateData.org_id) {
        throw new Error('State missing org_id');
      }
      
      console.log('✅ State decoded successfully:', {
        orgId: stateData.org_id,
        timestamp: stateData.timestamp
      });
    } catch (e: any) {
      console.error('❌ Failed to decode state parameter:', {
        error: e.message,
        errorStack: e.stack,
        stateLength: state?.length,
        statePreview: state?.substring(0, 100),
        rawState: state
      });
      
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                      process.env.SITE_URL || 
                      'https://staffix.co';
      return NextResponse.redirect(
        `${siteUrl}/onboarding/slack-error?error=invalid_state`
      );
    }
    
    const orgId = stateData.org_id;
    
    // Verify organization exists
    const organization = await db.get<{ id: string; name: string }>(
      'SELECT id, name FROM organizations WHERE id = ?',
      [orgId]
    );
    
    if (!organization) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }
    
    // Exchange authorization code for access token
    const client = new WebClient();
    
    console.log('🔄 Exchanging Slack authorization code for token...');
    console.log('   Client ID:', SLACK_CLIENT_ID?.substring(0, 10) + '...');
    console.log('   Redirect URI:', SLACK_REDIRECT_URI);
    console.log('   Organization ID:', orgId);
    
    const result = await client.oauth.v2.access({
      client_id: SLACK_CLIENT_ID,
      client_secret: SLACK_CLIENT_SECRET,
      code: code,
      redirect_uri: SLACK_REDIRECT_URI
    });
    
    console.log('📥 OAuth response:', {
      ok: result.ok,
      error: result.error,
      hasToken: !!result.access_token,
      teamId: result.team?.id,
      teamName: result.team?.name
    });
    
    if (!result.ok) {
      console.error('❌ Slack OAuth failed:', result.error);
      
      // Map Slack-specific errors to user-friendly error codes
      let errorCode = 'oauth_failed';
      if (result.error === 'invalid_team_for_non_distributed_app') {
        errorCode = 'app_not_distributed';
      } else if (result.error === 'access_denied') {
        errorCode = 'access_denied';
      } else if (result.error === 'invalid_code') {
        errorCode = 'invalid_code';
      }
      
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                      process.env.SITE_URL || 
                      'https://staffix.co';
      return NextResponse.redirect(
        `${siteUrl}/onboarding/slack-error?error=${errorCode}`
      );
    }
    
    // Extract token and team info
    const accessToken = result.access_token as string;
    const teamId = result.team?.id as string;
    const teamName = result.team?.name as string;
    const botUserId = result.bot_user_id as string;
    
    console.log('✅ Slack OAuth successful for team:', teamName);
    
    // Check if this workspace is already connected to another organization
    const existingOrg = await db.get<{ id: string; name: string }>(
      'SELECT id, name FROM organizations WHERE slack_workspace_id = ?',
      [teamId]
    );
    
    console.log('🔍 Checking workspace connection:', {
      teamId,
      currentOrgId: orgId,
      currentOrgName: organization.name,
      existingOrgId: existingOrg?.id,
      existingOrgName: existingOrg?.name,
      isReconnection: existingOrg?.id === orgId,
      isConflict: existingOrg && existingOrg.id !== orgId
    });
    
    if (existingOrg && existingOrg.id !== orgId) {
      console.error(`❌ Slack workspace ${teamId} is already connected to organization: ${existingOrg.name} (${existingOrg.id})`);
      console.error(`   Attempted to connect to: ${organization.name} (${orgId})`);
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                      process.env.SITE_URL || 
                      'https://staffix.co';
      return NextResponse.redirect(
        `${siteUrl}/onboarding/slack-error?error=workspace_already_connected`
      );
    }
    
    // If reconnecting the same workspace to the same org, that's fine - just update
    if (existingOrg && existingOrg.id === orgId) {
      console.log('✅ Reconnecting workspace to same organization - updating credentials');
    }
    
    // Update organization with Slack credentials
    // Handle the case where workspace might already be connected
    try {
      // First, clear the workspace from any other organizations (if any)
      // This handles the case where workspace was previously connected elsewhere
      // We do this BEFORE updating to avoid unique constraint violation
      await db.run(`
        UPDATE organizations 
        SET slack_workspace_id = NULL, 
            slack_bot_token = NULL, 
            slack_team_name = NULL, 
            slack_bot_user_id = NULL,
            updated_at = ?
        WHERE slack_workspace_id = ? AND id != ?
      `, [
        new Date().toISOString(),
        teamId,
        orgId
      ]);
      
      // Now update this organization with the workspace credentials
      await db.run(`
        UPDATE organizations 
        SET 
          slack_workspace_id = ?,
          slack_bot_token = ?,
          slack_team_name = ?,
          slack_bot_user_id = ?,
          updated_at = ?
        WHERE id = ?
      `, [
        teamId,
        accessToken, // TODO: Encrypt this in production!
        teamName,
        botUserId,
        new Date().toISOString(),
        orgId
      ]);
      
      console.log('✅ Slack credentials saved for organization:', organization.name);
    } catch (dbError: any) {
      console.error('❌ Database update failed:', dbError);
      console.error('   Error code:', dbError.code);
      console.error('   Error constraint:', dbError.constraint);
      
      // Handle unique constraint violation (shouldn't happen after our fix, but just in case)
      if (dbError.code === '23505' && dbError.constraint === 'organizations_slack_workspace_id_key') {
        const conflictingOrg = await db.get<{ id: string; name: string }>(
          'SELECT id, name FROM organizations WHERE slack_workspace_id = ?',
          [teamId]
        );
        
        if (conflictingOrg && conflictingOrg.id !== orgId) {
          console.error(`❌ Workspace already connected to: ${conflictingOrg.name} (${conflictingOrg.id})`);
          const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                          process.env.SITE_URL || 
                          'https://staffix.co';
          return NextResponse.redirect(
            `${siteUrl}/onboarding/slack-error?error=workspace_already_connected`
          );
        }
      }
      
      throw new Error(`Failed to save Slack credentials: ${dbError.message}`);
    }
    
    // Notify the bot server to load this new organization
    // We'll implement this later with an API endpoint
    
    // Get the base URL for redirect (use public site URL)
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                    process.env.SITE_URL || 
                    'https://staffix.co';
    
    const redirectUrl = `${siteUrl}/onboarding/complete?success=true`;
    console.log('✅ OAuth completed successfully!');
    console.log('   Redirecting to:', redirectUrl);
    console.log('   Organization:', organization.name);
    console.log('   Slack Team:', teamName);
    
    // Redirect to completion page
    return NextResponse.redirect(redirectUrl, { status: 302 });
    
  } catch (error: any) {
    console.error('❌ Slack OAuth callback error:', error);
    console.error('Error details:', {
      message: error?.message,
      stack: error?.stack,
      code: error?.code,
      data: error?.data
    });
    
    // Get the base URL for redirect
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                    process.env.SITE_URL || 
                    'https://staffix.co';
    
    // Determine error type
    let errorCode = 'oauth_failed';
    if (error?.code === 'slack_webapi_platform_error') {
      errorCode = error.data?.error || 'oauth_failed';
    } else if (error?.message?.includes('state')) {
      errorCode = 'invalid_state';
    } else if (error?.message?.includes('code')) {
      errorCode = 'invalid_code';
    }
    
    return NextResponse.redirect(
      `${siteUrl}/onboarding/slack-error?error=${errorCode}`
    );
  }
}

