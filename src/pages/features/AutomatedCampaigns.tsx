import React from 'react';
import { ArrowRight, Play, UserPlus, Repeat, TrendingUp } from 'lucide-react';
import Button from '../../components/ui/Button';
import { useTranslation } from 'react-i18next';

const AutomatedCampaigns = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">{t('featureDetail.automatedCampaigns.title')}</h1>
                    <p className="text-xl text-slate-600">
                        {t('featureDetail.automatedCampaigns.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <UserPlus className="w-8 h-8 text-blue-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">{t('featureDetail.automatedCampaigns.acquisition')}</h3>
                        <p className="text-sm text-slate-600">{t('featureDetail.automatedCampaigns.acquisitionDesc')}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <Repeat className="w-8 h-8 text-indigo-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">{t('featureDetail.automatedCampaigns.retention')}</h3>
                        <p className="text-sm text-slate-600">{t('featureDetail.automatedCampaigns.retentionDesc')}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <TrendingUp className="w-8 h-8 text-emerald-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">{t('featureDetail.automatedCampaigns.growth')}</h3>
                        <p className="text-sm text-slate-600">{t('featureDetail.automatedCampaigns.growthDesc')}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <Play className="w-8 h-8 text-rose-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">{t('featureDetail.automatedCampaigns.traffic')}</h3>
                        <p className="text-sm text-slate-600">{t('featureDetail.automatedCampaigns.trafficDesc')}</p>
                    </div>
                </div>

                <div className="bg-[#232323] text-white rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('featureDetail.automatedCampaigns.orchestrationTitle')}</h2>
                            <p className="text-slate-300 mb-6">
                                {t('featureDetail.automatedCampaigns.orchestrationDesc')}
                            </p>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                {(t('featureDetail.automatedCampaigns.orchestrationItems', { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="primary" className="bg-white text-slate-900 hover:bg-slate-100">
                                {t('featureDetail.automatedCampaigns.ctaButton')} <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutomatedCampaigns;
