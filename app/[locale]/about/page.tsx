import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About StaffiX
            </h1>
            <p className="text-xl text-gray-600">
              Automating workforce operations for modern teams
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                StaffiX was born from the frustration of managing workforce operations through spreadsheets and multiple disconnected tools. We believe that operations automation should work where your team already communicates—no new portals, no workflow changes, just seamless automation in the background.
              </p>
            </section>

            <section className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                StaffiX automates attendance tracking, break management, leave requests, and daily progress updates inside Slack, Microsoft Teams, LINE, and other chat tools. Our platform provides administrators with a comprehensive dashboard for monitoring, filtering, and exporting workforce data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We focus on accuracy, audit trails, and policy-grade leave management—ensuring that your workforce operations are reliable, transparent, and compliant.
              </p>
            </section>

            <section className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#22479b] mr-2">•</span>
                  <span><strong>No workflow disruption:</strong> We integrate into existing tools, not replace them.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#22479b] mr-2">•</span>
                  <span><strong>Accuracy and reliability:</strong> Policy-grade calculations with full audit trails.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#22479b] mr-2">•</span>
                  <span><strong>Transparency:</strong> Clear data, exportable records, and comprehensive reporting.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#22479b] mr-2">•</span>
                  <span><strong>Security first:</strong> Enterprise-grade security and data protection.</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                Have questions or want to learn more? We'd love to hear from you.
              </p>
              <div className="mt-4">
                <a
                  href="mailto:hello@staffix.com"
                  className="text-[#22479b] hover:underline font-semibold"
                >
                  hello@staffix.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

