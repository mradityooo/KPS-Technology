import React from 'react';
import { MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%20KPS%20Technology,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website%20atau%20aplikasi."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi WhatsApp KPS Technology"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group border-2 border-white"
    >
      <div className="relative">
        <FaWhatsapp className="w-5 h-5 fill-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-200 rounded-full" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-bold leading-tight">Hubungi Kami</span>
        <span className="text-[10px] text-emerald-100 font-medium leading-none mt-0.5">Konsultasi 100% Gratis</span>
      </div>
    </a>
  );
};
