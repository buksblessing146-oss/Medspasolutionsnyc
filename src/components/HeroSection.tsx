import React from 'react';
import { Award, Zap, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { TRUST_INDICATORS } from '../data/medspaData';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const trustIcons = [
    <Award className="w-5 h-5 text-[#0D5C75]" key="award" />,
    <Zap className="w-5 h-5 text-[#0D5C75]" key="zap" />,
    <ShieldCheck className="w-5 h-5 text-[#0D5C75]" key="shield" />,
  ];

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#FAF9F5] border-b border-stone-200/60">
      {/* Full-width visual container */}
      <div className="relative min-h-[640px] md:min-h-[720px] lg:min-h-[780px] flex items-center">
        {/* Background Image with warm subtle luxury overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/yc7cencg/image/upload/v1788570342/Medspa_Branding_Photography__Aura_House_of_Aesthetics_in_Toronto_rszxkl.jpg"
            alt="MediSpa Solutions Luxury Aesthetic Clinic"
            className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Dimmed warm luxury overlay: dimmed the harsh light white wash so the clinic photography has depth and contrast */}
          <div className="absolute inset-0 bg-stone-900/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/85 via-[#FAF9F5]/65 to-[#FAF9F5]/10 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5]/70 via-transparent to-black/10" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-stone-200 shadow-xs mb-6 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0D5C75]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#0D5C75] font-bold">
                Staten Island Premier Aesthetic Sanctuary
              </span>
            </div>

            {/* Headline - Bolder luxury serif styling */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 tracking-tight leading-[1.08] mb-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
              Beauty & Wellness <span className="italic font-bold text-[#0D5C75]">Simplified.</span>
            </h1>

            {/* Subheadline - Bolder font weight for optimal legibility */}
            <p className="text-base sm:text-lg md:text-xl text-stone-800 font-medium leading-relaxed mb-10 max-w-xl">
              Staten Island’s esteemed board-certified nurse practitioner, Marina Shamis, FNP BC, utilizes cutting-edge technology to get you looking and feeling your best.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-[0_4px_20px_rgba(13,92,117,0.22)] hover:shadow-[0_6px_24px_rgba(13,92,117,0.32)] flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center bg-white/95 hover:bg-white text-stone-900 hover:text-[#0D5C75] border border-stone-300 px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-xs hover:shadow-sm"
              >
                View Treatments
              </a>
            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-8 border-t border-stone-300/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                {TRUST_INDICATORS.map((indicator, index) => (
                  <div key={indicator.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/95 border border-stone-200 flex items-center justify-center shrink-0 shadow-xs">
                      {trustIcons[index]}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 tracking-wide font-sans">
                        {indicator.title}
                      </h4>
                      <p className="text-xs text-stone-700 font-medium mt-0.5 leading-snug">
                        {indicator.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
