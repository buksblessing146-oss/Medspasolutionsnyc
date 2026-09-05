import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Sparkles, Clock, MapPin, Mail } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Treatments', href: '#treatments' },
    { name: 'Why MediSpa', href: '#why-us' },
    { name: 'About Marina', href: '#about-marina' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top subtle announcement bar */}
      <div className="bg-[#FAF9F5] border-b border-stone-200/60 px-4 py-2 text-xs text-stone-600 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-stone-700">
              <Sparkles className="w-3.5 h-3.5 text-[#0D5C75]" />
              Staten Island Medical Aesthetics Sanctuary
            </span>
            <span className="flex items-center gap-1.5 text-stone-500">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              Mon - Sat: 9:00 AM - 6:30 PM
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:MSHAMISBUS@GMAIL.COM"
              className="flex items-center gap-1.5 font-medium text-stone-600 hover:text-[#0D5C75] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0D5C75]" />
              MSHAMISBUS@GMAIL.COM
            </a>
            <a
              href="tel:7189877720"
              className="flex items-center gap-1.5 font-medium text-[#0D5C75] hover:text-[#0A4D63] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (718) 987-7720
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200/70 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif-luxury text-2xl sm:text-[26px] tracking-[0.18em] text-stone-900 uppercase font-semibold leading-none">
              MediSpa
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.28em] text-[#0D5C75] uppercase mt-1.5 font-medium">
              Solutions • Aesthetics
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] tracking-wider uppercase text-stone-600 hover:text-[#0D5C75] font-medium transition-colors duration-200 py-1 border-b border-transparent hover:border-[#0D5C75]/40"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:3108447720"
              className="text-xs uppercase tracking-wider text-stone-700 hover:text-[#0D5C75] font-semibold flex items-center gap-2 px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#0D5C75]" />
              <span className="hidden xl:inline">(310) 844-7720</span>
            </a>

            <button
              id="header-book-btn"
              onClick={() => onOpenBooking()}
              className="bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Consultation
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              id="header-book-mobile-btn"
              onClick={() => onOpenBooking()}
              className="bg-[#0D5C75] text-white px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-[#0D5C75] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F5] border-b border-stone-200 px-6 py-5 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium tracking-wider uppercase text-stone-700 hover:text-[#0D5C75] py-2 border-b border-stone-200/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href="tel:3108447720"
                className="flex items-center justify-center gap-2 text-stone-800 text-sm font-medium py-2.5 border border-stone-300 rounded-full"
              >
                <Phone className="w-4 h-4 text-[#0D5C75]" />
                Call Concierge: (310) 844-7720
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#0D5C75] text-white py-3 rounded-full text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
