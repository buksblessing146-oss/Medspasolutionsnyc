import React from 'react';
import { X, Clock, ShieldCheck, Sparkles, Calendar, ArrowRight, Check } from 'lucide-react';
import { Treatment } from '../data/medspaData';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF9F5] w-full max-w-3xl rounded-2xl border border-stone-200 shadow-[0_20px_60px_rgba(13,92,117,0.18)] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-stone-600 hover:text-stone-900 flex items-center justify-center shadow-sm transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Media Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20 inline-block mb-2">
              {treatment.category}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-sm">
              {treatment.name}
            </h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-stone-800 text-sm sm:text-base font-medium leading-relaxed">
            {treatment.fullDetails}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-stone-200/80">
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                Session Time
              </span>
              <p className="text-xs sm:text-sm font-bold text-stone-900 mt-0.5">
                {treatment.duration}
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                Expected Downtime
              </span>
              <p className="text-xs sm:text-sm font-bold text-stone-900 mt-0.5">
                {treatment.downtime}
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                Results Longevity
              </span>
              <p className="text-xs sm:text-sm font-bold text-stone-900 mt-0.5">
                {treatment.resultsTimeline}
              </p>
            </div>
          </div>

          {/* Ideal Candidates / Concerns */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D5C75] mb-3">
              Primary Treatment Indications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {treatment.idealFor.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-800 font-medium">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-[#0D5C75]">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-500 font-light text-center sm:text-left">
              Administered with board-certified clinical protocols.
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-3 rounded-full border border-stone-300 text-xs uppercase font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookTreatment(treatment.name);
                }}
                className="w-1/2 sm:w-auto bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Protocol</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
