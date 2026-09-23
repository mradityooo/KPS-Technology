import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Users, 
  Clock,
  Sparkles
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface HeroSectionProps {
  onOpenConsultation: (topic?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="beranda" className="pt-24 sm:pt-32 pb-14 sm:pb-18 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Main Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold mb-4 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Software House & Web Development</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-['Outfit'] leading-tight mb-4">
              Bangun Website & Aplikasi Bisnis <span className="text-[#0f4c5c]">Sesuai Kebutuhan Anda</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
              KPS Technology melayani pembuatan website profil instansi, toko online, hingga sistem informasi kustom. Desain profesional, cepat dibuka, dan didampingi langsung oleh tim pengembang kami.
            </p>

            {/* Quick Benefits */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 mb-8 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                100% Hak Milik Anda
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Domain & Server Siap Pakai
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Garansi Teknis & Bimbingan
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConsultation('Konsultasi Kebutuhan Software')}
                id="hero-cta-consultation"
                className="px-5 py-3 rounded-xl bg-[#0f4c5c] hover:bg-[#0b3844] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>Mulai Konsultasi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/6285117057996?text=Halo%20KPS%20Technology,%20saya%20tertarik%20konsultasi%20website"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Visual / Summary Card - Clean Real Engineering Spec */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                <div>
                  <span className="text-[11px] font-semibold text-teal-800 uppercase tracking-wider block font-['Outfit']">
                    Spesifikasi Layanan
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-['Outfit'] mt-0.5">
                    Standar Mutu Proyek
                  </h3>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  KPS Ready
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#0f4c5c]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Kepemilikan Penuh</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">Source code, domain, dan server diserahkan seutuhnya tanpa biaya lisensi bulanan.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#0f4c5c]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Diskusi Langsung dengan Tim</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">Berkomunikasi langsung dengan tim teknis kami agar kebutuhan sistem Anda tepat sasaran.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#0f4c5c]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Jadwal Jelas & Tepat Waktu</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">Setiap tahapan memiliki estimasi waktu pengerjaan yang terukur dan transparan.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#0f4c5c]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Garansi & Pendampingan</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">Dukungan teknis pasca-rilis serta panduan pemakaian sistem secara mandiri.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
