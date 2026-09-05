import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AddSpot() {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Beach',
    distance: '',
    image: '',
    mapLink: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Spot Submitted:', formData);
    alert('Spot submitted successfully! (You can connect this to your backend or state storage)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-white font-sans flex flex-col justify-between relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/5 blur-[130px]" />

      <Navbar />

      <main className="max-w-xl mx-auto px-4 py-24 w-full flex-grow relative z-10">
        <div className="bg-black/60 backdrop-blur-xl py-8 px-6 sm:px-8 shadow-2xl rounded-2xl border border-white/10 relative group hover:border-emerald-500/40 transition-all duration-300">
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 z-0 pointer-events-none rounded-2xl" />

          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold text-white mb-2 text-center tracking-tight">
              Add a New <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-white">Konkan Spot</span> 
            </h2>
            <p className="text-sm text-gray-300 text-center mb-8 font-light">
              Help fellow travelers discover hidden gems in Ratnagiri or Sangameshwar.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Place Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Aare Ware Beach"
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl shadow-sm focus:outline-none focus:border-emerald-400 text-sm text-white placeholder-gray-500 transition cursor-text"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#111814] border border-white/10 rounded-xl shadow-sm focus:outline-none focus:border-emerald-400 text-sm text-white transition cursor-pointer"
                >
                  <option value="Beach" className="bg-[#111814] text-white">Beach</option>
                  <option value="Fort" className="bg-[#111814] text-white">Fort</option>
                  <option value="Nature" className="bg-[#111814] text-white">Nature / Waterfall</option>
                  <option value="History" className="bg-[#111814] text-white">History / Temple</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Distance / Location Info</label>
                <input
                  type="text"
                  name="distance"
                  required
                  value={formData.distance}
                  onChange={handleChange}
                  placeholder="e.g., 15 km from Ratnagiri"
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl shadow-sm focus:outline-none focus:border-emerald-400 text-sm text-white placeholder-gray-500 transition cursor-text"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Image URL</label>
                <input
                  type="url"
                  name="image"
                  required
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl shadow-sm focus:outline-none focus:border-emerald-400 text-sm text-white placeholder-gray-500 transition cursor-text"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Google Maps Link</label>
                <input
                  type="url"
                  name="mapLink"
                  required
                  value={formData.mapLink}
                  onChange={handleChange}
                  placeholder="https://maps.google.com/?q=..."
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl shadow-sm focus:outline-none focus:border-emerald-400 text-sm text-white placeholder-gray-500 transition cursor-text"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] text-xs uppercase tracking-widest mt-2 cursor-pointer hover:scale-[1.02]"
              >
                Submit Spot ➔
              </button>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}