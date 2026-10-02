import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';
import { WaveDivider } from './WaveDivider';

interface HeroSectionProps {
  onOpenConsultation: (topic?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section
      id="beranda"
      className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-white text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-8 text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>Software House & Web Development</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-['Outfit'] leading-tight mb-5 max-w-4xl"
            >
              Bangun Website & Aplikasi Bisnis{' '}
              <span className="text-[#0f4c5c]">
                Sesuai Kebutuhan Anda
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed mb-7 max-w-2xl"
            >
              KPS Technology melayani pembuatan website profil instansi,
              toko online, hingga sistem informasi kustom. Desain profesional,
              cepat dibuka, dan didampingi langsung oleh tim pengembang kami.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 mb-8 font-medium"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                100% Hak Milik Anda
              </span>

              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Domain & Server Siap Pakai
              </span>

              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Garansi Teknis & Bimbingan
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              {/* Consultation */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() =>
                  onOpenConsultation('Konsultasi Kebutuhan Software')
                }
                id="hero-cta-consultation"
                className="px-5 py-3 rounded-lg bg-[#0f4c5c] hover:bg-[#0b3844] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-colors"
              >
                <span>Mulai Konsultasi</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/6285117057996?text=Halo%20KPS%20Technology,%20saya%20tertarik%20konsultasi%20website"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>
      <WaveDivider color='#f8fafc'/>
    </section>
  );
};