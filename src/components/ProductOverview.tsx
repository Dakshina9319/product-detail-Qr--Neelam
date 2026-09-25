import React, { useState } from 'react';
import { MACRO_DETAILS } from '../data/provenanceData';
import { MacroDetail } from '../types';

interface ProductOverviewProps {
  onOpenCertificate: () => void;
  onOpenReservation: () => void;
  onSelectMacroImage: (detail: MacroDetail) => void;
}

export const ProductOverview: React.FC<ProductOverviewProps> = ({
  onOpenCertificate,
  onOpenReservation,
  onSelectMacroImage,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  const handleToggleSave = () => {
    setIsSaved(!isSaved);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  return (
    <section className="w-full mb-12" id="product-overview">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 cols: Authentic High-Resolution Visuals */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Main Saree Showcase */}
          <div className="group relative rounded-xl overflow-hidden bg-silk-cream border border-card-border shadow-xs">
            <div className="aspect-[4/3] w-full relative overflow-hidden cursor-zoom-in"
              onClick={() => onSelectMacroImage({
                id: 'main-saree',
                title: 'Authentic Negamam Cotton Saree #NGM1024',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy2vQfnkdcOPTVY227k2_h3sUfpoEE_4Pbdc73cd9w3pCK_u8B98i0R0BYhptYfvOopfZnEhOEN0yBg0XN-C2f8J7byiG1QxH7x2LFLkv5fdljDkKd9IYjUsE09Q1y8CtisU2NgvvLR_e024ph9FijeV0DJE-yJiHnjIIAHb8W9BDGHf2mksjy6TofbVuApacngHTkpKBmGIacPNMUbZfvDEmXDnvqeqTnCsn_I-zfxKpK4tOMaEbhFA',
                alt: 'Authentic Negamam cotton saree folded neatly showing deep aubergine body and rich copper rust border.',
                fullImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy2vQfnkdcOPTVY227k2_h3sUfpoEE_4Pbdc73cd9w3pCK_u8B98i0R0BYhptYfvOopfZnEhOEN0yBg0XN-C2f8J7byiG1QxH7x2LFLkv5fdljDkKd9IYjUsE09Q1y8CtisU2NgvvLR_e024ph9FijeV0DJE-yJiHnjIIAHb8W9BDGHf2mksjy6TofbVuApacngHTkpKBmGIacPNMUbZfvDEmXDnvqeqTnCsn_I-zfxKpK4tOMaEbhFA',
                caption: 'Handcrafted on an underground wooden pit loom in Negamam. Breathable high-twist 80s combed cotton with natural copper-tone selvage.'
              })}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt="Authentic Negamam cotton saree folded neatly showing deep aubergine body and rich copper rust border."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy2vQfnkdcOPTVY227k2_h3sUfpoEE_4Pbdc73cd9w3pCK_u8B98i0R0BYhptYfvOopfZnEhOEN0yBg0XN-C2f8J7byiG1QxH7x2LFLkv5fdljDkKd9IYjUsE09Q1y8CtisU2NgvvLR_e024ph9FijeV0DJE-yJiHnjIIAHb8W9BDGHf2mksjy6TofbVuApacngHTkpKBmGIacPNMUbZfvDEmXDnvqeqTnCsn_I-zfxKpK4tOMaEbhFA"
              />

              {/* Floating Authentic Tag & Kolam Stamp */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-night-slate/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                  <img
                    alt=""
                    className="w-3 h-3 invert"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrcD4rJWqc0TbxOarqMmmPQ53HQ6PY-Cia-6rzCprOTw56ZqURqOuElXr81th1rbHrj44vmeicjSDFO0e8ZIEnsjfgkTg9nsii_o--FYuZ7x2JLbnaDNUIpXFTn9ImC26V7eTtrzOW9gE7fklKE80zMBl6tzXD3CpLKpDvAhT7avx6PmYEmdaJh2HOv4qNG1ZGfrE9M5xbWUbPS6BUK2f8W6fB1M402FIsOCxN85wmyQeinh8e54DuYeQLZdowkYPjNF4"
                  />
                  GI Certified Single-Weft Piece
                </span>
                <span className="px-2.5 py-0.5 rounded bg-silk-cream/95 backdrop-blur-md text-night-slate border border-card-border text-[11px] font-medium">
                  80s × 80s High-Twist Combed Cotton
                </span>
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-canvas-base/90 backdrop-blur-xs text-night-slate text-xs font-semibold border border-card-border flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-zari-ochre">lock</span>
                  Provenance ID Verified
                </span>
              </div>
            </div>
          </div>

          {/* Macro Details (Tactile weave proof) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {MACRO_DETAILS.map((detail) => (
              <div
                key={detail.id}
                onClick={() => onSelectMacroImage(detail)}
                className="rounded-lg overflow-hidden bg-silk-cream border border-card-border p-2 flex flex-col gap-1.5 shadow-xs cursor-pointer hover:border-indigo-blue/60 transition-all group"
              >
                <div className="aspect-square w-full rounded overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={detail.alt}
                    src={detail.image}
                  />
                  <div className="absolute inset-0 bg-indigo-blue/0 group-hover:bg-indigo-blue/10 flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                      zoom_in
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-night-slate/75 text-center">
                  {detail.title}
                </span>
              </div>
            ))}
          </div>

          {/* Conscious Sustainability Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            <div className="p-2.5 rounded-lg bg-silk-cream border border-card-border text-center">
              <span className="material-symbols-outlined text-weave-green text-lg block mb-0.5">eco</span>
              <span className="text-[11px] font-bold text-night-slate block">100% Organic Cotton</span>
              <span className="text-[10px] text-night-slate/60">Pollachi Farm Origin</span>
            </div>
            <div className="p-2.5 rounded-lg bg-silk-cream border border-card-border text-center">
              <span className="material-symbols-outlined text-deep-teal text-lg block mb-0.5">water_drop</span>
              <span className="text-[11px] font-bold text-night-slate block">Certified Azo-Free</span>
              <span className="text-[10px] text-night-slate/60">Erode Cluster Dyeworks</span>
            </div>
            <div className="p-2.5 rounded-lg bg-silk-cream border border-card-border text-center">
              <span className="material-symbols-outlined text-zari-ochre text-lg block mb-0.5">straighten</span>
              <span className="text-[11px] font-bold text-night-slate block">6.2m × 46″ Width</span>
              <span className="text-[10px] text-night-slate/60">With Running Blouse</span>
            </div>
            <div className="p-2.5 rounded-lg bg-silk-cream border border-card-border text-center">
              <span className="material-symbols-outlined text-indigo-blue text-lg block mb-0.5">pace</span>
              <span className="text-[11px] font-bold text-night-slate block">32 Loom Hours</span>
              <span className="text-[10px] text-night-slate/60">Single Pit Loom</span>
            </div>
          </div>
        </div>

        {/* Right 5 cols: Clear Technical Specifications & Transparent Fair Pricing */}
        <div className="lg:col-span-5 flex flex-col bg-silk-cream border border-card-border rounded-xl p-5 sm:p-6 shadow-xs">
          <div className="pb-3 border-b border-card-border/80">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] uppercase font-bold tracking-widest text-deep-teal">
                Society Ledger Record · Neelam Verified
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-weave-green">
                <span className="w-1.5 h-1.5 rounded-full bg-weave-green"></span> Physical Tag Active
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-night-slate">
              Negamam Thread-Embossed Cotton Saree
            </h2>
            <p className="text-xs text-night-slate/70 mt-1">
              Item Ref: <span className="font-mono font-bold text-night-slate">#NGM1024</span> · Batch #24-10-NEELAM
            </p>
          </div>

          {/* Straight-To-The-Point Fair Pricing Breakdown */}
          <div className="my-4 p-4 rounded-xl bg-canvas-base border border-card-border">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[11px] uppercase font-bold text-night-slate/60 tracking-wider block">
                  Transparent Price
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-3xl font-bold text-indigo-blue">₹ 2,450</span>
                  <span className="text-xs font-semibold text-night-slate/60">all taxes included</span>
                </div>
              </div>
              <div className="text-right">
                <span className="px-2.5 py-1 rounded-full bg-weave-green/15 text-weave-green border border-weave-green/30 text-xs font-bold inline-block">
                  ₹ 2,082 directly to Murthy
                </span>
                <span className="block text-[10px] text-night-slate/50 mt-0.5">
                  85% direct wage · Zero middleman cut
                </span>
              </div>
            </div>

            {/* Transparent Cost Stack Bar */}
            <div className="mt-3 pt-3 border-t border-card-border/60">
              <div className="text-[11px] font-semibold text-night-slate/80 mb-1 flex justify-between">
                <span>Direct Weaver: 85%</span>
                <span>Yarn/Dye: 10%</span>
                <span>Co-op &amp; GI: 5%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-card-border overflow-hidden flex">
                <div className="bg-indigo-blue h-full w-[85%]" title="85% Direct to Murthy S."></div>
                <div className="bg-deep-teal h-full w-[10%]" title="10% Yarn and Eco-Dye"></div>
                <div className="bg-zari-ochre h-full w-[5%]" title="5% Co-op & GI Certification"></div>
              </div>
            </div>
          </div>

          {/* Technical Specification Table */}
          <div className="space-y-2 text-xs bg-canvas-base/60 rounded-lg p-3.5 border border-card-border mb-4">
            <div className="flex justify-between items-center py-0.5">
              <span className="text-night-slate/60 font-medium">Master Weaver</span>
              <a
                className="font-bold text-indigo-blue hover:underline flex items-center gap-1"
                href="#artisan-section"
              >
                Murthy S. <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
              </a>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-night-slate/60 font-medium">Weave Structure</span>
              <span className="font-semibold text-night-slate">Single Fly-Shuttle Pit Loom</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-night-slate/60 font-medium">Warp &amp; Weft Density</span>
              <span className="font-semibold text-night-slate">80s Combed × 80s Cotton</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-night-slate/60 font-medium">Body Hue</span>
              <span className="font-semibold text-night-slate flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#3B1D35] inline-block border border-card-border"></span>
                Aubergine / Deep Purple
              </span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-night-slate/60 font-medium">Border &amp; Zari</span>
              <span className="font-semibold text-night-slate flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#B45B3E] inline-block border border-card-border"></span>
                Copper Rust &amp; Fine Gold Zari
              </span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-night-slate/60 font-medium">Dimensions &amp; Weight</span>
              <span className="font-semibold text-night-slate">6.2 m × 46″ (540 grams)</span>
            </div>
          </div>

          {/* Straight to Point Curatorial Note */}
          <div className="mb-5">
            <span className="text-[11px] uppercase font-bold tracking-wider text-deep-teal block mb-1">
              Neelam Provenance Synopsis
            </span>
            <p className="text-xs text-night-slate/80 leading-relaxed font-sans">
              Handcrafted over four days on an underground wooden pit loom in Negamam. Breathable high-twist combed cotton pairs deep aubergine with natural copper-tone selvage, adorned by embossed floral and paisley butta work. No industrial polyester blends or mechanized shuttle looms.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-2.5 mt-auto">
            <button
              onClick={onOpenCertificate}
              className="flex-1 py-3 px-4 rounded-lg bg-indigo-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-indigo-dark transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[17px]">download</span>
              Download GI Certificate
            </button>
            <button
              onClick={handleToggleSave}
              className={`py-3 px-4 rounded-lg border text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                isSaved
                  ? 'bg-zari-madder text-white border-zari-madder'
                  : 'bg-canvas-base border-card-border text-night-slate hover:bg-sand-light'
              }`}
              type="button"
            >
              <span
                className={`material-symbols-outlined text-[17px] ${
                  isSaved ? 'text-white' : 'text-zari-madder'
                }`}
              >
                favorite
              </span>
              {isSaved ? 'Saved to Archive' : 'Save'}
            </button>
          </div>

          {/* Micro Toast */}
          {saveToast && (
            <div className="mt-2 text-center text-[11px] font-semibold text-weave-green animate-fade-in">
              {isSaved
                ? '✓ Saree #NGM1024 bookmarked in your personal provenance archive'
                : 'Removed from personal archive'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
