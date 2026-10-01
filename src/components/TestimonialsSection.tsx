import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="py-20 sm:py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
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
              Ulasan Klien
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Pengalaman Mitra Usaha
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Cerita pengalaman langsung para pemilik usaha yang telah
            mempercayakan pembuatan sistem digital kepada KPS Technology.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS_DATA.map((t) => (
            <motion.div
              key={t.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: 'easeOut'
                  }
                }
              }}
              whileHover={{
                y: -6
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut'
              }}
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-teal-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>

                {/* Rating & Status */}
                <div className="flex items-center justify-between mb-4">

                  {/* Stars */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.06
                        }
                      }
                    }}
                    className="flex items-center gap-1 text-amber-400"
                  >
                    {[...Array(t.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: {
                            opacity: 0,
                            scale: 0.5
                          },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 0.25
                            }
                          }
                        }}
                      >
                        <Star className="w-4 h-4 fill-amber-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Status */}
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Proyek Selesai
                  </span>
                </div>

                {/* Quote */}
                <div className="relative">

                  <MessageSquareQuote className="absolute -top-1 -left-1 w-6 h-6 text-teal-100 group-hover:text-teal-200 transition-colors" />

                  <p className="relative pl-7 text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>

                </div>

                {/* Project Scope */}
                <p className="text-[11px] text-teal-900 font-semibold mb-4 bg-teal-50/70 p-2.5 rounded-lg border border-teal-100">
                  Proyek: {t.projectScope}
                </p>

              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">

                <motion.img
                  src={t.avatar}
                  alt={t.name}
                  whileHover={{
                    scale: 1.08
                  }}
                  transition={{
                    duration: 0.25
                  }}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />

                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-['Outfit']">
                    {t.name}
                  </h4>

                  <p className="text-xs text-slate-500">
                    {t.role}, {t.company}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};