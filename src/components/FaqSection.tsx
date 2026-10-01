import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-24 bg-white text-slate-900 relative border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

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
              FAQ
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Penjelasan seputar kepemilikan kode sumber, nama domain, estimasi
            waktu, dan dukungan teknis.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="space-y-3"
        >
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: 'easeOut'
                    }
                  }
                }}
                whileHover={{
                  y: -2
                }}
                transition={{
                  duration: 0.2
                }}
                className={`rounded-xl bg-slate-50 border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-teal-300 shadow-sm'
                    : 'border-slate-200 hover:border-teal-200 hover:shadow-sm'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100/70 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">

                    {/* Category */}
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 w-fit shrink-0">
                      {faq.category}
                    </span>

                    {/* Question */}
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit']">
                      {faq.question}
                    </span>

                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0
                    }}
                    transition={{
                      duration: 0.25,
                      ease: 'easeOut'
                    }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-teal-700" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1
                      }}
                      exit={{
                        height: 0,
                        opacity: 0
                      }}
                      transition={{
                        height: {
                          duration: 0.3,
                          ease: 'easeInOut'
                        },
                        opacity: {
                          duration: 0.2
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{
                          y: -8
                        }}
                        animate={{
                          y: 0
                        }}
                        exit={{
                          y: -8
                        }}
                        transition={{
                          duration: 0.25
                        }}
                        className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};