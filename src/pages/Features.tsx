import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <span className="text-slate-600 font-medium tracking-wide uppercase text-sm">Platform</span>
                <h1 className="mt-4 text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
                    Everything you need to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">master digital loyalty</span>
                </h1>
                <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
                    Omniwallet provides the infrastructure to create, manage, and scale Apple Wallet and Google Wallet passes.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Placeholder for Bento Grid items */}
                <div className="col-span-1 md:col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-8 h-96 flex flex-col justify-between hover:border-slate-300 transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900">Real-time Analytics</h3>
                    <p className="text-slate-600">Track installs, updates, and usage in real-time.</p>
                </div>
                <div className="col-span-1 bg-slate-900 rounded-2xl p-8 h-96 text-white flex flex-col justify-between">
                    <h3 className="text-2xl font-bold">Smart Segmentation</h3>
                    <p className="text-slate-400">Target specific user groups with precision.</p>
                </div>
                <div className="col-span-1 bg-white border border-slate-200 rounded-2xl p-8 h-80 hover:border-slate-300 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900">Location Triggers</h3>
                </div>
                <div className="col-span-1 bg-white border border-slate-200 rounded-2xl p-8 h-80 hover:border-slate-300 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900">Push Notifications</h3>
                </div>
                <div className="col-span-1 bg-white border border-slate-200 rounded-2xl p-8 h-80 hover:border-slate-300 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900">API Integration</h3>
                </div>
            </div>
        </div>
    );
};

export default Features;
