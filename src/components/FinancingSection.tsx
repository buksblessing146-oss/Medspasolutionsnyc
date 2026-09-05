import React, { useState } from 'react';
import { CreditCard, Check, Sparkles, ArrowRight, ShieldCheck, Calculator } from 'lucide-react';

interface FinancingSectionProps {
  onOpenBooking: () => void;
}

export const FinancingSection: React.FC<FinancingSectionProps> = ({ onOpenBooking }) => {
  const [budget, setBudget] = useState(1500);

  // Approximate Cherry 0% APR 12-month or 6-month calculation
  const monthly12 = Math.round(budget / 12);
  const monthly6 = Math.round(budget / 6);
  const monthly3 = Math.round(budget / 3);

  const perks = [
    '0% APR financing options available for qualifying applicants',
    '60-second application with immediate decision',
    'No hard credit check — applying will not impact your credit score',
    'Flexible terms from 3 to 24 months with no prepayment penalties',
    'High approval rates for aesthetic and wellness procedures',
  ];

  return (
    <section id="financing" className="py-20 md:py-28 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Financing Overview & Copy (Span 6) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C75]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#0D5C75] font-bold">
                Flexible Payment Options
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
              Treat Yourself Now. <br />
              <span className="italic font-bold text-[#0D5C75]">Pay Later.</span>
            </h2>

            <p className="text-sm sm:text-base text-stone-700 font-medium leading-relaxed mb-8">
              We believe financial flexibility should empower your self-care journey. Through our official
              partnership with <strong>Cherry</strong>, you can divide any treatment, package, or injectable
              session into manageable, interest-free monthly payments.
            </p>

            {/* Benefit Bullets */}
            <div className="space-y-3.5 mb-10">
              {perks.map((perk, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FAF9F5] border border-[#0D5C75]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#0D5C75]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-stone-800 font-medium">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://withcherry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
              >
                <span>Apply with Cherry</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenBooking}
                className="bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 text-center shadow-xs"
              >
                Inquire at Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Luxury Card Design & Interactive Payment Estimator (Span 6) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-stone-200/90 shadow-[0_12px_36px_rgba(13,92,117,0.06)] relative">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-stone-200 flex items-center justify-center text-[#0D5C75]">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#0D5C75]">
                      Official Partner
                    </span>
                    <h4 className="font-serif-luxury text-xl font-bold text-stone-900 leading-none mt-0.5">
                      Cherry Medical Financing
                    </h4>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-semibold">
                  0% APR Available
                </div>
              </div>

              {/* Interactive Calculator Box */}
              <div className="bg-[#FAF9F5] rounded-xl p-5 border border-stone-200/70 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                    <Calculator className="w-3.5 h-3.5 text-[#0D5C75]" />
                    Estimated Treatment Cost
                  </span>
                  <span className="font-serif-luxury text-2xl font-semibold text-[#0D5C75]">
                    ${budget.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min="300"
                  max="5000"
                  step="100"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-[#0D5C75] cursor-pointer h-2 bg-stone-200 rounded-lg mb-2"
                />

                <div className="flex justify-between text-[10px] text-stone-400">
                  <span>$300 (Single Area)</span>
                  <span>$2,500 (Skin Resurfacing)</span>
                  <span>$5,000 (Full Transformation)</span>
                </div>
              </div>

              {/* Payment Breakdown Options */}
              <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/70">
                  <div className="text-[10px] uppercase font-semibold text-stone-500 tracking-wider">
                    3 Months
                  </div>
                  <div className="font-serif-luxury text-xl font-bold text-stone-900 mt-1">
                    ${monthly3}
                    <span className="text-xs font-normal text-stone-500">/mo</span>
                  </div>
                  <div className="text-[10px] text-[#0D5C75] font-medium mt-0.5">0% APR*</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#0D5C75]/40 shadow-xs relative">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#0D5C75] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                  <div className="text-[10px] uppercase font-semibold text-stone-600 tracking-wider">
                    6 Months
                  </div>
                  <div className="font-serif-luxury text-xl font-bold text-[#0D5C75] mt-1">
                    ${monthly6}
                    <span className="text-xs font-normal text-stone-500">/mo</span>
                  </div>
                  <div className="text-[10px] text-[#0D5C75] font-semibold mt-0.5">0% APR*</div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/70">
                  <div className="text-[10px] uppercase font-semibold text-stone-500 tracking-wider">
                    12 Months
                  </div>
                  <div className="font-serif-luxury text-xl font-bold text-stone-900 mt-1">
                    ${monthly12}
                    <span className="text-xs font-normal text-stone-500">/mo</span>
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Low APR</div>
                </div>
              </div>

              {/* Card Footer Micro-Note */}
              <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-4 border-t border-stone-100">
                <ShieldCheck className="w-4 h-4 text-[#0D5C75] shrink-0" />
                <span>
                  Subject to credit approval by Cherry Technologies. Terms & conditions apply.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
