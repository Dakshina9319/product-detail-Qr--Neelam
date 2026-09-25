import React, { useState } from 'react';
import { INITIAL_GRATITUDE_NOTES } from '../data/provenanceData';
import { GratitudeNote } from '../types';

export const GratitudeDock: React.FC = () => {
  const [notes, setNotes] = useState<GratitudeNote[]>(INITIAL_GRATITUDE_NOTES);
  const [message, setMessage] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false);
  const [showNotesDrawer, setShowNotesDrawer] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newNote: GratitudeNote = {
      id: `note-${Date.now()}`,
      author: 'You (Conscious Patron)',
      location: 'Verified Buyer',
      text: message.trim(),
      timestamp: 'Just now',
      sareeRef: '#NGM1024'
    };

    setNotes([newNote, ...notes]);
    setMessage('');
    setIsSent(true);

    setTimeout(() => {
      setIsSent(false);
    }, 4000);
  };

  return (
    <>
      <div className="sticky bottom-4 z-40 w-full">
        <div className="bg-silk-cream/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-card-border shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-blue/10 border border-indigo-blue/20 flex items-center justify-center shrink-0 text-indigo-blue">
              <span className="material-symbols-outlined text-xl">handshake</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-night-slate">Direct Connection with Murthy S.</span>
                <span className="px-2 py-0.5 rounded bg-weave-green/10 text-weave-green text-[10px] font-bold uppercase tracking-wider">
                  Saree #NGM1024
                </span>
              </div>
              <p className="text-[11px] text-night-slate/60 hidden md:block">
                Send a direct message or note of appreciation straight to his society register.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a note of gratitude to Murthy..."
              className="flex-1 sm:w-72 px-3 py-1.5 text-xs bg-canvas-base border border-card-border rounded-lg text-night-slate placeholder:text-night-slate/40 focus:outline-none focus:ring-1 focus:ring-indigo-blue"
            />
            <button
              type="submit"
              className={`px-4 py-2 rounded-lg text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1 shadow-xs cursor-pointer ${
                isSent
                  ? 'bg-weave-green'
                  : 'bg-indigo-blue hover:bg-indigo-dark'
              }`}
            >
              <span>{isSent ? 'Note Delivered!' : 'Send Note'}</span>
              <span className="material-symbols-outlined text-[15px]">
                {isSent ? 'done' : 'send'}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setShowNotesDrawer(true)}
              className="p-2 rounded-lg border border-card-border bg-canvas-base text-night-slate hover:bg-sand-light transition-colors text-xs font-medium shrink-0 flex items-center justify-center"
              title="View society gratitude ledger"
            >
              <span className="material-symbols-outlined text-[16px] text-indigo-blue">
                forum
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Society Gratitude Ledger Modal */}
      {showNotesDrawer && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-silk-cream border border-card-border rounded-xl p-6 max-w-lg w-full shadow-2xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-card-border mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-deep-teal tracking-wider">
                  Society Ledger Register
                </span>
                <h3 className="font-serif text-lg font-bold text-night-slate">
                  Patron Notes to Master Weaver Murthy S.
                </h3>
              </div>
              <button
                onClick={() => setShowNotesDrawer(false)}
                className="p-1 rounded-md text-night-slate/60 hover:text-night-slate hover:bg-canvas-base"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {notes.map((n) => (
                <div key={n.id} className="p-3 bg-canvas-base border border-card-border rounded-lg text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-night-slate">{n.author}</span>
                    <span className="text-[10px] text-night-slate/50 font-mono">{n.timestamp}</span>
                  </div>
                  <p className="text-night-slate/80 leading-relaxed font-sans">{n.text}</p>
                  <div className="mt-2 text-[10px] text-deep-teal font-semibold">
                    Associated Piece: {n.sareeRef}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-card-border flex justify-end">
              <button
                onClick={() => setShowNotesDrawer(false)}
                className="px-4 py-2 rounded-lg bg-indigo-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-indigo-dark"
              >
                Close Register
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
