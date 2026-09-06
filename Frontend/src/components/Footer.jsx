import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#050806] via-[#111814] to-[#0a0f0d] text-gray-300 font-sans pt-12 pb-8 border-t border-emerald-500/20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 relative z-10">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-400">Konkan</span>
            <span className="text-2xl font-light text-white ml-1">Explorer</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
            Your ultimate digital travel guide to discovering the best beaches, historical forts, and natural wonders of Ratnagiri, Sindhudurg, and Raigad.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm sm:text-base mb-4 tracking-wide uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                <span className="text-emerald-500 transition-transform group-hover:translate-x-1">›</span> Home
              </Link>
            </li>
            <li>
              <Link to="/explore" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                <span className="text-emerald-500 transition-transform group-hover:translate-x-1">›</span> Explore All Places
              </Link>
            </li>
            <li>
              <a href="#add-spot" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                <span className="text-emerald-500 transition-transform group-hover:translate-x-1">›</span> Suggest a Spot
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact / Region Info */}
        <div>
          <h4 className="text-white font-semibold text-sm sm:text-base mb-4 tracking-wide uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Covered Regions
          </h4>
          <div className="space-y-2 text-xs sm:text-sm text-gray-300">
            <p className="flex items-center gap-2">📍 Ratnagiri & Sindhudurg District</p>
            <p className="flex items-center gap-2">📍 Raigad & Konkan Belt</p>
          </div>
          <div className="text-xs sm:text-sm text-emerald-400 font-medium mt-4 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl w-fit shadow-inner">
            Built with ❤️ for Konkan travelers.
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-white/10 text-center text-xs text-gray-400 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} Konkan Explorer. All rights reserved.</p>
        <p className="text-emerald-500/80 font-medium">Explore the uncharted beauty of Maharashtra</p>
      </div>
    </footer>
  );
}