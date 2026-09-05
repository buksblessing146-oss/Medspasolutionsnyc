import React from 'react';
import { BRANDS } from '../data/medspaData';
import { Shield } from 'lucide-react';

export const BrandsSection: React.FC = () => {
  return (
    <section id="brands" className="py-20 md:py-24 bg-[#F5F3EF] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C75]" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#0D5C75] font-bold">
              Clinical Partners
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            Brands We Offer
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-stone-700 font-medium max-w-lg mx-auto">
            We partner exclusively with internationally recognized medical leaders to deliver
            FDA-cleared products with proven safety and clinical efficacy.
          </p>
        </div>

        {/* Premium Logo Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:border-[#0D5C75]/40 hover:shadow-[0_8px_24px_rgba(13,92,117,0.06)] transition-all duration-300 flex flex-col justify-between text-center min-h-[150px]"
            >
              <div className="flex items-center justify-center mb-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 group-hover:text-[#0D5C75] transition-colors">
                  {brand.badge}
                </span>
              </div>

              <div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wide text-stone-900 group-hover:text-[#0D5C75] transition-colors mb-1">
                  {brand.name}
                </h3>
                <p className="text-[11px] text-[#0D5C75] font-bold tracking-wider uppercase font-sans">
                  {brand.category}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-stone-100">
                <p className="text-[11px] text-stone-600 font-medium truncate">
                  {brand.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust verification footer note */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-stone-500">
          <Shield className="w-3.5 h-3.5 text-[#0D5C75]" />
          <span>100% Authentic, Direct Manufacturer Sourced with Medical Lot Verification</span>
        </div>
      </div>
    </section>
  );
};
