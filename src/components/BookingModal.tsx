import React, { useState } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, Phone, Mail, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { TREATMENTS } from '../data/medspaData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
}) => {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState(
    initialTreatment || TREATMENTS[0].name
  );
  const [provider, setProvider] = useState('Marina Shamis, FNP BC (Founder)');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF9F5] w-full max-w-2xl rounded-2xl border border-stone-200 shadow-[0_20px_60px_rgba(13,92,117,0.15)] overflow-hidden">
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-white border-b border-stone-200/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0D5C75]">
              Concierge Consultation
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-stone-900 leading-tight">
              Request Your Appointment
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation View */
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6 text-[#0D5C75]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0D5C75]">
              Consultation Requested
            </span>
            <h4 className="font-serif-luxury text-3xl font-normal text-stone-900 mt-2 mb-4">
              Thank you, {fullName || 'valued patient'}
            </h4>
            <p className="text-stone-600 text-sm font-light leading-relaxed max-w-md mx-auto mb-6">
              Our clinical concierge has received your request for <strong>{selectedTreatment}</strong> with{' '}
              <strong>{provider}</strong>. We will contact you at <strong>{phone || email || 'your contact'}</strong>{' '}
              within 2 business hours to confirm your private suite time.
            </p>

            <div className="p-4 rounded-xl bg-white border border-stone-200/80 max-w-sm mx-auto mb-8 text-left text-xs space-y-2 text-stone-600">
              <div className="flex justify-between">
                <span className="text-stone-400">Preferred Window:</span>
                <span className="font-medium text-stone-800">{preferredDate || 'Upcoming available date'} • {preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Clinic Location:</span>
                <span className="font-medium text-stone-800">Staten Island, NY</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Ref Code:</span>
                <span className="font-mono font-bold text-[#0D5C75]">MSP-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          /* Step-by-step Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Steps indicator */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  step >= 1 ? 'bg-[#0D5C75] text-white' : 'bg-stone-200 text-stone-600'
                }`}>
                  1
                </span>
                <span className="text-xs font-medium text-stone-800">Treatment</span>
              </div>
              <div className="w-12 h-px bg-stone-300" />
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  step >= 2 ? 'bg-[#0D5C75] text-white' : 'bg-stone-200 text-stone-600'
                }`}>
                  2
                </span>
                <span className="text-xs font-medium text-stone-800">Schedule</span>
              </div>
              <div className="w-12 h-px bg-stone-300" />
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  step >= 3 ? 'bg-[#0D5C75] text-white' : 'bg-stone-200 text-stone-600'
                }`}>
                  3
                </span>
                <span className="text-xs font-medium text-stone-800">Details</span>
              </div>
            </div>

            {/* STEP 1: Treatment & Provider */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Select Primary Treatment or Focus Area
                  </label>
                  <select
                    value={selectedTreatment}
                    onChange={(e) => setSelectedTreatment(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-[#0D5C75]"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.category})
                      </option>
                    ))}
                    <option value="Comprehensive 3D Skin Analysis Consultation">
                      Comprehensive 3D Skin Analysis Consultation (New Patient)
                    </option>
                    <option value="Morpheus8 Burst & Exosome Therapy">
                      Morpheus8 Burst & Exosome Therapy (Newest Tech)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Preferred Aesthetic Clinician
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      provider.includes('Marina')
                        ? 'bg-white border-[#0D5C75] ring-1 ring-[#0D5C75]'
                        : 'bg-white/60 border-stone-200 hover:border-stone-300'
                    }`}>
                      <input
                        type="radio"
                        name="provider"
                        className="mt-1 accent-[#0D5C75]"
                        checked={provider.includes('Marina')}
                        onChange={() => setProvider('Marina Shamis, FNP BC (Founder)')}
                      />
                      <div>
                        <div className="text-sm font-semibold text-stone-900">Marina Shamis, FNP BC</div>
                        <div className="text-xs text-stone-500 font-light">Founder • Board-Certified Nurse Practitioner</div>
                      </div>
                    </label>

                    <label className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      !provider.includes('Marina')
                        ? 'bg-white border-[#0D5C75] ring-1 ring-[#0D5C75]'
                        : 'bg-white/60 border-stone-200 hover:border-stone-300'
                    }`}>
                      <input
                        type="radio"
                        name="provider"
                        className="mt-1 accent-[#0D5C75]"
                        checked={!provider.includes('Marina')}
                        onChange={() => setProvider('Senior Aesthetic Associate Practitioner')}
                      />
                      <div>
                        <div className="text-sm font-semibold text-stone-900">Associate Practitioner</div>
                        <div className="text-xs text-stone-500 font-light">Board-Certified Aesthetic Specialist</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2"
                  >
                    <span>Proceed to Timing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Scheduling Preferences */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-[#0D5C75]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Preferred Time Window
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      'Morning (10 AM - 1 PM)',
                      'Afternoon (1 PM - 4 PM)',
                      'Late Afternoon (4 PM - 6:30 PM)',
                    ].map((timeOption) => (
                      <label
                        key={timeOption}
                        className={`p-3 rounded-xl border text-center cursor-pointer text-xs font-medium transition-all ${
                          preferredTime === timeOption
                            ? 'bg-white border-[#0D5C75] text-[#0D5C75] ring-1 ring-[#0D5C75]'
                            : 'bg-white/60 border-stone-200 text-stone-600 hover:border-stone-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeOption"
                          value={timeOption}
                          checked={preferredTime === timeOption}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="sr-only"
                        />
                        {timeOption}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-stone-600 hover:text-stone-900 text-xs uppercase tracking-wider font-semibold"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2"
                  >
                    <span>Proceed to Contact</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Patient Information */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Victoria Sterling"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-[#0D5C75]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. victoria@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-[#0D5C75]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (310) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-[#0D5C75]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Aesthetic Goals or Prior Treatments (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell Marina about any specific concerns, timeline, or past aesthetic experiences..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-800 focus:outline-none focus:border-[#0D5C75]"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <Shield className="w-3.5 h-3.5 text-[#0D5C75]" />
                  <span>HIPAA compliant. Your medical inquiries are strictly confidential.</span>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-stone-600 hover:text-stone-900 text-xs uppercase tracking-wider font-semibold"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-[#0D5C75] hover:bg-[#0A4D63] text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md"
                  >
                    Confirm Consultation Request
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
