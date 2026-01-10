
import React from 'react';
import { ArrowRight, Smartphone, Bell, MapPin } from 'lucide-react';
import Button from '../../components/ui/Button';

const PushNotifications = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Push Notifications</h1>
                    <p className="text-xl text-slate-600">
                        Direct, immediate communication to your customers' lock screens via Apple & Google Wallet. No intermediaries, no spam folders.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>
                        <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:p-10">
                            <div className="flex items-center gap-4 mb-6 border-l-4 border-blue-500 pl-4 py-2 bg-slate-50 rounded-r-lg">
                                <Bell className="w-6 h-6 text-blue-500" />
                                <div>
                                    <div className="font-semibold text-slate-900">New Reward Unlocked!</div>
                                    <div className="text-sm text-slate-500">You've reached Gold Tier. Enjoy 2x points today.</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mb-6 border-l-4 border-emerald-500 pl-4 py-2 bg-slate-50 rounded-r-lg">
                                <MapPin className="w-6 h-6 text-emerald-500" />
                                <div>
                                    <div className="font-semibold text-slate-900">Nearby Offer</div>
                                    <div className="text-sm text-slate-500">You are near our Main St store. Come in for a treat!</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Mass & Segmented Messaging</h3>
                            <p className="text-slate-600">
                                Send general updates to everyone or targeted messages based on tier, behavior, or purchase history.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Geolocation Triggers</h3>
                            <p className="text-slate-600">
                                Automatically trigger notifications when a customer is near your store. Connect the physical and digital worlds to drive foot traffic.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Behavioral Automation</h3>
                            <p className="text-slate-600">
                                Automated alerts for points accumulation, redemption confirmations, or unlocked benefits.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Button variant="outline">
                        Enable Push Notifications <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PushNotifications;
