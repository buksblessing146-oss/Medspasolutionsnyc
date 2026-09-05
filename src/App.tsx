import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { AboutMarinaSection } from './components/AboutMarinaSection';
import { BrandsSection } from './components/BrandsSection';
import { FinancingSection } from './components/FinancingSection';
import { WhatsNewSection } from './components/WhatsNewSection';
import { AppointmentCtaSection } from './components/AppointmentCtaSection';
import { FooterSection } from './components/FooterSection';
import { BookingModal } from './components/BookingModal';
import { TreatmentModal } from './components/TreatmentModal';
import { Treatment } from './data/medspaData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingTreatment, setSelectedBookingTreatment] = useState<string | undefined>(undefined);
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const handleOpenBooking = (treatmentName?: string) => {
    setSelectedBookingTreatment(treatmentName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedBookingTreatment(undefined);
  };

  const handleSelectTreatment = (treatment: Treatment) => {
    setActiveModalTreatment(treatment);
  };

  const handleCloseTreatmentModal = () => {
    setActiveModalTreatment(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 font-sans selection:bg-[#0D5C75]/20 selection:text-[#0D5C75]">
      {/* Sticky Luxury Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* SECTION 1 — Hero */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* SECTION 2 — Featured Treatments */}
        <TreatmentsSection
          onSelectTreatment={handleSelectTreatment}
          onOpenBooking={handleOpenBooking}
        />

        {/* SECTION 3 — Why Choose MediSpa */}
        <WhyChooseSection />

        {/* SECTION 4 — About Marina */}
        <AboutMarinaSection onOpenBooking={() => handleOpenBooking()} />

        {/* SECTION 5 — Brands We Offer */}
        <BrandsSection />

        {/* SECTION 6 — Financing */}
        <FinancingSection onOpenBooking={() => handleOpenBooking()} />

        {/* SECTION 7 — What's New */}
        <WhatsNewSection onOpenBooking={handleOpenBooking} />

        {/* SECTION 8 — Appointment CTA */}
        <AppointmentCtaSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* SECTION 9 — Footer */}
      <FooterSection onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialTreatment={selectedBookingTreatment}
      />

      {/* Interactive Treatment Details Modal */}
      <TreatmentModal
        treatment={activeModalTreatment}
        onClose={handleCloseTreatmentModal}
        onBookTreatment={(treatmentName) => handleOpenBooking(treatmentName)}
      />
    </div>
  );
}
