import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { placesData } from '../components/placesData.js';
import { fortsData } from '../components/fortsData.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { templeData } from '../components/TempleData.jsx';
import { WaterfallData } from '../components/WaterfallData.jsx';

export default function Explore() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const urlCategory = searchParams.get('category');
  const urlDistrict = searchParams.get('district');

  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const districts = ['All', 'Sindhudurg', 'Ratnagiri', 'Raigad'];
  const categories = ['All', 'Beach', 'Fort', 'Temple', 'Waterfall'];

  // Sync URL parameters on load/change
  useEffect(() => {
    if (urlCategory) {
      const formatted = urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1).toLowerCase();
      setSelectedCategory(formatted.endsWith('s') ? formatted.slice(0, -1) : formatted);
    }
    if (urlDistrict) {
      setSelectedDistrict(urlDistrict.charAt(0).toUpperCase() + urlDistrict.slice(1).toLowerCase());
    }
  }, [urlCategory, urlDistrict]);

  // Combine datasets safely
  const combinedPlaces = [
    ...(placesData || []).map(p => ({ ...p, category: p.category || 'Beach' })),
    ...(fortsData || []).map(fort => ({
      id: `fort-${fort.id}`,
      name: fort.name,
      category: 'Fort', 
      region: fort.region || '', 
      images: [fort.image], 
      distance: `${fort.region || ''} • Built by ${fort.builtBy || 'Unknown'}`,
      mapLink: fort.mapLink || '#' 
    })),
    ...(templeData || []).map(temple => ({
      id: `temple-${temple.id}`,
      name: temple.name,
      category: 'Temple', 
      region: temple.region || '', 
      images: [temple.image], 
      distance: `${temple.region || ''} • ${temple.deity || 'Sacred Shrine'}`,
      mapLink: temple.mapLink || '#' 
    })),
    ...(WaterfallData || []).map(fall => ({
      id: `waterfall-${fall.id}`,
      name: fall.name,
      category: 'Waterfall', 
      region: fall.region || '', 
      images: [fall.image], 
      distance: `${fall.region || ''} • ${fall.type || 'Natural'}`,
      mapLink: fall.mapLink || '#' 
    }))
  ];

  // Robust filtering logic
  const filteredPlaces = combinedPlaces.filter((place) => {
    const placeCat = (place.category || '').toLowerCase().trim();
    const selCat = selectedCategory.toLowerCase().trim();
    
    const matchesCategory = 
      selCat === 'all' || 
      placeCat === selCat || 
      placeCat === selCat + 's' || 
      placeCat + 's' === selCat;

    const placeRegion = (place.region || place.location || '').toLowerCase();
    const selDist = selectedDistrict.toLowerCase();
    const matchesDistrict = selDist === 'all' || placeRegion.includes(selDist);

    return matchesCategory && matchesDistrict;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-white font-sans flex flex-col justify-between relative overflow-hidden pt-16 selection:bg-emerald-500 selection:text-black">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/5 blur-[130px]" />

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow relative z-10 w-full">
        
        {/* Header Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-white">{selectedDistrict !== 'All' ? selectedDistrict : 'Konkan'}</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Filter through pristine beaches, historic forts, sacred spaces, and cascading waterfalls.
          </p>
        </div>

        {/* Filter Controls Container */}
        <div className="bg-[#13221b]/80 backdrop-blur-xl p-6 rounded-2xl border border-emerald-900/50 shadow-xl mb-12 flex flex-col md:flex-row gap-6 justify-between items-center">
          
          {/* District Selector */}
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-emerald-400 mb-2">Select District</label>
            <div className="flex flex-wrap gap-2">
              {districts.map((district) => (
                <button
                  key={district}
                  onClick={() => setSelectedDistrict(district)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    selectedDistrict === district
                      ? 'bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20 scale-105'
                      : 'bg-[#0b1310] text-gray-300 hover:bg-emerald-950 border border-emerald-900/40'
                  }`}
                >
                  {district}
                </button>
              ))}
            </div>
          </div>

          {/* Category / Vibe Selector */}
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-emerald-400 mb-2">Select Category / Vibe</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    selectedCategory.toLowerCase() === category.toLowerCase()
                      ? 'bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20 scale-105'
                      : 'bg-[#0b1310] text-gray-300 hover:bg-emerald-950 border border-emerald-900/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Destinations Grid */}
        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPlaces.map((place, i) => (
              <div 
                key={place.id || i} 
                className="group bg-black/60 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col border border-white/10 hover:border-emerald-500/40"
              >
                {/* Clickable Image Thumbnail */}
                <div 
                  onClick={() => navigate(`/book/${encodeURIComponent(place.name)}`)}
                  className="relative overflow-hidden h-48 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 z-10 pointer-events-none" />
                  <img 
                    src={place.images?.[0] || 'https://via.placeholder.com/400x300'} 
                    alt={place.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  <span className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-emerald-500/30">
                    {place.category}
                  </span>
                </div>
                
                {/* Content Details */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div 
                    onClick={() => navigate(`/book/${encodeURIComponent(place.name)}`)}
                    className="cursor-pointer"
                  >
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                      {place.distance}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => navigate(`/book/${encodeURIComponent(place.name)}`)}
                      className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl transition-all text-xs tracking-wide uppercase shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      🏨 Select Stay & Packages
                    </button>

                    <a 
                      href={place.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full text-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium py-2 px-4 rounded-xl hover:bg-emerald-950 transition-all text-xs tracking-wide uppercase flex items-center justify-center gap-2 cursor-pointer"
                    >
                      View on Map ➔
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400 bg-black/40 rounded-2xl border border-white/10">
            <p className="text-base font-medium">No destinations found matching your selected filters.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}