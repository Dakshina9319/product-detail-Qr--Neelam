import React from 'react';
import { LIFECYCLE_STAGES } from '../data/provenanceData';

export const LifecycleVignettes: React.FC = () => {
  return (
    <div className="bg-silk-cream border border-card-border rounded-xl p-5 sm:p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <span className="text-[11px] uppercase font-bold tracking-wider text-deep-teal block">
            FABRIC LIFECYCLE &amp; SUSTAINABILITY AUDIT
          </span>
          <h3 className="font-serif text-lg font-bold text-night-slate">
            Industrial Origins &amp; Eco-Beneficial Treatments
          </h3>
        </div>
        <span className="text-xs font-semibold text-night-slate/70">
          Certified Organic &amp; Non-Toxic Ledger · Co-op Society Registry
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {LIFECYCLE_STAGES.map((stage) => (
          <div
            key={stage.id}
            className={`flex flex-col items-center text-center group bg-canvas-base/60 rounded-xl p-3 shadow-2xs transition-all ${
              stage.highlight
                ? 'border border-indigo-blue/30 ring-1 ring-indigo-blue/20'
                : 'border border-card-border/80 hover:border-card-border'
            }`}
          >
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 shadow-2xs group-hover:scale-105 transition-transform duration-300 mb-2 ${
                stage.highlight
                  ? 'bg-indigo-blue/10 border-2 border-indigo-blue shadow-md'
                  : 'bg-canvas-base border border-card-border'
              }`}
            >
              <img
                className="w-full h-full object-cover rounded-full"
                alt={stage.alt}
                src={stage.image}
              />
            </div>
            <span
              className={`text-[9px] font-bold uppercase tracking-wider ${
                stage.highlight ? 'text-indigo-blue' : 'text-deep-teal'
              }`}
            >
              {stage.tag}
            </span>
            <h4 className="text-xs font-bold text-night-slate mt-0.5">{stage.title}</h4>
            <p className="text-[10px] text-night-slate/70 mt-1 leading-relaxed">
              {stage.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 p-3 rounded-lg bg-weave-green/10 border border-weave-green/30 flex items-center justify-center gap-2 text-center">
        <span className="material-symbols-outlined text-weave-green text-base shrink-0">
          eco
        </span>
        <p className="text-xs font-semibold text-night-slate">
          <span className="text-weave-green font-bold">100% Biodegradable &amp; Skin-Safe:</span>{' '}
          Every treatment avoids industrial microplastics, petroleum derivatives, and heavy metals—ensuring an hypoallergenic, earth-to-earth lifecycle.
        </p>
      </div>
    </div>
  );
};
