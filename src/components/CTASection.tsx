import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from './ui/Button';

const CTASection: React.FC = () => {
   const { t } = useTranslation();

   return (
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">
               {t('cta.title')}
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
               {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/signup">
                  <Button variant="primary" size="lg" className="rounded-xl px-10 h-14 text-lg">
                     {t('cta.startFree')}
                  </Button>
               </Link>
               <Button variant="secondary" size="lg" className="rounded-xl px-10 h-14 text-lg">
                  {t('cta.talkSales')}
               </Button>
            </div>
            <p className="mt-6 text-sm text-slate-400">
               {t('cta.noCreditCard')}
            </p>
         </div>
      </section>
   );
};

export default CTASection;