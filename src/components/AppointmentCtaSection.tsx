import React from 'react';
import { Calendar, Phone, Sparkles, Clock, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface AppointmentCtaSectionProps {
  onOpenBooking: () => void;
}

export const AppointmentCtaSection: React.FC<AppointmentCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-[#FAF9F5]">
      {/* Background Large Image with Soft Luxury Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=2000&q=80"
          alt="MediSpa Solutions Beverly Hills Consultation Lounge"
          className="w-full h-full object-cover object-center filter brightness-[0.95]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Soft luxury veil: subtle warm ivory overlays */}
        <div className="absolute inset-0 bg-[#FAF9F5]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/90 to-[#FAF9F5]/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Luxury Overlay Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 sm:p-12 md:p-16 border border-stone-200/90 shadow-[0_20px_50px_rgba(13,92,117,0.1)] text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-stone-200 mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0D5C75]" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#0D5C75] font-bold">
              Begin Your Rejuvenation
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-tight mb-6">
            Schedule Your <br className="hidden sm:inline" />
            <span className="italic font-bold text-[#0D5C75]">Appointment Today</span>
          </h2>

          {/* Warm Welcoming Copy */}
          <p className="text-stone-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-10 max-w-xl mx-auto">
            Your journey toward subtle, refined confidence starts with a personalized consultation
            with board-certified nurse practitioner Marina Shamis, FNP BC. Experience unhurried, private medical aesthetics
            tailored purely to your anatomy.
          </p>

          {/* Prominent Booking Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              id="cta-book-consult-btn"
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-9 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-[0_4px_24px_rgba(13,92,117,0.25)] hover:shadow-[0_8px_30px_rgba(13,92,117,0.35)] flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:7189877720"
              className="w-full sm:w-auto bg-[#FAF9F5] hover:bg-stone-100 text-stone-900 border border-stone-300 px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#0D5C75]" />
              <span>Call (718) 987-7720</span>
            </a>
          </div>

          {/* Trust points row */}
          <div className="pt-8 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-500 font-light">
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0D5C75]" />
              <span>Private & Discreet Suite</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0D5C75]" />
              <span>Flexible Weekend Hours</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#0D5C75]" />
              <span>Valet Parking Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
