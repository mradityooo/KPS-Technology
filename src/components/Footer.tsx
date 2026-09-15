import React from 'react';
import { 
  Mail, 
  ArrowUp, 
  ShieldCheck, 
  MessageSquare,
  Sparkles,
  MapPin
} from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a272e] text-slate-300 border-t border-teal-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-teal-900/50">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
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
              Mitra pembuatan website profil bisnis, toko online, aplikasi mobile, dan sistem bisnis kustom. Kami hadir membantu bisnis Anda tampil profesional dengan komunikasi langsung, transparan, dan bergaransi.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Konsultasi & Diskusi Kebutuhan 100% Gratis</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#beranda" className="hover:text-teal-300 transition-colors">Beranda</a></li>
              <li><a href="#layanan" className="hover:text-teal-300 transition-colors">Layanan Kami</a></li>
              <li><a href="#portofolio" className="hover:text-teal-300 transition-colors">Hasil Proyek</a></li>
              <li><a href="#tim-kami" className="hover:text-teal-300 transition-colors">Tim Kami</a></li>
              <li><a href="#klien-kami" className="hover:text-teal-300 transition-colors">Klien Kami</a></li>
              <li><a href="#teknologi" className="hover:text-teal-300 transition-colors">Kemudahan</a></li>
              <li><a href="#alur-kerja" className="hover:text-teal-300 transition-colors">Cara Kerja</a></li>
              <li><a href="#faq" className="hover:text-teal-300 transition-colors">Tanya Jawab (FAQ)</a></li>
            </ul>
          </div>

          {/* Col 3: Layanan Spesialis */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Website Profil Usaha & Perusahaan</li>
              <li>Website Toko Online & Integrasi WhatsApp</li>
              <li>Sistem Kasir (POS) & Stok Gudang</li>
              <li>Aplikasi Mobile Android & iOS</li>
              <li>Redesign & Optimalisasi Website Lama</li>
              <li>Domain, Hosting Cepat & Bimbingan Pakai</li>
            </ul>
          </div>

          {/* Col 4: Kontak & Konsultasi */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Kontak & Konsultasi
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Jalan Nusantara, Bandar Lampung.
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:halo@kpstechnology.id" className="hover:text-white transition-colors">
                  halo@kpstechnology.id
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/6281234567890?text=Halo%20KPS%20Technology,%20saya%20tertarik%20konsultasi%20pembuatan%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  +62 812-3456-7890 (WhatsApp)
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0f4c5c] hover:bg-[#0b3844] text-white font-semibold text-xs transition-colors text-center"
                >
                  Mulai Konsultasi Gratis
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>© {new Date().getFullYear()} KPS Technology. Seluruh Hak Cipta Dilindungi.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-teal-300 hover:text-white transition-colors font-medium"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
