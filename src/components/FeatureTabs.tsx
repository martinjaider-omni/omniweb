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
  Wallet,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from './ui/Button';
import FeatureVisuals from './FeatureVisuals';

// Define the feature types
type FeatureKey = 'wallet' | 'points' | 'tiers' | 'market' | 'push' | 'gamification' | 'automation' | 'analytics' | 'journey' | 'ropo';

const FeatureTabs: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<FeatureKey>('points');

  // Configuration for all features
  const features = {
    points: {
      label: t('features.items.points.title'),
      icon: <CreditCard />,
      title: t('features.items.points.title'),
      description: t('features.items.points.desc'),
      link: "/features/points-program",
      items: t('home.featureTabs.items.points', { returnObjects: true }) as string[]
    },
    wallet: {
      label: t('features.items.wallet.title'),
      icon: <Wallet />,
      title: t('features.items.wallet.title'),
      description: t('features.items.wallet.desc'),
      link: "/features/wallet-cards",
      items: t('home.featureTabs.items.wallet', { returnObjects: true }) as string[]
    },
    tiers: {
      label: t('features.items.tiers.title'),
      icon: <Users />,
      title: t('features.items.tiers.title'),
      description: t('features.items.tiers.desc'),
      link: "/features/customer-tiers",
      items: t('home.featureTabs.items.tiers', { returnObjects: true }) as string[]
    },
    market: {
      label: t('features.items.marketplace.title'),
      icon: <ShoppingBag />,
      title: t('features.items.marketplace.title'),
      description: t('features.items.marketplace.desc'),
      link: "/features/loyalty-market",
      items: t('home.featureTabs.items.market', { returnObjects: true }) as string[]
    },
    push: {
      label: t('features.items.push.title'),
      icon: <Bell />,
      title: t('features.items.push.title'),
      description: t('features.items.push.desc'),
      link: "/features/push-notifications",
      items: t('home.featureTabs.items.push', { returnObjects: true }) as string[]
    },
    gamification: {
      label: t('features.items.gamification.title'),
      icon: <Dices />,
      title: t('features.items.gamification.title'),
      description: t('features.items.gamification.desc'),
      link: "/features/gamification",
      items: t('home.featureTabs.items.gamification', { returnObjects: true }) as string[]
    },
    automation: {
      label: t('features.items.campaigns.title'),
      icon: <Zap />,
      title: t('features.items.campaigns.title'),
      description: t('features.items.campaigns.desc'),
      link: "/features/automated-campaigns",
      items: t('home.featureTabs.items.automation', { returnObjects: true }) as string[]
    },
    analytics: {
      label: t('features.items.analytics.title'),
      icon: <BarChart3 />,
      title: t('features.items.analytics.title'),
      description: t('features.items.analytics.desc'),
      link: "/features/analytics",
      items: t('home.featureTabs.items.analytics', { returnObjects: true }) as string[]
    },
    journey: {
      label: t('features.items.journeys.title'),
      icon: <Users />,
      title: t('features.items.journeys.title'),
      description: t('features.items.journeys.desc'),
      link: "/features/customer-journey",
      items: t('home.featureTabs.items.journey', { returnObjects: true }) as string[]
    },
    ropo: {
      label: t('features.items.ropo.title'),
      icon: <Globe />,
      title: t('features.items.ropo.title'),
      description: t('features.items.ropo.desc'),
      link: "/features/ropo",
      items: t('home.featureTabs.items.ropo', { returnObjects: true }) as string[]
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6" dangerouslySetInnerHTML={{ __html: t('home.featureTabs.header.title') }}>
          </h2>
          <p className="text-lg text-slate-500">
            {t('home.featureTabs.header.subtitle')}
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
                  {t('home.featureTabs.cta.learnMore', { feature: features[activeTab].label })} <ArrowRight className="w-4 h-4 ml-2" />
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