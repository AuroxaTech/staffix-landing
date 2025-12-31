import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Building2, Users, Globe, Briefcase, TrendingUp, Zap } from 'lucide-react';

export default function UseCasesPage() {
  const useCases = [
    {
      icon: Building2,
      title: "Remote Teams",
      description: "Perfect for distributed teams working across different time zones. Track attendance, breaks, and productivity without micromanagement.",
      features: ["Timezone-aware tracking", "Async updates", "Real-time dashboard", "Location-independent"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Hybrid Workforces",
      description: "Seamlessly manage teams that work both in-office and remotely. Unified tracking regardless of where employees work.",
      features: ["Flexible scheduling", "Office/remote tracking", "Unified reporting", "Easy shift management"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Briefcase,
      title: "Shift-Based Operations",
      description: "Ideal for businesses with multiple shifts. Auto-detect late arrivals, track break compliance, and manage shift handovers.",
      features: ["Multiple shift support", "Late detection", "Break management", "Shift handover reports"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      title: "International Teams",
      description: "Manage global teams with multi-language support and compliance with US and Japan labor regulations.",
      features: ["Multi-language (EN/JA)", "Regional compliance", "Holiday calendars", "Currency support"],
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Growing Startups",
      description: "Scale your workforce operations as you grow. Start small and expand without changing tools or processes.",
      features: ["Pay as you grow", "Easy onboarding", "Quick setup", "No long-term contracts"],
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Fast-Paced Agencies",
      description: "Track time across multiple projects and clients. Perfect for agencies managing billable hours and client reporting.",
      features: ["Project tracking", "Client reporting", "Daily updates", "Export-ready data"],
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Built for every team structure
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a remote-first startup or an international enterprise, StaffiX adapts to your workflow
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#22479b]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <useCase.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22479b]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#22479b] to-[#3a5fb8] rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to see how StaffiX works for your team?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join 10,000+ teams who've automated their workforce operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/trial"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#22479b] rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

