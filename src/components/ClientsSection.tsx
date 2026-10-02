import React from 'react';
import { motion } from 'motion/react';
import { OUR_CLIENTS } from '../data/mockData';
import { WaveDivider } from './WaveDivider';

interface ClientsSectionProps {
  onOpenConsultation: (topic?: string) => void;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section
      id="klien-kami"
      className="py-16 sm:py-24 bg-slate-50 text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200"
        >
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-normal block font-['Outfit']">
              Mitra & Relasi
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Our Client
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Dipercaya oleh berbagai pelaku usaha dan instansi dalam digitalisasi
            operasional.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-12 sm:gap-y-10 lg:gap-x-16 max-w-5xl mx-auto"
        >
          {OUR_CLIENTS.map((client) => (
            <motion.div
              key={client.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 12,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                  },
                },
              }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              title={client.name}
              className="w-36 sm:w-40 h-20 sm:h-24 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.logoClass} object-contain opacity-75 hover:opacity-100 transition-opacity duration-200`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
};