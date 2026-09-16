import React from 'react';
import { 
  Award, 
  Wallet, 
  Lock, 
  Clock, 
  Headphones, 
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const problemsAndSolutions = [
    {
      problem: 'Programmer Susah Dihubungi & Komunikasi Macet',
      problemDesc: 'Seringkali lewat banyak perantara sales sehingga instruksi desain dan revisi sering salah paham.',
      solution: 'Komunikasi 1-on-1 Langsung dengan Developer',
      solutionDesc: 'Anda berdiskusi langsung dengan tim teknis yang membuat sistem Anda, cepat dan solutif.'
    },
    {
      problem: 'Proyek Molor & Melebihi Anggaran Awal',
      problemDesc: 'Banyak biaya tersembunyi tiba-tiba muncul saat website hampir selesai.',
      solution: 'Jadwal Jelas & Anggaran Transparan',
      solutionDesc: 'Ruang lingkup kerja disepakati di awal tanpa biaya siluman ataupun potongan komisi.'
    },
    {
      problem: 'Ditinggal Setelah Selesai & Sistem Eror',
      problemDesc: 'Ketika website error atau perlu diubah, pembuat lama tidak merespons.',
      solution: 'Garansi Bebas Kendala & Bimbingan Pakai',
      solutionDesc: 'Masa garansi perbaikan gratis dan panduan praktis agar Anda bisa mengelola konten mandiri.'
    }
  ];

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
    },
  ];

  return (
    <section id="kenapa-kami" className="py-20 sm:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block font-['Outfit'] mb-1">
              Komitmen Layanan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Mengapa Memilih KPS Technology
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Komitmen transparansi tanpa biaya tersembunyi, komunikasi langsung tanpa sales, dan garansi pendampingan penuh.
          </p>
        </div>

        {/* Problem vs Solution 3-Column Grid (Venturo Reference) */}
       

        {/* 4 Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
                  {v.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {v.desc}
              </p>
            </div>
          );
        })}
        </div>

        {/* Venturo Guarantee Callout Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0f4c5c] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-700/60 border border-teal-400/30 flex items-center justify-center shrink-0 text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-['Outfit']">
                Garansi Sistem Berjalan Lancar Pasca Serah Terima
              </h3>
              <p className="text-xs sm:text-sm text-teal-100 mt-1 max-w-2xl leading-relaxed">
                Kami memastikan website atau sistem Anda bebas dari kendala kritis saat diluncurkan, dengan masa garansi perbaikan dan pendampingan penuh tanpa biaya tambahan.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/6285117057996?text=Halo%20KPS%20Technology,%20saya%20ingin%20tanya%20mengenai%20garansi%20dan%20pembuatan%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[#0f4c5c] hover:bg-teal-50 font-bold text-xs sm:text-sm transition-all shadow-sm text-center"
          >
            Konsultasi Sekarang
          </a>
        </div>

      </div>
    </section>
  );
};
