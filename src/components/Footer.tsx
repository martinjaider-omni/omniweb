import React from 'react';
import { Wallet, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoUrl from '../assets/logo.png';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">

          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img src={logoUrl} alt="Omniwallet" className="h-8 w-auto mix-blend-multiply" />
            </Link>
            <p className="text-slate-500 text-sm max-w-xs mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('footer.product')}</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/features" className="hover:text-slate-900">{t('footer.features')}</Link></li>
              <li><Link to="/integrations" className="hover:text-slate-900">{t('footer.integrations')}</Link></li>
              <li><Link to="/pricing" className="hover:text-slate-900">{t('footer.pricing')}</Link></li>
              <li><Link to="/changelog" className="hover:text-slate-900">{t('footer.changelog')}</Link></li>
              <li><Link to="/docs" className="hover:text-slate-900">{t('footer.docs')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/company" className="hover:text-slate-900">{t('footer.about')}</Link></li>
              <li><Link to="/careers" className="hover:text-slate-900">{t('footer.careers')}</Link></li>
              <li><a href="https://blog.omniwallet.net" className="hover:text-slate-900">{t('footer.blog')}</a></li>
              <li><Link to="/contact" className="hover:text-slate-900">{t('footer.contact')}</Link></li>
              <li><Link to="/partners" className="hover:text-slate-900">{t('footer.partners')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/community" className="hover:text-slate-900">{t('footer.community')}</Link></li>
              <li><Link to="/help" className="hover:text-slate-900">{t('footer.help')}</Link></li>
              <li><a href="https://status.omniwallet.net" className="hover:text-slate-900">{t('footer.status')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/privacy" className="hover:text-slate-900">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="hover:text-slate-900">{t('footer.terms')}</Link></li>
              <li><Link to="/security" className="hover:text-slate-900">{t('footer.security')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Omniwallet Inc. {t('footer.allRightsReserved')}
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-slate-400" />
              <select
                value={i18n.language}
                onChange={handleLanguageChange}
                className="bg-transparent border-none text-slate-500 focus:ring-0 cursor-pointer hover:text-slate-900 transition-colors appearance-none"
              >
                <option value="en">{t('footer.english')}</option>
                <option value="es">{t('footer.spanish')}</option>
              </select>
            </div>
            <span>{t('footer.madeWith')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;