import React from 'react';
import { motion } from 'motion/react';
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
    <section
      id="teknologi"
      className="py-20 sm:py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200"
        >
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-normal block font-['Outfit'] mb-1">
              Standar Kualitas
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Kemudahan & Keandalan Sistem
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Sistem yang kami bangun dirancang praktis, ringan dibuka di HP,
            serta mudah dikelola oleh siapa saja tanpa keahlian teknis.
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TECH_BENEFITS.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                    ease: 'easeOut'
                  }
                }
              }}
              whileHover={{
                y: -5
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut'
              }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>

                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3
                    }}
                    transition={{
                      duration: 0.25
                    }}
                    className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors"
                  >
                    {getIcon(item.iconName)}
                  </motion.div>

                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-800 transition-colors">
                    Standar KPS
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 font-['Outfit'] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

              </div>

              {/* Value Point */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-800">

                <motion.div
                  whileHover={{
                    scale: 1.15
                  }}
                >
                  <Check className="w-4 h-4 text-teal-700 shrink-0" />
                </motion.div>

                <span>{item.tag}</span>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};