import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Wallet, CreditCard, Users, Gift, Bell, Dices, ShoppingBag, BarChart3, Map, Zap, Briefcase, Handshake, Headphones, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logoUrl from '../assets/logo.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MenuLink = ({ to, icon, title, desc }: { to: string, icon: React.ReactNode, title: string, desc: string }) => (
  <Link to={to} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
    <div className="text-slate-400 group-hover/item:text-slate-900 transition-colors mt-0.5">
      {icon}
    </div>
    <div>
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="text-xs text-slate-500 line-clamp-1">{desc}</div>
    </div>
  </Link>
);

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.platform'), path: '/features' },
    { name: t('nav.solutions'), path: '/solutions' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.resources'), path: '/company' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b w-full",
        scrolled || mobileMenuOpen
          ? "bg-white/80 backdrop-blur-md border-slate-200/60 py-3"
          : "bg-white border-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoUrl} alt="Omniwallet" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            <div className="relative group h-full flex items-center">
              <button
                className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-1 my-auto outline-none",
                  location.pathname.startsWith('/features')
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900 group-hover:text-slate-900"
                )}
              >
                {t('nav.platform')} <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>

              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-[800px]">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 grid grid-cols-3 gap-8">

                  {/* Column 1: Core Platform */}
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">
                      Core Platform
                    </div>
                    <div className="space-y-1">
                      <MenuLink
                        to="/features/wallet-cards"
                        icon={<Wallet size={18} />}
                        title="Wallet Cards"
                        desc="Native digital passes"
                      />
                      <MenuLink
                        to="/features/points-program"
                        icon={<CreditCard size={18} />}
                        title="Points Program"
                        desc="Earn & burn rewards"
                      />
                      <MenuLink
                        to="/features/customer-tiers"
                        icon={<Users size={18} />}
                        title="Customer Tiers"
                        desc="VIP segmentation"
                      />
                      <MenuLink
                        to="/features/gift-cards"
                        icon={<Gift size={18} />}
                        title="Gift Cards"
                        desc="Prepaid digital cards"
                      />
                    </div>
                  </div>

                  {/* Column 2: Engagement */}
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">
                      Engagement
                    </div>
                    <div className="space-y-1">
                      <MenuLink
                        to="/features/push-notifications"
                        icon={<Bell size={18} />}
                        title="Push Notifications"
                        desc="Direct mobile messaging"
                      />
                      <MenuLink
                        to="/features/gamification"
                        icon={<Dices size={18} />}
                        title="Gamification"
                        desc="Spin-to-win & games"
                      />
                      <MenuLink
                        to="/features/loyalty-market"
                        icon={<ShoppingBag size={18} />}
                        title="Loyalty Market"
                        desc="Rewards catalog"
                      />
                    </div>
                  </div>

                  {/* Column 3: Intelligence */}
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">
                      Intelligence
                    </div>
                    <div className="space-y-1">
                      <MenuLink
                        to="/features/analytics"
                        icon={<BarChart3 size={18} />}
                        title="Analytics"
                        desc="Real-time ROI insights"
                      />
                      <MenuLink
                        to="/features/customer-journey"
                        icon={<Map size={18} />}
                        title="Journey Builder"
                        desc="Visual automation flows"
                      />
                      <MenuLink
                        to="/features/automated-campaigns"
                        icon={<Zap size={18} />}
                        title="Automated Campaigns"
                        desc="Trigger-based marketing"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <Link to="/solutions" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">{t('nav.solutions')}</Link>
            <Link to="/pricing" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">{t('nav.pricing')}</Link>

            {/* Company Mega Menu */}
            <div className="relative group h-full flex items-center">
              <button
                className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-1 my-auto outline-none",
                  location.pathname === '/company'
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900 group-hover:text-slate-900"
                )}
              >
                {t('nav.resources')} <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-[500px]">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 flex overflow-hidden">

                  {/* Left Column (Main Links) */}
                  <div className="p-4 flex-1 space-y-1">
                    <MenuLink
                      to="/company"
                      icon={<Users size={18} />}
                      title="About us"
                      desc="Our mission & team"
                    />
                    <MenuLink
                      to="/careers"
                      icon={<Briefcase size={18} />}
                      title="Careers"
                      desc="We are hiring"
                    />
                    <MenuLink
                      to="/partners"
                      icon={<Handshake size={18} />}
                      title="Partners"
                      desc="Grow with us"
                    />
                    <MenuLink
                      to="/contact"
                      icon={<Headphones size={18} />}
                      title="Contact"
                      desc="Get in touch"
                    />
                  </div>

                  {/* Right Column (Resources) */}
                  <div className="bg-slate-50 p-6 w-48 border-l border-slate-100">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Resources
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="block text-sm text-slate-600 hover:text-slate-900 transition-colors">Blog</a>
                      </li>
                      <li>
                        <Link to="/changelog" className="block text-sm text-slate-600 hover:text-slate-900 transition-colors">Changelog</Link>
                      </li>
                      <li>
                        <Link to="/help" className="block text-sm text-slate-600 hover:text-slate-900 transition-colors">Help Center</Link>
                      </li>
                      <li>
                        <Link to="/community" className="block text-sm text-slate-600 hover:text-slate-900 transition-colors">Community</Link>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all border border-transparent hover:border-slate-200"
            >
              <Globe size={14} />
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>

            <Link
              to="/login"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2"
            >
              {t('nav.login')}
            </Link>
            <Link
              to="/signup"
              className="bg-[#255664] hover:bg-[#1e4652] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-slate-900/20 active:scale-95"
            >
              {t('nav.startFree')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-2 h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-lg font-medium py-4 px-4 rounded-xl transition-colors",
                location.pathname === link.path
                  ? "bg-slate-50 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-slate-100 my-2"></div>
          <Link
            to="/login"
            className="text-center font-medium text-slate-600 py-3 rounded-md hover:bg-slate-50"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="bg-[#255664] text-white text-center font-medium py-3 rounded-lg hover:bg-[#1e4652]"
          >
            Start for free
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;