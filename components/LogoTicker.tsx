import React from 'react';

const LogoTicker: React.FC = () => {
  const brands = [
    "Acme Corp", "GlobalRetail", "CoffeeHouse", "BurgerJoint", "FitLife Gym", "TechStore", "FashionNova"
  ];

  return (
    <div className="border-y border-slate-100 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Trusted by innovative retailers worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder for logos - using text for demo purposes with styling to look like logos */}
           {brands.map((brand, idx) => (
             <div key={idx} className="flex items-center gap-2 group cursor-default">
                <div className="w-6 h-6 bg-slate-200 rounded-sm rotate-45 group-hover:bg-slate-900 transition-colors"></div>
                <span className="text-xl font-bold text-slate-800 tracking-tighter">{brand}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;