'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#22479b] via-[#1a3578] to-[#22479b] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-3xl mb-8 backdrop-blur-sm">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Complete HR automation, not just attendance tracking.
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join teams worldwide who've replaced spreadsheets with StaffiX—attendance, breaks, leaves, salaries, and dashboards, all in one platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/trial"
            className="group inline-flex items-center justify-center px-10 py-5 bg-white text-[#22479b] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white border-3 border-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
