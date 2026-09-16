/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TeamSection } from './components/TeamSection';
import { ClientsSection } from './components/ClientsSection';
import { TechStackSection } from './components/TechStackSection';
import { ProcessSection } from './components/ProcessSection';
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
      {/* Top Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Corporate Software Showcase & Value Props */}
        <HeroSection onOpenConsultation={() => handleOpenConsultation('Konsultasi Kebutuhan Software')} />

        {/* 2. Layanan Software House Resmi */}
        <ServicesSection onSelectService={(serviceTitle) => handleOpenConsultation(serviceTitle)} />

        {/* 3. Portofolio Proyek Nyata Instansi & Bisnis */}
        <PortfolioSection onConsultProject={(projectTitle) => handleOpenConsultation(`Studi Kasus: ${projectTitle}`)} />

        {/* 4. Struktur Karyawan */}
        <TeamSection onOpenConsultation={(topic) => handleOpenConsultation(topic)} />

        {/* 5. Klien & Mitra Kami (Our Clients) */}
        <ClientsSection onOpenConsultation={(topic) => handleOpenConsultation(topic)} />

        {/* 6. Kemudahan & Keunggulan Teknologi
        <TechStackSection /> */}

        {/* 8. Mengapa Memilih KPS Technology */}
        <WhyUsSection />

        {/* 9. Testimoni Klien */}
        <TestimonialsSection />

        {/* 10. Pertanyaan Umum (FAQ) */}
        <FaqSection />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation('Footer CTA')} />

      {/* Floating WhatsApp Quick Consultation Button */}
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
