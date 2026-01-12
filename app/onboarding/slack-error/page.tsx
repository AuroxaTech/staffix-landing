'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function SlackErrorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState('');
  const [organizationId, setOrganizationId] = useState('');

  useEffect(() => {
    const errorParam = searchParams.get('error');
    const orgId = localStorage.getItem('onboarding_org_id');
    
    setOrganizationId(orgId || '');
    
    // Map Slack error codes to user-friendly messages
    const errorMessages: Record<string, string> = {
      'access_denied': 'You cancelled the Slack authorization. You can try again when ready.',
      'oauth_failed': 'We encountered an issue connecting your Slack workspace. Please try again.',
      'invalid_code': 'The authorization code was invalid. Please try connecting again.',
      'invalid_state': 'The authorization request was invalid. Please try again.',
      'server_error': 'Slack is experiencing issues. Please try again in a few minutes.',
      'workspace_already_connected': 'This Slack workspace is already connected to another StaffiX organization. Each Slack workspace can only be connected to one organization. Please use a different Slack workspace or contact support if you need to transfer the connection.',
      'missing_parameters': 'The authorization request was incomplete. Please try connecting again from the beginning.',
      'app_not_distributed': 'The Slack app is not configured as a distributed app. This is a configuration issue on our end. Please contact support@staffix.co for assistance. Our team needs to convert the Slack app to a distributed app to support multiple workspaces.',
    };
    
    setError(errorMessages[errorParam || ''] || 'An unexpected error occurred while connecting Slack.');
  }, [searchParams]);

  const handleRetry = () => {
    if (organizationId) {
      router.push(`/onboarding/connect-slack?organizationId=${organizationId}&retry=true`);
    } else {
      router.push('/signup');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Slack Connection Failed
        </h1>
        
        <p className="text-gray-600 text-center mb-6">
          {error || 'An unexpected error occurred while connecting Slack.'}
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleRetry}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
          
          <Link
            href="/onboarding/connect-slack"
            className="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
          >
            Go Back to Connection Page
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Need help? Contact us at{' '}
            <a
              href="mailto:support@staffix.co"
              className="text-indigo-600 hover:underline"
            >
              support@staffix.co
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SlackErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    }>
      <SlackErrorContent />
    </Suspense>
  );
}

