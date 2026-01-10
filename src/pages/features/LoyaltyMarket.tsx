
import React from 'react';
import { ArrowRight, ShoppingBag, Gift, Zap } from 'lucide-react';
import Button from '../../components/ui/Button';

const LoyaltyMarket = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Loyalty Market</h1>
                    <p className="text-xl text-slate-600">
                        An out-of-the-box rewards marketplace. Activate a complete loyalty program from day one without operational complexity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                                <ShoppingBag className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Diverse Reward Types</h3>
                                <p className="text-slate-600">
                                    Offer physical products, digital goods, coupon pools for eCommerce, and combine your own prizes with third-party rewards.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 flex-shrink-0">
                                <Gift className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Leading Brands Integrated</h3>
                                <p className="text-slate-600">
                                    Offer instant digital gift cards from Amazon, Decathlon, El Corte Inglés, Repsol, Adidas, and 30+ more.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Automated Fulfillment</h3>
                                <p className="text-slate-600">
                                    Zero friction. Points are redeemed, rewards generated in real-time, and delivered immediately (digitally or via defined channels).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-100 rounded-2xl p-8 flex items-center justify-center">
                        {/* Abstract visual representation of a marketplace */}
                        <div className="text-center">
                            <div className="inline-block bg-white p-4 rounded-xl shadow-lg mb-4">
                                <div className="font-bold text-slate-900 text-lg">Redeem Points</div>
                                <div className="text-slate-500 text-sm">Select your reward</div>
                            </div>
                            <div className="text-slate-400 mb-4">↓</div>
                            <div className="inline-block bg-emerald-500 text-white p-4 rounded-xl shadow-lg">
                                <div className="font-bold text-lg">Instant Reward</div>
                                <div className="text-emerald-100 text-sm">Sent to your Digital Wallet</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Button variant="primary">
                        Explore the Loyalty Market <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoyaltyMarket;
