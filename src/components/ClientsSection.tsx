import React from 'react';
import { motion } from 'motion/react';
import { OUR_CLIENTS } from '../data/mockData';

interface ClientsSectionProps {
  onOpenConsultation: (topic?: string) => void;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({
  onOpenConsultation
}) => {
  return (
    <section
      id="klien-kami"
      className="py-16 sm:py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200"
        >
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-normal block font-['Outfit'] mb-0">
              Mitra & Relasi
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Our Client
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
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
                staggerChildren: 0.12
              }
            }
          }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 lg:gap-7 max-w-5xl mx-auto mb-14"
        >
          {OUR_CLIENTS.map((client) => (
            <motion.div
              key={client.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  scale: 0.95
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut'
                  }
                }
              }}
              whileHover={{
                y: -5,
                scale: 1.05
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut'
              }}
              title={client.name}
              className="w-40 h-24 flex items-center justify-center group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.logoClass} object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};