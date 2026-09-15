import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MessageSquare, 
  ArrowRight 
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (initialInterest?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Tim', href: '#tim-kami' },
    { label: 'Klien', href: '#klien-kami' },
    { label: 'Kemudahan', href: '#teknologi' },
    { label: 'Alur Kerja', href: '#alur-kerja' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200' : 'bg-white border-b border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo - Clean & Professional */}
        <a href="#beranda" className="flex items-center gap-3 group" id="brand-logo-link">
          <div className="w-9 h-9 rounded-lg bg-[#0f4c5c] text-white flex items-center justify-center font-['Outfit'] font-black text-sm tracking-tight shadow-xs">
            KPS
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-base tracking-tight text-slate-900 font-['Outfit'] leading-none">
              KPS Technology
            </span>
            <span className="text-[11px] text-slate-500 font-medium mt-1">
              Software House
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#0f4c5c] hover:bg-slate-100 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/6281234567890?text=Halo%20KPS%20Technology,%20saya%20tertarik%20konsultasi%20website"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors border border-emerald-200"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenConsultation()}
            id="nav-consultation-btn"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0f4c5c] hover:bg-[#0b3844] rounded-lg shadow-xs transition-colors"
          >
            <span>Konsultasi Gratis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Fast Contact Buttons */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="https://wa.me/6281234567890?text=Halo%20KPS%20Technology"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-emerald-600 text-white text-xs flex items-center justify-center shadow-xs"
            aria-label="Chat WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            aria-label="Buka Menu"
            className="p-2 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-700" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-2 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-lg bg-[#0f4c5c] text-white text-xs font-semibold text-center"
            >
              Mulai Konsultasi
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
