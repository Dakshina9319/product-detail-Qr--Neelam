import React from 'react';
import { MacroDetail } from '../types';

interface ImageLightboxModalProps {
  detail: MacroDetail | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  detail,
  onClose,
}) => {
  if (!detail) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-silk-cream border border-card-border rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl">
        <div className="relative aspect-[4/3] w-full bg-black">
          <img
            src={detail.fullImage}
            alt={detail.alt}
            className="w-full h-full object-contain"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Preview"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase font-bold text-deep-teal tracking-wider">
              Handloom Tactile Micro-Inspection
            </span>
            <span className="text-[10px] font-mono text-night-slate/60">
              80s Combed Cotton · Zero Synthetics
            </span>
          </div>
          <h3 className="font-serif text-lg font-bold text-night-slate">
            {detail.title}
          </h3>
          <p className="text-xs text-night-slate/75 mt-1 leading-relaxed">
            {detail.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
