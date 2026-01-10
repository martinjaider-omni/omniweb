
import React from 'react';
import { ArrowRight, Smartphone, Zap, Wallet, QrCode } from 'lucide-react';
import Button from '../../components/ui/Button';

const WalletCards = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Wallet Loyalty Cards</h1>
                    <p className="text-xl text-slate-600">
                        The heart of a modern loyalty program. No apps to download, no plastic cards to carry. Just a frictionless experience in Apple & Google Wallet.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex justify-center items-center">
                        {/* Conceptual visual of wallet cards */}
                        <div className="relative w-64 h-[400px]">
                            <div className="absolute top-0 left-4 w-full h-full bg-slate-200 rounded-3xl transform -rotate-6"></div>
                            <div className="absolute top-0 right-4 w-full h-full bg-slate-300 rounded-3xl transform rotate-3"></div>
                            <div className="relative w-full h-full bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col">
                                <div className="h-1/3 bg-slate-900 p-6 text-white">
                                    <div className="font-bold text-lg mb-1">BRAND.</div>
                                    <div className="text-xs opacity-70">Gold Member</div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase">Points</div>
                                        <div className="text-3xl font-bold text-slate-900">1,250</div>
                                    </div>
                                    <div className="flex justify-center">
                                        <QrCode className="w-32 h-32 text-slate-900" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                    <Wallet className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Native Mobile Wallets</h3>
                                    <p className="text-slate-600">
                                        Leverage the native wallets already installed on 99% of smartphones. Apple Wallet and Google Wallet are trusted, secure, and always accessible.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Real-Time Updates</h3>
                                    <p className="text-slate-600">
                                        Points balance, tier status, and coupons update instantly on the card face. Keep customers informed without them having to check an app.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Zero-Friction Installation</h3>
                                    <p className="text-slate-600">
                                        Customers can add their card via QR code, SMS link, email, or a tap in your existing app. 2-click installation boosts adoption rates by up to 5x.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#232323] text-white rounded-3xl p-8 md:p-16 text-center">
                    <h2 className="text-3xl font-bold mb-6">Stop building apps nobody downloads.</h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Switch to Wallet Loyalty Cards and engage your customers where they actually pay attention.
                    </p>
                    <Button variant="primary" className="bg-white text-slate-900 hover:bg-slate-100">
                        Create Your First Pass <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default WalletCards;
