import React from 'react';
import { ArrowLeft, BarChart3, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const Analytics: React.FC = () => {
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
            </Link>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                    <BarChart3 size={24} />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Advanced Analytics
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Measure the true ROI of your loyalty program. Track retention, average order value, and customer lifetime value in real-time.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-3">Key Capabilities</h3>
                        <ul className="space-y-3">
                            {[
                                "Real-time ROI tracking",
                                "Customer Lifetime Value (LTV)",
                                "Redemption rate analysis",
                                "Cohort retention charts"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-slate-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-2">Why it matters</h3>
                        <p className="text-slate-600 text-sm mb-4">
                            Data-driven loyalty programs grow 2.5x faster. Understand exactly what rewards drive behaviour.
                        </p>
                        <div className="font-medium text-purple-600 text-sm">
                            Included in Plus & Advanced plans
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Link to="/signup">
                        <Button size="lg">Start for free</Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="secondary" size="lg">Contact Sales</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
