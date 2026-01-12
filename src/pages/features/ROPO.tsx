import React from 'react';
import { ArrowLeft, Globe, Check, MapPin, Search, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { useTranslation } from 'react-i18next';

const ROPO: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-1" /> {t('featureDetail.analytics.backButton')}
            </Link>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    <Globe size={24} />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {t('featureDetail.ropo.title')}
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    {t('featureDetail.ropo.description')}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-6">
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-2">{t('featureDetail.ropo.mainFeature.title')}</h3>
                            <p className="text-slate-600 text-sm">
                                {t('featureDetail.ropo.mainFeature.description')}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900">{t('featureDetail.analytics.capabilitiesTitle')}</h3>
                            <ul className="space-y-3">
                                {(t('featureDetail.ropo.capabilities', { returnObjects: true }) as any[]).map((cap, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-1 flex-shrink-0">
                                            <Check size={12} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900 text-sm">{cap.title}</div>
                                            <div className="text-slate-500 text-xs">{cap.description}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6 flex flex-col justify-center">
                        <div className="relative aspect-square bg-slate-50 rounded-2xl border border-slate-100 p-8 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                            <div className="flex flex-col items-center gap-6 relative z-10 w-full text-center">
                                <div className="flex items-center gap-4 w-full justify-center">
                                    <div className="p-3 bg-white rounded-xl shadow-md border border-slate-100">
                                        <Search className="text-slate-400" size={32} />
                                    </div>
                                    <div className="w-12 h-0.5 bg-slate-200 border-dashed border-b flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    </div>
                                    <div className="p-4 bg-slate-900 rounded-xl shadow-xl text-white">
                                        <ShoppingBag size={40} />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-sm font-bold text-slate-900 uppercase">Online to Offline</div>
                                    <div className="text-xs text-slate-500 italic">Unifying the customer experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-10 mt-10">
                    <div className="text-center max-w-2xl mx-auto space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900">{t('featureDetail.ropo.cta.title')}</h2>
                        <p className="text-slate-600">{t('featureDetail.ropo.cta.subtitle')}</p>
                        <div className="flex gap-4 justify-center">
                            <Link to="/signup">
                                <Button size="lg">{t('featureDetail.ropo.cta.button')}</Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="secondary" size="lg">{t('nav.contact')}</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ROPO;
