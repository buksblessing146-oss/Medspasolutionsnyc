import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterSectionProps {
  onOpenBooking: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#FAF9F5] border-t border-stone-200/90 text-stone-700 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-200">
          {/* Column 1: Brand & Philosophy (Span 4) */}
          <div className="lg:col-span-4">
            <div className="flex flex-col mb-6">
              <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.16em] text-stone-900 uppercase font-bold">
                MediSpa
              </span>
              <span className="text-xs font-sans tracking-[0.26em] text-[#0D5C75] uppercase mt-1 font-bold">
                Solutions • Staten Island
              </span>
            </div>
            <p className="text-stone-700 text-xs sm:text-sm font-medium leading-relaxed mb-6 max-w-sm">
              An elevated medical aesthetics practice founded by Marina Shamis, FNP BC.
              Specializing in anatomical facial harmonization, advanced AdvaTX laser rejuvenation,
              and personalized aesthetic wellness care.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/marina.shamis/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-[#0D5C75] hover:border-[#0D5C75] transition-colors shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Medispa-Solutions-227805241103859/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-[#0D5C75] hover:border-[#0D5C75] transition-colors shadow-xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:MSHAMISBUS@GMAIL.COM"
                aria-label="Email MSHAMISBUS@GMAIL.COM"
                className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-[#0D5C75] hover:border-[#0D5C75] transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Clinical Treatments (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#0D5C75] mb-5">
              Aesthetic Treatments
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-700 font-medium">
              <li>
                <a href="#treatments" className="hover:text-[#0D5C75] transition-colors">
                  Neuromodulators (Botox & Dysport)
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#0D5C75] transition-colors">
                  Dermal Fillers & Sculptra
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#0D5C75] transition-colors">
                  Sciton® BBL HERO Phototherapy
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#0D5C75] transition-colors">
                  Morpheus8 RF Microneedling
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#0D5C75] transition-colors">
                  Hydrafacial™ Syndeo Medical
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#0D5C75] transition-colors">
                  Regenerative Exosome Infusions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#0D5C75] mb-5">
              Practice
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-700 font-medium">
              <li>
                <a href="#about-marina" className="hover:text-[#0D5C75] transition-colors">
                  About Marina
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#0D5C75] transition-colors">
                  The Difference
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-[#0D5C75] transition-colors">
                  Brands We Offer
                </a>
              </li>
              <li>
                <a href="#financing" className="hover:text-[#0D5C75] transition-colors">
                  Cherry Financing
                </a>
              </li>
              <li>
                <a href="#whats-new" className="hover:text-[#0D5C75] transition-colors">
                  What's New
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#0D5C75] font-bold hover:underline text-left cursor-pointer"
                >
                  Book Online
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Clinic Details & Concierge (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#0D5C75] mb-5">
              Sanctuary Details
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0D5C75] shrink-0 mt-0.5" />
                <span>
                  Staten Island, NY<br />
                  Serving the Greater New York Area
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0D5C75] shrink-0" />
                <a href="tel:7189877720" className="hover:text-[#0D5C75] font-bold">
                  (718) 987-7720
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0D5C75] shrink-0" />
                <a href="mailto:MSHAMISBUS@GMAIL.COM" className="hover:text-[#0D5C75] font-medium">
                  MSHAMISBUS@GMAIL.COM
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#0D5C75] shrink-0 mt-0.5" />
                <span>
                  Monday - Friday: 9:00 AM - 6:30 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: By Private Appointment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Regulatory Disclaimer */}
        <div className="py-8 text-[11px] text-stone-600 font-medium leading-relaxed border-b border-stone-200/60">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0D5C75] shrink-0 mt-0.5" />
            <p>
              Medical Disclaimer: MediSpa Solutions operates under the clinical direction of board-certified
              nurse practitioner Marina Shamis, FNP BC. All cosmetic injectable and laser procedures require an initial comprehensive
              consultation to evaluate candidacy, medical history, and aesthetic goals. Individual results will
              vary based on individual biological response, adherence to aftercare protocols, and anatomical baseline.
              AdvaTX®, BOTOX®, and JUVÉDERM® are registered trademarks of their respective manufacturers.
            </p>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 font-medium gap-4">
          <p>© {new Date().getFullYear()} MediSpa Solutions. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-xs text-stone-600 font-medium">
            <a href="#" className="hover:text-[#0D5C75]">Privacy Policy</a>
            <a href="#" className="hover:text-[#0D5C75]">Notice of Privacy Practices (HIPAA)</a>
            <a href="#" className="hover:text-[#0D5C75]">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
