import React from 'react';
import { ArrowUpRight, Sparkles, Clock, Shield } from 'lucide-react';
import { TREATMENTS, Treatment } from '../data/medspaData';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenBooking: (treatmentName?: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onOpenBooking,
}) => {
  return (
    <section id="treatments" className="py-20 md:py-28 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-stone-200/80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C75]"></span>
              <span className="text-xs uppercase tracking-[0.22em] text-[#0D5C75] font-bold">
                Clinical Expertise
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              Featured Treatments
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-stone-700 max-w-md font-medium leading-relaxed">
            Bespoke aesthetic protocols marrying medical-grade efficacy with artistic facial harmony.
          </p>
        </div>

        {/* Elegant Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              onClick={() => onSelectTreatment(treatment)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-200/70 shadow-xs hover:shadow-[0_12px_36px_rgba(13,92,117,0.08)] transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
            >
              {/* Large Photography Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {treatment.featuredBadge && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#0D5C75] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-stone-200/70 shadow-xs">
                    {treatment.featuredBadge}
                  </div>
                )}

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-700 group-hover:text-[#0D5C75] group-hover:bg-white shadow-xs transition-colors">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Minimalist Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D5C75] mb-2">
                    {treatment.category}
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-stone-900 mb-2 group-hover:text-[#0D5C75] transition-colors">
                    {treatment.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-stone-700 font-medium leading-relaxed line-clamp-2">
                    {treatment.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0D5C75]" />
                    {treatment.duration}
                  </span>
                  <span className="font-bold text-[#0D5C75] group-hover:underline underline-offset-4 text-[11px] uppercase tracking-wider">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom subtle banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F5F3EF] border border-stone-200/70 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-11 h-11 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-[#0D5C75] shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-stone-900">
                Unsure which protocol matches your skin goals?
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 font-medium mt-0.5">
                Our master clinicians provide in-depth digital skin analysis and bespoke treatment sequencing.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="shrink-0 bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm"
          >
            Consult Our Specialists
          </button>
        </div>
      </div>
    </section>
  );
};
