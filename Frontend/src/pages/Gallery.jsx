import React, { useState } from 'react';
import { placesData } from '../components/placesData.js';
import { fortsData } from '../components/fortsData.js';
import { templeData } from '../components/TempleData.jsx';
import { WaterfallData } from '../components/WaterfallData.jsx';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Gallery() {
  const allGalleryItems = [
    ...(placesData || []).map(item => ({
      id: `place-${item.id}`,
      title: item.name,
      category: item.category || 'Beach',
      image: item.images?.[0] || 'https://via.placeholder.com/400x300',
      region: item.distance || 'Ratnagiri'
    })),
    ...(fortsData || []).map(item => ({
      id: `fort-${item.id}`,
      title: item.name,
      category: 'Fort',
      image: item.image,
      region: `${item.region} • Fort`
    })),
    ...(templeData || []).map(item => ({
      id: `temple-${item.id}`,
      title: item.name,
      category: 'Temple',
      image: item.image,
      region: `${item.region} • Shrine`
    })) ,
    ...(WaterfallData || []).map(item => ({
      id: `waterfall-${item.id}`,
      title: item.name,
      category: 'Waterfall',
      image: item.image,
      region: `${item.region} • Cascade`
    }))
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Beach', 'Fort', 'Temple', 'Waterfall'];

  const filteredItems = activeCategory === 'All'
    ? allGalleryItems
    : allGalleryItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-white font-sans flex flex-col justify-between relative overflow-hidden pt-16 selection:bg-emerald-500 selection:text-black">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/5 blur-[130px]" />

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 flex-grow relative z-10 w-full">

        {/* Editorial Portfolio Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-emerald-400 font-semibold block mb-3">
            Visual Exhibition
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white mb-4">
            Konkan Through <span className="italic font-normal text-emerald-300">The Lens</span>
          </h1>
          <div className="w-12 h-[1px] bg-emerald-500/40 mx-auto my-4"></div>
          <p className="text-gray-300 text-sm font-light leading-relaxed">
            A curated visual compilation showcasing the raw textures, monumental architecture, and tranquil waters of the Konkan coastline.
          </p>
        </div>

        {/* Elegant Floating Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full border cursor-pointer ${
                  active
                    ? 'bg-emerald-400 text-black border-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-105'
                    : 'bg-black/40 text-gray-300 border-white/10 hover:border-emerald-500/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Immersive Photo Masonry / Asymmetric Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer bg-black/60 border border-white/10 shadow-xl hover:border-emerald-500/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] transition-all duration-500"
            >
              {/* Image Frame with Zoom */}
              <div className="w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-xl tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs font-mono mt-1 opacity-90">
                    {item.region}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-32 text-gray-400 font-light tracking-wider bg-black/40 rounded-2xl border border-white/10">
            NO PHOTOGRAPHIC ARCHIVES FOUND.
          </div>
        )}

      </main>

      <Footer />

      {/* Cinematic Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111c17] border border-emerald-900/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Trigger */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 bg-black/80 text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-white/10 shadow cursor-pointer"
            >
              ✕
            </button>

            {/* Display Image Container */}
            <div className="max-h-[72vh] bg-black/60 flex items-center justify-center p-3">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[68vh] w-auto object-contain rounded-lg"
              />
            </div>

            {/* Artistic Modal Details */}
            <div className="p-6 sm:p-8 bg-[#111c17] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-emerald-900/40">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                  {selectedImage.category} Collection
                </span>
                <h2 className="text-2xl font-serif text-white mt-1">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-400 text-xs mt-1 font-mono">
                  {selectedImage.region}
                </p>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="px-6 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-black text-xs uppercase tracking-widest font-extrabold rounded-xl transition-all cursor-pointer shadow-md"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}