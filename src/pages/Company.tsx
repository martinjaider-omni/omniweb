import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Company: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <span className="text-slate-600 font-medium tracking-wide uppercase text-sm">{t('company.badge')}</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    {t('company.title')}
                </h1>
                <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
                    {t('company.description')}
                </p>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-slate-100 rounded-2xl h-80 w-full animate-pulse"></div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                    <p className="text-slate-600 text-lg">
                        To empower every business to build lasting relationships through digital passes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Company;
