'use client';

import Link from 'next/link';
import { ArrowRight, Check, Slack, MessageSquare, Smartphone, Zap, Clock, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  const platforms = [
    { name: 'Slack', icon: Slack, color: 'from-purple-500 to-purple-600' },
    { name: 'Microsoft Teams', icon: MessageSquare, color: 'from-blue-500 to-blue-600' },
    { name: 'LINE', icon: Smartphone, color: 'from-green-500 to-green-600' },
  ];

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22479b]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Workforce automation that lives{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#22479b]">inside your chat tools</span>
                  <div className="absolute bottom-1 left-0 w-full h-3 bg-[#22479b]/10 -rotate-1 rounded"></div>
                </span>
              </h1>
              
              {/* Prominent No Download Message */}
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#22479b]/10 via-blue-500/10 to-purple-500/10 rounded-2xl border-2 border-[#22479b]/30 shadow-lg backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22479b] to-[#3a5fb8] flex items-center justify-center shadow-md flex-shrink-0">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-base font-bold text-[#22479b] leading-tight">
                    No software to download. No new platforms to learn.
                  </p>
                  <p className="text-sm font-medium text-gray-700 mt-1">
                    Works directly in your existing chat tools
                  </p>
                </div>
              </div>
              
              {/* Quick stats */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-lg border border-green-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-xs font-bold text-green-700">5 min setup</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                  <Users className="h-3 w-3 text-blue-600" />
                  <span className="text-xs font-bold text-blue-700">10K+ users</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 rounded-lg border border-purple-100">
                  <TrendingUp className="h-3 w-3 text-purple-600" />
                  <span className="text-xs font-bold text-purple-700">99.9% uptime</span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              StaffiX integrates directly into Slack, Microsoft Teams, LINE, and more—automating attendance tracking, break management, leave requests, daily progress reports, salary management, and comprehensive HR dashboards right where your team already works.
            </p>

            {/* Platform badges */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-600 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#22479b]"></div>
                <span>Integrates seamlessly with:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="group flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-[#22479b]/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${platform.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <platform.icon className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900">{platform.name}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <span className="text-xs font-medium text-gray-600">+ more</span>
                </div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#22479b] to-[#3a5fb8] text-white rounded-xl font-semibold text-base hover:shadow-xl hover:shadow-[#22479b]/30 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative">Get Started Free</span>
                <ArrowRight className="relative ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#22479b] border-2 border-[#22479b] rounded-xl font-semibold text-base hover:bg-[#22479b] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>Book a Demo</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">5-minute setup</p>
                  <p className="text-xs text-gray-600">Start instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Zero training</p>
                  <p className="text-xs text-gray-600">Use existing tools</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Compliant</p>
                  <p className="text-xs text-gray-600">US & Japan ready</p>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  AM
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  SK
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  TL
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  MJ
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-700 text-xs font-bold shadow-md">
                  +5K
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-900">5.0</span>
                </div>
                <p className="text-xs text-gray-600">Trusted by 10,000+ teams</p>
              </div>
            </div>
          </div>

          {/* Right: Visual - Enhanced Chat Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main chat interface - Slack style */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                {/* Slack Header */}
                <div className="bg-[#4A154B] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <Slack className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">staffix-team</p>
                      <p className="text-white/60 text-xs">#general</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-xs">Live</span>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="bg-white p-6 space-y-4 min-h-[400px]">
                  {/* Time stamp */}
                  <div className="flex justify-center">
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Today, 9:02 AM</span>
                  </div>

                  {/* Message 1 - User checkin */}
                  <div className="flex items-start gap-3 animate-fade-in">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">AM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-gray-900 text-sm">Alex Morgan</span>
                        <span className="text-xs text-gray-500">9:02 AM</span>
                      </div>
                      <p className="text-gray-700 text-sm">checkin</p>
                    </div>
                  </div>

                  {/* Bot response 1 */}
                  <div className="flex items-start gap-3 animate-fade-in-delay-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#22479b] to-[#3a5fb8] flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">SX</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-gray-900 text-sm">StaffiX</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">APP</span>
                        <span className="text-xs text-gray-500">9:02 AM</span>
                      </div>
                      <div className="bg-gradient-to-br from-[#22479b]/5 to-[#3a5fb8]/5 border-l-4 border-[#22479b] rounded-r-lg p-4">
                        <p className="text-gray-900 font-semibold mb-1">✓ Checked in at 9:02 AM</p>
                        <p className="text-gray-600 text-sm">Status: On time ✅ • Have a productive day!</p>
                      </div>
                    </div>
                  </div>

                  {/* Message 2 - Another user */}
                  <div className="flex items-start gap-3 animate-fade-in-delay-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-500 flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">SK</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-gray-900 text-sm">Sarah Kim</span>
                        <span className="text-xs text-gray-500">9:05 AM</span>
                      </div>
                      <p className="text-gray-700 text-sm">break</p>
                    </div>
                  </div>

                  {/* Bot response 2 */}
                  <div className="flex items-start gap-3 animate-fade-in-delay-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#22479b] to-[#3a5fb8] flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">SX</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-gray-900 text-sm">StaffiX</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">APP</span>
                        <span className="text-xs text-gray-500">9:05 AM</span>
                      </div>
                      <div className="bg-gradient-to-br from-[#22479b]/5 to-[#3a5fb8]/5 border-l-4 border-[#22479b] rounded-r-lg p-4">
                        <p className="text-gray-900 font-semibold mb-1">✓ Break started at 9:05 AM</p>
                        <p className="text-gray-600 text-sm">Type "back" when you return</p>
                      </div>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex items-start gap-3 animate-fade-in-delay-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">MJ</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-gray-900 text-sm">Mike Johnson</span>
                      </div>
                      <div className="bg-gray-100 rounded-lg px-4 py-2 inline-flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform indicator */}
                <div className="px-6 pb-6 bg-white border-t border-gray-100">
                  <div className="flex items-center justify-between bg-[#4A154B]/5 rounded-xl p-3 border border-[#4A154B]/10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-[#4A154B] flex items-center justify-center">
                        <Slack className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-gray-700">Live in Slack</span>
                    </div>
                    <span className="text-xs text-gray-500">Real-time updates</span>
                  </div>
                </div>
              </div>

              {/* Floating stats card - Top right */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 w-64 transform hover:scale-105 transition-transform duration-300 z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">47</p>
                      <p className="text-xs text-gray-600 font-medium">Active today</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="text-xs font-bold text-green-600">+12%</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-gray-600">Checked in</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-sm text-gray-600">On break</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-gray-600">On leave</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">2</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Last update</span>
                    <span className="text-gray-700 font-medium">Just now</span>
                  </div>
                </div>
              </div>

              {/* Floating notification card - Bottom left */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 max-w-xs transform hover:scale-105 transition-transform duration-300 z-10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22479b] to-[#3a5fb8] flex items-center justify-center shadow-lg flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900 mb-1">Auto-reminder sent</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      15 team members reminded to submit daily updates
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-100">
                  <span className="text-gray-500">2:00 PM • Automated</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#22479b]/10 rounded-2xl blur-xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400/10 rounded-2xl blur-xl -z-10"></div>
              <div className="absolute top-1/2 -right-8 w-20 h-20 bg-purple-400/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>

        
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 0.5s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.5s ease-out 0.6s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.5s ease-out 0.9s both;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.5s ease-out 1.2s both;
        }
      `}</style>
    </section>
  );
}
