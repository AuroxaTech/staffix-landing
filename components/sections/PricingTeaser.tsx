'use client';

import Link from 'next/link';
import { Check, Sparkles } from 'lucide-react';

export default function PricingTeaser() {
  const tiers = [
    {
      name: "Starter",
      price: "$2",
      period: "/active employee / month",
      min: "$49 minimum",
      best: "Best for attendance tracking",
      features: [
        "Attendance + breaks",
        "Dashboard",
        "Filters + export",
        "Standard support"
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$4",
      period: "/active employee / month",
      min: "$149 minimum",
      best: "Best for automation (reminders + leave logic)",
      features: [
        "Everything in Starter +",
        "Midday reminder automation",
        "Advanced leave management (scheduled deductions)",
        "Monthly reporting",
        "Priority support"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: '',
      min: '',
      best: '',
      features: [
        "Invoice/annual contracts",
        "Dedicated onboarding + SLA"
      ],
      enterprise: true,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple per active employee pricing.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your team's needs. All plans include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-10 border-2 ${
                tier.popular 
                  ? 'border-[#22479b] shadow-2xl shadow-[#22479b]/20 scale-105' 
                  : 'border-gray-200 hover:border-[#22479b]/30'
              } transition-all duration-300 transform hover:-translate-y-1`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#22479b] to-[#3a5fb8] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                  {tier.period && <span className="text-gray-600 ml-2 text-lg">{tier.period}</span>}
                </div>
                {tier.min && <p className="text-sm font-medium text-gray-600 mb-2">{tier.min}</p>}
                {tier.best && <p className="text-sm text-gray-500">{tier.best}</p>}
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.enterprise ? '/contact' : '/trial'}
                className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-200 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#22479b] to-[#3a5fb8] text-white hover:shadow-lg hover:shadow-[#22479b]/30 hover:-translate-y-0.5'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {tier.enterprise ? 'Book a Demo' : 'Start Free Trial'}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="inline-flex items-center text-[#22479b] hover:text-[#1a3578] font-semibold text-lg group"
          >
            See Full Pricing Details
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
