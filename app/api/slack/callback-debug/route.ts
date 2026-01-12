import { NextRequest, NextResponse } from 'next/server';

/**
 * Debug endpoint to test if callback route is accessible
 * This helps verify the callback URL is correct
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  return NextResponse.json({
    success: true,
    message: 'Callback route is accessible',
    timestamp: new Date().toISOString(),
    queryParams: Object.fromEntries(searchParams.entries()),
    env: {
      hasClientId: !!process.env.SLACK_CLIENT_ID,
      hasClientSecret: !!process.env.SLACK_CLIENT_SECRET,
      redirectUri: process.env.SLACK_REDIRECT_URI,
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL
    }
  });
}

