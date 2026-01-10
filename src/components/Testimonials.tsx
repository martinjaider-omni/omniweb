import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Omniwallet completely transformed how we handle our loyalty program. The Apple Wallet integration is seamless and our customers love it.",
      author: "Sarah Jenkins",
      role: "Head of Marketing",
      company: "Acme Corp",
      image: "https://picsum.photos/40/40?random=10",
      logo: "https://placehold.co/120x40/f8fafc/1e293b?text=ACME"
    },
    {
      quote: "We saw a 40% increase in retention within the first 3 months. The geolocation triggers are a game changer for foot traffic.",
      author: "David Chen",
      role: "Product Owner",
      company: "GlobalRetail",
      image: "https://picsum.photos/40/40?random=11",
      logo: "https://placehold.co/120x40/f8fafc/1e293b?text=Global"
    },
    {
      quote: "Finally, a loyalty platform that doesn't feel like legacy software. The API is a dream to work with and the support is stellar.",
      author: "Elena Rodriguez",
      role: "CTO",
      company: "TechStore",
      image: "https://picsum.photos/40/40?random=12",
      logo: "https://placehold.co/120x40/f8fafc/1e293b?text=TechStore"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Loved by innovative brands.
          </h2>
          <p className="text-lg text-slate-500">
            Don't just take our word for it. Here's what product teams are saying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col h-full">


              <p className="text-lg text-slate-700 mb-8 leading-relaxed flex-1">"{t.quote}"</p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200/60">
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.author} className="w-10 h-10 rounded-full bg-slate-200 object-cover" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wide">{t.role}</div>
                  </div>
                </div>
                <img src={t.logo} alt={t.company} className="h-6 w-auto grayscale opacity-50 mix-blend-multiply" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;