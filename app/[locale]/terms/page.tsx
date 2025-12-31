import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using StaffiX, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
                <p>
                  Permission is granted to use StaffiX for your internal business operations. This license does not include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reselling or sublicensing the service</li>
                  <li>Using the service for any illegal purpose</li>
                  <li>Attempting to reverse engineer or extract source code</li>
                  <li>Removing copyright or proprietary notations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Account Terms</h2>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the security of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
                <p>
                  Subscription fees are billed in advance on a monthly or annual basis. Fees are based on the number of active employees. You may cancel your subscription at any time, with cancellation taking effect at the end of the current billing period.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Service Availability</h2>
                <p>
                  We strive to maintain high availability but do not guarantee uninterrupted service. We reserve the right to modify or discontinue the service with reasonable notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
                <p>
                  StaffiX is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong> legal@staffix.com
                </p>
              </section>

              <section>
                <p className="text-sm text-gray-500 mt-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

