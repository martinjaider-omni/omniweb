
import React from 'react';
import { ArrowRight, Play, UserPlus, Repeat, TrendingUp } from 'lucide-react';
import Button from '../../components/ui/Button';

const AutomatedCampaigns = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Automated Campaigns</h1>
                    <p className="text-xl text-slate-600">
                        Convert data into action. Build completely automated loyalty logic based on real customer behavior and transactions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <UserPlus className="w-8 h-8 text-blue-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Acquisition</h3>
                        <p className="text-sm text-slate-600">Welcome rewards and first-purchase bonuses to accelerate initial conversion.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <Repeat className="w-8 h-8 text-indigo-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Retention</h3>
                        <p className="text-sm text-slate-600">Win-back campaigns, birthday rewards, and streak bonuses to keep relationships alive.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <TrendingUp className="w-8 h-8 text-emerald-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Growth</h3>
                        <p className="text-sm text-slate-600">Spend-based rewards and tier milestones to increase ticket size and customer value.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <Play className="w-8 h-8 text-rose-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Traffic</h3>
                        <p className="text-sm text-slate-600">Day-of-week bonuses and limited-time offers to balance demand.</p>
                    </div>
                </div>

                <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Real-Time Orchestration</h2>
                            <p className="text-slate-300 mb-6">
                                Omniwallet decides automatically if a reward applies, which incentive to give, the amount, and the conditions—all at the exact moment of transaction.
                            </p>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li>• No technical development needed</li>
                                <li>• Ready-to-use templates</li>
                                <li>• Profitability controls (min spend, max points)</li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="primary" className="bg-white text-slate-900 hover:bg-slate-100">
                                Automate Your Marketing <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutomatedCampaigns;
