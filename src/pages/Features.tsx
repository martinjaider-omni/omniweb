import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    const features = [
        // Core Features
        {
            category: 'Core',
            items: [
                {
                    icon: Award,
                    title: 'Points Program',
                    description: 'Reward customers with points for every purchase and action they take.',
                    link: '/features/points-program'
                },
                {
                    icon: Wallet,
                    title: 'Wallet Cards',
                    description: 'Create beautiful digital cards for Apple Wallet and Google Wallet.',
                    link: '/features/wallet-cards'
                },
                {
                    icon: Users,
                    title: 'Referral Program',
                    description: 'Turn customers into advocates with automated referral rewards.',
                    link: '/features/referral-program'
                },
                {
                    icon: Mail,
                    title: 'Push Notifications',
                    description: 'Send unlimited push notifications directly to customers\' wallets.',
                    link: '/features/push-notifications'
                }
            ]
        },
        // Advanced Features
        {
            category: 'Advanced',
            items: [
                {
                    icon: Target,
                    title: 'Customer Tiers',
                    description: 'Create VIP tiers and reward your most loyal customers differently.',
                    link: '/features/customer-tiers'
                },
                {
                    icon: Zap,
                    title: 'Automated Campaigns',
                    description: 'Set up automated marketing campaigns based on customer behavior.',
                    link: '/features/automated-campaigns'
                },
                {
                    icon: Workflow,
                    title: 'Workflows',
                    description: 'Build complex automation workflows with our visual builder.',
                    link: '/features/workflows'
                },
                {
                    icon: Map,
                    title: 'Customer Journeys',
                    description: 'Map and optimize every touchpoint in your customer experience.',
                    link: '/features/customer-journey'
                },
                {
                    icon: Gamepad2,
                    title: 'Gamification',
                    description: 'Add game mechanics to boost engagement and retention.',
                    link: '/features/gamification'
                },
                {
                    icon: ShoppingBag,
                    title: 'Rewards Marketplace',
                    description: 'Let customers redeem points for products, discounts, and experiences.',
                    link: '/features/loyalty-market'
                },
                {
                    icon: Gift,
                    title: 'Digital Gift Cards',
                    description: 'Sell and manage digital gift cards directly in the wallet.',
                    link: '/features/gift-cards'
                },
                {
                    icon: BarChart3,
                    title: 'Advanced Analytics',
                    description: 'Deep insights into customer behavior, ROI, and program performance.',
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
                    All-in-one loyalty platform
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                    Everything you need to
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#255664] to-emerald-500">
                        master digital loyalty
                    </span>
                </h1>

                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Omniwallet provides the complete infrastructure to create, manage, and scale
                    Apple Wallet and Google Wallet loyalty programs that customers actually use.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/signup"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#255664] text-white rounded-xl font-semibold hover:bg-[#1e4652] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Start for free
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        to="/pricing"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all"
                    >
                        View pricing
                    </Link>
                </div>
            </motion.div>

            {/* Features Grid */}
            {features.map((section, sectionIndex) => (
                <div key={section.category} className={sectionIndex > 0 ? 'mt-24' : ''}>
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">
                            {section.category} Features
                        </h2>
                        <p className="text-lg text-slate-600">
                            {section.category === 'Core'
                                ? 'Essential tools included in all plans to build a powerful loyalty program'
                                : 'Advanced capabilities to take your loyalty program to the next level'
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
                                                Learn more
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
                        Ready to transform your loyalty program?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of businesses using Omniwallet to build lasting customer relationships.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/signup"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Start for free
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-xl font-semibold hover:border-white/40 hover:bg-white/10 transition-all"
                        >
                            Talk to sales
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Features;
