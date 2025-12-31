import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Globe, Building2, Clock, Users } from 'lucide-react';

export default function UseCasesPage() {
  const useCases = [
    {
      icon: Globe,
      title: 'Remote Teams',
      pain: 'Remote teams struggle with tracking attendance and ensuring team members are available when needed. Time zone differences make coordination challenging.',
      solution: 'StaffiX automates check-ins across time zones, tracks availability, and provides real-time visibility into who\'s working when—all without requiring team members to learn new tools.',
      outcomes: [
        'Reduced time spent on attendance tracking by 80%',
        'Improved visibility into team availability',
        'Automatic timezone handling',
      ],
    },
    {
      icon: Building2,
      title: 'Agencies / Client Delivery Teams',
      pain: 'Agencies need accurate time tracking for client billing and project management. Manual time entry leads to errors and disputes.',
      solution: 'StaffiX provides accurate, automated time tracking with break management, ensuring precise billing and transparent client reporting.',
      outcomes: [
        'Accurate client billing with detailed records',
        'Reduced billing disputes',
        'Automated progress reporting',
      ],
    },
    {
      icon: Clock,
      title: 'Shift-based Operations',
      pain: 'Managing shift workers requires tracking attendance, breaks, and ensuring coverage. Spreadsheet-based systems are error-prone and time-consuming.',
      solution: 'StaffiX automates shift attendance tracking, break management, and provides dashboards for managers to monitor coverage and compliance.',
      outcomes: [
        'Automated shift attendance tracking',
        'Break compliance monitoring',
        'Real-time coverage visibility',
      ],
    },
    {
      icon: Users,
      title: 'Outsourcing Companies',
      pain: 'Outsourcing companies need to track attendance and productivity across multiple clients and projects. Manual reporting is inefficient and lacks transparency.',
      solution: 'StaffiX provides centralized attendance and progress tracking across all clients, with export-ready reports for client delivery.',
      outcomes: [
        'Centralized tracking across clients',
        'Client-ready reports and exports',
        'Improved transparency and accountability',
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Use Cases
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how StaffiX solves workforce operations challenges across different industries and team structures.
            </p>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#22479b] rounded-xl flex items-center justify-center">
                      <useCase.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{useCase.title}</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-red-600 mb-2">The Pain:</h3>
                      <p className="text-gray-700">{useCase.pain}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-[#22479b] mb-2">StaffiX Solution:</h3>
                      <p className="text-gray-700">{useCase.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-green-600 mb-2">Measurable Outcomes:</h3>
                      <ul className="space-y-2">
                        {useCase.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-gray-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

