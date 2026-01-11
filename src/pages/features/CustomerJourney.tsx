import React from 'react';
import { ArrowLeft, Map, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { useTranslation } from 'react-i18next';

const CustomerJourney: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-1" /> {t('featureDetail.customerJourney.backHome')}
            </Link>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-6">
                    <Map size={24} />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {t('featureDetail.customerJourney.title')}
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    {t('featureDetail.customerJourney.description')}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-3">{t('featureDetail.customerJourney.capabilitiesTitle')}</h3>
                        <ul className="space-y-3">
                            {(t('featureDetail.customerJourney.capabilityItems', { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-slate-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-2">{t('featureDetail.customerJourney.whyTitle')}</h3>
                        <p className="text-slate-600 text-sm mb-4">
                            {t('featureDetail.customerJourney.whyDesc')}
                        </p>
                        <div className="font-medium text-pink-600 text-sm">
                            {t('featureDetail.customerJourney.plans')}
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Link to="/signup">
                        <Button size="lg">{t('featureDetail.customerJourney.ctaPrimary')}</Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="secondary" size="lg">{t('featureDetail.customerJourney.ctaSecondary')}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CustomerJourney;
