import React from 'react';
import { 
  Zap, 
  Smartphone, 
  MessageSquare, 
  Sliders, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  Check
} from 'lucide-react';
import { TECH_BENEFITS } from '../data/mockData';

export const TechStackSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-teal-700" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-indigo-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#0f4c5c]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-teal-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section id="teknologi" className="py-20 sm:py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block font-['Outfit'] mb-1">
              Standar Kualitas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Kemudahan & Keandalan Sistem
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Sistem yang kami bangun dirancang praktis, ringan dibuka di HP, serta mudah dikelola oleh siapa saja tanpa keahlian teknis.
          </p>
        </div>

        {/* 6 Simple Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_BENEFITS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    Standar KPS
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-['Outfit'] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Real Value Point */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-800">
                <Check className="w-4 h-4 text-teal-700 shrink-0" />
                <span>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
