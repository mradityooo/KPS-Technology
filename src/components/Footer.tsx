import React from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  ArrowUp,
  ShieldCheck,
  MessageSquare,
  MapPin,
} from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0a272e] text-slate-300 border-t border-teal-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">

        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-teal-900/50"
        >

          {/* Col 1: Brand & Bio */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.4,
            }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="flex items-center gap-3">

              <img
                src="/Logo KPS.jpeg"
                alt="KPS Technology"
                className="w-13 h-13 object-contain"
              />

              <div>
                <span className="font-extrabold text-lg text-white font-['Outfit'] block leading-none">
                  KPS TECHNOLOGY
                </span>

                <span className="text-[11px] text-teal-300 font-medium mt-0.5 block">
                  Software House & Web Development
                </span>
              </div>

            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Solusi website dan sistem digital untuk membantu bisnis Anda
              tampil lebih profesional.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />

              <span>
                Konsultasi & Diskusi Kebutuhan 100% Gratis
              </span>
            </div>
          </motion.div>

          {/* Col 2: Navigation */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.4,
            }}
            className="lg:col-span-2 space-y-3"
          >
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Navigasi Halaman
            </h4>

            <ul className="space-y-2 text-xs text-slate-300">
              {[
                ['Beranda', '#beranda'],
                ['Layanan Kami', '#layanan'],
                ['Hasil Proyek', '#portofolio'],
                ['Klien Kami', '#klien-kami'],
                ['Kemudahan', '#teknologi'],
                ['Tanya Jawab (FAQ)', '#faq'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-teal-300 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Services */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.4,
            }}
            className="lg:col-span-3 space-y-3"
          >
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Layanan Utama
            </h4>

            <ul className="space-y-2 text-xs text-slate-300">
              <li>Website Profil & Perusahaan</li>
              <li>Website Toko Online</li>
              <li>Sistem Kasir (POS) & Stok Gudang</li>
              <li>Aplikasi Mobile Android & iOS</li>
            </ul>
          </motion.div>

          {/* Col 4: Contact */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.4,
            }}
            className="lg:col-span-3 space-y-3"
          >
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Kontak & Konsultasi
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">

              {/* Location */}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />

                <span>
                  Bandar Lampung, Indonesia
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />

                <a
                  href="mailto:halo@kpstechnology.id"
                  className="hover:text-white transition-colors"
                >
                  halo@kpstechnology.id
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />

                <a
                  href="https://wa.me/6285117057996?text=Halo%20KPS%20Technology,%20saya%20tertarik%20konsultasi%20pembuatan%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  +62 851-1705-7996 (WhatsApp)
                </a>
              </div>

            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400"
        >

          {/* Copyright */}
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400" />

            <span>
              © {new Date().getFullYear()} KPS Technology. Seluruh Hak Cipta
              Dilindungi.
            </span>
          </div>

          {/* Back To Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="flex items-center gap-1 text-teal-300 hover:text-white transition-colors font-medium"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>

        </motion.div>

      </div>
    </footer>
  );
};