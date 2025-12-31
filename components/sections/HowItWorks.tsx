'use client';

import { Download, Settings, MessageSquare, Monitor } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { 
      icon: Download, 
      text: "Install StaffiX to your chat tool(s)",
      desc: "Add StaffiX to Slack, Teams, or LINE in just a few clicks",
      number: 1 
    },
    { 
      icon: Settings, 
      text: "Configure shifts, channels, and policies",
      desc: "Set up your workforce rules through our intuitive dashboard",
      number: 2 
    },
    { 
      icon: MessageSquare, 
      text: "Employees use simple messages",
      desc: "Check-in, break, updates, and leave requests via natural language",
      number: 3 
    },
    { 
      icon: Monitor, 
      text: "Admins monitor dashboard + export",
      desc: "Real-time visibility with comprehensive reporting and exports",
      number: 4 
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How it Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes. No complex setup, no workflow disruption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-[#22479b]/30 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#22479b] to-[#3a5fb8] text-white rounded-2xl mb-6 text-3xl font-bold shadow-lg shadow-[#22479b]/25">
                  {step.number}
                </div>
                <div className="bg-gradient-to-br from-[#22479b]/10 to-[#3a5fb8]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-[#22479b]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.text}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#22479b] to-transparent"></div>
                    <div className="w-2 h-2 bg-[#22479b] rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
