import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function PlaceDetail() {
  const { placeName } = useParams();
  const navigate = useNavigate();

  const formattedName = placeName
    ? placeName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Konkan Destination';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-white pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-[#111a16] border border-emerald-900/50 shadow-2xl rounded-3xl overflow-hidden p-6 sm:p-10">
        
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-2 rounded-xl hover:bg-emerald-900/40 transition-colors cursor-pointer"
        >
          ← Back to Explorer
        </button>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
              📍 Konkan Gem
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white mt-3 capitalize tracking-tight">
              {formattedName}
            </h1>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-yellow-400 bg-yellow-400/10 px-3.5 py-1.5 rounded-xl border border-yellow-400/20">
              ★★★★★ 4.9 / 5.0
            </span>
          </div>
        </div>

        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-emerald-900/40 shadow-inner group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=80"
            alt={formattedName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <p className="text-xs font-mono text-emerald-300">Pristine Coastline & Cultural Heritage</p>
          </div>
        </div>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
          Discover the majestic beauty, rich history, and serene landscapes of {formattedName}. Immerse yourself in authentic local coastal culture, pristine emerald shorelines, and breathtaking sunsets. Plan your perfect Konkan getaway with our exclusive stay packages.
        </p>

        <div className="flex justify-start">
          <button 
            onClick={() => navigate(`/book/${placeName}`)}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black text-xs uppercase tracking-widest font-extrabold rounded-2xl transition-all shadow-lg shadow-emerald-500/20 hover:scale-105 flex items-center gap-2.5 cursor-pointer"
          >
            <span>🏨</span> Explore Stay Packages & Book
          </button>
        </div>

      </div>
    </div>
  );
}