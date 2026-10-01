import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenConsultation: (topic?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="beranda"
      className="pt-24 sm:pt-32 pb-14 sm:pb-18 bg-white text-slate-900 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">

          {/* Main Left Content */}
          <div className="lg:col-span-7 text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut'
              }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold mb-4 border border-slate-200"
            >
              <motion.span
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-2 h-2 rounded-full bg-teal-600"
              />

              <span>Software House & Web Development</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: 'easeOut'
              }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-['Outfit'] leading-tight mb-4"
            >
              Bangun Website & Aplikasi Bisnis{' '}
              <span className="text-[#0f4c5c]">
                Sesuai Kebutuhan Anda
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: 'easeOut'
              }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl"
            >
              KPS Technology melayani pembuatan website profil instansi, toko
              online, hingga sistem informasi kustom. Desain profesional,
              cepat dibuka, dan didampingi langsung oleh tim pengembang kami.
            </motion.p>

            {/* Quick Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.45,
                ease: 'easeOut'
              }}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 mb-8 font-medium"
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                100% Hak Milik Anda
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Domain & Server Siap Pakai
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Garansi Teknis & Bimbingan
              </motion.span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: 'easeOut'
              }}
              className="flex flex-wrap items-center gap-3"
            >
              {/* Consultation */}
              <motion.button
                whileHover={{
                  y: -2,
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                onClick={() =>
                  onOpenConsultation('Konsultasi Kebutuhan Software')
                }
                id="hero-cta-consultation"
                className="px-5 py-3 rounded-xl bg-[#0f4c5c] hover:bg-[#0b3844] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>Mulai Konsultasi</span>

                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/6285117057996?text=Halo%20KPS%20Technology,%20saya%20tertarik%20konsultasi%20website"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                whileHover={{
                  y: -2,
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>
            </motion.div>
          </div>

          {/* 
            Right Visual / Summary Card
            Saat ini sengaja tetap nonaktif sesuai desain kamu.
          */}
          
        </div>
      </div>
    </section>
  );
};