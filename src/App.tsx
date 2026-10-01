 /**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ClientsSection } from './components/ClientsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState<string>('');

  const handleOpenConsultation = (topic?: string) => {
    setConsultationTopic(topic || '');
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0f4c5c] selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">

      {/* Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main>

        {/* 1. Hero */}
        <HeroSection
          onOpenConsultation={() =>
            handleOpenConsultation('Konsultasi Kebutuhan Software')
          }
        />

        {/* 2. Layanan */}
        <ServicesSection
          onSelectService={(serviceTitle) =>
            handleOpenConsultation(serviceTitle)
          }
        />

        {/* 3. Portofolio */}
        <PortfolioSection
          onConsultProject={(projectTitle) =>
            handleOpenConsultation(`Studi Kasus: ${projectTitle}`)
          }
        />

        {/* 4. Klien & Mitra */}
        <ClientsSection
          onOpenConsultation={(topic) =>
            handleOpenConsultation(topic)
          }
        />

        {/* 5. Mengapa KPS */}
        <WhyUsSection />

        {/* 6. Testimoni */}
        <TestimonialsSection />

        {/* 7. FAQ */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() =>
          handleOpenConsultation('Footer CTA')
        }
      />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialTopic={consultationTopic}
      />

    </div>
  );
}