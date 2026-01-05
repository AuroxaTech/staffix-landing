import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

const SLACK_CLIENT_ID = process.env.SLACK_CLIENT_ID || process.env.NEXT_PUBLIC_SLACK_CLIENT_ID;
const SLACK_REDIRECT_URI = process.env.SLACK_REDIRECT_URI || 'http://localhost:3000/api/slack/callback';

// Scopes required for StaffiX bot
const SLACK_SCOPES = [
  'channels:history',
  'channels:read',
  'chat:write',
  'commands',
  'groups:history',
  'groups:read',
  'im:history',
  'im:read',
  'im:write',
  'mpim:history',
  'mpim:read',
  'users:read',
  'users:read.email',
  'app_mentions:read',
  'team:read'
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orgId = searchParams.get('organizationId') || searchParams.get('org');
    
    if (!orgId) {
      return NextResponse.json(
        { error: 'Organization ID is required' },
        { status: 400 }
      );
    }
    
    // Verify organization exists
    const organization = db.get<{ id: string; name: string }>(
      'SELECT id, name FROM organizations WHERE id = ?',
      [orgId]
    );
    
    if (!organization) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }
    
    if (!SLACK_CLIENT_ID || SLACK_CLIENT_ID.includes('your_') || SLACK_CLIENT_ID.includes('PASTE_')) {
      console.error('❌ Slack OAuth not configured properly. Client ID:', SLACK_CLIENT_ID);
      return NextResponse.json(
        { 
          error: 'Slack integration is not configured. Please contact StaffiX support.',
          configured: false
        },
        { status: 503 } // Service Unavailable
      );
    }
    
    // Create state parameter with organization ID
    const state = Buffer.from(JSON.stringify({
      org_id: orgId,
      timestamp: Date.now(),
      nonce: Math.random().toString(36).substring(7)
    })).toString('base64');
    
    // Build Slack OAuth URL
    const params = new URLSearchParams({
      client_id: SLACK_CLIENT_ID,
      scope: SLACK_SCOPES.join(','),
      redirect_uri: SLACK_REDIRECT_URI,
      state: state
    });
    
    const slackAuthUrl = `https://slack.com/oauth/v2/authorize?${params.toString()}`;
    
    console.log('✅ Generated Slack OAuth URL for organization:', organization.name);
    
    return NextResponse.json({
      url: slackAuthUrl,
      organization: {
        id: organization.id,
        name: organization.name
      }
    });
    
  } catch (error) {
    console.error('❌ Error generating Slack auth URL:', error);
    return NextResponse.json(
      { error: 'Failed to generate authorization URL' },
      { status: 500 }
    );
  }
}

