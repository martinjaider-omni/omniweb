import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    Search,
    ShoppingCart,
    Database,
    MessageSquare,
    Zap,
    ArrowRight,
    ExternalLink,
    Filter,
    Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

// Local Assets
import magentoLogo from '../assets/integrations/magento.png';
import logicommerceLogo from '../assets/integrations/logicommerce.png';
import vtexLogo from '../assets/integrations/vtex.png';
import klaviyoLogo from '../assets/integrations/klaviyo.png';
import connectifLogo from '../assets/integrations/connectif.png';
import salesmanagoLogo from '../assets/integrations/salesmanago.png';
import makeLogo from '../assets/integrations/make.png';
import status2Logo from '../assets/integrations/status2.png';
import stmodaLogo from '../assets/integrations/stmoda.png';
import stockagileLogo from '../assets/integrations/stockagile.png';
import agoraLogo from '../assets/integrations/agora.png';
import n8nLogo from '../assets/integrations/n8n.png';
import a3innuvaLogo from '../assets/integrations/a3innuva.png';
import oct8neLogo from '../assets/integrations/oct8ne.png';
import gorgiasLogo from '../assets/integrations/gorgias.png';

type Category = 'all' | 'ecommerce' | 'pos' | 'crm' | 'automation' | 'chatbot';

interface Integration {
    id: string;
    name: string;
    category: Category;
    description: string;
    logo: string;
    comingSoon?: boolean;
}

const Integrations: React.FC = () => {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    const integrations: Integration[] = [
        {
            id: 'shopify',
            name: 'Shopify',
            category: 'ecommerce',
            description: t('integrationsPage.items.shopify.desc'),
            logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg'
        },
        {
            id: 'woocommerce',
            name: 'WooCommerce',
            category: 'ecommerce',
            description: t('integrationsPage.items.woocommerce.desc'),
            logo: 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg'
        },
        {
            id: 'magento',
            name: 'Magento',
            category: 'ecommerce',
            description: t('integrationsPage.items.magento.desc'),
            logo: magentoLogo
        },
        {
            id: 'bigcommerce',
            name: 'BigCommerce',
            category: 'ecommerce',
            description: t('integrationsPage.items.bigcommerce.desc'),
            logo: 'https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg'
        },
        {
            id: 'prestashop',
            name: 'PrestaShop',
            category: 'ecommerce',
            description: t('integrationsPage.items.prestashop.desc'),
            logo: 'https://cdn.worldvectorlogo.com/logos/prestashop.svg'
        },
        {
            id: 'logicommerce',
            name: 'Logicommerce',
            category: 'ecommerce',
            description: t('integrationsPage.items.logicommerce.desc'),
            logo: logicommerceLogo,
            comingSoon: true
        },
        {
            id: 'vtex',
            name: 'VTEX',
            category: 'ecommerce',
            description: t('integrationsPage.items.vtex.desc'),
            logo: vtexLogo,
            comingSoon: true
        },
        {
            id: 'stockagile',
            name: 'Stockagile',
            category: 'pos',
            description: t('integrationsPage.items.stockagile.desc'),
            logo: stockagileLogo
        },
        {
            id: 'klaviyo',
            name: 'Klaviyo',
            category: 'crm',
            description: t('integrationsPage.items.klaviyo.desc'),
            logo: klaviyoLogo
        },
        {
            id: 'connectif',
            name: 'Connectif',
            category: 'crm',
            description: t('integrationsPage.items.connectif.desc'),
            logo: connectifLogo
        },
        {
            id: 'salesmanago',
            name: 'Salesmanago',
            category: 'crm',
            description: t('integrationsPage.items.salesmanago.desc'),
            logo: salesmanagoLogo
        },
        {
            id: 'brevo',
            name: 'Brevo',
            category: 'crm',
            description: t('integrationsPage.items.brevo.desc'),
            logo: 'https://cdn.worldvectorlogo.com/logos/brevo.svg'
        },
        {
            id: 'make',
            name: 'Make',
            category: 'automation',
            description: t('integrationsPage.items.make.desc'),
            logo: makeLogo
        },
        {
            id: 'n8n',
            name: 'n8n',
            category: 'automation',
            description: t('integrationsPage.items.n8n.desc'),
            logo: n8nLogo
        },
        {
            id: 'status2',
            name: 'Status2',
            category: 'pos',
            description: t('integrationsPage.items.status2.desc'),
            logo: status2Logo
        },
        {
            id: 'stmoda',
            name: 'Stmoda',
            category: 'pos',
            description: t('integrationsPage.items.stmoda.desc'),
            logo: stmodaLogo
        },
        {
            id: 'agora',
            name: 'Ágora TPV',
            category: 'pos',
            description: t('integrationsPage.items.agora.desc'),
            logo: agoraLogo
        },
        {
            id: 'a3innuva',
            name: 'A3innuva',
            category: 'pos',
            description: t('integrationsPage.items.a3innuva.desc'),
            logo: a3innuvaLogo
        },
        {
            id: 'oct8ne',
            name: 'Oct8ne',
            category: 'chatbot',
            description: t('integrationsPage.items.oct8ne.desc'),
            logo: oct8neLogo
        },
        {
            id: 'gorgias',
            name: 'Gorgias',
            category: 'chatbot',
            description: t('integrationsPage.items.gorgias.desc'),
            logo: gorgiasLogo,
            comingSoon: true
        }
    ];

    const filteredIntegrations = useMemo(() => {
        return integrations.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    const categories: { id: Category; name: string; icon: React.ReactNode }[] = [
        { id: 'all', name: t('integrationsPage.categories.all'), icon: <Filter size={16} /> },
        { id: 'ecommerce', name: t('integrationsPage.categories.ecommerce'), icon: <ShoppingCart size={16} /> },
        { id: 'pos', name: t('integrationsPage.categories.pos'), icon: <Database size={16} /> },
        { id: 'crm', name: t('integrationsPage.categories.crm'), icon: <MessageSquare size={16} /> },
        { id: 'automation', name: t('integrationsPage.categories.automation'), icon: <Zap size={16} /> },
        { id: 'chatbot', name: t('integrationsPage.categories.chatbot'), icon: <MessageSquare size={16} /> },
    ];

    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                        {t('integrationsPage.hero.title')}
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-12">
                        {t('integrationsPage.hero.subtitle')}
                    </p>
                </motion.div>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder={t('integrationsPage.search.placeholder')}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#255664] focus:border-transparent outline-none transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide pb-2 md:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat.id
                                    ? 'bg-[#255664] text-white shadow-md'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                {cat.icon}
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {filteredIntegrations.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredIntegrations.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-slate-300 transition-all flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 bg-slate-50 rounded-xl p-3 flex items-center justify-center border border-slate-100 group-hover:bg-white transition-colors">
                                            <img
                                                src={item.logo}
                                                alt={item.name}
                                                className={`w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ${item.comingSoon ? 'opacity-40' : ''}`}
                                            />
                                        </div>
                                        {item.comingSoon && (
                                            <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-amber-100 flex items-center gap-1">
                                                {t('integrationsPage.items.comingSoon')}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#255664] transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                                        {item.description}
                                    </p>
                                    <div className="pt-4 border-t border-slate-50 mt-auto">
                                        {item.comingSoon ? (
                                            <span className="inline-flex items-center text-sm font-semibold text-slate-400 cursor-not-allowed">
                                                {t('integrationsPage.items.viewDocs')} <ArrowRight className="w-4 h-4 ml-2" />
                                            </span>
                                        ) : (
                                            <Link
                                                to={`/contact?integration=${item.id}`}
                                                className="inline-flex items-center text-sm font-semibold text-[#255664]/80 group-hover:text-[#255664] transition-colors"
                                            >
                                                {t('integrationsPage.items.viewDocs')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4">
                            <Search className="text-slate-300 w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">No integrations found</h3>
                        <p className="text-slate-500">Try adjusting your search or category filters.</p>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="bg-[#111] rounded-[2.5rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#255664]/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t('integrationsPage.cta.title')}
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                            {t('integrationsPage.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="w-full sm:w-auto px-8 py-4 text-slate-900 bg-white hover:bg-slate-100 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                                    {t('integrationsPage.cta.button')}
                                    <ExternalLink size={18} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Integrations;
