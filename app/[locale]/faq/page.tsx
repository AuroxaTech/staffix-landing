import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      q: 'Do employees need to install a new app?',
      a: 'No! StaffiX works entirely within the chat tools your team already uses—Slack, Microsoft Teams, LINE, and more. Employees simply use natural language commands in their daily communication.',
    },
    {
      q: 'How does StaffiX handle different time zones?',
      a: 'StaffiX automatically handles timezone conversions based on your configured settings. All times are stored and displayed in the appropriate timezone for accurate tracking.',
    },
    {
      q: 'Can I export attendance data?',
      a: 'Yes! The admin dashboard includes comprehensive filtering and CSV export functionality. Export filtered results for reporting, payroll, or compliance purposes.',
    },
    {
      q: 'What happens if an employee forgets to check in?',
      a: 'Admins can manually adjust records in the dashboard. StaffiX also supports automated reminders for daily updates to help reduce missed check-ins.',
    },
    {
      q: 'How secure is my data?',
      a: 'All data is encrypted in transit and at rest. We use secure webhook verification, role-based access control, and maintain comprehensive audit trails. See our Security page for details.',
    },
    {
      q: 'Can I customize leave policies?',
      a: 'Yes! StaffiX supports flexible leave policy configuration including working day calculations, holiday exclusions, paid/unpaid leave handling, and scheduled deductions.',
    },
    {
      q: 'What platforms are supported?',
      a: 'Currently, StaffiX supports Slack, Microsoft Teams, and LINE. Additional platforms can be added on request. Contact us to request support for your preferred platform.',
    },
    {
      q: 'How long does setup take?',
      a: 'Initial setup takes just a few minutes. Install StaffiX to your chat tool, configure basic settings, and your team can start using it immediately. Advanced configuration can be done over time.',
    },
    {
      q: 'Is there a minimum contract period?',
      a: 'No minimum contract for Starter and Growth plans. Enterprise plans may have annual contracts. You can cancel anytime on monthly plans.',
    },
    {
      q: 'Do you offer support in Japanese?',
      a: 'Yes! StaffiX is designed for both US and Japanese markets. We provide support in both English and Japanese, and the interface is available in both languages.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about StaffiX
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  <span>{faq.q}</span>
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

