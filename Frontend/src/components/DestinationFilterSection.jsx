import React, { useState, useEffect } from 'react';

const DestinationFilterSection = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  const districts = ['All', 'Sindhudurg', 'Ratnagiri', 'Raigad'];
  const categories = ['All', 'Beaches', 'Temples', 'Waterfalls', 'Forts'];

  useEffect(() => {
    const fetchDestinations = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://your-api-domain.com/api/destinations?district=${encodeURIComponent(selectedDistrict)}&category=${encodeURIComponent(selectedCategory)}`
        );
        const data = await response.json();
        setDestinations(data);
      } catch (err) {
        console.error('Error fetching destinations:', err);
        setDestinations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, [selectedDistrict, selectedCategory]);

  return (
    <section className="bg-[#0b1310] text-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">
            Explore Konkan By Region & Vibe
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
            Filter through pristine beaches, historic forts, and sacred spaces to plan your next getaway.
          </p>
        </div>

        {/* Filter Controls Container */}
        <div className="bg-[#13221b] p-6 sm:p-8 rounded-2xl border border-emerald-900/50 shadow-2xl mb-12 flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center">
          
          {/* District Selector */}
          <div className="w-full lg:w-1/2">
            <label className="block text-sm font-semibold text-emerald-400 mb-3 tracking-wide uppercase">
              Select District
            </label>
            <div className="flex flex-wrap gap-2">
              {districts.map((district) => {
                const isActive = selectedDistrict === district;
                return (
                  <button
                    key={district}
                    onClick={() => setSelectedDistrict(district)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25 font-semibold'
                        : 'bg-[#0b1310] text-gray-300 hover:bg-emerald-950/60 border border-emerald-900/40 hover:border-emerald-700/50'
                    }`}
                  >
                    {district}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Selector */}
          <div className="w-full lg:w-1/2">
            <label className="block text-sm font-semibold text-emerald-400 mb-3 tracking-wide uppercase">
              Select Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25 font-semibold'
                        : 'bg-[#0b1310] text-gray-300 hover:bg-emerald-950/60 border border-emerald-900/40 hover:border-emerald-700/50'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loading ? (
            // Skeleton Loader / Loading State
            [...Array(3)].map((_, index) => (
              <div key={index} className="bg-[#111a16] rounded-2xl overflow-hidden border border-emerald-900/30 animate-pulse h-96">
                <div className="bg-emerald-950/30 h-56 w-full" />
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-emerald-950/40 rounded w-3/4" />
                  <div className="h-4 bg-emerald-950/40 rounded w-full" />
                  <div className="h-4 bg-emerald-950/40 rounded w-1/2" />
                </div>
              </div>
            ))
          ) : destinations.length > 0 ? (
            destinations.map((dest) => (
              <div 
                key={dest.id} 
                className="bg-[#111a16] rounded-2xl overflow-hidden border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-300 group flex flex-col shadow-lg"
              >
                <div className="relative h-56 overflow-hidden bg-emerald-950/20">
                  <img 
                    src={dest.images || 'https://via.placeholder.com/400x300'} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30">
                    {dest.category}
                  </span>
                </div>
                
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {dest.name}
                      </h3>
                      <span className="text-yellow-400 text-sm font-medium flex items-center gap-1">
                        ★ {dest.ratings}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-gray-400 border-t border-emerald-900/30 pt-3 mt-auto">
                    <span className="truncate max-w-[60%]">📍 {dest.location}</span>
                    <button className="text-emerald-400 hover:text-emerald-300 hover:underline font-medium cursor-pointer transition-colors">
                      View Details &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-[#13221b]/40 rounded-2xl border border-emerald-900/30">
              <p className="text-lg text-gray-400">No destinations found matching your selected filters.</p>
              <button 
                onClick={() => { setSelectedDistrict('All'); setSelectedCategory('All'); }}
                className="mt-4 px-5 py-2 bg-emerald-500 text-black font-semibold rounded-xl text-sm hover:bg-emerald-400 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default DestinationFilterSection;