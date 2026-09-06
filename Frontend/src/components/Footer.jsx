import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#050806] via-[#111814] to-[#0a0f0d] text-gray-300 font-sans pt-16 pb-8 border-t border-emerald-500/20 relative overflow-hidden">
      
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 relative z-10">
        
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-400">Konkan</span>
            <span className="text-2xl font-light text-white ml-1">Explorer</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Your ultimate digital travel guide to discovering the best beaches, historical forts, and natural wonders of Ratnagiri, Sindhudurg, and Raigad.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#facebook" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-black/50 border border-emerald-900/40 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition cursor-pointer">
              <span className="text-sm">f</span>
            </a>
            <a href="#instagram" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-black/50 border border-emerald-900/40 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition cursor-pointer">
              <span className="text-sm">ig</span>
            </a>
            <a href="#twitter" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-black/50 border border-emerald-900/40 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition cursor-pointer">
              <span className="text-sm">t</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm sm:text-base mb-4 tracking-wide uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Quick Links
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                <span className="text-emerald-500 transition-transform group-hover:translate-x-1">›</span> Home
              </Link>
            </li>
            <li>
              <Link to="/explore" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                <span className="text-emerald-500 transition-transform group-hover:translate-x-1">›</span> Explore All Places
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                <span className="text-emerald-500 transition-transform group-hover:translate-x-1">›</span> About Us
              </Link>
            </li>
            <li>
              <Link to="/addSpot" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                <span className="text-emerald-500 transition-transform group-hover:translate-x-1">›</span> Suggest a Spot
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm sm:text-base mb-4 tracking-wide uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Covered Regions
          </h4>
          <div className="space-y-3 text-xs sm:text-sm text-gray-300">
            <p className="flex items-center gap-2 hover:text-emerald-400 transition">📍 Ratnagiri District</p>
            <p className="flex items-center gap-2 hover:text-emerald-400 transition">📍 Sindhudurg District</p>
            <p className="flex items-center gap-2 hover:text-emerald-400 transition">📍 Raigad & Konkan Belt</p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm sm:text-base mb-4 tracking-wide uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Get in Touch
          </h4>
          <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
            Have a question or want to collaborate? Reach out to us anytime.
          </p>
          <div className="text-xs sm:text-sm text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl w-fit shadow-inner">
            Built with ❤️ for Konkan travelers.
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-white/10 text-center text-xs text-gray-400 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>&copy; {new Date().getFullYear()} Konkan Explorer. All rights reserved.</p>
        <p className="text-emerald-400/90 font-medium tracking-wide">Explore the uncharted beauty of Maharashtra</p>
      </div>
    </footer>
  );
}