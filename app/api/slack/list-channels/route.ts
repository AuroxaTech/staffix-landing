import { NextRequest, NextResponse } from 'next/server';
import { WebClient } from '@slack/web-api';
import { db, Organization } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orgId = searchParams.get('org');
    
    if (!orgId) {
      return NextResponse.json(
        { error: 'Organization ID is required' },
        { status: 400 }
      );
    }
    
    // Get organization with Slack credentials
    const organization = db.get<Organization>(
      'SELECT * FROM organizations WHERE id = ?',
      [orgId]
    );
    
    if (!organization) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }
    
    if (!organization.slack_bot_token) {
      return NextResponse.json(
        { error: 'Slack not connected for this organization' },
        { status: 400 }
      );
    }
    
    // Initialize Slack client with organization's token
    const client = new WebClient(organization.slack_bot_token);
    
    // Fetch all channels (public)
    const result = await client.conversations.list({
      types: 'public_channel,private_channel',
      exclude_archived: true,
      limit: 200
    });
    
    if (!result.ok || !result.channels) {
      return NextResponse.json(
        { error: 'Failed to fetch channels from Slack' },
        { status: 500 }
      );
    }
    
    // Format channels for frontend
    const channels = result.channels.map((channel: any) => ({
      id: channel.id,
      name: channel.name,
      isPrivate: channel.is_private || false,
      memberCount: channel.num_members || 0
    }));
    
    console.log(`✅ Fetched ${channels.length} channels for ${organization.name}`);
    
    return NextResponse.json({
      channels,
      organization: {
        id: organization.id,
        name: organization.name
      }
    });
    
  } catch (error: any) {
    console.error('❌ Error fetching Slack channels:', error);
    
    // Handle specific Slack API errors
    if (error.data?.error === 'invalid_auth') {
      return NextResponse.json(
        { error: 'Slack authentication expired. Please reconnect.' },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch channels' },
      { status: 500 }
    );
  }
}

