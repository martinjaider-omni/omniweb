import React from 'react';
import { ArrowRight, CreditCard, Lock, RefreshCw } from 'lucide-react';
import Button from '../../components/ui/Button';
import { useTranslation } from 'react-i18next';

const GiftCards = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">{t('featureDetail.giftCards.title')}</h1>
                    <p className="text-xl text-slate-600">
                        {t('featureDetail.giftCards.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-6">
                            <CreditCard className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{t('featureDetail.giftCards.digitalTitle')}</h3>
                        <p className="text-slate-600 text-sm">
                            {t('featureDetail.giftCards.digitalDesc')}
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mx-auto mb-6">
                            <Lock className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{t('featureDetail.giftCards.prepaidTitle')}</h3>
                        <p className="text-slate-600 text-sm">
                            {t('featureDetail.giftCards.prepaidDesc')}
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                            <RefreshCw className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{t('featureDetail.giftCards.integrationTitle')}</h3>
                        <p className="text-slate-600 text-sm">
                            {t('featureDetail.giftCards.integrationDesc')}
                        </p>
                    </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('featureDetail.giftCards.whyTitle')}</h2>
                        <ul className="text-left grid sm:grid-cols-2 gap-4 mb-8">
                            {(t('featureDetail.giftCards.whyItems', { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> {item}
                                </li>
                            ))}
                        </ul>
                        <Button variant="primary">
                            {t('featureDetail.giftCards.ctaButton')} <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftCards;
