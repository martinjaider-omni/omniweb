import React from 'react';

import logo1 from '../assets/clients/logo1.png';
import logo2 from '../assets/clients/logo2.png';
import logo3 from '../assets/clients/logo3.png';
import logo4 from '../assets/clients/logo4.png';
import logo5 from '../assets/clients/logo5.png';
import logo6 from '../assets/clients/logo6.png';
import logo7 from '../assets/clients/logo7.png';
import logo8 from '../assets/clients/logo8.png';
import logo9 from '../assets/clients/logo9.png';
import logo10 from '../assets/clients/logo10.png';
import logo11 from '../assets/clients/logo11.png';
import logo12 from '../assets/clients/logo12.png';
import logo13 from '../assets/clients/logo13.png';
import logo14 from '../assets/clients/logo14.png';
import logo15 from '../assets/clients/logo15.png';
import logo16 from '../assets/clients/logo16.png';
import logo17 from '../assets/clients/logo17.png';
import logo18 from '../assets/clients/logo18.png';
import logo19 from '../assets/clients/logo19.png';
import logo20 from '../assets/clients/logo20.png';

const LogoTicker: React.FC = () => {
  // Import logos dynamically with sizing adjustments for visual balance
  const logos = [
    { src: logo1, className: "h-10 md:h-14" }, // Lebara
    { src: logo2, className: "h-7 md:h-9" },   // Lyca (Reduced further)
    { src: logo3, className: "h-7 md:h-9" },   // Galp
    { src: logo4, className: "h-6 md:h-8" },   // Bazar
    { src: logo5, className: "h-5 md:h-7" },   // Farma2Go
    { src: logo6, className: "h-5 md:h-7" },   // Mus & Bombon (Reduced)
    { src: logo7, className: "h-5 md:h-7" },   // Alqvimia
    { src: logo8, className: "h-10 md:h-13" }, // Mundisa (Taller than average, but reduced slightly)
    { src: logo9, className: "h-8 md:h-10" },  // Maese Lab
    { src: logo10, className: "h-7 md:h-9" },  // Cuple (Reduced)
    { src: logo11, className: "h-5 md:h-7" },  // Clinica Londres (Wide)
    { src: logo12, className: "h-9 md:h-13" }, // Fulham (Enlarged further)
    { src: logo13, className: "h-6 md:h-8" },  // Veganashi
    { src: logo14, className: "h-10 md:h-14" }, // Amona (Circle/tall)
    { src: logo15, className: "h-10 md:h-14" }, // Cooperativa Falset (Circle/tall)
    { src: logo16, className: "h-8 md:h-11" }, // Ideo
    { src: logo17, className: "h-9 md:h-12" }, // Guam
    { src: logo18, className: "h-6 md:h-8" },  // Stampa e Stampe (Reduced)
    { src: logo19, className: "h-11 md:h-15" }, // Kultur
    { src: logo20, className: "h-11 md:h-15" }, // Llar Homestyle
  ];

  return (
    <div className="border-y border-slate-100 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10">
          Trusted by innovative retailers worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center group px-2">
              <img
                src={logo.src}
                alt={`Client logo ${idx + 1}`}
                className={`w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-all duration-300 mix-blend-multiply ${logo.className}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;