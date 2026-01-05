'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function CompletePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [organizationName, setOrganizationName] = useState('');
  const [isSkipped, setIsSkipped] = useState(false);
  const [slackConnected, setSlackConnected] = useState(false);

  useEffect(() => {
    const orgName = localStorage.getItem('onboarding_org_name');
    const skipped = searchParams.get('skipped') === 'true';
    const success = searchParams.get('success') === 'true';
    
    setOrganizationName(orgName || 'your organization');
    setIsSkipped(skipped);
    setSlackConnected(success || !skipped);

    // Clean up localStorage after onboarding
    if (success) {
      localStorage.removeItem('onboarding_org_id');
      localStorage.removeItem('onboarding_org_name');
    }
  }, [searchParams]);

  const handleGoToDashboard = () => {
    // Redirect to dashboard (port 3002)
    window.location.href = 'http://localhost:3002';
  };

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
                ✓
              </div>
              <span className="ml-2 text-white text-sm">Connect Slack</span>
            </div>
            <div className="w-16 h-1 bg-white"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white text-[#22479b] rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <span className="ml-2 text-white text-sm font-semibold">Complete</span>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {slackConnected && !isSkipped ? (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  🎉 You're All Set!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  StaffiX is now connected to <strong>{organizationName}</strong>'s Slack workspace and ready to automate your HR workflows.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Account Created Successfully!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your StaffiX account for <strong>{organizationName}</strong> is ready. You can connect Slack anytime from your dashboard.
                </p>
              </>
            )}

            {/* Next Steps */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-900 mb-4 text-center">Next Steps:</h3>
              <ul className="space-y-3">
                {slackConnected && !isSkipped ? (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#22479b] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </span>
                      <span className="text-gray-700">
                        <strong>Visit your Dashboard</strong> to configure channels and settings
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#22479b] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </span>
                      <span className="text-gray-700">
                        <strong>Add your team members</strong> to start tracking attendance
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#22479b] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </span>
                      <span className="text-gray-700">
                        <strong>Set up departments</strong> and assign managers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#22479b] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </span>
                      <span className="text-gray-700">
                        <strong>Configure leave policies</strong> and salary schedules
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#22479b] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </span>
                      <span className="text-gray-700">
                        <strong>Connect your Slack workspace</strong> from the dashboard
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#22479b] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </span>
                      <span className="text-gray-700">
                        <strong>Configure your bot settings</strong> and channels
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#22479b] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </span>
                      <span className="text-gray-700">
                        <strong>Add your team</strong> and start automating
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Free Trial Info */}
            {slackConnected && !isSkipped && (
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  <div className="text-left">
                    <p className="text-sm text-purple-900">
                      <strong>Your 14-day free trial has started!</strong>
                    </p>
                    <p className="text-xs text-purple-700">
                      No credit card required • Full access to all features
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleGoToDashboard}
                className="w-full bg-[#22479b] hover:bg-[#1a3670] text-white font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
              >
                Go to Dashboard
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {(!slackConnected || isSkipped) && (
                <Link href="/onboarding/connect-slack">
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
                    Connect Slack Now
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-4">
              Need help getting started?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link href="/docs" className="text-[#22479b] hover:underline flex items-center gap-1">
                📚 View Documentation
              </Link>
              <Link href="/support" className="text-[#22479b] hover:underline flex items-center gap-1">
                💬 Contact Support
              </Link>
              <Link href="/tutorials" className="text-[#22479b] hover:underline flex items-center gap-1">
                🎥 Watch Tutorials
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-blue-100 text-sm">
            Welcome to StaffiX! We're excited to help you automate your workforce management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CompletePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-[#22479b] to-[#1a3670] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    }>
      <CompletePageContent />
    </Suspense>
  );
}

