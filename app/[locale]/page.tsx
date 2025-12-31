import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import Benefits from '@/components/sections/Benefits';
import HowItWorks from '@/components/sections/HowItWorks';
import Features from '@/components/sections/Features';
import Integrations from '@/components/sections/Integrations';
import PricingTeaser from '@/components/sections/PricingTeaser';
import Security from '@/components/sections/Security';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <HowItWorks />
        <Features />
        <Integrations />
        <PricingTeaser />
        <Security />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

