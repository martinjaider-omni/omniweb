import React, { useState, useEffect } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled || mobileMenuOpen 
          ? 'bg-white/90 backdrop-blur-md border-slate-200 py-3' 
          : 'bg-white border-transparent py-4 top-10' // Offset for banner
      }`}
      style={{ top: scrolled ? 0 : undefined }} 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                <Wallet size={18} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">omniwallet</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Platform</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Solutions</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Resources</a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button variant="primary" size="sm">Start for free</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4">
          <a href="#" className="text-base font-medium text-slate-700 py-2">Platform</a>
          <a href="#" className="text-base font-medium text-slate-700 py-2">Solutions</a>
          <a href="#" className="text-base font-medium text-slate-700 py-2">Pricing</a>
          <div className="h-px bg-slate-100 my-2"></div>
          <Button variant="secondary" className="w-full justify-center">Sign in</Button>
          <Button variant="primary" className="w-full justify-center">Start for free</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;