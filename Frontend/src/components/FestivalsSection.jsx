import React, { useState, useEffect, useRef } from 'react';
import { FESTIVALS } from './Festivals';

export default function FestivalsSection() {
  const [audioActive, setAudioActive] = useState(false);
  const audioRef = useRef(null);

  // Initialize background ambient audio (replace src with your actual audio file or public asset)
  useEffect(() => {
    audioRef.current = new Audio('/konkan-ambient.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (audioActive) {
      audioRef.current.pause();
      setAudioActive(false);
    } else {
      audioRef.current.play().then(() => {
        setAudioActive(true);
      }).catch(err => {
        console.error("Audio playback prevented or failed:", err);
      });
    }
  };

  return (
    <section className="bg-[#0b1310] py-16 px-4 sm:px-6 lg:px-16 border-b border-emerald-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Konkan Flavors & Festivals
          </h2>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">
            Immerse yourself in the timeless cultural heritage and traditions of the coast.
          </p>
        </div>

        {/* Grid Container (3 Festivals + 1 Audio Card = 4 Columns on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FESTIVALS.map((festival) => (
            <div
              key={festival.key}
              className="bg-[#111a16] rounded-2xl p-4 shadow-lg border border-emerald-900/30 hover:border-emerald-500/50 flex flex-col justify-between group overflow-hidden transition-all duration-300"
            >
              <div className="overflow-hidden rounded-xl mb-4 h-40 bg-emerald-950/30">
                <img
                  src={festival.image}
                  alt={festival.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1.5 group-hover:text-emerald-400 transition-colors">
                    {festival.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {festival.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Audio Toggle Vibe Card */}
          <div className="bg-[#13221b] border border-emerald-900/50 rounded-2xl p-6 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🌊</span>
                <h3 className="font-semibold text-white text-lg">Konkan Vibe</h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Play gentle ambient sounds of waves crashing on a Konkan beach paired with distant temple bells.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-emerald-900/30 flex items-center justify-between">
              <span className="text-xs font-medium text-emerald-400">
                {audioActive ? 'Playing Vibe 🔊' : 'Muted 🔇'}
              </span>
              <button
                onClick={toggleAudio}
                aria-label="Toggle ambient audio"
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
                  audioActive ? 'bg-emerald-500 shadow-lg shadow-emerald-500/30' : 'bg-gray-700'
                }`}
              >
                <div 
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    audioActive ? 'translate-x-6' : 'translate-x-0'
                  }`} 
                />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}