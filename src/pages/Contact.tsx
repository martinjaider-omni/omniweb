import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <span className="text-slate-600 font-medium tracking-wide uppercase text-sm">{t('contact.badge')}</span>
                    <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        {t('contact.title')}
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                        {t('contact.description')}
                    </p>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                                ✉️
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">{t('contact.emailUs')}</h4>
                                <p className="text-slate-600">hello@omniwallet.net</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                                📍
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Visit us</h4>
                                <p className="text-slate-600">Barcelona, Spain</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">First name</label>
                                <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Last name</label>
                                <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Work Email</label>
                            <input type="email" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Message</label>
                            <textarea rows={4} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-colors"></textarea>
                        </div>
                        <button type="button" className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                            Send message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
