import React from 'react';
import Button from './ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">
             Customer relationship magic.
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
             Join thousands of forward-thinking brands building the next generation of loyalty on Omniwallet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="primary" size="lg" className="rounded-xl px-10 h-14 text-lg">
                Start for free
             </Button>
             <Button variant="secondary" size="lg" className="rounded-xl px-10 h-14 text-lg">
                Contact Sales
             </Button>
          </div>
       </div>
    </section>
  );
};

export default CTASection;