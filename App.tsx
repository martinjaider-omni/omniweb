import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import FeatureTabs from './components/FeatureTabs';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import CTASection from './components/CTASection';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-slate-900 selection:text-white">
      <Banner />
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <FeatureTabs />
        <BentoGrid />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;