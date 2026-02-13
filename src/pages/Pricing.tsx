import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Pricing: React.FC = () => {
    const { t } = useTranslation();
    const [activities, setActivities] = React.useState(1500);
    const [selectedPlan, setSelectedPlan] = React.useState<'starter' | 'plus' | 'advanced'>('plus');
    const [isAnnual, setIsAnnual] = React.useState(false);

    const calculateActivityCost = (count: number, plan: 'starter' | 'plus' | 'advanced') => {
        let limit = 0;
        switch (plan) {
            case 'starter': limit = 2500; break; // User requested: Starter has 2500
            case 'plus': limit = 1000; break;    // User requested: Plus has 1000
            case 'advanced': limit = 250; break; // User requested: Advanced has 250
        }

        if (count <= limit) return 0;

        let remaining = count - limit;
        let cost = 0;

        // Overage pricing
        // Tier 1: Next 750 items at 0.10
        const tier1 = Math.min(remaining, 750);
        cost += tier1 * 0.10;
        remaining -= tier1;

        if (remaining <= 0) return cost;

        // Tier 2: Next 4000 items at 0.08
        const tier2 = Math.min(remaining, 4000);
        cost += tier2 * 0.08;
        remaining -= tier2;

        if (remaining <= 0) return cost;

        // Tier 3: Next 5000 items at 0.06
        const tier3 = Math.min(remaining, 5000);
        cost += tier3 * 0.06;
        remaining -= tier3;

        if (remaining <= 0) return cost;

        // Tier 4: Next 40000 items at 0.04
        const tier4 = Math.min(remaining, 40000);
        cost += tier4 * 0.04;
        remaining -= tier4;

        if (remaining <= 0) return cost;

        // Tier 5: 50,000+ at 0.02
        cost += remaining * 0.02;

        return cost;
    };

    const variableCost = calculateActivityCost(activities, selectedPlan);
    const getBasePrice = (plan: 'starter' | 'plus' | 'advanced') => {
        let price = 0;
        switch (plan) {
            case 'starter': price = 39; break;
            case 'plus': price = 149; break;
            case 'advanced': price = 249; break;
        }
        return isAnnual ? Math.round(price * 0.82) : price;
    };

    const handleActivityChange = (value: number) => {
        // Limit to 50,000
        setActivities(Math.min(50000, Math.max(0, value)));
    };

    const planNames = {
        starter: 'Starter',
        plus: 'Plus',
        advanced: 'Advanced'
    };

    // Calculate detailed breakdown by tier
    // Calculate detailed breakdown by tier
    const getActivityBreakdown = (count: number, plan: 'starter' | 'plus' | 'advanced') => {
        let limit = 0;
        switch (plan) {
            case 'starter': limit = 2500; break;
            case 'plus': limit = 1000; break;
            case 'advanced': limit = 250; break;
        }

        if (count <= limit) return [];

        const breakdown: Array<{ tier: string, activities: number, rate: number, cost: number }> = [];
        let remaining = count - limit;
        let startRange = limit + 1;

        // Tier 1: Next 750 at 0.10
        if (remaining > 0) {
            const tier1 = Math.min(remaining, 750);
            breakdown.push({ tier: `${startRange.toLocaleString()}-${(startRange + 749).toLocaleString()}`, activities: tier1, rate: 0.10, cost: tier1 * 0.10 });
            remaining -= tier1;
            startRange += 750;
        }

        // Tier 2: Next 4000 at 0.08
        if (remaining > 0) {
            const tier2 = Math.min(remaining, 4000);
            breakdown.push({ tier: `${startRange.toLocaleString()}-${(startRange + 3999).toLocaleString()}`, activities: tier2, rate: 0.08, cost: tier2 * 0.08 });
            remaining -= tier2;
            startRange += 4000;
        }

        // Tier 3: Next 5000 at 0.06
        if (remaining > 0) {
            const tier3 = Math.min(remaining, 5000);
            breakdown.push({ tier: `${startRange.toLocaleString()}-${(startRange + 4999).toLocaleString()}`, activities: tier3, rate: 0.06, cost: tier3 * 0.06 });
            remaining -= tier3;
            startRange += 5000;
        }

        // Tier 4: Next 40000 at 0.04
        if (remaining > 0) {
            const tier4 = Math.min(remaining, 40000);
            breakdown.push({ tier: `${startRange.toLocaleString()}+`, activities: tier4, rate: 0.04, cost: tier4 * 0.04 });
            remaining -= tier4;
        }

        return breakdown;
    };

    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <span className="text-slate-600 font-medium tracking-wide uppercase text-sm">{t('pricing.hero.badge')}</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    {t('pricing.hero.title')}
                </h1>
                <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
                    {t('pricing.hero.description')}
                </p>
            </motion.div>

            {/* Toggle Annual/Monthly */}
            <div className="flex justify-center mb-12">
                <div className="bg-slate-100 p-1 rounded-xl inline-flex relative">
                    <div className="w-full h-full absolute inset-0 pointer-events-none">
                        <div className={`w-1/2 h-full bg-white rounded-lg shadow-sm transition-transform duration-300 ease-out transform ${isAnnual ? 'translate-x-full' : 'translate-x-0'}`}></div>
                    </div>
                    <button
                        onClick={() => setIsAnnual(false)}
                        className={`relative z-10 py-2 px-6 text-sm font-semibold transition-colors duration-300 ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}
                    >
                        {t('pricing.toggle.monthly')}
                    </button>
                    <button
                        onClick={() => setIsAnnual(true)}
                        className={`relative z-10 py-2 px-6 text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}
                    >
                        {t('pricing.toggle.annual')}
                        <span className="bg-[#255664]/10 text-[#255664] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            -{18}%
                        </span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
                {/* Free */}
                <div className="rounded-2xl p-6 border border-slate-200 flex flex-col bg-white hover:border-slate-300 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900">{t('pricing.plans.free.name')}</h3>
                    <div className="mt-2 mb-4">
                        <span className="text-4xl font-bold text-slate-900">0€</span>
                        <span className="text-slate-500">{t('pricing.labels.mo')}</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 h-10">{t('pricing.plans.free.desc')}</p>

                    <a href="/signup" className="block w-full py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-center font-medium text-slate-900 hover:bg-slate-50 transition-colors mb-8">
                        {t('pricing.labels.startFree')}
                    </a>

                    <div className="flex-grow space-y-6">
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{t('pricing.cards.usage')}</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-sm text-slate-600 font-medium">{t('pricing.calculator.ranges.upTo', { count: 100 })}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{t('pricing.cards.features')}</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-sm text-slate-600">{t('pricing.plans.free.features.all')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-sm text-slate-600">{t('pricing.plans.free.features.advanced')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Starter */}
                <div className="rounded-2xl p-6 border border-slate-200 flex flex-col bg-white hover:border-slate-300 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900">{t('pricing.plans.starter.name')}</h3>
                    <div className="mt-2 mb-4">
                        <span className="text-4xl font-bold text-slate-900">{getBasePrice('starter')}€</span>
                        <span className="text-slate-500">{t('pricing.labels.mo')}</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 h-10">{t('pricing.plans.starter.desc')}</p>

                    <a href="/signup" className="block w-full py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-center font-medium text-slate-900 hover:bg-slate-50 transition-colors mb-8">
                        {t('pricing.labels.startFree')}
                    </a>

                    <div className="flex-grow space-y-6">
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{t('pricing.cards.usage')}</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-sm text-slate-600 font-medium">{t('pricing.calculator.ranges.upTo', { count: '2,500' })}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{t('pricing.cards.features')}</h4>
                            <ul className="space-y-3">
                                {[
                                    t('features.items.points.title'),
                                    t('features.items.wallet.title'),
                                    t('features.items.referral.title'),
                                    t('pricing.labels.unlimitedPush'),
                                    t('pricing.labels.customEmails'),
                                    t('pricing.labels.unlimitedIntegrations'),
                                    t('pricing.labels.apiAccess'),
                                    t('pricing.labels.loyaltyMaster')
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                        <span className="text-sm text-slate-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Plus */}
                <div className="rounded-2xl p-6 border-2 border-[#255664] shadow-xl flex flex-col bg-white text-slate-900 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#255664] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                        {t('pricing.labels.popular')}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{t('pricing.plans.plus.name')}</h3>
                    <div className="mt-2 mb-4">
                        <span className="text-4xl font-bold text-slate-900">{getBasePrice('plus')}€</span>
                        <span className="text-slate-500">{t('pricing.labels.mo')}</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 h-10">{t('pricing.plans.plus.desc')}</p>

                    <a href="/signup" className="block w-full py-2.5 px-4 bg-[#255664] border border-transparent rounded-xl text-center font-medium text-white hover:bg-[#1e4652] transition-colors mb-8">
                        {t('pricing.labels.startFree')}
                    </a>

                    <div className="flex-grow space-y-6">
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{t('pricing.cards.usage')}</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-sm text-slate-600 font-medium">{t('pricing.calculator.ranges.upTo', { count: '1,000' })}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{t('pricing.cards.features')}</h4>
                            <ul className="space-y-3">
                                {[
                                    t('pricing.labels.everythingIn', { plan: 'Starter' }),
                                    t('features.items.tiers.title'),
                                    t('pricing.labels.pointsExpiration'),
                                    t('pricing.labels.pointsBlocking'),
                                    t('pricing.labels.analyticsPlus')
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                        <span className="text-sm text-slate-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Advanced */}
                <div className="rounded-2xl p-6 border border-slate-200 flex flex-col bg-white hover:border-slate-300 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900">{t('pricing.plans.advanced.name')}</h3>
                    <div className="mt-2 mb-4">
                        <span className="text-4xl font-bold text-slate-900">{getBasePrice('advanced')}€</span>
                        <span className="text-slate-500">{t('pricing.labels.mo')}</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 h-10">{t('pricing.plans.advanced.desc')}</p>

                    <a href="/signup" className="block w-full py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-center font-medium text-slate-900 hover:bg-slate-50 transition-colors mb-8">
                        {t('pricing.labels.startFree')}
                    </a>

                    <div className="flex-grow space-y-6">
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{t('pricing.cards.usage')}</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-sm text-slate-600 font-medium">{t('pricing.calculator.ranges.upTo', { count: 250 })}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{t('pricing.cards.features')}</h4>
                            <ul className="space-y-3">
                                {[
                                    t('pricing.labels.everythingIn', { plan: 'Plus' }),
                                    t('features.items.campaigns.title'),
                                    t('features.items.workflows.title'),
                                    t('features.items.journeys.title'),
                                    t('features.items.gamification.title'),
                                    t('features.items.marketplace.title'),
                                    t('features.items.giftcards.title'),
                                    t('pricing.labels.analyticsAdvanced')
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                        <span className="text-sm text-slate-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enterprise - Moved below grid */}
            <div className="max-w-7xl mx-auto mb-20">
                <div className="rounded-3xl p-8 lg:p-12 border border-slate-200 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#255664] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                    <div className="flex-1 relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-2xl font-bold text-white">{t('pricing.plans.enterprise.name')}</h3>
                            <span className="bg-white/10 text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/10">
                                {t('pricing.labels.custom')}
                            </span>
                        </div>
                        <p className="text-slate-300 mb-8 max-w-2xl text-lg leading-relaxed">{t('pricing.plans.enterprise.desc')}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                t('pricing.labels.customIntegrations'),
                                t('pricing.labels.strategicConsulting'),
                                t('pricing.labels.successManager'),
                                t('pricing.labels.prioritySupport'),
                                t('pricing.labels.migration')
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-200">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0 relative z-10 w-full md:w-auto">
                        <Link to="/contact" className="block w-full md:w-auto py-4 px-10 bg-white text-slate-900 rounded-xl text-center font-bold hover:bg-slate-100 transition-all shadow-lg hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98]">
                            {t('pricing.labels.talkSales')}
                        </Link>
                        <p className="text-slate-400 text-sm mt-4 text-center max-w-xs">
                            {t('pricing.calculator.enterpriseDesc')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Calculator Section - UPDATED DESIGN */}
            <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

                    {/* Left Column: Pricing Tiers Visualization */}
                    <div className="p-8 md:p-12 bg-gradient-to-br from-slate-50 to-white">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('pricing.calculator.pricePerActivity')}</h3>
                        <p className="text-slate-600 mb-10 text-sm leading-relaxed">
                            {t('pricing.calculator.pricePerActivityDesc')}
                        </p>

                        <div className="space-y-4">
                            {[
                                { label: t('pricing.calculator.ranges.upTo', { count: 100 }), max: 100, price: "0,00€", gradient: "from-emerald-500 to-emerald-400" },
                                { label: t('pricing.calculator.ranges.upTo', { count: 250 }), max: 250, price: "0,00€", gradient: "from-emerald-500 to-emerald-400" },
                                { label: t('pricing.calculator.ranges.between', { start: '251', end: '1,000' }), max: 1000, price: "0,10€", gradient: "from-[#255664] to-emerald-500" },
                                { label: t('pricing.calculator.ranges.between', { start: '1,001', end: '5,000' }), max: 5000, price: "0,08€", gradient: "from-[#255664] to-emerald-500" },
                                { label: t('pricing.calculator.ranges.between', { start: '5,001', end: '10,000' }), max: 10000, price: "0,06€", gradient: "from-[#255664] to-emerald-500" },
                                { label: t('pricing.calculator.ranges.between', { start: '10,001', end: '50,000' }), max: 50000, price: "0,04€", gradient: "from-[#255664] to-emerald-500" },
                            ].map((tier, index) => {
                                const isActive = activities > (index === 0 ? 0 : [0, 100, 250, 1000, 5000, 10000][index]) &&
                                    activities <= tier.max;

                                return (
                                    <div key={index} className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                                        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-sm font-semibold text-slate-700">{tier.label}</span>
                                                <span className={`font-bold text-lg ${isActive ? 'text-[#255664]' : 'text-slate-400'}`}>{tier.price}</span>
                                            </div>
                                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full transition-all duration-700 ease-out bg-gradient-to-r ${tier.gradient}`}
                                                    style={{ width: isActive ? '100%' : '0%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>


                    </div>

                    {/* Right Column: Calculator */}
                    <div className="p-8 md:p-12 bg-white">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('pricing.calculator.title')}</h3>
                            <p className="text-slate-500 text-sm">{t('pricing.calculator.subtitle')}</p>
                        </div>

                        <div className="space-y-6 max-w-md mx-auto">
                            {/* Plan Selector */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-3">{t('pricing.calculator.selectPlan')}</label>
                                <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-xl">
                                    {(['starter', 'plus', 'advanced'] as const).map((plan) => (
                                        <button
                                            key={plan}
                                            onClick={() => setSelectedPlan(plan)}
                                            className={`py-2.5 text-sm font-semibold rounded-lg capitalize transition-all ${selectedPlan === plan
                                                ? 'bg-white text-[#255664] shadow-md scale-105'
                                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                                                }`}
                                        >
                                            {plan}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Activities Input */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-3">{t('pricing.calculator.monthlyActivities')}</label>
                                <input
                                    type="number"
                                    value={activities}
                                    onChange={(e) => handleActivityChange(parseInt(e.target.value) || 0)}
                                    max={50000}
                                    className="w-full text-2xl font-bold border-2 border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#255664] focus:border-[#255664] outline-none transition-all hover:border-slate-300"
                                    placeholder="1500"
                                />
                                <p className="text-xs text-slate-400 mt-2">{t('pricing.calculator.activitiesDesc')}</p>
                            </div>

                            {/* Enterprise Notice for >50k */}
                            {activities >= 50000 && (
                                <div className="bg-[#232323] rounded-2xl p-6 text-white border border-slate-700 shadow-xl">
                                    <div className="flex items-start gap-3 mb-4">
                                        <Mail className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{t('pricing.calculator.enterpriseVolume')}</h4>
                                            <p className="text-sm text-slate-300">
                                                {t('pricing.calculator.enterpriseDesc')}
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.omniwallet.net/contacto?plan=enterprise"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 bg-white text-slate-900 rounded-xl font-bold text-center hover:bg-slate-100 transition-colors"
                                    >
                                        {t('cta.talkSales')}
                                    </a>
                                </div>
                            )}

                            {/* Cost Breakdown */}
                            {activities < 50000 && (
                                <div className="bg-slate-50 rounded-2xl p-6 space-y-4 border border-slate-100">
                                    <div className="text-center pb-3 border-b border-slate-200">
                                        <span className="text-xs font-bold text-[#255664] uppercase tracking-wider">{planNames[selectedPlan]} Plan</span>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">{t('pricing.calculator.breakdown.planSelected')}</span>
                                            <span className="font-semibold text-slate-900">€{getBasePrice(selectedPlan)},00</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">{t('pricing.calculator.breakdown.estimatedActivities')}</span>
                                            <span className="font-semibold text-slate-900">{activities.toLocaleString()}</span>
                                        </div>

                                        {/* Activity Cost Breakdown */}
                                        {getActivityBreakdown(activities, selectedPlan).length > 0 && (
                                            <div className="pt-2 border-t border-slate-200">
                                                <div className="text-xs font-semibold text-slate-700 mb-2">{t('pricing.calculator.breakdown.activityCostBreakdown')}</div>
                                                {getActivityBreakdown(activities, selectedPlan).map((item, index) => (
                                                    <div key={index} className="flex justify-between text-xs mb-1.5">
                                                        <span className="text-slate-500">
                                                            {item.activities.toLocaleString()} × €{item.rate.toFixed(2)}
                                                        </span>
                                                        <span className="font-medium text-slate-700">€{item.cost.toFixed(2)}</span>
                                                    </div>
                                                ))}
                                                <div className="flex justify-between text-sm font-semibold mt-2 pt-2 border-t border-slate-200">
                                                    <span className="text-slate-700">{t('pricing.calculator.breakdown.totalActivityCost')}</span>
                                                    <span className="text-slate-900">€{variableCost.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        )}

                                        {getActivityBreakdown(activities, selectedPlan).length === 0 && (
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-600">{t('pricing.calculator.breakdown.activityCost')}</span>
                                                <span className="font-semibold text-emerald-600">€0.00</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-4 border-t-2 border-slate-200 mt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-slate-900">{t('pricing.calculator.breakdown.totalMonthly')}</span>
                                            <span className="font-bold text-4xl text-[#255664]">
                                                €{(getBasePrice(selectedPlan) + variableCost).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activities < 50000 && (
                                <a href="/signup" className="block w-full py-4 bg-[#255664] text-white rounded-xl font-bold text-base hover:bg-[#1e4652] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] text-center">
                                    {t('pricing.labels.startFree')}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Comparison Table */}
            <div className="max-w-7xl mx-auto mt-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('pricing.table.title')}</h2>
                    <p className="text-lg text-slate-600">{t('pricing.table.subtitle')}</p>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-50">
                                    <th className="text-left py-6 px-6 font-bold text-slate-900 text-sm uppercase tracking-wider">{t('pricing.table.features')}</th>
                                    <th className="text-center py-6 px-6 font-bold text-slate-900 text-sm">{t('pricing.plans.free.name')}</th>
                                    <th className="text-center py-6 px-6 font-bold text-slate-900 text-sm">Starter</th>
                                    <th className="text-center py-6 px-6 font-bold text-[#255664] text-sm bg-[#255664]/5 relative">
                                        <div className="absolute top-0 right-0 bg-[#255664] text-white text-[9px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">{t('pricing.labels.popular')}</div>
                                        {t('pricing.plans.plus.name')}
                                    </th>
                                    <th className="text-center py-6 px-6 font-bold text-slate-900 text-sm">Advanced</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {/* Core Features */}
                                <tr className="bg-slate-50">
                                    <td colSpan={5} className="py-3 px-6 font-bold text-slate-900 text-xs uppercase tracking-wider">{t('pricing.table.coreFeatures')}</td>
                                </tr>
                                {[
                                    { name: t('features.items.points.title'), free: true, starter: true, plus: true, advanced: true },
                                    { name: t('features.items.wallet.title'), free: true, starter: true, plus: true, advanced: true },
                                    { name: t('features.items.referral.title'), free: true, starter: true, plus: true, advanced: true },
                                    { name: t('pricing.labels.unlimitedPush'), free: true, starter: true, plus: true, advanced: true },
                                    { name: t('pricing.labels.customEmails'), free: true, starter: true, plus: true, advanced: true },
                                    { name: t('pricing.labels.unlimitedIntegrations'), free: true, starter: true, plus: true, advanced: true },
                                    { name: t('pricing.labels.apiAccess'), free: true, starter: true, plus: true, advanced: true },
                                    { name: t('pricing.labels.loyaltyMaster'), free: true, starter: true, plus: true, advanced: true },
                                ].map((feature, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-sm text-slate-700">{feature.name}</td>
                                        <td className="py-4 px-6 text-center">
                                            {feature.free ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {feature.starter ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                        <td className="py-4 px-6 text-center bg-[#255664]/5">
                                            {feature.plus ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {feature.advanced ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                    </tr>
                                ))}

                                {/* Plus Features */}
                                <tr className="bg-slate-50">
                                    <td colSpan={5} className="py-3 px-6 font-bold text-slate-900 text-xs uppercase tracking-wider">{t('pricing.table.plusFeatures')}</td>
                                </tr>
                                {[
                                    { name: t('features.items.tiers.title'), free: true, starter: false, plus: true, advanced: true },
                                    { name: t('pricing.labels.pointsExpiration'), free: true, starter: false, plus: true, advanced: true },
                                    { name: t('pricing.labels.pointsBlocking'), free: true, starter: false, plus: true, advanced: true },
                                    { name: t('pricing.labels.analyticsPlus'), free: true, starter: false, plus: true, advanced: true },
                                ].map((feature, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-sm text-slate-700">{feature.name}</td>
                                        <td className="py-4 px-6 text-center">
                                            {feature.free ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {feature.starter ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                        <td className="py-4 px-6 text-center bg-[#255664]/5">
                                            {feature.plus ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {feature.advanced ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                    </tr>
                                ))}

                                {/* Advanced Features */}
                                <tr className="bg-slate-50">
                                    <td colSpan={5} className="py-3 px-6 font-bold text-slate-900 text-xs uppercase tracking-wider">{t('pricing.table.advancedFeatures')}</td>
                                </tr>
                                {[
                                    { name: t('features.items.campaigns.title'), free: true, starter: false, plus: false, advanced: true },
                                    { name: t('features.items.workflows.title'), free: true, starter: false, plus: false, advanced: true },
                                    { name: t('features.items.journeys.title'), free: true, starter: false, plus: false, advanced: true },
                                    { name: t('features.items.gamification.title'), free: true, starter: false, plus: false, advanced: true },
                                    { name: t('features.items.marketplace.title'), free: true, starter: false, plus: false, advanced: true },
                                    { name: t('features.items.giftcards.title'), free: true, starter: false, plus: false, advanced: true },
                                    { name: t('pricing.labels.analyticsAdvanced'), free: true, starter: false, plus: false, advanced: true },
                                ].map((feature, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-sm text-slate-700">{feature.name}</td>
                                        <td className="py-4 px-6 text-center">
                                            {feature.free ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {feature.starter ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                        <td className="py-4 px-6 text-center bg-[#255664]/5">
                                            {feature.plus ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {feature.advanced ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                        </td>
                                    </tr>
                                ))}

                                {/* CTA Row */}
                                <tr className="bg-slate-50">
                                    <td className="py-6 px-6"></td>
                                    <td className="py-6 px-6 text-center">
                                        <a href="/signup" className="inline-block py-2.5 px-6 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                                            {t('pricing.labels.startFree')}
                                        </a>
                                    </td>
                                    <td className="py-6 px-6 text-center">
                                        <a href="/signup" className="inline-block py-2.5 px-6 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                                            {t('pricing.labels.startFree')}
                                        </a>
                                    </td>
                                    <td className="py-6 px-6 text-center bg-[#255664]/5">
                                        <a href="/signup" className="inline-block py-2.5 px-6 bg-[#255664] border border-transparent rounded-xl text-sm font-medium text-white hover:bg-[#1e4652] transition-colors">
                                            {t('pricing.labels.startFree')}
                                        </a>
                                    </td>
                                    <td className="py-6 px-6 text-center">
                                        <a href="/signup" className="inline-block py-2.5 px-6 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                                            {t('pricing.labels.startFree')}
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
