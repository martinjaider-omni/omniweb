import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Mail } from 'lucide-react';

const Pricing: React.FC = () => {
    const [activities, setActivities] = React.useState(1500);
    const [selectedPlan, setSelectedPlan] = React.useState<'starter' | 'plus' | 'advanced'>('plus');

    const calculateActivityCost = (count: number) => {
        if (count <= 250) return 0;

        let remaining = count - 250;
        let cost = 0;

        // Tier 1: 251 - 1,000 (750 items) at 0.10
        const tier1 = Math.min(remaining, 750);
        cost += tier1 * 0.10;
        remaining -= tier1;

        if (remaining <= 0) return cost;

        // Tier 2: 1,001 - 5,000 (4000 items) at 0.08
        const tier2 = Math.min(remaining, 4000);
        cost += tier2 * 0.08;
        remaining -= tier2;

        if (remaining <= 0) return cost;

        // Tier 3: 5,001 - 10,000 (5000 items) at 0.06
        const tier3 = Math.min(remaining, 5000);
        cost += tier3 * 0.06;
        remaining -= tier3;

        if (remaining <= 0) return cost;

        // Tier 4: 10,001 - 50,000 (40000 items) at 0.04
        const tier4 = Math.min(remaining, 40000);
        cost += tier4 * 0.04;
        remaining -= tier4;

        if (remaining <= 0) return cost;

        // Tier 5: 50,000+ at 0.02
        cost += remaining * 0.02;

        return cost;
    };

    const variableCost = calculateActivityCost(activities);
    const getBasePrice = (plan: 'starter' | 'plus' | 'advanced') => {
        if (activities <= 100) return 0;
        switch (plan) {
            case 'starter': return 39;
            case 'plus': return 149;
            case 'advanced': return 249;
        }
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
    const getActivityBreakdown = (count: number) => {
        if (count <= 250) return [];

        const breakdown: Array<{ tier: string, activities: number, rate: number, cost: number }> = [];
        let remaining = count - 250;

        // Tier 1: 251 - 1,000 at 0.10
        if (remaining > 0) {
            const tier1 = Math.min(remaining, 750);
            breakdown.push({ tier: '251-1,000', activities: tier1, rate: 0.10, cost: tier1 * 0.10 });
            remaining -= tier1;
        }

        // Tier 2: 1,001 - 5,000 at 0.08
        if (remaining > 0) {
            const tier2 = Math.min(remaining, 4000);
            breakdown.push({ tier: '1,001-5,000', activities: tier2, rate: 0.08, cost: tier2 * 0.08 });
            remaining -= tier2;
        }

        // Tier 3: 5,001 - 10,000 at 0.06
        if (remaining > 0) {
            const tier3 = Math.min(remaining, 5000);
            breakdown.push({ tier: '5,001-10,000', activities: tier3, rate: 0.06, cost: tier3 * 0.06 });
            remaining -= tier3;
        }

        // Tier 4: 10,001 - 50,000 at 0.04
        if (remaining > 0) {
            const tier4 = Math.min(remaining, 40000);
            breakdown.push({ tier: '10,001-50,000', activities: tier4, rate: 0.04, cost: tier4 * 0.04 });
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
                <span className="text-slate-600 font-medium tracking-wide uppercase text-sm">Pricing</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Plans that scale with you
                </h1>
                <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
                    The first 100 activities per month are always free. No credit card required.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
                {/* Starter */}
                <div className="rounded-2xl p-6 border border-slate-200 flex flex-col bg-white hover:border-slate-300 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900">Starter</h3>
                    <div className="mt-2 mb-4">
                        <span className="text-4xl font-bold text-slate-900">39€</span>
                        <span className="text-slate-500">/mo</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 h-10">Ideal for small businesses starting out.</p>

                    <a href="/signup" className="block w-full py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-center font-medium text-slate-900 hover:bg-slate-50 transition-colors mb-8">
                        Start for free
                    </a>

                    <ul className="space-y-3 flex-grow">
                        {[
                            "Points Program",
                            "Wallet Cards",
                            "Referral Program",
                            "Unlimited Push Notif.",
                            "Customizable Emails",
                            "Unlimited Integrations",
                            "API Access",
                            "Loyalty Master"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Plus */}
                <div className="rounded-2xl p-6 border-2 border-[#255664] shadow-xl flex flex-col bg-white text-slate-900 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#255664] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                        Popular
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Plus</h3>
                    <div className="mt-2 mb-4">
                        <span className="text-4xl font-bold text-slate-900">149€</span>
                        <span className="text-slate-500">/mo</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 h-10">For growing businesses needing structure.</p>

                    <a href="/signup" className="block w-full py-2.5 px-4 bg-[#255664] border border-transparent rounded-xl text-center font-medium text-white hover:bg-[#1e4652] transition-colors mb-8">
                        Start for free
                    </a>

                    <ul className="space-y-3 flex-grow">
                        {[
                            "Everything in Starter, plus:",
                            "Customer Tiers",
                            "Points Expiration",
                            "Points Blocking",
                            "Analytics Plus"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Advanced */}
                <div className="rounded-2xl p-6 border border-slate-200 flex flex-col bg-white hover:border-slate-300 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900">Advanced</h3>
                    <div className="mt-2 mb-4">
                        <span className="text-4xl font-bold text-slate-900">249€</span>
                        <span className="text-slate-500">/mo</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 h-10">Maximum power for established brands.</p>

                    <a href="/signup" className="block w-full py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-center font-medium text-slate-900 hover:bg-slate-50 transition-colors mb-8">
                        Start for free
                    </a>

                    <ul className="space-y-3 flex-grow">
                        {[
                            "Everything in Plus, plus:",
                            "Automated Campaigns",
                            "Workflows",
                            "Customer Journeys",
                            "Gamification",
                            "Rewards Marketplace",
                            "Digital Gift Cards",
                            "Analytics Advanced"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Enterprise */}
                <div className="rounded-2xl p-6 border border-slate-100 flex flex-col bg-slate-50 hover:border-slate-200 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
                    <div className="mt-2 mb-4">
                        <span className="text-4xl font-bold text-slate-900">Custom</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 h-10">For large organizations with custom needs.</p>

                    <a href="https://www.omniwallet.net/contacto?plan=enterprise" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 px-4 bg-slate-200 border border-transparent rounded-xl text-center font-medium text-slate-900 hover:bg-slate-300 transition-colors mb-8">
                        Contact Sales
                    </a>

                    <ul className="space-y-3 flex-grow">
                        {[
                            "Custom Integrations",
                            "Strategic Consulting",
                            "Dedicated Success Manager",
                            "Priority Support",
                            "Assisted Migration"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Calculator Section - UPDATED DESIGN */}
            <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

                    {/* Left Column: Pricing Tiers Visualization */}
                    <div className="p-8 md:p-12 bg-gradient-to-br from-slate-50 to-white">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Price per activity</h3>
                        <p className="text-slate-600 mb-10 text-sm leading-relaxed">
                            The first 100 activities are free. From 101 to 250 you only pay the plan price. From 251 onwards, the cost per activity is added.
                        </p>

                        <div className="space-y-4">
                            {[
                                { label: "Up to 100", max: 100, price: "0,00€", gradient: "from-emerald-500 to-emerald-400" },
                                { label: "101 to 250", max: 250, price: "0,00€", gradient: "from-emerald-500 to-emerald-400" },
                                { label: "251 to 1,000", max: 1000, price: "0,10€", gradient: "from-[#255664] to-emerald-500" },
                                { label: "1,001 to 5,000", max: 5000, price: "0,08€", gradient: "from-[#255664] to-emerald-500" },
                                { label: "5,001 to 10,000", max: 10000, price: "0,06€", gradient: "from-[#255664] to-emerald-500" },
                                { label: "10,001 to 50,000", max: 50000, price: "0,04€", gradient: "from-[#255664] to-emerald-500" },
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
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Pricing Calculator</h3>
                            <p className="text-slate-500 text-sm">Estimate your monthly cost based on volume</p>
                        </div>

                        <div className="space-y-6 max-w-md mx-auto">
                            {/* Plan Selector */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-3">Select Plan</label>
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
                                <label className="block text-sm font-semibold text-slate-700 mb-3">Monthly Activities</label>
                                <input
                                    type="number"
                                    value={activities}
                                    onChange={(e) => handleActivityChange(parseInt(e.target.value) || 0)}
                                    max={50000}
                                    className="w-full text-2xl font-bold border-2 border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#255664] focus:border-[#255664] outline-none transition-all hover:border-slate-300"
                                    placeholder="1500"
                                />
                                <p className="text-xs text-slate-400 mt-2">Number of transactions/sales per month (max 50,000)</p>
                            </div>

                            {/* Enterprise Notice for >50k */}
                            {activities >= 50000 && (
                                <div className="bg-[#232323] rounded-2xl p-6 text-white border border-slate-700 shadow-xl">
                                    <div className="flex items-start gap-3 mb-4">
                                        <Mail className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Enterprise Volume</h4>
                                            <p className="text-sm text-slate-300">
                                                For volumes over 50,000 activities, we offer custom Enterprise plans with dedicated support and pricing.
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.omniwallet.net/contacto?plan=enterprise"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 bg-white text-slate-900 rounded-xl font-bold text-center hover:bg-slate-100 transition-colors"
                                    >
                                        Contact Sales
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
                                            <span className="text-slate-600">Selected Plan</span>
                                            <span className="font-semibold text-slate-900">€{getBasePrice(selectedPlan)},00</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">Estimated Activities</span>
                                            <span className="font-semibold text-slate-900">{activities.toLocaleString()}</span>
                                        </div>

                                        {/* Activity Cost Breakdown */}
                                        {getActivityBreakdown(activities).length > 0 && (
                                            <div className="pt-2 border-t border-slate-200">
                                                <div className="text-xs font-semibold text-slate-700 mb-2">Activity Cost Breakdown:</div>
                                                {getActivityBreakdown(activities).map((item, index) => (
                                                    <div key={index} className="flex justify-between text-xs mb-1.5">
                                                        <span className="text-slate-500">
                                                            {item.activities.toLocaleString()} × €{item.rate.toFixed(2)} <span className="text-slate-400">({item.tier})</span>
                                                        </span>
                                                        <span className="font-medium text-slate-700">€{item.cost.toFixed(2)}</span>
                                                    </div>
                                                ))}
                                                <div className="flex justify-between text-sm font-semibold mt-2 pt-2 border-t border-slate-200">
                                                    <span className="text-slate-700">Total Activity Cost</span>
                                                    <span className="text-slate-900">€{variableCost.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        )}

                                        {getActivityBreakdown(activities).length === 0 && (
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-600">Activity Cost</span>
                                                <span className="font-semibold text-emerald-600">€0.00</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-4 border-t-2 border-slate-200 mt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-slate-900">Total Monthly</span>
                                            <span className="font-bold text-4xl text-[#255664]">
                                                €{(getBasePrice(selectedPlan) + variableCost).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activities < 50000 && (
                                <a href="/signup" className="block w-full py-4 bg-[#255664] text-white rounded-xl font-bold text-base hover:bg-[#1e4652] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] text-center">
                                    Start for free
                                </a>
                            )}


                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Comparison Table */}
            <div className="max-w-7xl mx-auto mt-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Compare all features</h2>
                    <p className="text-lg text-slate-600">Choose the plan that's right for your business</p>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-50">
                                    <th className="text-left py-6 px-6 font-bold text-slate-900 text-sm uppercase tracking-wider">Features</th>
                                    <th className="text-center py-6 px-6 font-bold text-slate-900 text-sm">Starter</th>
                                    <th className="text-center py-6 px-6 font-bold text-[#255664] text-sm bg-[#255664]/5 relative">
                                        <div className="absolute top-0 right-0 bg-[#255664] text-white text-[9px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">Popular</div>
                                        Plus
                                    </th>
                                    <th className="text-center py-6 px-6 font-bold text-slate-900 text-sm">Advanced</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {/* Core Features */}
                                <tr className="bg-slate-50">
                                    <td colSpan={4} className="py-3 px-6 font-bold text-slate-900 text-xs uppercase tracking-wider">Core Features</td>
                                </tr>
                                {[
                                    { name: "Points Program", starter: true, plus: true, advanced: true },
                                    { name: "Wallet Cards", starter: true, plus: true, advanced: true },
                                    { name: "Referral Program", starter: true, plus: true, advanced: true },
                                    { name: "Unlimited Push Notifications", starter: true, plus: true, advanced: true },
                                    { name: "Customizable Emails", starter: true, plus: true, advanced: true },
                                    { name: "Unlimited Integrations", starter: true, plus: true, advanced: true },
                                    { name: "API Access", starter: true, plus: true, advanced: true },
                                    { name: "Loyalty Master", starter: true, plus: true, advanced: true },
                                ].map((feature, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-sm text-slate-700">{feature.name}</td>
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
                                    <td colSpan={4} className="py-3 px-6 font-bold text-slate-900 text-xs uppercase tracking-wider">Plus Features</td>
                                </tr>
                                {[
                                    { name: "Customer Tiers", starter: false, plus: true, advanced: true },
                                    { name: "Points Expiration", starter: false, plus: true, advanced: true },
                                    { name: "Points Blocking", starter: false, plus: true, advanced: true },
                                    { name: "Analytics Plus", starter: false, plus: true, advanced: true },
                                ].map((feature, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-sm text-slate-700">{feature.name}</td>
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
                                    <td colSpan={4} className="py-3 px-6 font-bold text-slate-900 text-xs uppercase tracking-wider">Advanced Features</td>
                                </tr>
                                {[
                                    { name: "Automated Campaigns", starter: false, plus: false, advanced: true },
                                    { name: "Workflows", starter: false, plus: false, advanced: true },
                                    { name: "Customer Journeys", starter: false, plus: false, advanced: true },
                                    { name: "Gamification", starter: false, plus: false, advanced: true },
                                    { name: "Rewards Marketplace", starter: false, plus: false, advanced: true },
                                    { name: "Digital Gift Cards", starter: false, plus: false, advanced: true },
                                    { name: "Analytics Advanced", starter: false, plus: false, advanced: true },
                                ].map((feature, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-sm text-slate-700">{feature.name}</td>
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
                                            Start for free
                                        </a>
                                    </td>
                                    <td className="py-6 px-6 text-center bg-[#255664]/5">
                                        <a href="/signup" className="inline-block py-2.5 px-6 bg-[#255664] border border-transparent rounded-xl text-sm font-medium text-white hover:bg-[#1e4652] transition-colors">
                                            Start for free
                                        </a>
                                    </td>
                                    <td className="py-6 px-6 text-center">
                                        <a href="/signup" className="inline-block py-2.5 px-6 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                                            Start for free
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
