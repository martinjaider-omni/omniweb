
import React, { useState } from 'react';
import {
  CreditCard,
  BarChart3,
  Zap,
  Bell,
  Users,
  Gift,
  ShoppingBag,
  Dices,
  ArrowRight,
  ShieldCheck,
  Check,
  Wallet
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import FeatureVisuals from './FeatureVisuals';

// Define the feature types
type FeatureKey = 'wallet' | 'points' | 'tiers' | 'market' | 'push' | 'giftcards' | 'gamification' | 'automation' | 'analytics' | 'journey';

const FeatureTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FeatureKey>('points');

  // Configuration for all 8 features
  const features = {
    points: {
      label: "Points Program",
      icon: <CreditCard />,
      title: "Advanced Points Program",
      description: "Design a flexible reward system. Define custom exchange rates, use points as cashback, and trigger earnings based on transaction details, key moments, or user data.",
      link: "/features/points-program",
      items: ["Configurable exchange rates", "Cashback functionality", "Dynamic point generation"]
    },
    wallet: {
      label: "Wallet Cards",
      icon: <Wallet />,
      title: "Wallet Loyalty Cards",
      description: "No apps to download. Create beautiful, branded digital passes that live in Apple Wallet and Google Wallet. Update balance and status in real-time.",
      link: "/features/wallet-cards",
      items: ["Native Apple & Google Wallet support", "Zero-friction installation", "Real-time dynamic updates"]
    },
    tiers: {
      label: "Customer Tiers",
      icon: <Users />,
      title: "Smart Customer Tiers",
      description: "Segment users by value. Offer exclusive rewards, point multipliers, and VIP benefits. Automate tier progression and maintenance based on real-time activity.",
      link: "/features/customer-tiers",
      items: ["Automated progression", "Exclusive tier rewards", "Reversible degradation rules"]
    },
    market: {
      label: "Loyalty Market",
      icon: <ShoppingBag />,
      title: "Loyalty Marketplace",
      description: "An out-of-the-box rewards catalog. Offer physical products, digital goods, and coupons. Fully integrated fulfillment eliminates operational headaches.",
      link: "/features/loyalty-market",
      items: ["Physical & digital rewards", "Automated fulfillment", "Coupon pools"]
    },
    push: {
      label: "Push Notifications",
      icon: <Bell />,
      title: "Direct Push Notifications",
      description: "Reach customers directly on their digital wallet passes. Send mass updates or personalized, geo-triggered messages to drive foot traffic.",
      link: "/features/push-notifications",
      items: ["Geolocation triggers", "Wallet pass integration", "Segmented messaging"]
    },
    giftcards: {
      label: "Gift Cards",
      icon: <Gift />,
      title: "Digital Gift Cards",
      description: "Issue branded gift cards instantly. Use them for returns, rewards, or B2B incentives. 100% digital, secure, and integrated with your POS.",
      link: "/features/gift-cards",
      items: ["Instant digital delivery", "Prepaid corporate wallets", "Online & in-store use"]
    },
    gamification: {
      label: "Gamification",
      icon: <Dices />,
      title: "Engagement Gamification",
      description: "Spin-to-win wheels and interactive games. Turn routine interactions into exciting moments to boost engagement and purchase frequency.",
      link: "/features/gamification",
      items: ["Customizable prize wheels", "Probability control", "High-value prize integration"]
    },
    automation: {
      label: "Automation",
      icon: <Zap />,
      title: "Automated Campaigns",
      description: "Set-and-forget marketing logic. Automate birthdays, win-backs, and purchase milestones. Omniwallet handles the execution in real-time.",
      link: "/features/automated-campaigns",
      items: ["Win-back automation", "Birthday triggers", "Real-time execution"]
    },
    analytics: {
      label: "Analytics",
      icon: <BarChart3 />,
      title: "Advanced Analytics",
      description: "Track the true ROI of your loyalty program. Monitor redemption rates, average order value, and customer lifetime value in real-time.",
      link: "/features/analytics",
      items: ["Real-time ROI dashboards", "Cohort analysis", "Exportable reports"]
    },
    journey: {
      label: "Journey Builder",
      icon: <Users />, /* Using Users as placeholder or maybe a different one like Map? Let's check imports. */
      title: "Customer Journey Builder",
      description: "Map out multi-step customer experiences. Trigger actions based on location, spending behavior, or time elapsed since last visit.",
      link: "/features/customer-journey",
      items: ["Visual flow builder", "Location-based triggers", "AB testing"]
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Everything you need to build <br />a world-class loyalty program.
          </h2>
          <p className="text-lg text-slate-500">
            Omniwallet gives you the building blocks to create powerful, mobile-first loyalty experiences without writing a single line of code.
          </p>
        </div>

        {/* Tab Navigation (Scrollable) */}
        <div className="flex justify-center mb-8 border-b border-slate-200">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide w-full md:w-auto px-4 justify-start md:justify-center">
            {(Object.keys(features) as FeatureKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`pb-4 text-sm font-medium transition-all whitespace-nowrap border-b-2 ${activeTab === key
                  ? 'border-slate-900 text-slate-900'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
              >
                {features[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-12 min-h-[400px] flex flex-col md:flex-row gap-8 items-center transition-all">

          {/* Text Content */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-900">
              {features[activeTab].icon}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {features[activeTab].title}
            </h3>

            <p className="text-slate-600 leading-relaxed text-lg">
              {features[activeTab].description}
            </p>

            <ul className="space-y-3 pt-2">
              {features[activeTab].items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                    <Check className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link to={features[activeTab].link}>
                <Button variant="outline">
                  Learn more about {features[activeTab].label} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center items-center">
            <FeatureVisuals featureKey={activeTab} />
          </div>


        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;