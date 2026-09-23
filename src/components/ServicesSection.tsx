import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

interface ServiceVodjoItem {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  features: string[];
}

const FEATURED_SERVICES: ServiceVodjoItem[] = [
  {
    id: 'web-dev',
    title: 'Pengembangan Aplikasi Web',
    shortDesc: 'Kami mengembangkan aplikasi web pada berbagai platform open source untuk memastikan pengelolaan anggaran yang efektif.',
    image: '/mockup-pc.png',
    features: [
      'Website profil perusahaan & landing page responsif',
      'Desain modern, cepat dibuka, dan ramah SEO Google',
      'Integrasi tombol WhatsApp & formulir kontak langsung',
      'Domain & cloud hosting berkecepatan tinggi'
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Pengembangan Aplikasi Seluler',
    shortDesc: 'Pengembangan aplikasi seluler yang mudah digunakan membantu berbagai startup dan perusahaan untuk mendefinisikan kembali pengalaman pengguna seluler.',
    image: '/mockup-android.png',
    features: [
      'Aplikasi multi-platform Android & iOS hemat biaya',
      'Antarmuka nyaman dan navigasi simpel bagi pelanggan',
      'Dukungan fitur notifikasi pesan dan promo',
      'Pendampingan rilis resmi di Google Play Store'
    ]
  },
  {
    id: 'system-dev',
    title: 'Pengembangan Sistem Kasir & POS',
    shortDesc: 'Sistem kasir dan POS terintegrasi untuk membantu mengelola transaksi penjualan, stok barang, laporan omzet, hingga pencatatan data secara lebih cepat dan efisien.',
    image: '/mockup-pos.png',
    features: [
        'Pencatatan transaksi kasir & cetak struk otomatis',
        'Pengelolaan stok barang masuk dan keluar',
        'Laporan penjualan dan omzet secara otomatis',
        'Dapat diakses dari HP, laptop, maupun komputer toko'
    ]
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModal, setActiveModal] = useState<ServiceVodjoItem | null>(null);

  return (
    <section id="layanan" className="py-16 sm:py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Rata Kiri Konsisten dengan Seluruh Halaman Lain */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-normal block font-['Outfit'] mb-1">
              Layanan Kami
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
              Layanan Pengembangan Digital
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Kepuasan klien adalah prioritas kami dalam menghadirkan sistem web, aplikasi seluler, dan otomasi yang handal.
          </p>
        </div>

        {/* 3-Column Cards - Kolom Ringkas & Proporsional */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {FEATURED_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-teal-400 transition-all duration-300 group"
            >
              <div>
                {/* Silhouette Device Box (Exact Dark Blueprint as in uploaded photo) */}
                <div className="w-full h-40 sm:h-44 rounded-xl bg-[#0b1016] border border-slate-800/80 flex items-center justify-center p-2 mb-4 overflow-hidden group-hover:border-slate-700 transition-colors">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit'] mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description - Simple & compact */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Button - Pill Outlined Button with Theme Color */}
              <div className="pt-2">
                <button
                  onClick={() => setActiveModal(service)}
                  id={`btn-learn-more-${service.id}`}
                  className="w-full sm:w-auto px-5 py-2 rounded-full border border-slate-300 hover:border-[#0f4c5c] hover:bg-[#0f4c5c] text-slate-700 hover:text-white text-xs font-semibold tracking-wide transition-all duration-200 text-center flex items-center justify-center gap-1.5"
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Detail Layanan */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-xl border border-slate-200 text-slate-900 relative"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-4">
                <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider block mb-1">
                  Detail Layanan
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit'] mb-2">
                  {activeModal.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {activeModal.shortDesc}
                </p>

                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Cakupan Fasilitas & Fitur:
                </h4>
                <div className="space-y-2 mb-6">
                  {activeModal.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const title = activeModal.title;
                      setActiveModal(null);
                      onSelectService(title);
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#0f4c5c] hover:bg-[#0b3844] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>Pilih Layanan Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
