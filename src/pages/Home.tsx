import React from 'react';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import FeatureTabs from '../components/FeatureTabs';
import BentoGrid from '../components/BentoGrid';
import CTASection from '../components/CTASection';
import Testimonials from '../components/Testimonials';
import IntegrationsSection from '../components/IntegrationsSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <LogoTicker />
      <FeatureTabs />
      <BentoGrid />
      <IntegrationsSection />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;
