import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

interface WhatsNewSectionProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const WhatsNewSection: React.FC<WhatsNewSectionProps> = ({ onOpenBooking }) => {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  return (
    <section id="whats-new" className="py-20 md:py-28 bg-[#F5F3EF] border-y border-stone-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-stone-200/80">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C75]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#0D5C75] font-bold">
                Innovation & Insights
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              What's New at MediSpa
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-xs sm:text-sm md:text-base text-stone-700 font-medium">
            Stay informed with the newest FDA innovations and clinical breakthroughs.
          </p>
        </div>

        {/* Clean Article-Style Layout Card */}
        <article className="bg-white rounded-2xl border border-stone-200/80 shadow-[0_8px_30px_rgba(13,92,117,0.05)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Media Column (Span 6 or 7) with Image / Video Support */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[320px] lg:min-h-[440px] bg-stone-900 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
                alt="AdvaTX Laser Clinical Treatment Suite"
                className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

              {/* Modern Video / Demonstration Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                  className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#0D5C75] shadow-lg hover:scale-110 hover:bg-white transition-all cursor-pointer group-hover:bg-white"
                  aria-label="Play Clinical Overview Video"
                >
                  <Play className="w-6 h-6 fill-[#0D5C75] ml-1" />
                </button>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-xs uppercase tracking-wider font-bold px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                  Clinical Feature: AdvaTX Dual-Wavelength Laser
                </span>
                <span className="text-xs font-semibold text-white/90">Clinical Spotlight</span>
              </div>
            </div>

            {/* Content Column (Span 6) */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#FAF9F5] text-[#0D5C75] border border-stone-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    New Machine Addition
                  </span>
                  <span className="text-xs text-stone-600 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#0D5C75]" />
                    Now Available
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-snug mb-4">
                  AdvaTX: The Next Frontier In Laser Rejuvenation
                </h3>

                {/* Subtitle */}
                <p className="text-stone-800 text-sm sm:text-base font-medium leading-relaxed mb-6">
                  We are already loving our new AdvaTX Laser Treatment Machine. From fine lines and wrinkles to stretch marks and acne scars this is an invaluable tool for improving the look and feel of your skin.
                </p>

                {/* Clinical Highlights */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5C75] shrink-0" />
                    <span className="text-xs font-semibold text-stone-900">
                      Targets fine lines, dynamic wrinkles, and skin laxity
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5C75] shrink-0" />
                    <span className="text-xs font-semibold text-stone-900">
                      Remarkable reduction in acne scarring, redness, and stretch marks
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5C75] shrink-0" />
                    <span className="text-xs font-semibold text-stone-900">
                      Gentle, clinically proven laser rejuvenation with virtually zero social downtime
                    </span>
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  onClick={() => onOpenBooking('AdvaTX Laser Rejuvenation')}
                  className="bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Book AdvaTX Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <span className="text-xs text-stone-500 font-light text-center sm:text-left">
                  Now Available in our Staten Island Clinic
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
