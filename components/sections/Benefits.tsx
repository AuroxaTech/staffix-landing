'use client';

import { Workflow, Bell, Clock, FileCheck, BarChart3, Globe } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { icon: Workflow, text: "No workflow change for employees", gradient: "from-blue-500 to-blue-600" },
    { icon: Bell, text: "Automated reminders (midday updates)", gradient: "from-purple-500 to-purple-600" },
    { icon: Clock, text: "Accurate break + work hour tracking", gradient: "from-green-500 to-green-600" },
    { icon: FileCheck, text: "Leave policies with audit history", gradient: "from-indigo-500 to-indigo-600" },
    { icon: BarChart3, text: "Dashboard + filters + export-ready data", gradient: "from-cyan-500 to-cyan-600" },
    { icon: Globe, text: "Multi-language + theme support", gradient: "from-orange-500 to-orange-600" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why StaffiX
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate workforce operations without disrupting your team's workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#22479b]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${benefit.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              <p className="text-lg font-semibold text-gray-800 leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
