import React, { useState, useRef, useEffect } from 'react';
import { FESTIVALS } from './Festivals';
import { useCombinedPlaces } from './Usecombinedplaces';

const BUBBLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: (i * 6.5) % 100,
  size: 4 + (i % 5) * 3,
  duration: 9 + (i % 5) * 2,
  delay: (i % 6) * -1.2,
}));

export default function HeroHeader() {
  const combinedPlaces = useCombinedPlaces();
  const [search, setSearch] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filterPlaces = combinedPlaces.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase()) ||
    place.category.toLowerCase().includes(search.toLowerCase())
  );

  const popularDestinations = combinedPlaces.slice(0, 6);

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-white group/hero min-h-screen flex flex-col justify-center pt-24 pb-12 lg:py-16">
      {/* Balanced Ambient Glows */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-emerald-600/15 blur-[140px] transition-transform duration-700 ease-out group-hover/hero:scale-110" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />

      {/* Floating Background Bubbles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {BUBBLES.map(b => (
          <span
            key={b.id}
            className="bubble absolute rounded-full bg-white/10 shadow-[0_0_8px_rgba(255,255,255,0.15)] animate-bounce"
            style={{
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col gap-10">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT COLUMN: Heading & Search Bar */}
          <div className="lg:col-span-7 text-left relative z-30 flex flex-col justify-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/70 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold mb-4 w-fit backdrop-blur-xl shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="tracking-wider uppercase">✨ Exclusive Coastal Trail</span>
            </div>

            {/* Immersive Typographic Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 leading-[1.1] tracking-tight drop-shadow-lg">
              Journey Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-white drop-shadow">
                The Jewels of Konkan
              </span>
            </h1>

            {/* Rich Subheading Description */}
            <p className="text-xs sm:text-base mb-6 text-gray-300 font-normal max-w-xl leading-relaxed tracking-wide">
              Immerse yourself in pristine emerald beaches, sacred ancient temples, vibrant cultural festivals, and breathtaking coastal horizons. Your unforgettable voyage starts here.
            </p>

            {/* Interactive Search Bar */}
            <div ref={searchRef} className="relative max-w-xl w-full">
              <div className="relative flex items-center shadow-2xl rounded-full bg-black/85 backdrop-blur-2xl border border-white/20 transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-400 focus-within:border-emerald-400">
                <span className="absolute left-4 text-emerald-400 text-sm sm:text-base">🔍</span>
                <input
                  type="text"
                  placeholder="Search 'Ganpatipule Temple', beaches..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setIsSearchFocused(true);
                  }}
                  onFocus={() => setIsSearchFocused(true)}
                  className="w-full py-3.5 sm:py-4 pl-11 sm:pl-12 pr-14 rounded-full text-white bg-transparent focus:outline-none text-xs sm:text-sm font-semibold placeholder-gray-500"
                />
                <button aria-label="Search places" className="absolute right-2 bg-emerald-500 text-black p-2.5 sm:p-3 rounded-full hover:bg-emerald-400 transition-all shadow-lg font-bold cursor-pointer">
                  ➔
                </button>
              </div>

              {/* Search Dropdown Results */}
              {isSearchFocused && search.trim() !== "" && (
                <div className="absolute left-0 right-0 mt-2 bg-black/95 backdrop-blur-2xl rounded-2xl shadow-2xl z-50 max-h-56 overflow-y-auto text-left border border-white/15 text-white divide-y divide-white/10">
                  {filterPlaces.length > 0 ? (
                    filterPlaces.map((place) => (
                      <a
                        key={place.id}
                        href={place.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsSearchFocused(false)}
                        className="flex items-center gap-3 p-3 hover:bg-white/15 cursor-pointer transition"
                      >
                        <img src={place.images[0]} alt={place.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover shadow-sm" />
                        <div className="flex-grow">
                          <h4 className="font-bold text-white text-xs sm:text-sm">{place.name}</h4>
                          <p className="text-[11px] text-gray-400">{place.distance}</p>
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-emerald-500/20">
                          {place.category}
                        </span>
                      </a>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-400 text-xs font-medium">
                      No places found matching "{search}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Bus Graphic with Headlight Beam Effects */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-full flex flex-col items-center group">
              <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-black via-emerald-950/40 to-black rounded-full blur-3xl pointer-events-none opacity-90 shadow-2xl" />

              {/* Headlight illumination light cone effects */}
              <div className="absolute bottom-6 left-1/4 w-40 sm:w-56 h-28 sm:h-36 bg-gradient-to-tr from-yellow-200/50 via-yellow-400/20 to-transparent blur-2xl pointer-events-none rotate-[-25deg] animate-pulse z-20" />
              <div className="absolute bottom-6 right-1/4 w-40 sm:w-56 h-28 sm:h-36 bg-gradient-to-tl from-yellow-200/50 via-yellow-400/20 to-transparent blur-2xl pointer-events-none rotate-[25deg] animate-pulse z-20" />

              <img
                src="/redbus111.png"
                alt="Konkan Explorer Bus"
                className="w-full max-w-[280px] sm:max-w-xl lg:max-w-2xl h-[280px] sm:h-[420px] lg:h-[480px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.95)] group-hover:scale-105 transition-transform duration-700 relative z-10"
              />
              <div className="mt-2 sm:mt-3 text-center relative z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide shadow-md backdrop-blur-md">
                  🚌 Konkan Explorer ST Bus
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Popular Destinations Marquee & Festivals */}
        <div className="pt-6 border-t border-white/10 relative z-20 space-y-6">

          {/* Popular Destinations Marquee */}
          <div className="space-y-2.5">
            <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Popular Destinations on Route
            </p>

            <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
              <div className="flex gap-4 animate-marquee whitespace-nowrap py-2">
                {popularDestinations.concat(popularDestinations).map((dest, idx) => (
                  <a
                    key={`${dest.id}-${idx}`}
                    href={dest.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[200px] sm:min-w-[240px] bg-black/60 backdrop-blur-xl border border-white/10 p-3 rounded-2xl hover:bg-black/90 hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-3 group shadow-lg shrink-0"
                  >
                    <div className="overflow-hidden rounded-xl shrink-0 shadow">
                      <img src={dest.images[0]} alt={dest.name} className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="overflow-hidden text-left">
                      <h4 className="font-semibold text-white text-xs sm:text-sm group-hover:text-emerald-300 transition truncate">{dest.name}</h4>
                      <p className="text-[10px] text-emerald-400 mt-0.5 tracking-wider">★★★★★</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Festivals Grid */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-base sm:text-xl font-bold text-white tracking-wide flex items-center gap-2">
                <span className="text-emerald-400">✨</span> Konkan Flavors & Festivals
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FESTIVALS.map((festival) => (
                <div
                  key={festival.key}
                  className="bg-black/50 backdrop-blur-xl rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/10 flex flex-col justify-between group overflow-hidden hover:border-emerald-500/50 hover:bg-black/70 transition-all duration-300"
                >
                  <div className="overflow-hidden rounded-xl mb-3 relative shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 z-10 pointer-events-none" />
                    <img
                      src={festival.image}
                      alt={festival.title}
                      className="w-full h-28 sm:h-36 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xs sm:text-base mb-1 group-hover:text-emerald-300 transition-colors">{festival.title}</h3>
                    <p className="text-[11px] sm:text-xs text-gray-300 line-clamp-2 leading-relaxed">{festival.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Custom CSS Keyframes for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </header>
  );
}