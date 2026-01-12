import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FeaturesPage from './pages/Features'; // Renamed to FeaturesPage for clarity in new routing
import SolutionsPage from './pages/Solutions'; // Renamed to SolutionsPage for clarity in new routing
import PricingPage from './pages/Pricing'; // Renamed to PricingPage for clarity in new routing
import CompanyPage from './pages/Company'; // Renamed to CompanyPage for clarity in new routing
import ContactPage from './pages/Contact'; // Renamed to ContactPage for clarity in new routing
import PointsProgram from './pages/features/PointsProgram';
import WalletCards from './pages/features/WalletCards'; // New Import
import CustomerTiers from './pages/features/CustomerTiers';
import LoyaltyMarket from './pages/features/LoyaltyMarket';
import PushNotifications from './pages/features/PushNotifications';
import GiftCards from './pages/features/GiftCards';
import Gamification from './pages/features/Gamification';
import AutomatedCampaigns from './pages/features/AutomatedCampaigns';
import Analytics from './pages/features/Analytics';
import CustomerJourney from './pages/features/CustomerJourney';
import ROPO from './pages/features/ROPO';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Feature Detail Pages */}
          <Route path="features/wallet-cards" element={<WalletCards />} />
          <Route path="features/points-program" element={<PointsProgram />} />
          <Route path="features/customer-tiers" element={<CustomerTiers />} />
          <Route path="features/loyalty-market" element={<LoyaltyMarket />} />
          <Route path="features/push-notifications" element={<PushNotifications />} />
          <Route path="features/gift-cards" element={<GiftCards />} />
          <Route path="features/gamification" element={<Gamification />} />
          <Route path="features/automated-campaigns" element={<AutomatedCampaigns />} />
          <Route path="features/analytics" element={<Analytics />} />
          <Route path="features/customer-journey" element={<CustomerJourney />} />
          <Route path="features/ropo" element={<ROPO />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;