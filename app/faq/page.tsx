import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Plus } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      question: "How long does it take to set up StaffiX?",
      answer: "StaffiX can be set up in less than 5 minutes. Simply add the bot to your chat platform (Slack, Teams, or LINE), configure your basic settings, and your team can start using it immediately."
    },
    {
      question: "Do my employees need to download any software?",
      answer: "No! That's the beauty of StaffiX. It works entirely within your existing chat tools. Your employees simply send messages like 'checkin' or 'break' in the chat they already use every day."
    },
    {
      question: "Which platforms does StaffiX support?",
      answer: "StaffiX currently supports Slack, Microsoft Teams, and LINE. We're constantly adding new platforms based on customer demand. Contact us if you'd like to see StaffiX on another platform."
    },
    {
      question: "How does pricing work?",
      answer: "StaffiX charges per active employee per month. An active employee is someone who uses StaffiX at least once during the billing period. We offer Starter ($2/active employee, $49 minimum) and Growth ($4/active employee, $149 minimum) plans, plus custom Enterprise pricing."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use secure webhook verification, encrypted data storage with PostgreSQL, and maintain full audit trails. We're compliant with US and Japan data protection regulations."
    },
    {
      question: "Can I try StaffiX for free?",
      answer: "Yes! We offer a free trial so you can test StaffiX with your team before committing. No credit card required to start."
    },
    {
      question: "Does StaffiX work in multiple languages?",
      answer: "Yes, StaffiX supports both English and Japanese, with more languages coming soon. The interface adapts to your team's preferred language."
    },
    {
      question: "What kind of reports can I generate?",
      answer: "StaffiX provides comprehensive dashboards with filters for date ranges, employees, and status. You can export attendance records, break logs, leave balances, and daily updates in CSV or PDF format."
    },
    {
      question: "How does leave management work?",
      answer: "Employees can request leave directly in chat. StaffiX automatically calculates leave days (excluding weekends and holidays), checks balances, maintains audit trails, and allows managers to approve or reject requests."
    },
    {
      question: "What happens if an employee forgets to check in?",
      answer: "StaffiX can send automated reminders based on your configured shift times. You can also manually mark attendance through the admin dashboard if needed."
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about StaffiX
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-gray-200 hover:border-[#22479b]/30 transition-all duration-200"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <Plus className="h-5 w-5 text-[#22479b] flex-shrink-0 group-open:rotate-45 transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#22479b] to-[#3a5fb8] rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-lg mb-6 opacity-90">Our team is here to help you get started</p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-[#22479b] rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

