'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ConnectSlackPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [organizationId, setOrganizationId] = useState('');

  useEffect(() => {
    // Get organization info from signup
    const orgId = localStorage.getItem('onboarding_org_id');
    const orgName = localStorage.getItem('onboarding_org_name');
    
    if (!orgId) {
      // If no org ID, redirect back to signup
      router.push('/signup');
      return;
    }
    
    setOrganizationId(orgId);
    setOrganizationName(orgName || 'your organization');
  }, [router]);

  const handleConnectSlack = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Get the Slack OAuth URL from our API
      const response = await fetch(`/api/slack/auth-url?organizationId=${organizationId}`);
      const data = await response.json();
      
      if (response.ok && data.url) {
        // Check if the URL contains placeholder values (configuration error)
        if (data.url.includes('your_slack_client_id_here') || data.url.includes('your_') || data.url.includes('PASTE_')) {
          setError('⚠️ Slack integration is currently being set up. Please contact StaffiX support or try again later.');
          setLoading(false);
          return;
        }
        
        // Redirect to Slack OAuth
        window.location.href = data.url;
      } else {
        // Show user-friendly error message
        const errorMessage = data.error || 'Failed to connect to Slack';
        setError(`Unable to connect to Slack: ${errorMessage}. Please contact support if this issue persists.`);
        setLoading(false);
      }
    } catch (error) {
      setError('⚠️ Connection error. Unable to reach StaffiX servers. Please check your internet connection and try again.');
      setLoading(false);
    }
  };

  const handleSkipForNow = () => {
    // Allow skipping but mark as incomplete
    router.push('/onboarding/complete?skipped=true');
  };

  if (!organizationId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#22479b] to-[#1a3670] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#22479b] to-[#1a3670] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white text-[#22479b] rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <span className="ml-2 text-white text-sm">Account Created</span>
            </div>
            <div className="w-16 h-1 bg-white"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white text-[#22479b] rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <span className="ml-2 text-white text-sm font-semibold">Connect Slack</span>
            </div>
            <div className="w-16 h-1 bg-blue-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-300 text-[#22479b] rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <span className="ml-2 text-blue-100 text-sm">Complete</span>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            {/* Slack Logo */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Connect Your Slack Workspace
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              StaffiX needs to connect to your Slack workspace to automate attendance tracking, leaves, and team management.
            </p>
          </div>

          {/* Features List */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">What StaffiX will do:</h3>
            <ul className="space-y-3">
              {[
                'Track attendance when team members check in/out',
                'Manage leave requests and approvals',
                'Send automated reminders and updates',
                'Generate HR reports and analytics',
                'Integrate with your existing Slack channels'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex-1">
                  <p className="text-sm text-red-900 font-medium mb-1">Connection Error</p>
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Permissions Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm text-amber-900">
                  <strong>Admin approval required:</strong> You'll need Slack workspace admin permissions to install StaffiX bot. If you're not an admin, the bot will require approval from your workspace admin.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleConnectSlack}
              disabled={loading}
              className="w-full bg-[#22479b] hover:bg-[#1a3670] text-white font-semibold py-4 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Redirecting to Slack...
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                  </svg>
                  Connect to Slack
                </>
              )}
            </button>

            <button
              onClick={handleSkipForNow}
              disabled={loading}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50"
            >
              Skip for now (set up later)
            </button>
          </div>

          {/* Security Note */}
          <p className="mt-6 text-center text-xs text-gray-500">
            🔒 Your data is encrypted and secure. We never access your Slack messages or private information.
          </p>
        </div>
      </div>
    </div>
  );
}

