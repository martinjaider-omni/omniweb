import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    Wallet,
    Gift,
    Users,
    TrendingUp,
    Zap,
    Target,
    BarChart3,
    Sparkles,
    Mail,
    Award,
    ShoppingBag,
    Gamepad2,
    Workflow,
    Map,
    ArrowRight
} from 'lucide-react';

const Features: React.FC = () => {
    const { t } = useTranslation();
    const features = [
        // Core Features
        {
            category: t('features.sections.core.title'),
            items: [
                {
                    icon: Award,
                    title: t('features.items.points.title'),
                    description: t('features.items.points.desc'),
                    link: '/features/points-program'
                },
                {
                    icon: Wallet,
                    title: t('features.items.wallet.title'),
                    description: t('features.items.wallet.desc'),
                    link: '/features/wallet-cards'
                },
                {
                    icon: Users,
                    title: t('features.items.referral.title'),
                    description: t('features.items.referral.desc'),
                    link: '/features/referral-program'
                },
                {
                    icon: Mail,
                    title: t('features.items.push.title'),
                    description: t('features.items.push.desc'),
                    link: '/features/push-notifications'
                }
            ]
        },
        // Advanced Features
        {
            category: t('features.sections.advanced.title'),
            items: [
                {
                    icon: Target,
                    title: t('features.items.tiers.title'),
                    description: t('features.items.tiers.desc'),
                    link: '/features/customer-tiers'
                },
                {
                    icon: Zap,
                    title: t('features.items.campaigns.title'),
                    description: t('features.items.campaigns.desc'),
                    link: '/features/automated-campaigns'
                },
                {
                    icon: Workflow,
                    title: t('features.items.workflows.title'),
                    description: t('features.items.workflows.desc'),
                    link: '/features/workflows'
                },
                {
                    icon: Map,
                    title: t('features.items.journeys.title'),
                    description: t('features.items.journeys.desc'),
                    link: '/features/customer-journey'
                },
                {
                    icon: Gamepad2,
                    title: t('features.items.gamification.title'),
                    description: t('features.items.gamification.desc'),
                    link: '/features/gamification'
                },
                {
                    icon: ShoppingBag,
                    title: t('features.items.marketplace.title'),
                    description: t('features.items.marketplace.desc'),
                    link: '/features/loyalty-market'
                },
                {
                    icon: Gift,
                    title: t('features.items.giftcards.title'),
                    description: t('features.items.giftcards.desc'),
                    link: '/features/gift-cards'
                },
                {
                    icon: BarChart3,
                    title: t('features.items.analytics.title'),
                    description: t('features.items.analytics.desc'),
                    link: '/features/analytics'
                }
            ]
        }
    ];

    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm font-medium text-slate-600 mb-6">
                    <Sparkles className="w-4 h-4 text-[#255664]" />
                    {t('features.hero.badge')}
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                    {t('features.hero.title')}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#255664] to-emerald-500">
                        {t('features.hero.subtitle')}
                    </span>
                </h1>

                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                    {t('features.hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/signup"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#255664] text-white rounded-xl font-semibold hover:bg-[#1e4652] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        {t('features.hero.startFree')}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        to="/pricing"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all"
                    >
                        {t('features.hero.viewPricing')}
                    </Link>
                </div>
            </motion.div>

            {/* Features Grid */}
            {features.map((section, sectionIndex) => (
                <div key={section.category} className={sectionIndex > 0 ? 'mt-24' : ''}>
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">
                            {section.category}
                        </h2>
                        <p className="text-lg text-slate-600">
                            {sectionIndex === 0
                                ? t('features.sections.core.description')
                                : t('features.sections.advanced.description')
                            }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {section.items.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <Link
                                        to={feature.link}
                                        className="group block h-full"
                                    >
                                        <div className="h-full bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col">
                                            {/* Icon */}
                                            <div className="w-14 h-14 rounded-xl bg-[#255664] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#255664] transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                                                {feature.description}
                                            </p>

                                            {/* Arrow */}
                                            <div className="mt-4 flex items-center text-sm font-medium text-[#255664] group-hover:gap-2 transition-all">
                                                {t('features.learnMore')}
                                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            ))}

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-24 bg-[#232323] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t('features.ready.title')}
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        {t('features.ready.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/signup"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            {t('cta.startFree')}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-xl font-semibold hover:border-white/40 hover:bg-white/10 transition-all"
                        >
                            {t('cta.talkSales')}
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Features;
