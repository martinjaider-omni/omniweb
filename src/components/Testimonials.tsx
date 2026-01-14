import React from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true }) as any[];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-slate-500">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col h-full">


              <p className="text-lg text-slate-700 mb-8 leading-relaxed flex-1">"{t.quote}"</p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200/60">
                <div className="flex items-center gap-3">
                  <img src={`https://picsum.photos/40/40?random=${10 + i}`} alt={t.author} className="w-10 h-10 rounded-full bg-slate-200 object-cover" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wide">{t.role}</div>
                  </div>
                </div>
                <div className="h-6 w-auto text-slate-400 font-bold text-sm tracking-tight">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;