'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { useTranslations } from 'next-intl';
import { Slack, MessageSquare, Smartphone, Check } from 'lucide-react';

export default function IntegrationsPage() {
  const t = useTranslations('integrations');

  const platforms = [
    {
      name: 'Slack',
      icon: Slack,
      color: 'bg-purple-500',
      workflows: [
        'Check-in/out via direct message or channel',
        'Break tracking with automatic session management',
        'Daily progress updates with reminders',
        'Leave requests with approval workflow',
      ],
      install: 'Install from Slack App Directory or add via workspace settings.',
      admin: 'All attendance data syncs to your StaffiX dashboard in real-time.',
    },
    {
      name: 'Microsoft Teams',
      icon: MessageSquare,
      color: 'bg-blue-500',
      workflows: [
        'Attendance tracking in Teams channels',
        'Break and work hour monitoring',
        'Progress reporting and updates',
        'Leave management integration',
      ],
      install: 'Add StaffiX bot to your Teams workspace through the Teams app store.',
      admin: 'Unified dashboard view of all Teams-based attendance and leave data.',
    },
    {
      name: 'LINE',
      icon: Smartphone,
      color: 'bg-green-500',
      workflows: [
        'Check-in/out via LINE messages',
        'Break session tracking',
        'Daily update reminders',
        'Leave request processing',
      ],
      install: 'Connect StaffiX to your LINE workspace through our admin portal.',
      admin: 'Complete visibility of LINE-based workforce operations in your dashboard.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Meet your team where they already work.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('desc')}
            </p>
          </div>

          <div className="space-y-16">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className={`${platform.color} w-20 h-20 rounded-xl mb-6 flex items-center justify-center`}>
                    <platform.icon className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{platform.name}</h2>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What workflows happen inside it:</h3>
                    <ul className="space-y-2">
                      {platform.workflows.map((workflow, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-[#22479b] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{workflow}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How install works:</h3>
                    <p className="text-gray-600">{platform.install}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What admins see in dashboard:</h3>
                    <p className="text-gray-600">{platform.admin}</p>
                  </div>
                </div>

                <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-20 bg-gray-100 rounded mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#22479b] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Request a Platform</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't see your team's communication tool? Let us know and we'll work on adding support.
            </p>
            <a
              href="mailto:support@staffix.com"
              className="inline-flex items-center px-8 py-4 bg-white text-[#22479b] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Platform Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

