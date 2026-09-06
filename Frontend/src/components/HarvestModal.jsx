import React, { useEffect } from 'react';

export default function HarvestModal({ selectedItem, onClose }) {
  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem, onClose]);

  if (!selectedItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#050806]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 transition-all animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#111a16] border border-emerald-900/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 bg-black/60 text-gray-300 hover:text-white hover:bg-emerald-950 w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-emerald-500/30 shadow-md cursor-pointer"
        >
          ✕
        </button>

        <div className="max-h-[45vh] bg-[#0b1310] flex items-center justify-center overflow-hidden relative p-4 border-b border-emerald-900/30">
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            className="max-h-[42vh] w-auto object-contain relative z-0 transform hover:scale-105 transition-transform duration-500 rounded-xl"
            loading="lazy"
          />
        </div>

        <div className="p-6 sm:p-8 bg-[#111a16]">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            {selectedItem.badge && (
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                {selectedItem.badge}
              </span>
            )}
            {selectedItem.badge && selectedItem.region && <span className="text-emerald-800">•</span>}
            {selectedItem.region && (
              <span className="text-xs font-mono text-gray-400">📍 {selectedItem.region}</span>
            )}
            {selectedItem.builtBy && (
              <span className="text-xs font-medium text-emerald-300/80 bg-emerald-900/20 px-2.5 py-0.5 rounded-md border border-emerald-800/30">
                Built by: {selectedItem.builtBy}
              </span>
            )}
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {selectedItem.name}
          </h2>
          
          <p className="text-gray-300 text-sm font-light leading-relaxed mb-8">
            {selectedItem.description}
          </p>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}