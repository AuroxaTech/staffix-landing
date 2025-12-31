'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { useTranslations } from 'next-intl';
import { Clock, Coffee, FileText, Calendar, Users, BarChart3 } from 'lucide-react';

export default function FeaturesPage() {
  const t = useTranslations('features');

  const categories = [
    {
      title: 'Employee Automation (in chat tools)',
      features: [
        { icon: Clock, name: 'Check-in/out', desc: 'Simple commands in your chat tool' },
        { icon: Coffee, name: 'Break sessions', desc: 'Track multiple breaks per day' },
        { icon: FileText, name: 'Progress updates', desc: 'Daily reports and reminders' },
        { icon: Calendar, name: 'Leave requests', desc: 'Request and manage time off' },
        { name: 'Keyword tolerance', desc: 'Case and spacing variations supported' },
      ],
    },
    {
      title: 'Admin Dashboard',
      features: [
        { icon: BarChart3, name: 'Attendance tables', desc: 'View all attendance data' },
        { name: 'Filters across tabs', desc: 'Filter by date, employee, status' },
        { name: 'Sorting + pagination', desc: 'Easy navigation of large datasets' },
        { name: 'CSV export', desc: 'Export filtered results' },
        { icon: Users, name: 'Employee profiles', desc: 'Manage fields, active/inactive, delete' },
      ],
    },
    {
      title: 'Policy-grade Leave Management',
      features: [
        { name: 'Working day calculation', desc: 'Automatic calculation of working days' },
        { name: 'Holidays/weekends exclusion', desc: 'Smart exclusion of non-working days' },
        { name: 'Scheduled deductions', desc: 'Future leave scheduled automatically' },
        { name: 'Unpaid overflow handling', desc: 'Handle unpaid leave when balance is exceeded' },
        { name: 'Cancellation + audit', desc: 'Full audit trail for all changes' },
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive workforce operations automation in the tools your team already uses.
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.features.map((feature, featIndex) => (
                    <div
                      key={featIndex}
                      className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                      {feature.icon && (
                        <feature.icon className="h-8 w-8 text-[#22479b] mb-4" />
                      )}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  ))}
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

