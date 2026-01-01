'use client';

import { Clock, Coffee, FileText, Calendar, DollarSign, LayoutDashboard, Users, Globe, Moon, Smartphone, Slack, MessageSquare } from 'lucide-react';

export default function Features() {
  const mainFeatures = [
    {
      icon: Clock,
      title: "Attendance & Time Tracking",
      bullets: [
        "One-message check-in / check-out",
        "Shift-aware tracking (start/end times, late detection)",
        "Auto work hours calculation (work time minus breaks)",
        "Timezone-safe timestamps"
      ],
      platform: "Slack",
      platformIcon: Slack,
      platformColor: "from-purple-500 to-purple-600",
      mockupType: "slack"
    },
    {
      icon: Coffee,
      title: "Break Tracking",
      bullets: [
        "Break start / back tracking",
        "Break sessions + daily totals",
        "Admin view of break history per employee/day"
      ],
      platform: "Microsoft Teams",
      platformIcon: MessageSquare,
      platformColor: "from-blue-500 to-blue-600",
      mockupType: "teams"
    },
    {
      icon: FileText,
      title: "Daily Progress / Reporting Automation",
      bullets: [
        "Daily progress updates inside chat",
        "Automated reminders (e.g., reminder after check-in)",
        "Manager visibility without chasing people"
      ],
      platform: "LINE",
      platformIcon: Smartphone,
      platformColor: "from-green-500 to-green-600",
      mockupType: "line"
    },
    {
      icon: Calendar,
      title: "Leave Management (Advanced)",
      bullets: [
        "Leave requests + approvals/rejections",
        "Leave balances per employee",
        "Scheduled deduction for future single-day leaves",
        "Multi-day leave range with working-day calculations (weekends/holidays support)",
        "Audit-friendly history (reduce disputes)"
      ],
      platform: "Slack",
      platformIcon: Slack,
      platformColor: "from-purple-500 to-purple-600",
      mockupType: "slack"
    },
    {
      icon: DollarSign,
      title: "Salary / Payroll Support",
      bullets: [
        "Salary management module",
        "Track paid/unpaid status",
        "Export-ready records for payroll"
      ],
      platform: "Slack",
      platformIcon: Slack,
      platformColor: "from-orange-500 to-orange-600",
      mockupType: "slack"
    },
    {
      icon: LayoutDashboard,
      title: "HR Admin Dashboard",
      bullets: [
        "Central dashboard for HR/Admin (no spreadsheets)",
        "Sorting + pagination on all tables",
        "Powerful filters across attendance/leaves/salaries/breaks/progress",
        "CSV export of filtered data"
      ],
      platform: "Dashboard",
      platformIcon: LayoutDashboard,
      platformColor: "from-indigo-500 to-indigo-600",
      mockupType: "dashboard"
    },
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: "Employee Profiles",
      desc: "Department, role, contact info, CNIC/DOB/address, emergency contacts, etc. Activate/Deactivate employees (bill only active employees)"
    },
    {
      icon: Globe,
      title: "Multi-language + UI",
      desc: "English + Japanese UI, Light/Dark mode, Mobile responsive dashboard"
    }
  ];

  const renderSlackMockup = (feature: any, index: number) => (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="bg-[#4A154B] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
            <Slack className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">staffix-bot</p>
            <p className="text-white/60 text-xs">Direct Message</p>
          </div>
        </div>
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      </div>
      <div className="bg-white p-6 space-y-4 min-h-[320px]">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold">JD</span>
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-bold text-gray-900 text-sm">John Doe</span>
              <span className="text-xs text-gray-500">9:02 AM</span>
            </div>
            <p className="text-gray-700 text-sm">
              {index === 0 ? 'checkin' : index === 3 ? 'leave request 2024-02-15 to 2024-02-16' : 'break'}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#22479b] to-[#3a5fb8] flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold">SX</span>
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-bold text-gray-900 text-sm">StaffiX</span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">APP</span>
              <span className="text-xs text-gray-500">9:02 AM</span>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#22479b] rounded-r-lg p-4 space-y-2">
              {index === 0 ? (
                <>
                  <p className="text-gray-900 font-semibold">✓ Checked in at 9:02 AM</p>
                  <p className="text-gray-600 text-sm">Your shift: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600 text-sm">Status: On time ✅</p>
                </>
              ) : index === 3 ? (
                <>
                  <p className="text-gray-900 font-semibold">✓ Leave request submitted</p>
                  <p className="text-gray-600 text-sm">Dates: Feb 15-16, 2024 (2 working days)</p>
                  <p className="text-gray-600 text-sm">Type: Paid leave</p>
                  <p className="text-gray-600 text-sm">Balance after: 8 days remaining</p>
                </>
              ) : (
                <>
                  <p className="text-gray-900 font-semibold">✓ Break started at 9:05 AM</p>
                  <p className="text-gray-600 text-sm">Type "back" when you return</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between bg-[#4A154B]/5 rounded-xl p-3 border border-[#4A154B]/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#4A154B] flex items-center justify-center">
              <Slack className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-xs font-semibold text-gray-700">Works in Slack</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeamsMockup = (feature: any) => (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="bg-[#5B5FC7] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
            <MessageSquare className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">StaffiX Bot</p>
            <p className="text-white/60 text-xs">Chat</p>
          </div>
        </div>
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      </div>
      <div className="bg-gray-50 p-6 space-y-4 min-h-[320px]">
        <div className="flex items-start gap-3 justify-end">
          <div className="flex-1 flex justify-end">
            <div className="max-w-md">
              <div className="flex items-baseline gap-2 mb-1 justify-end">
                <span className="text-xs text-gray-500">12:30 PM</span>
                <span className="font-bold text-gray-900 text-sm">Sarah Chen</span>
              </div>
              <div className="bg-[#5B5FC7] rounded-2xl rounded-tr-sm p-4">
                <p className="text-white text-sm">break</p>
              </div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold">SC</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22479b] to-[#3a5fb8] flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold">SX</span>
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-bold text-gray-900 text-sm">StaffiX</span>
              <span className="text-xs text-gray-500">12:30 PM</span>
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-gray-200 max-w-md">
              <p className="text-gray-900 font-semibold mb-2">✓ Break started at 12:30 PM</p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• Total breaks today: 1</p>
                <p>• Total break time: 0m (just started)</p>
                <p>• Daily break allowance: 60m</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 bg-gray-50">
        <div className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#5B5FC7] flex items-center justify-center">
              <MessageSquare className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-xs font-semibold text-gray-700">Works in Microsoft Teams</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLINEMockup = (feature: any) => (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="bg-[#06C755] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#06C755] text-sm font-bold">SX</span>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">StaffiX</p>
            <p className="text-white/80 text-xs">Official Account</p>
          </div>
        </div>
      </div>
      <div className="bg-[#B2E7D4]/20 p-6 space-y-4 min-h-[320px]">
        <div className="flex justify-center">
          <span className="text-xs text-gray-500 bg-white/60 px-3 py-1 rounded-full">Today, 2:00 PM</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22479b] to-[#3a5fb8] flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold">SX</span>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-sm">
              <p className="text-gray-900 font-semibold mb-2">📋 Daily Update Reminder</p>
              <p className="text-gray-600 text-sm mb-3">
                Hi! It's been 4 hours since check-in. Please share your progress update for today.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="flex-1 flex justify-end">
            <div className="bg-[#95EC69] rounded-2xl rounded-tr-sm p-4 shadow-sm max-w-sm">
              <p className="text-gray-900 text-sm">
                updates: Completed API integration, reviewed 5 PRs, meeting with client team.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22479b] to-[#3a5fb8] flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold">SX</span>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-sm">
              <p className="text-gray-900 font-semibold mb-2">✓ Update received!</p>
              <p className="text-gray-600 text-sm">
                Your daily progress has been logged at 2:05 PM. Keep up the great work! 🎉
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 bg-[#B2E7D4]/20">
        <div className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#06C755] flex items-center justify-center">
              <Smartphone className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-xs font-semibold text-gray-700">Works in LINE</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboardMockup = () => (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="bg-gradient-to-r from-[#22479b] to-[#3a5fb8] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-6 w-6 text-white" />
            <div>
              <p className="text-white font-semibold text-sm">HR Admin Dashboard</p>
              <p className="text-white/80 text-xs">StaffiX Management Portal</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 space-y-4 min-h-[320px]">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Attendance Overview</h3>
            <button className="text-xs text-[#22479b] font-medium">Export CSV</button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-sm text-gray-700">John Doe</span>
              <span className="text-xs text-green-600 font-medium">Checked In</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-sm text-gray-700">Sarah Chen</span>
              <span className="text-xs text-yellow-600 font-medium">On Break</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-sm text-gray-700">Mike Johnson</span>
              <span className="text-xs text-blue-600 font-medium">On Leave</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-[#22479b] text-white text-xs rounded-lg">All</button>
          <button className="px-3 py-1.5 bg-gray-200 text-gray-700 text-xs rounded-lg">Today</button>
          <button className="px-3 py-1.5 bg-gray-200 text-gray-700 text-xs rounded-lg">This Week</button>
        </div>
      </div>
      <div className="px-6 pb-6 bg-gray-50">
        <div className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
              <LayoutDashboard className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-xs font-semibold text-gray-700">Centralized HR Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Workforce Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete HR automation platform—from attendance to payroll, all in one integrated solution.
          </p>
        </div>

        <div className="space-y-24">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-16 items-center`}
            >
              <div className="flex-1">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.platformColor} rounded-2xl mb-6 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="space-y-3 mb-6">
                  {feature.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-lg text-gray-700 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg border border-gray-200">
                  <feature.platformIcon className="h-4 w-4 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">Example shown in {feature.platform}</span>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                {feature.mockupType === 'slack' && renderSlackMockup(feature, index)}
                {feature.mockupType === 'teams' && renderTeamsMockup(feature)}
                {feature.mockupType === 'line' && renderLINEMockup(feature)}
                {feature.mockupType === 'dashboard' && renderDashboardMockup()}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#22479b]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#22479b] to-[#3a5fb8] flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All platforms supported */}
        <div className="mt-20 text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            Works across all platforms
          </p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <Slack className="h-4 w-4 text-[#4A154B]" />
              <span className="text-sm font-medium text-gray-700">Slack</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <MessageSquare className="h-4 w-4 text-[#5B5FC7]" />
              <span className="text-sm font-medium text-gray-700">Microsoft Teams</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <Smartphone className="h-4 w-4 text-[#06C755]" />
              <span className="text-sm font-medium text-gray-700">LINE</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <Globe className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">And more...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
