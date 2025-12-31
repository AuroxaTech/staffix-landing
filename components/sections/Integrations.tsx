'use client';

import { Slack, MessageSquare, Smartphone, Sparkles } from 'lucide-react';

export default function Integrations() {
  const platforms = [
    { name: 'Slack', icon: Slack, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50' },
    { name: 'Microsoft Teams', icon: MessageSquare, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
    { name: 'LINE', icon: Smartphone, color: 'from-green-500 to-green-600', bgColor: 'bg-green-50' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#22479b] to-[#3a5fb8] rounded-2xl mb-6 shadow-lg">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Works inside your existing tools.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            StaffiX brings the same workflow across channels—so your team doesn't learn a new system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group bg-white rounded-3xl p-10 border-2 border-gray-100 hover:border-[#22479b]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${platform.color} w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <platform.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">{platform.name}</h3>
              <p className="text-gray-600 text-center">Seamless integration</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            More platforms supported on request
          </p>
        </div>
      </div>
    </section>
  );
}
