import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Shield, Lock, Database, Key, FileCheck, Users, Server } from 'lucide-react';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Users,
      title: 'Authentication & Authorization',
      desc: 'Secure admin login with role-based access control. Each admin has appropriate permissions for dashboard access.',
    },
    {
      icon: Key,
      title: 'Platform Signing Verification',
      desc: 'All webhooks from Slack, Teams, and LINE are verified using platform-specific signing secrets to ensure authenticity.',
    },
    {
      icon: Database,
      title: 'Data Storage',
      desc: 'All data is stored securely in PostgreSQL databases in production environments with regular backups and redundancy.',
    },
    {
      icon: Lock,
      title: 'Encryption in Transit',
      desc: 'All communications use HTTPS/TLS encryption to protect data as it travels between your team and our servers.',
    },
    {
      icon: FileCheck,
      title: 'Audit Trail',
      desc: 'Comprehensive audit trail for all critical HR events, especially leave balance changes, with full history and accountability.',
    },
    {
      icon: Shield,
      title: 'Access Control Model',
      desc: 'Role-based access control ensures that only authorized personnel can view or modify sensitive workforce data.',
    },
    {
      icon: Server,
      title: 'Backups & Retention',
      desc: 'Policy-based data retention with regular automated backups. Data recovery procedures are tested regularly.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Shield className="h-20 w-20 text-[#22479b] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Security & Trust
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data security and privacy are our top priorities. We implement enterprise-grade security measures to protect your workforce information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-[#22479b] mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h2>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Security Questions?</h2>
            <p className="text-gray-600 mb-6">
              Our security team is here to help. Contact us for detailed security documentation or to discuss your specific requirements.
            </p>
            <a
              href="mailto:security@staffix.com"
              className="inline-flex items-center px-6 py-3 bg-[#22479b] text-white rounded-lg font-semibold hover:bg-[#1a3578] transition-colors"
            >
              Contact Security Team
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

