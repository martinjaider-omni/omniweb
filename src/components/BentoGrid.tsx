import React from 'react';
import { Smartphone, Store, Gift, Share2 } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Designed for the modern retailer.
          </h2>
          <p className="text-slate-500">
            Seamlessly integrating physical locations with digital rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

          {/* Large Card 1 */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-[#255664]/10 rounded-lg flex items-center justify-center text-[#255664] mb-4">
                <Store />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Omnichannel Ready</h3>
              <p className="text-slate-500 max-w-sm">Works with your POS in-store and your e-commerce platform online. One single source of truth for customer data.</p>
            </div>

            <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 bg-slate-100 rounded-full group-hover:scale-110 transition-transform duration-500"></div>

            {/* Integration Logos */}
            <div className="absolute right-8 bottom-8 z-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-[240px]">
              <div className="text-xs font-semibold text-slate-600 mb-3">Connected Integrations</div>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-slate-50 rounded-lg p-2 flex items-center justify-center hover:bg-slate-100 transition-colors">
                  <img src="/integrations/bigcommerce.png" alt="BigCommerce" className="w-6 h-6 object-contain" />
                </div>
                <div className="bg-slate-50 rounded-lg p-2 flex items-center justify-center hover:bg-slate-100 transition-colors">
                  <img src="/integrations/klaviyo.png" alt="Klaviyo" className="w-6 h-6 object-contain" />
                </div>
                <div className="bg-slate-50 rounded-lg p-2 flex items-center justify-center hover:bg-slate-100 transition-colors">
                  <img src="/integrations/magento.png" alt="Magento" className="w-6 h-6 object-contain" />
                </div>
                <div className="bg-slate-50 rounded-lg p-2 flex items-center justify-center hover:bg-slate-100 transition-colors">
                  <img src="/integrations/mews.png" alt="Mews" className="w-6 h-6 object-contain" />
                </div>
                <div className="bg-slate-50 rounded-lg p-2 flex items-center justify-center hover:bg-slate-100 transition-colors">
                  <img src="/integrations/square.png" alt="Square" className="w-6 h-6 object-contain" />
                </div>
                <div className="bg-slate-50 rounded-lg p-2 flex items-center justify-center hover:bg-slate-100 transition-colors border-2 border-dashed border-slate-200">
                  <span className="text-xs text-slate-400 font-medium">+50</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-100">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <div className="text-[10px] font-medium text-emerald-600">All systems synced</div>
              </div>
            </div>
          </div>

          {/* Tall Card */}
          <div className="md:row-span-2 bg-[#232323] text-white rounded-2xl p-8 shadow-sm flex flex-col relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4">
                <Smartphone />
              </div>
              <h3 className="text-xl font-bold mb-2">Native Mobile Experience</h3>
              <p className="text-slate-400 mb-6">Why build an app when you can live in the OS? Apple Wallet and Google Wallet are pre-installed on 99% of devices.</p>

              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Push Notifications</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Location Alerts</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Automatic Updates</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> No App Store Fees</li>
              </ul>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
            {/* Abstract visual of phones */}
            <div className="absolute -bottom-10 -right-10 opacity-20">
              <Smartphone size={200} />
            </div>
          </div>

          {/* Standard Card 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-[#255664]/10 rounded-lg flex items-center justify-center text-[#255664] mb-4">
              <Gift />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Dynamic Rewards</h3>
            <p className="text-slate-500">Change offers instantly based on tier, spend, or behavior without updating the pass.</p>
          </div>

          {/* Standard Card 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-[#255664]/10 rounded-lg flex items-center justify-center text-[#255664] mb-4">
              <Share2 />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Viral Referral Loops</h3>
            <p className="text-slate-500">Turn your best customers into advocates. Built-in referral links in every pass.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;