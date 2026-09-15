import React from 'react';
import { 
  Users, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/mockData';

interface TeamSectionProps {
  onOpenConsultation: (topic?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="tim-kami" className="py-20 sm:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block font-['Outfit'] mb-1">
              Tim Pengembang
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Pengembang Langsung Proyek Anda
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Berkomunikasi dan berdiskusi langsung dengan programmer & desainer yang merancang sistem Anda.
          </p>
        </div>

        {/* Team Members in Compact Columns (Seperti Kolom Mitra Bisnis) - Dirata Tengah */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-teal-400 hover:shadow-xs transition-all duration-200 group"
            >
              {/* Compact Avatar Photo */}
              <div className="relative shrink-0">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover border border-slate-200 shadow-2xs group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>

              {/* Name & Position */}
              <div className="text-left">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-['Outfit'] group-hover:text-[#0f4c5c] transition-colors leading-tight">
                  {member.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Communication Ribbon (Venturo-Style Clean Petrol/Teal) */}
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 text-teal-700">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit']">
                Komunikasi Langsung Tanpa Perantara Sales
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Diskusi teknis dan revisi langsung ditangani bersama programmer yang mengerjakan sistem Anda.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenConsultation('Diskusi dengan Tim Teknis')}
            className="shrink-0 w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0f4c5c] hover:bg-[#0b3844] text-white font-semibold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2"
          >
            <span>Hubungi Tim Kami</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
