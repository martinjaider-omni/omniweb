
import React from 'react';
import { ArrowRight, Dices, Settings, Palette, Zap } from 'lucide-react';
import Button from '../../components/ui/Button';

const Gamification = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Gamification</h1>
                    <p className="text-xl text-slate-600">
                        Advanced prize wheels to boost engagement. Transform everyday actions into playful experiences.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-amber-100 p-3 rounded-xl text-amber-600 h-fit"><Settings /></div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Full Control</h3>
                                    <p className="text-slate-600">Set active dates, participation limits, and costs (free vs. points). Control the probability of every outcome.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-purple-100 p-3 rounded-xl text-purple-600 h-fit"><Palette /></div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Total Customization</h3>
                                    <p className="text-slate-600">Match your brand's look and feel completely. Colors, fonts, and images are all configurable.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 h-fit"><Zap /></div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Strategic Integration</h3>
                                    <p className="text-slate-600">Trigger wheels after a purchase, signup, or tier upgrade. Not just a game—a business tool.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative w-80 h-80 bg-slate-900 rounded-full border-8 border-slate-200 flex items-center justify-center shadow-2xl">
                            <div className="text-white font-bold text-xl tracking-widest uppercase">Spin<br />& Win</div>
                            <div className="absolute top-0 w-4 h-8 bg-red-500 -mt-2 rounded-b-lg"></div>
                            {/* Decorative segments */}
                            <div className="absolute inset-0 rounded-full border border-white/10"></div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
                        Combine immediate rewards (points, digital products) with high-value prizes. Increase motivation, reactivate dormant users, and boost purchase frequency.
                    </p>
                    <Button variant="primary">
                        Gamify Your Program <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Gamification;
