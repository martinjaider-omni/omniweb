import React from 'react';
import { ArrowRight, Trophy, TrendingUp, Shield } from 'lucide-react';
import Button from '../../components/ui/Button';
import { useTranslation } from 'react-i18next';

const CustomerTiers = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">{t('featureDetail.customerTiers.title')}</h1>
                    <p className="text-xl text-slate-600">
                        {t('featureDetail.customerTiers.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                            <Trophy className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{t('featureDetail.customerTiers.smartTitle')}</h3>
                        <p className="text-slate-600">
                            {t('featureDetail.customerTiers.smartDesc')}
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{t('featureDetail.customerTiers.progressionTitle')}</h3>
                        <p className="text-slate-600">
                            {t('featureDetail.customerTiers.progressionDesc')}
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{t('featureDetail.customerTiers.statusTitle')}</h3>
                        <p className="text-slate-600">
                            {t('featureDetail.customerTiers.statusDesc')}
                        </p>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{t('featureDetail.customerTiers.ctaTitle')}</h2>
                    <Button variant="primary">
                        {t('featureDetail.customerTiers.ctaButton')} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CustomerTiers;
