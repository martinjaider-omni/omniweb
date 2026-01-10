import React from 'react';
import { ShoppingCart, Store, Workflow, Database, ArrowRight, MessageSquare, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/logo.png';

const IntegrationsSection: React.FC = () => {
    const categories = [
        {
            title: "E-Commerce",
            icon: <ShoppingCart className="w-5 h-5" />,
            platforms: [
                { name: "Shopify" },
                { name: "WooCommerce" },
                { name: "Magento" },
                { name: "PrestaShop" },
                { name: "BigCommerce" }
            ]
        },
        {
            title: "POS & ERP",
            icon: <Database className="w-5 h-5" />,
            platforms: [
                { name: "Stockagile" },
                { name: "Status2" },
                { name: "Ágora TPV" },
                { name: "Stmoda" },
                { name: "A3" }
            ]
        },
        {
            title: "CRM & Marketing",
            icon: <MessageSquare className="w-5 h-5" />,
            platforms: [
                { name: "Klaviyo" },
                { name: "Connectif" },
                { name: "Salesmanago" },
                { name: "Brevo" }
            ]
        },
        {
            title: "Chatbots & Automation",
            icon: <Zap className="w-5 h-5" />,
            platforms: [
                { name: "Oct8ne" },
                { name: "Make" }
            ]
        }
    ];

    return (
        <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content & Categories */}
                    <div className="flex-1 max-w-2xl lg:max-w-none">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                            Connects with your <br />
                            <span className="text-[#255664]">entire tech stack.</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                            Omniwallet integrates seamlessly with the tools you already use. Sync customer data, trigger automations, and manage rewards across your physical and digital stores.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                            {categories.map((cat, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-3 mb-4 text-slate-900 font-bold text-lg">
                                        <div className="p-2 bg-slate-50 rounded-xl border border-slate-200 text-[#255664]">
                                            {cat.icon}
                                        </div>
                                        {cat.title}
                                    </div>
                                    <ul className="space-y-2.5 pl-1.5">
                                        {cat.platforms.map((platform, j) => (
                                            <li key={j} className="text-[15px] text-slate-500 flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#255664]/30"></div>
                                                {platform.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <Link to="/integrations">
                                <button className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-[#232323] text-[#232323] rounded-xl font-medium hover:bg-slate-50 transition-all group">
                                    See all integrations
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Visual: Circular Hub (Matching Screenshot) */}
                    <div className="flex-1 w-full max-w-xl lg:max-w-none flex justify-center lg:justify-end">
                        <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
                            {/* Decorative Concentric Rings */}
                            <div className="absolute inset-0 rounded-full border border-slate-100 bg-slate-50/30"></div>
                            <div className="absolute inset-[12%] rounded-full border border-dashed border-slate-200"></div>
                            <div className="absolute inset-[25%] rounded-full border border-dashed border-slate-200"></div>
                            <div className="absolute inset-[38%] rounded-full border border-slate-100"></div>

                            {/* Lines from center to circles */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="12%" y2="50%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="88%" y2="50%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                            </svg>

                            {/* Center Hub - Now using Omniwallet Logo in Color */}
                            <div className="relative z-30 w-32 h-32 md:w-36 md:h-36 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center p-6 ring-8 ring-slate-50 overflow-hidden">
                                <img src={logoUrl} alt="Omniwallet" className="w-full h-full object-contain" />
                            </div>

                            {/* Orbiting App Nodes */}

                            {/* Shopify (Top) */}
                            <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-3 animate-float-slow z-20">
                                <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" className="w-full h-full object-contain" />
                            </div>

                            {/* WooCommerce (Top Left) */}
                            <div className="absolute top-[18%] left-[18%] w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-2 animate-float-delayed z-20">
                                <img src="/integrations/woocommerce.png" alt="WooCommerce" className="w-full h-full object-contain" />
                            </div>

                            {/* Magento (Top Right) */}
                            <div className="absolute top-[18%] right-[18%] w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-2 animate-float-slow z-20">
                                <img src="/integrations/magento.png" alt="Magento" className="w-full h-full object-contain" />
                            </div>

                            {/* Connectif (Mid Left) */}
                            <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-2 animate-float-delayed z-20">
                                <img src="/integrations/connectif.png" alt="Connectif" className="w-full h-full object-contain" />
                            </div>

                            {/* Klaviyo (Mid Right) */}
                            <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-2 animate-float-slow z-20">
                                <img src="/integrations/klaviyo.png" alt="Klaviyo" className="w-full h-full object-contain" />
                            </div>

                            {/* BigCommerce (Bottom Left) */}
                            <div className="absolute bottom-[20%] left-[20%] w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-2 animate-float-delayed z-20">
                                <img src="/integrations/bigcommerce.png" alt="BigCommerce" className="w-full h-full object-contain" />
                            </div>

                            {/* Square (Bottom Right) */}
                            <div className="absolute bottom-[20%] right-[20%] w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-2 animate-float-slow z-20">
                                <img src="/integrations/square.png" alt="Square" className="w-full h-full object-contain" />
                            </div>

                            {/* Mews (Bottom) */}
                            <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-3 animate-float-delayed z-20">
                                <img src="/integrations/mews.png" alt="Mews" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsSection;
