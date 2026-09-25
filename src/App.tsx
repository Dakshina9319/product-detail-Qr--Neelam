import { useState } from 'react';
import { Header } from './components/Header';
import { VerificationBanner } from './components/VerificationBanner';
import { ProductOverview } from './components/ProductOverview';
import { ProvenanceMap } from './components/ProvenanceMap';
import { LifecycleVignettes } from './components/LifecycleVignettes';
import { ArtisanSpotlight } from './components/ArtisanSpotlight';
import { OtherCreations } from './components/OtherCreations';
import { LoomVideoSection } from './components/LoomVideoSection';
import { GratitudeDock } from './components/GratitudeDock';
import { Footer } from './components/Footer';
import { GICertificateModal } from './components/GICertificateModal';
import { ReservationModal } from './components/ReservationModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { MacroDetail, SareeCreation } from './types';

export default function App() {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedSareeForReservation, setSelectedSareeForReservation] = useState<SareeCreation | null>(null);
  const [activeMacroDetail, setActiveMacroDetail] = useState<MacroDetail | null>(null);

  const handleOpenReservation = (saree?: SareeCreation) => {
    setSelectedSareeForReservation(saree || null);
    setIsReservationOpen(true);
  };

  return (
    <div className="min-h-screen bg-canvas-base text-night-slate flex flex-col font-sans selection:bg-indigo-blue/15 selection:text-indigo-blue">
      {/* Fixed Navigation Header */}
      <Header
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Main Provenance Content */}
      <main className="w-full pt-24 bg-canvas-base pb-16 flex-1">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-4">
          {/* 1. Transparent Verification & Conscious Impact Banner */}
          <VerificationBanner />

          {/* 2. Product Showcase & Conscious Impact Breakdown */}
          <ProductOverview
            onOpenCertificate={() => setIsCertificateOpen(true)}
            onOpenReservation={() => handleOpenReservation()}
            onSelectMacroImage={(detail) => setActiveMacroDetail(detail)}
          />

          {/* 3. Geographic Tracing & 6-Step Loom Milestones */}
          <section className="w-full mb-12" id="provenance-map">
            <div className="mb-6 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-silk-cream border border-card-border text-deep-teal text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-blue"></span>
                Radical Supply Chain Transparency
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-night-slate font-bold">
                Journey Map: From Tamil Nadu Soil to Your Hands
              </h2>
              <p className="text-xs sm:text-sm text-night-slate/75 mt-1">
                Every step traced, measured, and verified with GPS-registered cluster ledgers.
              </p>
            </div>

            {/* Geographic Corridor Container & Chain */}
            <ProvenanceMap />

            {/* 6-Stage Loom Flow Vignettes */}
            <LifecycleVignettes />
          </section>

          {/* 4. Master Artisan Spotlight: Murthy S. */}
          <ArtisanSpotlight />

          {/* 5. Artisan Catalog: More Handcrafted Creations */}
          <OtherCreations
            onReserveSaree={(saree) => handleOpenReservation(saree)}
          />

          {/* 6. High-Contrast Loom Video: View from the Pit Loom */}
          <LoomVideoSection />

          {/* 7. Sticky Weaver Gratitude Dock */}
          <GratitudeDock />
        </div>
      </main>

      {/* Footer: Neelam Provenance Integrity Pledge */}
      <Footer />

      {/* Interactive Modals */}
      <GICertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        saree={selectedSareeForReservation}
        onClose={() => setIsReservationOpen(false)}
      />

      <ImageLightboxModal
        detail={activeMacroDetail}
        onClose={() => setActiveMacroDetail(null)}
      />
    </div>
  );
}
