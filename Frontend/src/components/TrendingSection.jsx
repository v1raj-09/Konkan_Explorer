import React, { useState, useEffect, useMemo } from 'react';
import { HeartIcon } from './HeartIcon';
import { useCombinedPlaces } from './Usecombinedplaces';

const FAVORITES_KEY = 'konkan_favorites';
const CATEGORIES = ['All', 'Beach', 'Fort', 'Temple'];

export default function TrendingSection() {
  const combinedPlaces = useCombinedPlaces();
  const [activeCategory, setActiveCategory] = useState('All');

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => { 
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const trendingPlaces = useMemo(() => {
    const shuffled = [...combinedPlaces].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 30);
  }, [combinedPlaces]);

  const filteredTrending = activeCategory === 'All'
    ? trendingPlaces
    : trendingPlaces.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-white relative overflow-hidden">
      {/* Background Glows matching the rich dark charcoal/emerald aesthetic */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/5 blur-[130px]" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Trending in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-white">Ratnagiri District</span>
        </h2>
        <a href="/explore" className="text-emerald-400 font-medium hover:text-emerald-300 transition hidden md:flex items-center gap-1 group">
          View All Places <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-3 mb-10 relative z-10">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border backdrop-blur-md cursor-pointer ${
              activeCategory === cat
                ? 'bg-emerald-500 text-black border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-105 font-bold'
                : 'bg-black/60 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10'
            }`}
          >
            {cat}
          </button>
        ))}
        {favorites.length > 0 && (
          <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-sm text-gray-300 bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <HeartIcon filled className="w-4 h-4 text-emerald-400" />
            {favorites.length} saved
          </span>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {filteredTrending.map((place, i) => {
          const isFavorite = favorites.includes(place.id);
          // Fallback check: handles both place.images array and place.image single string
          const placeImg = Array.isArray(place.images) ? place.images[0] : (place.image || 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=600&q=80');

          return (
            <div
              key={place.id}
              style={{ animationDelay: `${Math.min(i, 12) * 50}ms` }}
              className="card-in group bg-black/60 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col border border-white/10 hover:border-emerald-500/40"
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 z-10 pointer-events-none" />
                <img
                  src={placeImg}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <button
                  onClick={() => toggleFavorite(place.id)}
                  aria-label="Toggle favorite"
                  className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all z-20 backdrop-blur-md cursor-pointer ${
                    isFavorite ? 'bg-emerald-500 text-black font-bold shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-black/70 text-gray-300 hover:text-emerald-400 border border-white/10'
                  }`}
                >
                  <HeartIcon filled={isFavorite} className={`w-4 h-4 ${isFavorite ? 'heart-pop' : ''}`} />
                </button>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {place.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-1 group-hover:text-emerald-300 transition-colors">{place.name}</h3>
                  <p className="text-gray-400 text-xs mb-4 line-clamp-1">{place.distance || place.region || place.description}</p>
                </div>

                <a
                  href={place.mapLink || `https://maps.google.com/?q=${encodeURIComponent(place.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium py-2.5 px-4 rounded-xl hover:bg-emerald-500 hover:text-black transition-all text-xs tracking-wide uppercase font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  View on Map ➔
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}