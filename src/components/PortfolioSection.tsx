import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/mockData';
import { WaveDivider } from './WaveDivider';

interface PortfolioSectionProps {
  onConsultProject: (title: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onConsultProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'enterprise', label: 'Sistem Informasi & ERP' },
    { id: 'mobile', label: 'Aplikasi Mobile (Android/iOS)' },
    { id: 'web', label: 'Website & Toko Online' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="portofolio"
      className="relative py-20 sm:py-24 bg-white text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-slate-200"
        >
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-normal block font-['Outfit'] mb-1">
              Portofolio Proyek
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
              Proyek yang Telah Selesai
            </h2>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-[#0f4c5c] text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Cards */}
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                  },
                },
              }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>

                {/* Project Image */}
                <div className="h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={
                      project.imageUrl ||
                      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
                    }
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">

                  {/* Project Name */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit'] mb-2.5 leading-snug hover:text-[#0f4c5c] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Technologies */}
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

              {/* Action Footer */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">

                {/* Lihat Detail */}
                <button
                  onClick={() => {
                    if (project.websiteUrl) {
                      window.open(project.websiteUrl, '_blank');
                    }
                  }}
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
                >
                  Lihat Detail
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {/* Konsultasi */}
                <button
                  onClick={() => onConsultProject(project.title)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Konsultasi Serupa
                </button>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <WaveDivider
        fromColor="#f8fafc"
        toColor="#ffffff"
      />
    </section>
  );
};