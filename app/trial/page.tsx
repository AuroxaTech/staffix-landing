import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Check, Zap, Users, Shield } from 'lucide-react';

export default function TrialPage() {
  const benefits = [
    "Full access to all features",
    "Unlimited employees during trial",
    "No credit card required",
    "14-day trial period",
    "Setup assistance included",
    "Cancel anytime"
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-200 mb-6">
              <Zap className="h-4 w-4 text-green-600" />
              <span className="text-sm font-bold text-green-700">Start your free 14-day trial</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Try StaffiX free for 14 days
            </h1>
            <p className="text-xl text-gray-600">
              No credit card required. Full access to all features. Cancel anytime.
            </p>
          </div>

          {/* Main Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 mb-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22479b] focus:border-transparent outline-none transition"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22479b] focus:border-transparent outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22479b] focus:border-transparent outline-none transition"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22479b] focus:border-transparent outline-none transition"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label htmlFor="platform" className="block text-sm font-semibold text-gray-700 mb-2">
                  Which platform do you use? *
                </label>
                <select
                  id="platform"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22479b] focus:border-transparent outline-none transition"
                >
                  <option value="">Select your platform</option>
                  <option value="slack">Slack</option>
                  <option value="teams">Microsoft Teams</option>
                  <option value="line">LINE</option>
                  <option value="multiple">Multiple platforms</option>
                </select>
              </div>

              <div>
                <label htmlFor="employees" className="block text-sm font-semibold text-gray-700 mb-2">
                  Team Size
                </label>
                <select
                  id="employees"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22479b] focus:border-transparent outline-none transition"
                >
                  <option value="">Select range</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201+">201+ employees</option>
                </select>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 text-[#22479b] border-gray-300 rounded focus:ring-[#22479b]"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="/terms" className="text-[#22479b] hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-[#22479b] hover:underline">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#22479b] to-[#3a5fb8] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#22479b]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Free Trial
              </button>
            </form>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">5-Min Setup</h3>
              <p className="text-sm text-gray-600">Get started instantly</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">10K+ Users</h3>
              <p className="text-sm text-gray-600">Trusted worldwide</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Secure & Compliant</h3>
              <p className="text-sm text-gray-600">Enterprise-grade security</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

