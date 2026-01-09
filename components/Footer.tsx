import React from 'react';
import { Wallet, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                  <Wallet size={18} strokeWidth={2.5} />
               </div>
               <span className="font-bold text-xl tracking-tight text-slate-900">omniwallet</span>
            </div>
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
              <li><a href="#" className="hover:text-slate-900">Features</a></li>
              <li><a href="#" className="hover:text-slate-900">Integrations</a></li>
              <li><a href="#" className="hover:text-slate-900">Pricing</a></li>
              <li><a href="#" className="hover:text-slate-900">Changelog</a></li>
              <li><a href="#" className="hover:text-slate-900">Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900">About us</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900">Community</a></li>
              <li><a href="#" className="hover:text-slate-900">Help Center</a></li>
              <li><a href="#" className="hover:text-slate-900">Status</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
             <ul className="space-y-3 text-sm text-slate-500">
               <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
               <li><a href="#" className="hover:text-slate-900">Terms</a></li>
               <li><a href="#" className="hover:text-slate-900">Security</a></li>
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