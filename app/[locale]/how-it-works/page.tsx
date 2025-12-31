'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { useTranslations } from 'next-intl';
import { Download, Settings, MessageSquare, Monitor, ArrowRight } from 'lucide-react';

export default function HowItWorksPage() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      icon: Download,
      title: t('step1'),
      desc: 'Add StaffiX to your Slack, Teams, or LINE workspace. The installation takes just a few minutes.',
    },
    {
      icon: Settings,
      title: t('step2'),
      desc: 'Set up your shifts, designate channels, and configure leave policies through our admin dashboard.',
    },
    {
      icon: MessageSquare,
      title: t('step3'),
      desc: 'Employees use natural language commands like "checkin", "break", "back", "checkout", "updates", or "leave" in their daily chat.',
    },
    {
      icon: Monitor,
      title: t('step4'),
      desc: 'Admins access a comprehensive dashboard to monitor attendance, view reports, filter data, and export records.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes. No workflow changes required.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#22479b] text-white rounded-full mb-6 text-3xl font-bold">
                    {index + 1}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <step.icon className="h-24 w-24 text-[#22479b] mx-auto mb-4" />
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

