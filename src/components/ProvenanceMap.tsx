import React, { useState } from 'react';
import { PROVENANCE_NODES } from '../data/provenanceData';

export const ProvenanceMap: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<number>(3); // Default to Murthy's Loom

  const activeNode = PROVENANCE_NODES.find((n) => n.id === activeNodeId) || PROVENANCE_NODES[2];

  return (
    <div className="bg-silk-cream border border-card-border rounded-xl p-5 sm:p-6 shadow-xs mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left 7 cols: Map Interface with Visual Pinpoints */}
        <div className="lg:col-span-7 rounded-xl overflow-hidden bg-[#F6EFE2] border border-card-border h-[430px] relative flex flex-col justify-between shadow-inner select-none group">
          {/* SVG Cartographic Map Layer */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <svg
              className="w-full h-full object-cover"
              viewBox="0 0 760 460"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="topo-grid"
                  width="36"
                  height="36"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 36 0 L 0 0 0 36"
                    fill="none"
                    stroke="#E2D9C8"
                    strokeWidth="0.6"
                    strokeOpacity="0.75"
                    strokeDasharray="2 4"
                  />
                </pattern>
                <linearGradient id="sea-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E8E1D1" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#D9CEB9" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Coordinate grid background */}
              <rect width="100%" height="100%" fill="#FAF5EC" />
              <rect width="100%" height="100%" fill="url(#topo-grid)" />

              {/* Water bodies / Bay of Bengal & Arabian Sea outlines */}
              <path
                d="M 610 0 C 600 60, 580 130, 560 210 C 540 280, 500 370, 430 460 L 760 460 L 760 0 Z"
                fill="url(#sea-gradient)"
                opacity="0.65"
              />
              <path
                d="M 0 320 C 50 350, 90 410, 110 460 L 0 460 Z"
                fill="url(#sea-gradient)"
                opacity="0.65"
              />

              {/* Tamil Nadu & Western Ghats Topo Contour Elevation Curves */}
              <path
                d="M 140 10 C 130 90, 120 180, 150 250 C 180 320, 200 400, 240 450"
                stroke="#B8A78F"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                opacity="0.65"
              />
              <path
                d="M 170 30 C 160 110, 150 190, 180 260 C 210 320, 230 380, 260 440"
                stroke="#C7B89F"
                strokeWidth="1"
                opacity="0.7"
              />
              <path
                d="M 190 70 C 180 140, 185 210, 215 270 C 240 330, 260 380, 280 430"
                stroke="#D5C7AF"
                strokeWidth="0.8"
                opacity="0.8"
              />

              {/* Western Ghats Hill Shading Vector Region */}
              <path
                d="M 130 50 Q 155 70 170 120 T 195 190 T 215 270 T 240 370 T 255 450 L 190 450 Q 170 360 140 280 T 115 150 Z"
                fill="#244C5A"
                fillOpacity="0.05"
              />
              <text
                x="115"
                y="110"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontSize="9"
                fontWeight="700"
                fill="#8B7E6B"
                letterSpacing="0.15em"
                transform="rotate(65 115 110)"
              >
                WESTERN GHATS RANGE
              </text>
              <text
                x="480"
                y="130"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontSize="10"
                fontWeight="600"
                fill="#8E8373"
                letterSpacing="0.2em"
                opacity="0.7"
              >
                TAMIL NADU CORRIDOR
              </text>
              <text
                x="570"
                y="320"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontSize="9"
                fontWeight="700"
                fill="#6D7E8C"
                letterSpacing="0.18em"
                transform="rotate(-40 570 320)"
              >
                BAY OF BENGAL
              </text>

              {/* Supply Chain Journey Transit Vectors */}
              {/* 1. Rajapalayam to Erode */}
              <path
                d="M 320 375 C 330 300, 390 230, 420 155"
                stroke="#364C7B"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
                opacity="0.85"
              />
              {/* 2. Erode to Negamam */}
              <path
                d="M 420 155 C 360 180, 305 210, 255 245"
                stroke="#15803D"
                strokeWidth="2.5"
                strokeDasharray="5 4"
                strokeLinecap="round"
              />
              {/* 3. Negamam to Pollachi GI Inspection Hub */}
              <path
                d="M 255 245 L 210 275"
                stroke="#D97706"
                strokeWidth="2.5"
                strokeDasharray="4 3"
                strokeLinecap="round"
              />
              {/* 4. Pollachi to Customer Token Dispatch Hub */}
              <path
                d="M 210 275 C 235 310, 310 330, 390 315"
                stroke="#364C7B"
                strokeWidth="2"
                strokeDasharray="3 3"
                strokeLinecap="round"
                opacity="0.75"
              />

              {/* Active Pulse Glow around Negamam */}
              <circle cx="255" cy="245" r="26" fill="#15803D" fillOpacity="0.15" />
              <circle cx="255" cy="245" r="16" fill="#15803D" fillOpacity="0.2" />
            </svg>
          </div>

          {/* Top HUD Bar: Regional Coordinates & Telemetry Controls */}
          <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 bg-[#FEF9EE]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-card-border shadow-xs">
              <span className="material-symbols-outlined text-indigo-blue text-sm">pin_drop</span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 leading-tight">
                <span className="text-[11px] font-bold text-night-slate tracking-tight">
                  Tamil Nadu Handloom Corridor
                </span>
                <span className="hidden sm:inline text-card-border">|</span>
                <span className="text-[10px] font-mono text-night-slate/70">
                  {activeNode.coordinates}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#FEF9EE]/90 backdrop-blur-md border border-card-border text-[10px] font-mono text-night-slate/80">
                <span className="w-1.5 h-1.5 rounded-full bg-weave-green animate-ping"></span> Live GPS Active
              </span>
              <span className="px-2.5 py-1 rounded bg-indigo-blue text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                5 Tracked Nodes
              </span>
            </div>
          </div>

          {/* Interactive Nodes / Geo Map Checkpoints Placed on Coordinates */}
          <div className="relative z-10 flex-1 w-full h-full pointer-events-none">
            {/* Node 1: Rajapalayam */}
            <div
              onClick={() => setActiveNodeId(1)}
              className={`absolute left-[41%] top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex items-center gap-1.5 group/pin cursor-pointer transition-transform ${
                activeNodeId === 1 ? 'scale-110 z-30' : 'hover:scale-105'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md transition-colors ${
                  activeNodeId === 1
                    ? 'bg-indigo-blue text-white ring-2 ring-indigo-blue/40'
                    : 'bg-[#FEF9EE] border-2 border-indigo-blue text-indigo-blue'
                }`}
              >
                01
              </div>
              <div className="bg-[#FEF9EE]/95 backdrop-blur-xs border border-card-border px-2 py-0.5 rounded shadow-xs text-left">
                <p className="text-[10px] font-bold text-night-slate leading-none">Rajapalayam</p>
                <span className="text-[8px] font-mono text-night-slate/60">09°27′N · Ginned 80s</span>
              </div>
            </div>

            {/* Node 2: Erode Dyeworks */}
            <div
              onClick={() => setActiveNodeId(2)}
              className={`absolute left-[54%] top-[33%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex flex-col items-center group/pin cursor-pointer transition-transform ${
                activeNodeId === 2 ? 'scale-110 z-30' : 'hover:scale-105'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md transition-colors ${
                  activeNodeId === 2
                    ? 'bg-deep-teal text-white ring-2 ring-deep-teal/40'
                    : 'bg-[#FEF9EE] border-2 border-deep-teal text-deep-teal'
                }`}
              >
                02
              </div>
              <div className="mt-1 bg-[#FEF9EE]/95 backdrop-blur-xs border border-card-border px-2 py-0.5 rounded shadow-xs text-center">
                <p className="text-[10px] font-bold text-night-slate leading-none">Erode Clusters</p>
                <span className="text-[8px] font-mono text-night-slate/60">11°20′N · Azo-Free Dye</span>
              </div>
            </div>

            {/* Node 3: Negamam Pit Loom #184 (Active Hub - Pulsing Beacon) */}
            <div
              onClick={() => setActiveNodeId(3)}
              className={`absolute left-[33%] top-[53%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex flex-col items-center z-20 group/origin cursor-pointer transition-transform ${
                activeNodeId === 3 ? 'scale-110 z-40' : 'hover:scale-105'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-10 h-10 rounded-full bg-weave-green/20 animate-ping"></span>
                <div className="w-8 h-8 rounded-full bg-indigo-blue text-white flex items-center justify-center text-xs font-bold shadow-lg ring-4 ring-weave-green/30 border-2 border-white">
                  <span className="material-symbols-outlined text-[15px]">home_pin</span>
                </div>
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-weave-green border border-white"></span>
              </div>
              <div className="mt-1.5 bg-indigo-blue text-white px-2.5 py-1 rounded-md shadow-md text-center border border-white/20">
                <div className="flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-weave-green animate-pulse"></span>
                  <p className="text-[10px] font-bold uppercase tracking-wider leading-none">
                    Negamam Society #184
                  </p>
                </div>
                <span className="text-[8px] font-mono text-white/80 block mt-0.5">
                  Murthy's Pit Loom · 10°37′N
                </span>
              </div>
            </div>

            {/* Node 4: Pollachi GI Audit */}
            <div
              onClick={() => setActiveNodeId(4)}
              className={`absolute left-[26%] top-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex items-center gap-1.5 group/pin cursor-pointer transition-transform ${
                activeNodeId === 4 ? 'scale-110 z-30' : 'hover:scale-105'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shadow-xs transition-colors ${
                  activeNodeId === 4
                    ? 'bg-zari-ochre text-white ring-2 ring-zari-ochre/40'
                    : 'bg-[#FEF9EE] border-2 border-zari-ochre text-zari-ochre'
                }`}
              >
                04
              </div>
              <div className="hidden sm:block bg-[#FEF9EE]/95 backdrop-blur-xs border border-card-border px-1.5 py-0.5 rounded shadow-xs text-left">
                <p className="text-[9px] font-bold text-night-slate leading-none">Pollachi Co-op</p>
                <span className="text-[8px] font-mono text-night-slate/60">GI-482 Registry</span>
              </div>
            </div>

            {/* Node 5: Customer QR Hub */}
            <div
              onClick={() => setActiveNodeId(5)}
              className={`absolute left-[52%] top-[68%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex items-center gap-1.5 group/pin cursor-pointer transition-transform ${
                activeNodeId === 5 ? 'scale-110 z-30' : 'hover:scale-105'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md transition-colors ${
                  activeNodeId === 5
                    ? 'bg-weave-green text-white ring-2 ring-weave-green/50'
                    : 'bg-weave-green text-white'
                }`}
              >
                05
              </div>
              <div className="bg-[#FEF9EE]/95 backdrop-blur-xs border border-card-border px-2 py-0.5 rounded shadow-xs text-left">
                <p className="text-[10px] font-bold text-night-slate leading-none">Customer QR Pack</p>
                <span className="text-[8px] text-weave-green font-semibold">Tamper-proof Seal</span>
              </div>
            </div>

            {/* Compass Rose Accent */}
            <div className="absolute top-2 right-4 pointer-events-none opacity-80 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-card-border/80 bg-[#FEF9EE]/80 backdrop-blur-xs flex items-center justify-center relative shadow-xs">
                <span className="text-[8px] font-serif font-bold text-indigo-blue absolute -top-1">N</span>
                <span className="text-[7px] font-serif text-night-slate/60 absolute -bottom-0.5">S</span>
                <span className="text-[7px] font-serif text-night-slate/60 absolute -left-0.5">W</span>
                <span className="text-[7px] font-serif text-night-slate/60 absolute -right-0.5">E</span>
                <div className="w-3 h-3 rotate-45 border-t-2 border-l-2 border-indigo-blue"></div>
              </div>
              <span className="text-[8px] font-mono text-night-slate/50 mt-1">SCALE: 1:50,000</span>
            </div>
          </div>

          {/* Bottom Cartographic Footnote & Elevation Corridor Bar */}
          <div className="relative z-10 p-3 bg-[#FEF9EE]/95 backdrop-blur-md border-t border-card-border flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-weave-green"></span>
              <span className="font-bold text-night-slate text-[11px]">
                Verified Origin: Negamam Weaver Society #184 (Pollachi Taluk, TN)
              </span>
              <span className="text-[10px] font-mono text-night-slate/60 bg-silk-cream px-1.5 py-0.2 border border-card-border rounded">
                PIN 642120
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-medium text-night-slate/70">
              <span className="hidden sm:inline flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px] text-indigo-blue">terrain</span>
                Western Ghats Rain-shadow Handloom Corridor
              </span>
              <span className="text-indigo-blue font-bold tracking-wider uppercase text-[9px] bg-indigo-blue/10 px-2 py-0.5 rounded border border-indigo-blue/20">
                GPS Audited
              </span>
            </div>
          </div>
        </div>

        {/* Right 5 cols: Punchy Coordinate Milestones */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-serif text-lg font-bold text-night-slate">
              Verified Provenance Chain
            </h3>
            <span className="text-[11px] font-semibold text-deep-teal">
              Node {activeNode.id} of 5 Active
            </span>
          </div>

          {PROVENANCE_NODES.map((node) => {
            const isSelected = node.id === activeNodeId;
            return (
              <div
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                  isSelected
                    ? 'bg-canvas-base border-indigo-blue shadow-xs ring-1 ring-indigo-blue/20'
                    : 'bg-canvas-base border-card-border hover:border-indigo-blue/40'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-indigo-blue text-white'
                      : 'bg-indigo-blue/15 text-indigo-blue'
                  }`}
                >
                  {node.id}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between items-baseline">
                    <span
                      className={`text-xs font-bold transition-colors ${
                        isSelected ? 'text-indigo-blue' : 'text-night-slate'
                      }`}
                    >
                      {node.name}
                    </span>
                    <span className="text-[10px] font-mono text-night-slate/50">
                      {node.coordinates.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-[11px] text-night-slate/70 mt-0.5">
                    {node.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
