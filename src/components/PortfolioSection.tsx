import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/mockData';
import { PortfolioProject } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface PortfolioSectionProps {
  onConsultProject: (title: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onConsultProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioProject | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'enterprise', label: 'Sistem Informasi & ERP' },
    { id: 'mobile', label: 'Aplikasi Mobile (Android/iOS)' },
    { id: 'web', label: 'Website & Toko Online' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portofolio" className="py-20 sm:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block font-['Outfit'] mb-1">
              Portofolio Proyek
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
              Proyek yang Telah Selesai
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#0f4c5c] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid - Simplified: Photo, Project Name, Description, & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-teal-500 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 1. Foto Proyek */}
                <div className="h-48 sm:h-52 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={project.imageUrl || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Content: Nama, Deskripsi, Bahasa */}
                <div className="p-6">
                  {/* 2. Nama Projek */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit'] mb-2.5 group-hover:text-[#0f4c5c] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* 3. Deskripsi */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* 4. Bahasa & Teknologi yang Digunakan */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2 font-['Outfit']">
                      Bahasa & Teknologi:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="text-xs font-semibold text-[#0f4c5c] hover:text-[#0a3641] flex items-center gap-1"
                >
                  <span>Lihat Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onConsultProject(project.title)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-900"
                >
                  Konsultasi Serupa
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onConsult={() => {
          if (selectedCaseStudy) {
            onConsultProject(`Studi Kasus: ${selectedCaseStudy.title}`);
            setSelectedCaseStudy(null);
          }
        }}
      />
    </section>
  );
};
