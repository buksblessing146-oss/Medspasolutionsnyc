import React from 'react';
import { Award, GraduationCap, Sparkles, CheckCircle } from 'lucide-react';

interface AboutMarinaSectionProps {
  onOpenBooking: () => void;
}

export const AboutMarinaSection: React.FC<AboutMarinaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about-marina" className="py-20 md:py-28 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Portrait Column (Span 5) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle luxury outer frame accent */}
              <div className="absolute -inset-3 rounded-2xl border border-[#0D5C75]/20 -z-10 translate-x-2 translate-y-2 hidden sm:block" />

              <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(13,92,117,0.12)] border border-stone-200 bg-stone-100 aspect-[3/4]">
                <img
                  src="https://res.cloudinary.com/yc7cencg/image/upload/v1788571058/741648745_18471792826128116_919630592167634210_n_1_f5ahfz.jpg"
                  alt="Marina Shamis, FNP BC - Clinical Director & Founder of MediSpa Solutions"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

                {/* Floating badge over image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-stone-200/80 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#0D5C75]">
                        Clinical Director & Founder
                      </p>
                      <h4 className="font-serif-luxury text-lg font-semibold text-stone-900">
                        Marina Shamis, FNP BC
                      </h4>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-stone-100 rounded text-stone-600 border border-stone-200">
                      FNP-BC Certified
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Pill */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#FAF9F5] border border-stone-200 px-4 py-2.5 rounded-full shadow-sm hidden sm:flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0D5C75]" />
                <span className="text-xs font-medium text-stone-800">
                  15+ Years Clinical Artistry
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Biography Column (Span 7) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C75]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#0D5C75] font-bold">
                Meet The Founder
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              The Art of Subtle, <br className="hidden sm:inline" />
              <span className="italic font-bold text-[#0D5C75]">Harmonic Rejuvenation</span>
            </h2>

            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-700 mb-6 font-sans">
              Marina Shamis, FNP BC — Staten Island’s Esteemed Board-Certified Nurse Practitioner
            </h3>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base font-medium leading-relaxed mb-8">
              <p>
                Staten Island’s esteemed board-certified nurse practitioner, Marina Shamis, FNP BC,
                utilizes cutting-edge medical technology and master aesthetic technique to get you looking
                and feeling your absolute best.
              </p>
              <p>
                Her clinical philosophy centers on "undetectable aesthetics" — preserving the natural dynamism,
                character, and grace of each patient's face while softening fatigue, restoring lost volume,
                and reversing cellular photoaging through personalized, science-backed treatments.
              </p>
            </div>

            {/* Certifications & Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-stone-200/80">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#0D5C75] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                    Master Aesthetic Injector
                  </h4>
                  <p className="text-xs text-stone-700 font-medium mt-0.5">
                    Esteemed clinical injector with thousands of successful patient treatments
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#0D5C75] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                    Board-Certified Nurse Practitioner
                  </h4>
                  <p className="text-xs text-stone-700 font-medium mt-0.5">
                    FNP-BC Board Certified • Advanced Anatomical Expertise
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#0D5C75] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                    Advanced Laser Certified
                  </h4>
                  <p className="text-xs text-stone-700 font-medium mt-0.5">
                    Specialized in AdvaTX Dual-Wavelength Laser & RF Rejuvenation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#0D5C75] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                    National Clinical Faculty
                  </h4>
                  <p className="text-xs text-stone-500 font-light mt-0.5">
                    Educator for advanced complication prevention and micro-cannula protocols
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Signature Design Element */}
            <div className="pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="font-signature text-3xl sm:text-4xl text-[#0D5C75] opacity-90 select-none">
                  Marina K., MSN, APRN
                </div>
                <p className="text-[11px] uppercase tracking-widest text-stone-400 mt-1 font-sans">
                  Founder & Clinical Director • MediSpa Solutions
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer shrink-0 self-start sm:self-auto"
              >
                Schedule with Marina
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
