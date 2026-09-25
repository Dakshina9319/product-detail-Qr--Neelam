import React from 'react';
import { OTHER_CREATIONS } from '../data/provenanceData';
import { SareeCreation } from '../types';

interface OtherCreationsProps {
  onReserveSaree: (saree: SareeCreation) => void;
}

export const OtherCreations: React.FC<OtherCreationsProps> = ({ onReserveSaree }) => {
  return (
    <section className="w-full mb-12" id="other-creations">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <span className="text-[11px] uppercase font-bold tracking-widest text-deep-teal block mb-1">
            Direct from Murthy's Loom
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-night-slate font-bold">
            More Handcrafted Creations by Murthy S.
          </h2>
          <p className="text-xs sm:text-sm text-night-slate/75 mt-0.5">
            Limited monthly production. Each piece carries its own unique QR tag and GI certificate.
          </p>
        </div>
        <span className="text-xs font-semibold text-night-slate/60">
          Archive Selection (4 Verified Pieces)
        </span>
      </div>

      {/* 4-Product Grid Matching Image Reference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {OTHER_CREATIONS.map((saree) => (
          <div
            key={saree.id}
            className="group bg-silk-cream border border-card-border rounded-xl p-3 flex flex-col shadow-xs hover:shadow-md hover:border-indigo-blue/40 transition-all"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-canvas-base relative mb-3">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={saree.alt}
                src={saree.image}
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-canvas-base/90 text-night-slate text-[10px] font-bold uppercase tracking-wider border border-card-border">
                {saree.tag}
              </span>
            </div>
            <div className="flex-1 flex flex-col">
              <span className="text-[10px] uppercase font-bold text-deep-teal">
                {saree.loomInfo}
              </span>
              <h3 className="font-serif text-sm font-bold text-night-slate line-clamp-1 mt-0.5">
                {saree.title}
              </h3>
              <p className="text-xs text-night-slate/70 line-clamp-2 mt-1">
                {saree.description}
              </p>
              <div className="mt-3 pt-2.5 border-t border-card-border/60 flex items-center justify-between">
                <span className="font-serif text-base font-bold text-indigo-blue">
                  {saree.priceFormatted}
                </span>
                <button
                  onClick={() => onReserveSaree(saree)}
                  className="px-3 py-1.5 rounded-lg bg-indigo-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-indigo-dark transition-colors cursor-pointer"
                  type="button"
                >
                  Reserve
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
