'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const t = useTranslations('pricing');
  const params = useParams();
  const locale = params.locale as string;
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      name: t('starter.name'),
      price: isAnnual ? '$1.70' : t('starter.price'),
      period: t('starter.period'),
      min: t('starter.min'),
      best: t('starter.best'),
      features: t.raw('starter.features') as string[],
    },
    {
      name: t('growth.name'),
      price: isAnnual ? '$3.40' : t('growth.price'),
      period: t('growth.period'),
      min: t('growth.min'),
      best: t('growth.best'),
      features: t.raw('growth.features') as string[],
      popular: true,
    },
    {
      name: t('enterprise.name'),
      price: t('enterprise.price'),
      period: '',
      min: '',
      best: '',
      features: t.raw('enterprise.features') as string[],
      enterprise: true,
    },
  ];

  const faqs = [
    { q: t('faq.activeEmployee'), a: 'An active employee is someone who has checked in at least once in the current billing period.' },
    { q: t('faq.startSmall'), a: 'Yes! Start with our Starter plan at $49/month minimum. Scale as you grow.' },
    { q: t('faq.newApp'), a: t('faq.newAppAnswer') },
    { q: t('faq.platforms'), a: t('faq.platformsAnswer') },
    { q: t('faq.security'), a: 'All data is encrypted in transit and at rest. We maintain comprehensive audit trails and comply with data protection regulations.' },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h1>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 border border-gray-200 inline-flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  !isAnnual ? 'bg-[#22479b] text-white' : 'text-gray-700'
                }`}
              >
                {t('monthly')}
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  isAnnual ? 'bg-[#22479b] text-white' : 'text-gray-700'
                }`}
              >
                {t('annual')} <span className="text-sm">(Save 15%)</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 border-2 ${
                  tier.popular ? 'border-[#22479b] shadow-xl scale-105' : 'border-gray-200'
                } relative`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#22479b] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {t('growth.popular')}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                  {tier.period && <span className="text-gray-600 ml-2">{tier.period}</span>}
                </div>
                {tier.min && <p className="text-sm text-gray-600 mb-2">{tier.min}</p>}
                {tier.best && <p className="text-sm text-gray-500 mb-6">{tier.best}</p>}

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-[#22479b] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.enterprise ? `/${locale}/contact` : `/${locale}/trial`}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-[#22479b] text-white hover:bg-[#1a3578]'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.enterprise ? t('bookDemo') : t('startTrial')}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

