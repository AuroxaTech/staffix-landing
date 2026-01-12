import { NextRequest, NextResponse } from 'next/server';

/**
 * Slack Events API Endpoint
 * Handles Slack URL verification challenge and forwards events to bot server
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('📨 Slack event received:', {
      type: body.type,
      event_type: body.event?.type,
      team_id: body.team_id
    });
    
    // Handle Slack URL verification challenge
    // This is required when setting up Event Subscriptions in Slack
    if (body.type === 'url_verification') {
      const challenge = body.challenge;
      console.log('✅ Responding to Slack URL verification challenge');
      return NextResponse.json({ challenge });
    }
    
    // Forward all other events to the bot server
    // In production, bot runs on same server, so use localhost
    // In local dev, use localhost
    const botUrl = process.env.BOT_WEBHOOK_URL || 
                   (process.env.NODE_ENV === 'production' 
                     ? 'http://localhost:3001/slack/events'
                     : 'http://localhost:3001/slack/events');
    
    console.log('🔄 Forwarding event to bot server:', botUrl);
    
    // Forward the request to bot server
    // Include all original headers for signature verification
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    // Forward Slack signature headers (important for verification)
    const slackSignature = request.headers.get('x-slack-signature');
    const slackTimestamp = request.headers.get('x-slack-request-timestamp');
    
    if (slackSignature) {
      headers['X-Slack-Signature'] = slackSignature;
    }
    if (slackTimestamp) {
      headers['X-Slack-Request-Timestamp'] = slackTimestamp;
    }
    
    try {
      const response = await fetch(botUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
      
      const responseData = await response.text();
      
      console.log('✅ Event forwarded to bot server:', {
        status: response.status,
        ok: response.ok
      });
      
      // Return the bot's response
      if (response.ok) {
        try {
          return NextResponse.json(JSON.parse(responseData));
        } catch {
          return NextResponse.json({ ok: true });
        }
      } else {
        console.error('❌ Bot server error:', responseData);
        return NextResponse.json({ ok: false, error: 'Bot server error' }, { status: 500 });
      }
    } catch (fetchError: any) {
      console.error('❌ Error forwarding to bot server:', fetchError.message);
      // Still return ok to Slack to prevent retries if bot is down
      return NextResponse.json({ ok: false, error: 'Bot server unreachable' }, { status: 503 });
    }
    
  } catch (error: any) {
    console.error('❌ Error handling Slack event:', error);
    
    // If it's a challenge request with invalid JSON, still try to handle it
    if (error.message?.includes('JSON')) {
      try {
        const text = await request.text();
        const body = JSON.parse(text);
        if (body.type === 'url_verification' && body.challenge) {
          return NextResponse.json({ challenge: body.challenge });
        }
      } catch {
        // Ignore parse errors
      }
    }
    
    return NextResponse.json({ 
      ok: false, 
      error: error.message || 'Unknown error' 
    }, { status: 500 });
  }
}

// Also handle GET requests (some Slack checks use GET)
export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'Slack Events API endpoint is running',
    service: 'staffix-web-proxy'
  });
}

