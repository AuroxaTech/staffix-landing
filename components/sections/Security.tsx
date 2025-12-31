'use client';

import Link from 'next/link';
import { Shield, Check, Lock } from 'lucide-react';

export default function Security() {
  const items = [
    "Secure webhook verification (per platform)",
    "Data stored securely (PostgreSQL in production)",
    "Audit trail for leave balance changes",
    "Role-based admin access (dashboard)",
    "Optional S3 for documents (if used)"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#22479b] to-[#3a5fb8] rounded-3xl mb-6 shadow-lg">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Security & Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade security measures to protect your workforce data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#22479b]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed pt-1">{item}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/security"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#22479b] to-[#3a5fb8] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#22479b]/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Lock className="mr-2 h-5 w-5" />
            View Security Details
          </Link>
        </div>
      </div>
    </section>
  );
}
