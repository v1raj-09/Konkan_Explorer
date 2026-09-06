import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-white font-sans flex flex-col justify-between relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/5 blur-[130px]" />

      <Navbar />

      <main className="flex-grow relative z-10 w-full pt-20">
        
        <div className="bg-black/40 backdrop-blur-md border-b border-white/10 py-16 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-transparent to-emerald-500/10 pointer-events-none" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight relative z-10">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-white">Konkan Explorer</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed relative z-10">
            Your ultimate digital guide to experiencing the rich culture, pristine beaches, and historic forts of Ratnagiri and Sangameshwar.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                Discovering the Soul of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-white">Konkan</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                Konkan Explorer was built to bridge the gap between travelers and the hidden wonders of the Konkan region. Whether it is the golden sands of Ganpatipule, the majestic historical ruins of Jaigad and Ratnadurg, or the serene waterfalls of Marleshwar near Sangameshwar, our platform brings everything to your fingertips.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Our mission is to promote local tourism, support travelers with accurate destination insights, and make trip planning seamless and enjoyable for everyone.
              </p>
            </div>

            <div className="bg-black/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10 relative group hover:border-emerald-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 z-10 pointer-events-none rounded-2xl" />
              <div className="relative z-20">
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 w-6 h-6 rounded-full flex items-center justify-center shrink-0">✓</span> Curated spots across Ratnagiri & Sangameshwar
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 w-6 h-6 rounded-full flex items-center justify-center shrink-0">✓</span> Direct integration with Google Maps for easy navigation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 w-6 h-6 rounded-full flex items-center justify-center shrink-0">✓</span> Community-driven platform to add and discover new places
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 w-6 h-6 rounded-full flex items-center justify-center shrink-0">✓</span> Clean, fast, and mobile-friendly user experience
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}