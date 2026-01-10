
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../../components/ui/Button';

const PointsProgram = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Advanced Point Programs</h1>
                    <p className="text-xl text-slate-600">
                        Design your own reward system with total freedom. Adapt it to your business model, commercial objectives, and real customer behavior.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Total Configurability</h2>
                        <p className="text-slate-600 mb-6">
                            Far from rigid schemes, Omniwallet offers a flexible and dynamic system where points become a strategic tool.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Define precise points-to-euro exchange rates.",
                                "Set redemption values for points.",
                                "Use points as direct cashback on future purchases.",
                                "Adjust values for specific campaigns or segments."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        <h3 className="font-semibold text-slate-900 mb-4">Dynamic Point Generation</h3>
                        <p className="text-slate-600 mb-4text-sm">Points aren't fixed. Modify them based on:</p>
                        <div className="space-y-3">
                            <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm text-sm">
                                <span className="font-medium text-slate-900">Transaction Details:</span> Product, category, amount, margin.
                            </div>
                            <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm text-sm">
                                <span className="font-medium text-slate-900">Key Moments:</span> Seasonal campaigns, Black Friday, Sales.
                            </div>
                            <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm text-sm">
                                <span className="font-medium text-slate-900">User Data:</span> Birthday, tier level, history.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to launch your points program?</h2>
                    <Button variant="primary" className="bg-white text-slate-900 hover:bg-slate-100">
                        Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PointsProgram;
