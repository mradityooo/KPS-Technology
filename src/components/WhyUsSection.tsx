import React from 'react';
import { motion } from 'motion/react';
import {
  Lock,
  Clock,
  Headphones,
  ShieldCheck
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const values = [
    {
      icon: Lock,
      title: '100% Hak Milik Anda',
      desc: 'Domain, hosting, dan file website diserahkan penuh kepada Anda tanpa ikatan sewa bulanan.'
    },
    {
      icon: Clock,
      title: 'Pengerjaan Tepat Waktu',
      desc: 'Website profil selesai dalam 5-10 hari kerja dengan jadwal pengerjaan yang terencana.'
    },
    {
      icon: Headphones,
      title: 'Garansi & Bantuan Cepat',
      desc: 'Garansi perbaikan gratis jika terjadi kendala teknis dan siap konsultasi kapan saja lewat WA.'
    }
  ];

  return (
    <section
      id="kenapa-kami"
      className="py-20 sm:py-24 bg-white text-slate-900 relative border-b border-slate-200 overflow-hidden"
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
              Komitmen Layanan
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Mengapa Memilih KPS Technology
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Komitmen transparansi tanpa biaya tersembunyi, komunikasi langsung
            tanpa sales, dan garansi pendampingan penuh.
          </p>
        </motion.div>

        {/* Value Cards */}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
        >
          {values.map((v, i) => {
            const Icon = v.icon;

            return (
              <motion.div
                key={i}
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
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 2
                    }}
                    transition={{
                      duration: 0.25
                    }}
                    className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
                    {v.title}
                  </h3>

                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut'
          }}
          className="p-6 sm:p-8 rounded-2xl bg-[#0f4c5c] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >

          {/* Banner Content */}
          <div className="flex items-start gap-4">

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2
              }}
              className="w-12 h-12 rounded-xl bg-teal-700/60 border border-teal-400/30 flex items-center justify-center shrink-0 text-white"
            >
              <ShieldCheck className="w-6 h-6" />
            </motion.div>

            <div>
              <h3 className="text-base sm:text-lg font-bold font-['Outfit']">
                Garansi Sistem Berjalan Lancar Pasca Serah Terima
              </h3>

              <p className="text-xs sm:text-sm text-teal-100 mt-1 max-w-2xl leading-relaxed">
                Kami memastikan website atau sistem Anda bebas dari kendala
                kritis saat diluncurkan, dengan masa garansi perbaikan dan
                pendampingan penuh tanpa biaya tambahan.
              </p>
            </div>

          </div>

          {/* CTA */}
          <motion.a
            href="https://wa.me/6285117057996?text=Halo%20KPS%20Technology,%20saya%20ingin%20tanya%20mengenai%20garansi%20dan%20pembuatan%20website"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
              scale: 1.02
            }}
            whileTap={{
              scale: 0.98
            }}
            className="shrink-0 w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[#0f4c5c] hover:bg-teal-50 font-bold text-xs sm:text-sm transition-all shadow-sm text-center"
          >
            Konsultasi Sekarang
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
};