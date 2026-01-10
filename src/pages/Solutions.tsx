import React from 'react';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <span className="text-slate-600 font-medium tracking-wide uppercase text-sm">Solutions</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Built for every industry
                </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Retail', 'Hospitality', 'Travel', 'Events'].map((industry) => (
                    <div key={industry} className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all hover:shadow-lg hover:shadow-slate-200/50 cursor-pointer h-64 flex flex-col justify-end overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-xl font-bold text-slate-900 relative z-10">{industry}</h3>
                        <p className="text-sm text-slate-500 mt-2 relative z-10 group-hover:text-slate-700 transition-colors">
                            Drive loyalty and engagement for {industry.toLowerCase()}.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Solutions;
