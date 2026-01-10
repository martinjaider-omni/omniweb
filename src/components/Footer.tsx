import React from 'react';
import { Wallet, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">

          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img src={logoUrl} alt="Omniwallet" className="h-8 w-auto mix-blend-multiply" />
            </Link>
            <p className="text-slate-500 text-sm max-w-xs mb-6">
              The leading platform for mobile wallet loyalty programs. Create, manage, and scale your digital passes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/features" className="hover:text-slate-900">Features</Link></li>
              <li><Link to="/integrations" className="hover:text-slate-900">Integrations</Link></li>
              <li><Link to="/pricing" className="hover:text-slate-900">Pricing</Link></li>
              <li><Link to="/changelog" className="hover:text-slate-900">Changelog</Link></li>
              <li><Link to="/docs" className="hover:text-slate-900">Docs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/company" className="hover:text-slate-900">About us</Link></li>
              <li><Link to="/careers" className="hover:text-slate-900">Careers</Link></li>
              <li><a href="https://blog.omniwallet.net" className="hover:text-slate-900">Blog</a></li>
              <li><Link to="/contact" className="hover:text-slate-900">Contact</Link></li>
              <li><Link to="/partners" className="hover:text-slate-900">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/community" className="hover:text-slate-900">Community</Link></li>
              <li><Link to="/help" className="hover:text-slate-900">Help Center</Link></li>
              <li><a href="https://status.omniwallet.net" className="hover:text-slate-900">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/privacy" className="hover:text-slate-900">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-slate-900">Terms</Link></li>
              <li><Link to="/security" className="hover:text-slate-900">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Omniwallet Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <span>Made with ♥️ in Barcelona</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;