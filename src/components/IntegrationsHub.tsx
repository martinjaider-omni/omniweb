import React from 'react';
import { ShoppingCart, Database, MessageSquare, Zap } from 'lucide-react';

const IntegrationsHub: React.FC = () => {
    const integrations = {
        ecommerce: [
            { name: 'Shopify', logo: '/integrations/shopify.svg' },
            { name: 'WooCommerce', logo: null },
            { name: 'Magento', logo: '/integrations/magento.png' },
            { name: 'PrestaShop', logo: null },
            { name: 'BigCommerce', logo: '/integrations/bigcommerce.png' },
        ],
        pos: [
            { name: 'Stockagile', logo: null },
            { name: 'Statuz2', logo: null },
            { name: 'Agora TPV', logo: null },
            { name: 'Stmoda', logo: null },
            { name: 'A3', logo: null },
        ],
        crm: [
            { name: 'Klaviyo', logo: '/integrations/klaviyo.png' },
            { name: 'Connectif', logo: null },
        ],
        automation: [
            { name: 'Oct8ne', logo: null },
            { name: 'Make', logo: '/integrations/mews.png' },
        ],
    };

    const categories = [
        { key: 'ecommerce', title: 'E-Commerce', icon: ShoppingCart, items: integrations.ecommerce },
        { key: 'pos', title: 'POS & ERP', icon: Database, items: integrations.pos },
        { key: 'crm', title: 'CRM & Marketing', icon: MessageSquare, items: integrations.crm },
        { key: 'automation', title: 'Chatbots & Automation', icon: Zap, items: integrations.automation },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Connects with your <span className="text-[#255664]">entire tech stack.</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Omniwallet integrates seamlessly with the tools you already use. Sync customer data, trigger automations, and manage rewards across your physical and digital stores.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Hub */}
                    <div className="flex justify-center mb-12">
                        <div className="relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#255664] rounded-2xl flex items-center justify-center shadow-2xl">
                                <span className="text-white font-bold text-2xl md:text-3xl">OMNI</span>
                            </div>
                            {/* Pulsing rings */}
                            <div className="absolute inset-0 rounded-2xl bg-[#255664] opacity-20 animate-ping"></div>
                        </div>
                    </div>

                    {/* Integration Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <div key={category.key} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#255664]/30 hover:shadow-lg transition-all">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200">
                                            <Icon className="w-5 h-5 text-[#255664]" />
                                        </div>
                                        <h3 className="font-bold text-slate-900">{category.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                                {item.logo ? (
                                                    <div className="w-5 h-5 flex items-center justify-center">
                                                        <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
                                                    </div>
                                                ) : (
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#255664]"></div>
                                                )}
                                                <span>{item.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    {/* Connection Lines Decoration */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                        <svg className="w-full h-full opacity-10" viewBox="0 0 800 400">
                            <line x1="400" y1="100" x2="200" y2="250" stroke="#255664" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="400" y1="100" x2="600" y2="250" stroke="#255664" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="400" y1="100" x2="200" y2="350" stroke="#255664" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="400" y1="100" x2="600" y2="350" stroke="#255664" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-slate-600 mb-4">Don't see your platform?</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-[#255664] font-semibold hover:underline"
                    >
                        Request a custom integration
                        <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsHub;
