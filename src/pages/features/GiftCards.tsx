
import React from 'react';
import { ArrowRight, CreditCard, Lock, RefreshCw } from 'lucide-react';
import Button from '../../components/ui/Button';

const GiftCards = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Gift Cards</h1>
                    <p className="text-xl text-slate-600">
                        Automated, immediate digital gift card delivery. Integrated directly with your loyalty ecosystem.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-6">
                            <CreditCard className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">100% Digital Delivery</h3>
                        <p className="text-slate-600 text-sm">
                            Immediate availability via email. Zero logistics costs, zero waiting time. Valid for online and physical stores.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mx-auto mb-6">
                            <Lock className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">Prepaid Control</h3>
                        <p className="text-slate-600 text-sm">
                            Corporate prepaid wallet system. Secure your budget—cards are generated only while you have a balance.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                            <RefreshCw className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">Full Integration</h3>
                        <p className="text-slate-600 text-sm">
                            Redeem points for gift cards, give them as tier rewards, or send them automatically in birthday campaigns.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Why use Omniwallet Gift Cards?</h2>
                        <ul className="text-left grid sm:grid-cols-2 gap-4 mb-8">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> High perceived value</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Instant gratification</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Works online & offline</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> No stock management</li>
                        </ul>
                        <Button variant="primary">
                            Start Gifting <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftCards;
