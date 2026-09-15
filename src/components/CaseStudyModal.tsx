import React from 'react';
import { motion } from 'motion/react';
import { PortfolioProject } from '../types';
import { 
  X, 
  TrendingUp, 
  Layers, 
  Building2,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onConsultProject: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onConsultProject,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Modal Top Banner */}
        <div className="p-6 sm:p-8 bg-[#0f4c5c] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-teal-900/60 hover:bg-teal-900 text-teal-100 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-teal-200 uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4 text-teal-300" />
            <span>{project.client} • Tahun {project.completionYear}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mb-2.5">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-teal-100 leading-relaxed max-w-2xl">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-teal-900/60 border border-teal-600/40 text-teal-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800">
          
          {/* Key Impact Metrics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-teal-700" />
              <span>Dampak Bisnis & Hasil Terukur</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center sm:text-left">
                  <p className="text-2xl font-extrabold text-[#0f4c5c] font-['Outfit']">{m.value}</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge vs Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Kendala Awal Klien</span>
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-teal-50 border border-teal-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <span>Solusi KPS Technology</span>
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlight */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <Layers className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Spesifikasi & Keunggulan Sistem
              </h5>
              <p className="text-xs text-slate-600 mt-1 font-mono">
                {project.architectureHighlight}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Tutup
          </button>
          <button
            onClick={() => {
              onClose();
              onConsultProject(project.title);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0f4c5c] hover:bg-[#0b3844] shadow-xs transition-all"
          >
            <span>Konsultasi Pembuatan Sistem Serupa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
