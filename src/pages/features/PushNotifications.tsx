import React from 'react';
import { ArrowRight, Smartphone, Bell, MapPin } from 'lucide-react';
import Button from '../../components/ui/Button';
import { useTranslation } from 'react-i18next';

const PushNotifications = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">{t('featureDetail.pushNotifications.title')}</h1>
                    <p className="text-xl text-slate-600">
                        {t('featureDetail.pushNotifications.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>
                        <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:p-10">
                            <div className="flex items-center gap-4 mb-6 border-l-4 border-blue-500 pl-4 py-2 bg-slate-50 rounded-r-lg">
                                <Bell className="w-6 h-6 text-blue-500" />
                                <div>
                                    <div className="font-semibold text-slate-900">{t('featureDetail.pushNotifications.lockedReward')}</div>
                                    <div className="text-sm text-slate-500">{t('featureDetail.pushNotifications.lockedDesc')}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mb-6 border-l-4 border-emerald-500 pl-4 py-2 bg-slate-50 rounded-r-lg">
                                <MapPin className="w-6 h-6 text-emerald-500" />
                                <div>
                                    <div className="font-semibold text-slate-900">{t('featureDetail.pushNotifications.nearbyOffer')}</div>
                                    <div className="text-sm text-slate-500">{t('featureDetail.pushNotifications.nearbyDesc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('featureDetail.pushNotifications.messagingTitle')}</h3>
                            <p className="text-slate-600">
                                {t('featureDetail.pushNotifications.messagingDesc')}
                            </p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('featureDetail.pushNotifications.geoTitle')}</h3>
                            <p className="text-slate-600">
                                {t('featureDetail.pushNotifications.geoDesc')}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('featureDetail.pushNotifications.behavioralTitle')}</h3>
                            <p className="text-slate-600">
                                {t('featureDetail.pushNotifications.behavioralDesc')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Button variant="outline">
                        {t('featureDetail.pushNotifications.ctaButton')} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PushNotifications;
