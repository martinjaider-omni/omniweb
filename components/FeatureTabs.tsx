import React, { useState } from 'react';
import { CreditCard, BarChart3, Zap, Bell, Users, ShieldCheck, Check } from 'lucide-react';
import Button from './ui/Button';

const FeatureTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cards' | 'automation' | 'analytics'>('cards');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Everything you need to build <br/>a world-class loyalty program.
          </h2>
          <p className="text-lg text-slate-500">
            Omniwallet gives you the building blocks to create powerful, mobile-first loyalty experiences without writing a single line of code.
          </p>
        </div>

        {/* Tab Navigation (Attio Style) */}
        <div className="flex justify-center mb-0 border-b border-slate-200">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide w-full md:w-auto px-4">
            <button 
              onClick={() => setActiveTab('cards')}
              className={`pb-4 text-sm font-medium transition-all whitespace-nowrap border-b-2 ${activeTab === 'cards' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Digital Cards
            </button>
            <button 
              onClick={() => setActiveTab('automation')}
              className={`pb-4 text-sm font-medium transition-all whitespace-nowrap border-b-2 ${activeTab === 'automation' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Automation & Push
            </button>
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`pb-4 text-sm font-medium transition-all whitespace-nowrap border-b-2 ${activeTab === 'analytics' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Data & Reporting
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="bg-slate-50 border-x border-b border-slate-200 rounded-b-2xl p-4 md:p-12 min-h-[500px] flex flex-col md:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex-1">
            <div key={activeTab} className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-900">
                {activeTab === 'cards' && <CreditCard />}
                {activeTab === 'automation' && <Zap />}
                {activeTab === 'analytics' && <BarChart3 />}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                {activeTab === 'cards' && "Design beautiful passes for Apple & Google Wallet."}
                {activeTab === 'automation' && "Engage customers at the perfect moment."}
                {activeTab === 'analytics' && "Understand your customers like never before."}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-lg">
                {activeTab === 'cards' && "Create branded digital membership cards, coupons, and tickets. Update points, status, and designs instantly without user action."}
                {activeTab === 'automation' && "Send location-based notifications when a customer is near your store. Automate birthday rewards and win-back campaigns."}
                {activeTab === 'analytics' && "Track installation rates, usage frequency, and ROI. Export data to your favorite CRM or marketing tools via our API."}
                </p>

                <ul className="space-y-3 pt-4">
                {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                        <Check className="w-3 h-3" />
                    </div>
                    {activeTab === 'cards' && i === 1 && "Drag-and-drop pass builder"}
                    {activeTab === 'cards' && i === 2 && "Native QR code support"}
                    {activeTab === 'cards' && i === 3 && "Dynamic fields updating"}
                    
                    {activeTab === 'automation' && i === 1 && "Geo-fenced notifications"}
                    {activeTab === 'automation' && i === 2 && "Time-sensitive offers"}
                    {activeTab === 'automation' && i === 3 && "Behavioral triggers"}

                    {activeTab === 'analytics' && i === 1 && "Real-time usage dashboards"}
                    {activeTab === 'analytics' && i === 2 && "Cohort analysis"}
                    {activeTab === 'analytics' && i === 3 && "CSV & API Export"}
                    </li>
                ))}
                </ul>

                <div className="pt-4">
                <Button variant="outline">Learn more about {activeTab}</Button>
                </div>
            </div>
          </div>

          {/* Visual/Mock Content */}
          <div className="flex-1 w-full relative">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-slate-200/50 to-transparent rounded-full blur-3xl -z-10"></div>
            
            <div key={activeTab} className="animate-fade-in w-full flex justify-center">
                {activeTab === 'cards' && (
                <div className="relative mx-auto w-64 h-[400px] bg-white rounded-3xl shadow-2xl border-[6px] border-slate-900 overflow-hidden transform rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                    {/* Card Mock */}
                    <div className="h-full bg-slate-900 text-white flex flex-col">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-8">
                                <div className="font-bold text-xl">BRAND.</div>
                                <div className="text-xs uppercase bg-white/20 px-2 py-1 rounded">Gold</div>
                            </div>
                            <div className="mb-2 text-slate-400 text-xs uppercase">Points Balance</div>
                            <div className="text-4xl font-mono font-bold">2,450</div>
                        </div>
                        <div className="mt-auto bg-white text-slate-900 p-6 rounded-t-3xl">
                            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                            <span>Member</span>
                            <span>ID: 8842</span>
                            </div>
                            <div className="text-lg font-bold mb-6">Alex Johnson</div>
                            <div className="h-16 bg-slate-100 rounded flex items-center justify-center">
                                <div className="w-4/5 h-8 border-y-4 border-slate-800"></div> 
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {activeTab === 'automation' && (
                <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6 w-full max-w-md mx-auto transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Bell size={20} /></div>
                        <div>
                            <div className="font-bold text-slate-900">Push Automation</div>
                            <div className="text-xs text-slate-500">Trigger settings</div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 flex gap-4">
                            <div className="mt-1"><Users size={16} className="text-slate-400"/></div>
                            <div>
                            <div className="text-sm font-semibold text-slate-900">Audience</div>
                            <div className="text-sm text-slate-500">Gold Tier Members who visited &lt; 30 days ago</div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="h-6 w-px bg-slate-300"></div>
                        </div>

                        <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 flex gap-4">
                            <div className="mt-1"><Zap size={16} className="text-amber-500"/></div>
                            <div>
                            <div className="text-sm font-semibold text-slate-900">Trigger: Geolocation</div>
                            <div className="text-sm text-slate-500">When within 100m of "Main St Store"</div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="h-6 w-px bg-slate-300"></div>
                        </div>

                        <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 flex gap-4">
                            <div className="mt-1"><Bell size={16} className="text-blue-600"/></div>
                            <div>
                            <div className="text-sm font-semibold text-slate-900">Action: Send Notification</div>
                            <div className="text-sm text-slate-600 italic">"Hey Alex! You're close. Come in for 2x points today!"</div>
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {activeTab === 'analytics' && (
                    <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6 w-full max-w-lg mx-auto transition-transform duration-300 hover:scale-[1.02]">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                            <div className="text-xs text-slate-500 uppercase mb-1">Total Installs</div>
                            <div className="text-2xl font-bold text-slate-900">12,405</div>
                            <div className="text-xs text-emerald-600 font-medium flex items-center mt-1">
                                ↑ 12% vs last month
                            </div>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                            <div className="text-xs text-slate-500 uppercase mb-1">Redemption Rate</div>
                            <div className="text-2xl font-bold text-slate-900">48.2%</div>
                            <div className="text-xs text-emerald-600 font-medium flex items-center mt-1">
                                ↑ 4% vs last month
                            </div>
                            </div>
                        </div>
                        
                        <div className="h-48 flex items-end justify-between gap-2 px-2">
                            {[40, 65, 55, 80, 45, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                            <div key={i} className="w-full bg-slate-900 rounded-t-sm hover:bg-slate-700 transition-colors relative group" style={{ height: `${h}%` }}>
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded pointer-events-none">
                                    {h * 10}
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-slate-400 border-t border-slate-100 pt-2">
                            <span>Jan</span><span>Dec</span>
                        </div>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;