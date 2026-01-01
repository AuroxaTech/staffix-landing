'use client';

import { MessageSquare, Zap, TrendingDown, FileCheck, Download, Globe, Moon, Smartphone } from 'lucide-react';

export default function Benefits() {
  const usps = [
    { 
      icon: MessageSquare, 
      title: "No new tool to learn",
      desc: "Employees don't learn a new tool — it works where they already communicate. Fast adoption with simple message-based workflow.",
      gradient: "from-blue-500 to-blue-600" 
    },
    { 
      icon: Zap, 
      title: "Automation reduces HR workload",
      desc: "Automated reminders, calculations, and dashboards eliminate manual tracking. No more chasing people or managing spreadsheets.",
      gradient: "from-purple-500 to-purple-600" 
    },
    { 
      icon: FileCheck, 
      title: "Policy-ready leave logic",
      desc: "Not just basic requests. Advanced leave management with scheduled deductions, working-day calculations, and audit-friendly history.",
      gradient: "from-green-500 to-green-600" 
    },
    { 
      icon: Download, 
      title: "Export-ready data",
      desc: "Export-ready records for reporting and payroll. CSV export of filtered data with powerful sorting and pagination.",
      gradient: "from-indigo-500 to-indigo-600" 
    },
    { 
      icon: Globe, 
      title: "Multi-language support",
      desc: "English + Japanese UI with Light/Dark mode. Mobile responsive dashboard accessible from anywhere.",
      gradient: "from-orange-500 to-orange-600" 
    },
    { 
      icon: TrendingDown, 
      title: "Reduce disputes",
      desc: "Audit-friendly history for all operations. Complete transparency with timezone-safe timestamps and detailed logs.",
      gradient: "from-cyan-500 to-cyan-600" 
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why StaffiX
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete workforce management that works where your team already communicates—no training, no disruption, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#22479b]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${usp.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <usp.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{usp.title}</h3>
              <p className="text-gray-600 leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="mt-20 bg-gradient-to-r from-[#22479b] to-[#3a5fb8] rounded-3xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">Complete HR Solution, Not Just Attendance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Works in Existing Tools</h4>
                  <p className="text-white/90 text-sm">No new platforms. Employees use Slack, Teams, or LINE they already know.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Fast Adoption</h4>
                  <p className="text-white/90 text-sm">Simple message-based workflow. Team starts using it in minutes, not weeks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Policy-Ready Logic</h4>
                  <p className="text-white/90 text-sm">Advanced leave calculations, working-day support, and audit trails built-in.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Download className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Export-Ready Data</h4>
                  <p className="text-white/90 text-sm">CSV exports, payroll integration, and comprehensive reporting capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
