import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
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
                    <p className="text-sm text-slate-500 mt-1 mb-4 h-10">Ideal for small businesses starting out.</p>
                    <div className="mb-6">
                        <span className="text-sm font-medium text-slate-500">Pay as you grow</span>
                    </div>

                    <a href="https://www.omniwallet.net/registro?plan=starter" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-center font-medium text-slate-900 hover:bg-slate-50 transition-colors mb-8">
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
                <div className="rounded-2xl p-6 border border-slate-900 shadow-xl flex flex-col bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                        Popular
                    </div>
                    <h3 className="text-xl font-bold text-white">Plus</h3>
                    <p className="text-sm text-slate-400 mt-1 mb-4 h-10">For growing businesses needing structure.</p>
                    <div className="mb-6">
                        <span className="text-sm font-medium text-slate-400">Everything in Starter, plus:</span>
                    </div>

                    <a href="https://www.omniwallet.net/registro?plan=plus" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 px-4 bg-[#255664] border border-transparent rounded-xl text-center font-medium text-white hover:bg-[#1e4652] transition-colors mb-8">
                        Start for free
                    </a>

                    <ul className="space-y-3 flex-grow">
                        {[
                            "Customer Tiers",
                            "Points Expiration",
                            "Points Blocking",
                            "Analytics Plus"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <span className="text-sm text-slate-200">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Advanced */}
                <div className="rounded-2xl p-6 border border-slate-200 flex flex-col bg-white hover:border-slate-300 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900">Advanced</h3>
                    <p className="text-sm text-slate-500 mt-1 mb-4 h-10">Maximum power for established brands.</p>
                    <div className="mb-6">
                        <span className="text-sm font-medium text-slate-500">Everything in Plus, plus:</span>
                    </div>

                    <a href="https://www.omniwallet.net/registro?plan=advanced" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-center font-medium text-slate-900 hover:bg-slate-50 transition-colors mb-8">
                        Start for free
                    </a>

                    <ul className="space-y-3 flex-grow">
                        {[
                            "Automated Campaigns",
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
                    <p className="text-sm text-slate-500 mt-1 mb-4 h-10">For large organizations with custom needs.</p>
                    <div className="mb-6">
                        <span className="text-sm font-medium text-slate-500">Custom solutions:</span>
                    </div>

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

            <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
                <div className="md:flex gap-12 items-center">
                    <div className="flex-1 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Pricing Calculator</h3>
                        <p className="text-slate-600 mb-4">
                            Omniwallet's pricing is based on <span className="font-semibold text-slate-900">Activity</span>. An activity is any transaction, status change, or reward redemption.
                        </p>
                        <p className="text-sm text-slate-500">
                            Example: A customer earns points (1 activity) and later redeems a reward (1 activity) = 2 activities.
                        </p>
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold text-slate-900">0 - 100 activities</span>
                                <span className="text-emerald-600 font-bold">FREE</span>
                            </div>
                            <div className="text-xs text-slate-500">Enjoy the Advanced plan completely free.</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold text-slate-900">101 - 250 activities</span>
                                <span className="text-slate-900 font-bold">Standard rate</span>
                            </div>
                            <div className="text-xs text-slate-500">You only pay for the base plan rate.</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm opacity-75">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold text-slate-900">250+ activities</span>
                                <span className="text-slate-900 font-bold">Cost per activity</span>
                            </div>
                            <div className="text-xs text-slate-500">Scale strictly based on your usage.</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pricing;
