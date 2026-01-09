import React from 'react';
import { ArrowRight, X } from 'lucide-react';

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white text-xs md:text-sm py-2.5 px-4 flex justify-between items-center relative">
      <div className="flex-1 text-center">
        <a href="#" className="inline-flex items-center hover:text-gray-300 transition-colors group">
          <span className="font-medium">Introducing Omniwallet AI for automated campaigns</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute right-4 text-gray-400 hover:text-white p-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Banner;