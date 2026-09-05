import React, { useState } from 'react';
import { Star, CheckCircle2, Quote, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { WHY_CHOOSE_US, REVIEWS } from '../data/medspaData';

export const WhyChooseSection: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F5F3EF] border-y border-stone-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Reasons to choose the clinic (Span 6 or 7) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C75]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#0D5C75] font-bold">
                The MediSpa Difference
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-6">
              Why Choose <span className="italic font-bold text-[#0D5C75]">MediSpa Solutions</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-700 font-medium leading-relaxed mb-10 max-w-xl">
              We reject high-volume commercial aesthetics. Instead, we uphold a boutique clinical philosophy
              dedicated to anatomical safety, patient education, and natural rejuvenation.
            </p>

            {/* Reasons List */}
            <div className="space-y-6">
              {WHY_CHOOSE_US.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/80 backdrop-blur-xs rounded-2xl p-6 border border-stone-200/80 shadow-xs hover:border-[#0D5C75]/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-serif-luxury text-xl font-bold text-[#0D5C75] shrink-0 pt-0.5">
                      {item.id}
                    </span>
                    <div>
                      <h3 className="font-sans text-base font-bold text-stone-900 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-stone-700 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Patient reviews with luxury testimonial cards (Span 5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-stone-200/80 shadow-[0_8px_30px_rgba(13,92,117,0.06)] relative overflow-hidden">
              {/* Subtle decorative watermark */}
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-stone-100 -z-0 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0D5C75]">
                      Client Voices
                    </span>
                    <h3 className="font-serif-luxury text-2xl text-stone-900 font-bold mt-0.5">
                      Patient Experiences
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={prevReview}
                      aria-label="Previous Review"
                      className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:text-[#0D5C75] hover:border-[#0D5C75] transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextReview}
                      aria-label="Next Review"
                      className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:text-[#0D5C75] hover:border-[#0D5C75] transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6 text-amber-500">
                  {[...Array(REVIEWS[activeReviewIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-stone-900 ml-2 font-sans">
                    5.0 Star Verified
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="font-serif-luxury text-xl sm:text-2xl text-stone-900 font-semibold italic leading-relaxed mb-8">
                  "{REVIEWS[activeReviewIndex].quote}"
                </p>

                {/* Reviewer Details */}
                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-sm font-bold text-stone-900">
                      – {REVIEWS[activeReviewIndex].author}
                    </h4>
                    <p className="text-xs text-stone-600 font-medium mt-0.5">
                      {REVIEWS[activeReviewIndex].location}
                    </p>
                    <p className="text-[11px] text-[#0D5C75] font-bold mt-1">
                      {REVIEWS[activeReviewIndex].treatment}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-stone-200 text-[10px] font-bold uppercase tracking-wider text-stone-700">
                    <CheckCircle2 className="w-3 h-3 text-[#0D5C75]" />
                    Verified
                  </div>
                </div>

                {/* Navigation Dots Indicator */}
                <div className="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-stone-100">
                  {REVIEWS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveReviewIndex(idx)}
                      aria-label={`View review ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeReviewIndex === idx ? 'w-6 bg-[#0D5C75]' : 'w-2 bg-stone-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Beverly Hills Clinic Trust Metric Card */}
            <div className="mt-6 p-5 rounded-2xl bg-white/70 border border-stone-200/70 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Aggregate Patient Satisfaction
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif-luxury text-2xl font-semibold text-stone-900">
                    99.4%
                  </span>
                  <span className="text-xs text-stone-500 font-light">
                    over 3,400+ treated clients
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FAF9F5] border border-stone-200 flex items-center justify-center text-[#0D5C75]">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
