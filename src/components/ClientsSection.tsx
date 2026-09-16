import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { OUR_CLIENTS } from '../data/mockData';

interface ClientsSectionProps {
  onOpenConsultation: (topic?: string) => void;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="klien-kami" className="py-16 sm:py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block font-['Outfit'] mb-1">
              Mitra & Relasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Our Client
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Dipercaya oleh berbagai pelaku usaha dan instansi dalam digitalisasi operasional.
          </p>
        </div>

        {/* Pure Logos Grid - Centered Horizontally & Vertically */}
        <div className="flex flex-wrap items-center justify-center gap-0 sm:gap-2 lg:gap-4 max-w-5xl mx-auto mb-14">
          {OUR_CLIENTS.map((client) => (
            <div
              key={client.id}
              title={client.name}
              className="w-32 h-20 flex items-center justify-center group"
            >
              <img
                src={client.logo}
                alt={client.name}
                 className={`${client.logoClass} object-contain opacity-80 group-hover:opacity-100 transition-all`}
              />
            </div>
          ))}
        </div>

        {/* Client Collaboration CTA Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
              Ingin Bisnis Anda Memiliki Website & Sistem Sendiri?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Diskusikan kebutuhan Anda bersama tim pengembang kami. Bebas konsultasi tanpa biaya.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="https://wa.me/6285117057996?text=Halo%20KPS%20Technology,%20saya%20tertarik%20untuk%20menjadi%20klien%20dan%20ingin%20konsultasi%20website/aplikasi."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4 fill-white" />
              <span>Hubungi WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenConsultation('Konsultasi Klien Baru')}
              className="px-5 py-3 rounded-xl bg-[#0f4c5c] hover:bg-[#0b3844] text-white font-semibold text-xs sm:text-sm transition-all shadow-xs text-center"
            >
              Konsultasi Proyek
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
