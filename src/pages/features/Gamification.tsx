import React from 'react';
import { ArrowRight, Dices, Settings, Palette, Zap } from 'lucide-react';
import Button from '../../components/ui/Button';
import { useTranslation } from 'react-i18next';

const Gamification = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">{t('featureDetail.gamification.title')}</h1>
                    <p className="text-xl text-slate-600">
                        {t('featureDetail.gamification.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-amber-100 p-3 rounded-xl text-amber-600 h-fit"><Settings /></div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">{t('featureDetail.gamification.controlTitle')}</h3>
                                    <p className="text-slate-600">{t('featureDetail.gamification.controlDesc')}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-purple-100 p-3 rounded-xl text-purple-600 h-fit"><Palette /></div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">{t('featureDetail.gamification.customTitle')}</h3>
                                    <p className="text-slate-600">{t('featureDetail.gamification.customDesc')}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 h-fit"><Zap /></div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">{t('featureDetail.gamification.strategicTitle')}</h3>
                                    <p className="text-slate-600">{t('featureDetail.gamification.strategicDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative w-80 h-80 bg-slate-900 rounded-full border-8 border-slate-200 flex items-center justify-center shadow-2xl">
                            <div className="text-white font-bold text-xl tracking-widest uppercase text-center whitespace-pre-line">
                                {t('featureDetail.gamification.spinWin')}
                            </div>
                            <div className="absolute top-0 w-4 h-8 bg-red-500 -mt-2 rounded-b-lg"></div>
                            <div className="absolute inset-0 rounded-full border border-white/10"></div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
                        {t('featureDetail.gamification.footerDesc')}
                    </p>
                    <Button variant="primary">
                        {t('featureDetail.gamification.ctaButton')} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Gamification;
