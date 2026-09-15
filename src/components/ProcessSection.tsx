import React from 'react';
import { WORKFLOW_STEPS } from '../data/mockData';
import { 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Workflow
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="alur-kerja" className="py-20 sm:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block font-['Outfit'] mb-1">
              Alur Kerja
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Tahapan Pengerjaan Proyek
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Alur transparan dari konsultasi awal, rancangan desain, masa pengerjaan, hingga peluncuran resmi.
          </p>
        </div>

        {/* Steps Grid: 6 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0f4c5c] text-white font-extrabold flex items-center justify-center font-['Outfit'] text-base shadow-xs">
                    {step.stepNumber}
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
                    <Clock className="w-3.5 h-3.5 text-teal-700" />
                    {step.duration}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-slate-900 font-['Outfit'] mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Check */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Hasil yang Anda Terima:
                </span>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{step.keyOutputs[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
              Siap Memulai Proyek Website Anda?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Konsultasikan rencana Anda sekarang dan dapatkan estimasi waktu pengerjaan yang transparan.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#0f4c5c] hover:bg-[#0b3844] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all active:scale-[0.98]"
          >
            Mulai Konsultasi Gratis
          </button>
        </div>

      </div>
    </section>
  );
};
