import { NextRequest, NextResponse } from 'next/server';
import { WebClient } from '@slack/web-api';
import { db } from '@/lib/db';

const SLACK_CLIENT_ID = process.env.SLACK_CLIENT_ID || process.env.NEXT_PUBLIC_SLACK_CLIENT_ID;
const SLACK_CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET;
const SLACK_REDIRECT_URI = process.env.SLACK_REDIRECT_URI || 'http://localhost:3000/api/slack/callback';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');
    
    // Check if user denied access
    if (error) {
      console.log('❌ User denied Slack authorization:', error);
      return NextResponse.redirect(
        new URL(`/onboarding/slack-error?error=${error}`, request.url)
      );
    }
    
    if (!code || !state) {
      return NextResponse.json(
        { error: 'Missing authorization code or state' },
        { status: 400 }
      );
    }
    
    if (!SLACK_CLIENT_ID || !SLACK_CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'Slack integration is not configured' },
        { status: 500 }
      );
    }
    
    // Decode state to get organization ID
    let stateData: { org_id: string; timestamp: number };
    try {
      stateData = JSON.parse(Buffer.from(state, 'base64').toString());
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid state parameter' },
        { status: 400 }
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
    
    const result = await client.oauth.v2.access({
      client_id: SLACK_CLIENT_ID,
      client_secret: SLACK_CLIENT_SECRET,
      code: code,
      redirect_uri: SLACK_REDIRECT_URI
    });
    
    if (!result.ok) {
      console.error('❌ Slack OAuth failed:', result.error);
      return NextResponse.redirect(
        new URL(`/onboarding/slack-error?error=${result.error}`, request.url)
      );
    }
    
    // Extract token and team info
    const accessToken = result.access_token as string;
    const teamId = result.team?.id as string;
    const teamName = result.team?.name as string;
    const botUserId = result.bot_user_id as string;
    
    console.log('✅ Slack OAuth successful for team:', teamName);
    
    // Update organization with Slack credentials
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
    
    // Notify the bot server to load this new organization
    // We'll implement this later with an API endpoint
    
    // Get the base URL for redirect (use public site URL)
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                    process.env.SITE_URL || 
                    `${request.headers.get('x-forwarded-proto') || 'https'}://${request.headers.get('host')}`;
    
    // Redirect to completion page
    return NextResponse.redirect(
      new URL(`/onboarding/complete?success=true`, siteUrl)
    );
    
  } catch (error) {
    console.error('❌ Slack OAuth callback error:', error);
    
    // Get the base URL for redirect
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                    process.env.SITE_URL || 
                    `${request.headers.get('x-forwarded-proto') || 'https'}://${request.headers.get('host')}`;
    
    return NextResponse.redirect(
      new URL(`/onboarding/slack-error?error=oauth_failed`, siteUrl)
    );
  }
}

