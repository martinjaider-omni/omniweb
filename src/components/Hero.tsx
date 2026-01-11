import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Apple, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const subtitleItems = t('hero.subtitleItems', { returnObjects: true }) as string[];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitleItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [subtitleItems.length]);

  return (
    <section className="pt-12 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-medium text-slate-600 mb-8 hover:border-slate-300 transition-colors cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          {t('hero.badge')}
          <ArrowRight className="w-3 h-3 text-slate-400" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 min-h-[1.1em] md:min-h-[2.2em]">
          {t('hero.title')} <br />
          <div className="h-[1.1em] relative overflow-hidden flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-slate-400 absolute"
              >
                {subtitleItems[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed">
          {t('hero.description')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link to="/signup">
            <Button variant="primary" size="lg" className="rounded-xl px-8">
              {t('hero.ctaPrimary')}
            </Button>
          </Link>
          <Button variant="secondary" size="lg" className="rounded-xl px-8">
            {t('hero.ctaSecondary')}
          </Button>
        </div>

        <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-500" /> {t('hero.noCreditCard')}
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-500" /> {t('hero.freeTrial')}
          </span>
        </div>
      </div>

      {/* Abstract Dashboard Visual */}
      <div className="relative mt-8 mx-auto max-w-5xl">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>

        {/* The Mock Interface */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden ring-1 ring-slate-900/5 select-none">
          {/* Mock Header */}
          <div className="h-12 border-b border-slate-100 flex items-center px-4 gap-4 bg-slate-50/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
            </div>
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded border border-slate-200 shadow-sm text-xs font-medium text-slate-600">
              <span className="text-slate-400">Campaign:</span> Summer Rewards
            </div>
          </div>

          <div className="flex h-[400px]">
            {/* Mock Sidebar */}
            <div className="w-16 md:w-64 border-r border-slate-100 bg-slate-50/30 flex flex-col p-4 gap-1 hidden md:flex">
              <div className="p-2 bg-slate-100 rounded-md text-xs font-semibold text-slate-900 mb-4">Dashboard</div>
              {['Members', 'Campaigns', 'Wallet Passes', 'Locations', 'Analytics', 'Settings'].map((item, i) => (
                <div key={i} className={`p-2 rounded-md text-sm cursor-default ${i === 0 ? 'bg-white shadow-sm text-slate-900 font-medium' : 'text-slate-500 hover:bg-slate-100/50'}`}>
                  {item}
                </div>
              ))}
            </div>

            {/* Mock Content */}
            <div className="flex-1 bg-white p-6 md:p-8">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Active Members</h3>
                  <p className="text-sm text-slate-500">Real-time wallet pass usage</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-9 w-24 bg-slate-100 rounded-lg"></div>
                  <div className="h-9 w-32 bg-slate-900 rounded-lg"></div>
                </div>
              </div>

              {/* Data Table Mock */}
              <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="grid grid-cols-5 text-xs font-medium text-slate-400 border-b border-slate-100 pb-3 mb-3 uppercase tracking-wider">
                  <div className="col-span-2">Member</div>
                  <div>Status</div>
                  <div>Tier</div>
                  <div className="text-right">Points</div>
                </div>

                {[
                  { name: 'Sofia Davis', email: 'sofia@example.com', status: 'Active', tier: 'Gold', points: '2,450', img: 'https://picsum.photos/32/32?random=1' },
                  { name: 'Jackson Lee', email: 'jackson@example.com', status: 'Active', tier: 'Platinum', points: '14,200', img: 'https://picsum.photos/32/32?random=2' },
                  { name: 'Isabella Nguyen', email: 'isa.n@example.com', status: 'Installed', tier: 'Silver', points: '850', img: 'https://picsum.photos/32/32?random=3' },
                  { name: 'William Chen', email: 'will.c@example.com', status: 'Active', tier: 'Gold', points: '3,100', img: 'https://picsum.photos/32/32?random=4' },
                  { name: 'Emma Wilson', email: 'emma.w@example.com', status: 'Pending', tier: 'Bronze', points: '120', img: 'https://picsum.photos/32/32?random=5' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-5 items-center py-3 border-b border-slate-50 hover:bg-slate-50/50 transition-colors cursor-default group">
                    <div className="col-span-2 flex items-center gap-3">
                      <img src={row.img} alt="" className="w-8 h-8 rounded-full bg-slate-100" />
                      <div>
                        <div className="text-sm font-medium text-slate-900">{row.name}</div>
                        <div className="text-xs text-slate-500">{row.email}</div>
                      </div>
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${row.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                        {row.status}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600">{row.tier}</div>
                    <div className="text-right text-sm font-mono text-slate-900">{row.points}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;