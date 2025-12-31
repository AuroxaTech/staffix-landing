'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';

export default function TrialPage() {
  const params = useParams();
  const locale = params.locale as string;

  const features = [
    '14-day free trial',
    'No credit card required',
    'Full access to all features',
    'Setup in minutes',
    'Cancel anytime',
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Start Your Free Trial
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Get started with StaffiX today. No credit card required.
          </p>

          <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-xl mb-12">
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Check className="h-6 w-6 text-[#22479b] mr-3" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#22479b] text-white rounded-lg font-semibold hover:bg-[#1a3578] transition-colors"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <p className="text-sm text-gray-500">
                Or <Link href={`/${locale}/contact`} className="text-[#22479b] hover:underline">contact sales</Link> for enterprise setup
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What happens next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="w-10 h-10 bg-[#22479b] text-white rounded-full flex items-center justify-center font-bold mb-3">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sign up</h3>
                <p className="text-gray-600 text-sm">Create your account and connect your chat tool</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-[#22479b] text-white rounded-full flex items-center justify-center font-bold mb-3">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Configure</h3>
                <p className="text-gray-600 text-sm">Set up shifts, channels, and policies</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-[#22479b] text-white rounded-full flex items-center justify-center font-bold mb-3">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Start using</h3>
                <p className="text-gray-600 text-sm">Your team can start using StaffiX immediately</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

