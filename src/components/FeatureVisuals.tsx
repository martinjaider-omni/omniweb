import React from 'react';
import {
    CreditCard,
    Wallet,
    Users,
    ShoppingBag,
    Bell,
    Gift,
    Dices,
    Zap,
    TrendingUp,
    ArrowRight,
    Star,
    Cake,
    Instagram,
    UserPlus,
    MapPin,
    Search
} from 'lucide-react';

interface FeatureVisualsProps {
    featureKey: string;
}

const FeatureVisuals: React.FC<FeatureVisualsProps> = ({ featureKey }) => {
    const Container: React.FC<{ children: React.ReactNode; noPadding?: boolean }> = ({ children, noPadding }) => (
        <div className={`relative w-full max-w-sm aspect-square bg-white rounded-2xl shadow-xl border border-slate-100 ${noPadding ? '' : 'p-8'} flex flex-col items-center justify-center overflow-hidden select-none`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-transparent rounded-2xl -z-10"></div>
            {children}
        </div>
    );

    switch (featureKey) {
        case 'points':
            return (
                <Container noPadding>
                    <div className="w-full h-full flex flex-col">
                        {/* Top Banner with Background Mock */}
                        <div className="h-24 bg-gradient-to-br from-slate-800 to-slate-900 p-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl -ml-6 -mb-6"></div>

                            <div className="relative z-10">
                                <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-0.5">How to earn</div>
                                <div className="text-xl font-bold text-white">Points</div>
                            </div>
                        </div>

                        <div className="flex-1 p-5 flex flex-col">
                            {/* Points Cards Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex flex-col items-start gap-1.5 transform hover:scale-[1.02] transition-transform">
                                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <UserPlus size={14} />
                                    </div>
                                    <div className="text-[11px] font-bold text-slate-900">100 Points</div>
                                    <div className="w-8 h-1 bg-slate-100 rounded-full"></div>
                                </div>
                                <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex flex-col items-start gap-1.5 transform hover:scale-[1.02] transition-transform">
                                    <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                                        <Star size={14} />
                                    </div>
                                    <div className="text-[11px] font-bold text-slate-900">40 Points</div>
                                    <div className="w-10 h-1 bg-slate-100 rounded-full"></div>
                                </div>
                                <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex flex-col items-start gap-1.5 transform hover:scale-[1.02] transition-transform">
                                    <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
                                        <Cake size={14} />
                                    </div>
                                    <div className="text-[11px] font-bold text-slate-900">30 Points</div>
                                    <div className="w-6 h-1 bg-slate-100 rounded-full"></div>
                                </div>
                                <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex flex-col items-start gap-1.5 transform hover:scale-[1.02] transition-transform">
                                    <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-900">
                                        <Instagram size={14} />
                                    </div>
                                    <div className="text-[11px] font-bold text-slate-900">50 Points</div>
                                    <div className="w-8 h-1 bg-slate-100 rounded-full"></div>
                                </div>
                            </div>

                            {/* Product Earning Banner */}
                            <div className="mt-auto bg-slate-50 rounded-xl overflow-hidden flex border border-slate-100">
                                <div className="w-16 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 flex items-center justify-center relative">
                                    <div className="w-8 h-8 rounded-full bg-white/40 blur-md"></div>
                                    <ShoppingBag size={16} className="text-cyan-600 absolute" />
                                </div>
                                <div className="flex-1 p-2.5 flex flex-col justify-center gap-1.5">
                                    <div className="space-y-1">
                                        <div className="w-12 h-1 bg-slate-200 rounded-full"></div>
                                        <div className="w-20 h-1 bg-slate-200 rounded-full"></div>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div className="flex items-center gap-1.5 text-slate-900 font-bold text-[10px] uppercase">
                                            <Gift size={10} className="text-pink-500" />
                                            Earn 210 pts
                                        </div>
                                        <div className="text-[9px] font-bold text-slate-400">60 EUR</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            );

        case 'wallet':
            return (
                <Container>
                    <div className="relative w-48 mx-auto">
                        {/* Back Card (Google) */}
                        <div className="absolute top-0 left-0 w-full aspect-[1/0.6] bg-slate-200 rounded-xl transform -rotate-6 translate-y-4 scale-95 border border-slate-300"></div>
                        {/* Back Card (Generic) */}
                        <div className="absolute top-0 left-0 w-full aspect-[1/0.6] bg-slate-800 rounded-xl transform rotate-3 translate-x-2 translate-y-2 shadow-md"></div>

                        {/* Main Card (Apple Style) */}
                        <div className="relative w-full aspect-[1.6/1] bg-slate-900 rounded-xl shadow-2xl p-4 flex flex-col justify-between overflow-hidden text-white transform hover:scale-105 transition-transform duration-300">
                            {/* Abstract Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <div className="flex justify-between items-start">
                                <div className="w-8 h-8 rounded bg-white/10"></div>
                                <div className="text-[10px] uppercase tracking-wider opacity-70">Loyalty Pass</div>
                            </div>
                            <div>
                                <div className="text-xs opacity-70 mb-1">Balance</div>
                                <div className="text-xl font-bold">5,000 Pts</div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6 gap-2">
                            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-slate-700">
                                <div className="w-4 h-4 border border-white rounded-sm"></div>
                            </div>
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-slate-200">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            </div>
                        </div>
                    </div>
                </Container>
            );

        case 'tiers':
            return (
                <Container>
                    <div className="w-full space-y-4">
                        {/* Tier Card */}
                        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-500 bg-amber-50 px-2 py-1 rounded">Gold Member</span>
                                <Users size={16} className="text-slate-400" />
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full mb-2 overflow-hidden">
                                <div className="bg-amber-400 h-full w-3/4 rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                                <span>1,200 pts</span>
                                <span>Next: Platinum (1,500)</span>
                            </div>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
                                <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <CheckIcon />
                                </div>
                                1.5x Points Multiplier
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
                                <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <CheckIcon />
                                </div>
                                Priority Support
                            </div>
                        </div>
                    </div>
                </Container>
            );

        case 'market':
            return (
                <Container>
                    <div className="grid grid-cols-2 gap-3 w-full">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white border border-slate-100 rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="aspect-square bg-slate-50 rounded-md mb-2 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                                    <Gift size={20} className="text-slate-300 group-hover:text-slate-400" />
                                </div>
                                <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                                <div className="h-2 w-8 bg-slate-100 rounded"></div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex gap-2">
                        <div className="px-3 py-1 bg-slate-900 text-white rounded-full text-xs font-medium">All</div>
                        <div className="px-3 py-1 bg-white border border-slate-200 text-slate-500 rounded-full text-xs font-medium">Digital</div>
                        <div className="px-3 py-1 bg-white border border-slate-200 text-slate-500 rounded-full text-xs font-medium">Physical</div>
                    </div>
                </Container>
            );

        case 'push':
            return (
                <Container>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 bg-slate-900 rounded-[2rem] p-3 shadow-2xl border-4 border-slate-800">
                        <div className="w-12 h-1 bg-slate-800 rounded-full mx-auto mb-4"></div>

                        {/* Notification */}
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 mb-2 border border-white/5 shadow-lg transform translate-y-2">
                            <div className="flex justify-between items-start mb-1">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-4 h-4 bg-emerald-500 rounded-md"></div>
                                    <span className="text-[10px] font-medium text-white/80">OMNIWALLET</span>
                                </div>
                                <span className="text-[9px] text-white/40">Now</span>
                            </div>
                            <div className="text-xs font-medium text-white mb-0.5">Welcome nearby! 👋</div>
                            <div className="text-[10px] text-white/70 leading-tight">Pop in for 2x points on all coffees today until 2PM.</div>
                        </div>

                        {/* Dummy Background content */}
                        <div className="space-y-2 mt-6 opacity-20">
                            <div className="h-20 bg-white rounded-lg w-full"></div>
                            <div className="h-20 bg-white rounded-lg w-full"></div>
                        </div>
                    </div>
                </Container>
            );

        case 'giftcards':
            return (
                <Container>
                    <div className="relative w-56 aspect-[1.6/1] bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden text-center flex flex-col items-center justify-center p-4">
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                        <Gift size={32} className="text-emerald-500 mb-2" />
                        <div className="font-bold text-slate-900">Gift Card</div>
                        <div className="text-xs text-slate-500">$50.00 Value</div>
                        <div className="mt-3 text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                            XXXX-XXXX-XXXX
                        </div>
                    </div>
                    <div className="flex gap-2 mt-6">
                        <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">Email</div>
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center text-xs">SMS</div>
                    </div>
                </Container>
            );

        case 'gamification':
            return (
                <Container>
                    <div className="relative w-40 h-40 rounded-full border-4 border-white shadow-xl bg-slate-50 flex items-center justify-center overflow-hidden">
                        {/* Wheel Segments */}
                        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#10b981_0deg_90deg,#f59e0b_90deg_180deg,#3b82f6_180deg_270deg,#ef4444_270deg_360deg)] opacity-20"></div>
                        <div className="z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm border border-slate-100">
                            <Dices size={20} className="text-slate-800" />
                        </div>
                        {/* Pointer */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-1 w-4 h-6 bg-slate-900 rounded-b-lg shadow-md z-20"></div>
                    </div>
                    <div className="mt-6 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm text-sm font-bold text-slate-900 animate-bounce">
                        Spin & Win!
                    </div>
                </Container>
            );

        case 'automation':
            return (
                <Container>
                    <div className="flex flex-col items-center w-full max-w-[200px]">
                        {/* Trigger Node */}
                        <div className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-md mb-2 w-full text-center">
                            Trigger: Birthday 🎂
                        </div>
                        <div className="h-4 w-0.5 bg-slate-300 mb-2"></div>

                        {/* Condition Node */}
                        <div className="bg-white border border-slate-200 text-slate-600 text-[10px] px-3 py-1.5 rounded-lg shadow-sm mb-2 transform rotate-45 border-dashed">
                            <div className="transform -rotate-45">Is Card Active?</div>
                        </div>
                        <div className="flex w-full justify-between items-start px-4">
                            <div className="h-4 w-0.5 bg-slate-300 transform -rotate-12 origin-top"></div>
                            <div className="h-4 w-0.5 bg-slate-300 transform rotate-12 origin-top"></div>
                        </div>

                        {/* Action Nodes */}
                        <div className="flex gap-2 w-full mt-2">
                            <div className="flex-1 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] p-2 rounded-lg text-center">
                                Send Points
                            </div>
                            <div className="flex-1 bg-slate-50 border border-slate-100 text-slate-400 text-[10px] p-2 rounded-lg text-center">
                                End
                            </div>
                        </div>
                    </div>
                </Container>
            );

        case 'ropo':
            return (
                <Container>
                    <div className="w-full flex flex-col items-center justify-center gap-6">
                        <div className="flex items-center justify-center gap-4 w-full">
                            {/* Online Research */}
                            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-lg flex flex-col items-center gap-1.5 transform -rotate-6">
                                <Search size={20} className="text-blue-500" />
                                <div className="w-8 h-1 bg-slate-100 rounded-full"></div>
                                <div className="text-[8px] font-bold text-slate-400 font-mono">ONLINE</div>
                            </div>

                            {/* Connection Arrow */}
                            <div className="flex flex-col items-center gap-1">
                                <ArrowRight className="text-slate-300" size={16} />
                                <div className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">MATCH</div>
                            </div>

                            {/* Offline Purchase */}
                            <div className="bg-slate-900 rounded-xl p-3 shadow-xl flex flex-col items-center gap-1.5 transform rotate-6 text-white">
                                <ShoppingBag size={20} className="text-emerald-400" />
                                <div className="w-8 h-1 bg-white/10 rounded-full"></div>
                                <div className="text-[8px] font-bold text-white/30 font-mono">OFFLINE</div>
                            </div>
                        </div>

                        {/* Store Map Visual */}
                        <div className="w-full bg-slate-50 rounded-xl p-4 border border-slate-100 relative overflow-hidden">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-900 border border-slate-100">
                                    <MapPin size={16} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-slate-900">Store Visit Detected</div>
                                    <div className="text-[9px] text-slate-500 italic">500m from Main St. Store</div>
                                </div>
                            </div>
                            <div className="mt-3 flex gap-1.5">
                                <div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
                                <div className="h-1 w-8 bg-slate-200 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </Container>
            );

        default:
            return null;
    }
};

const CheckIcon = () => (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 4L3.5 6L8.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default FeatureVisuals;
