import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#050806] via-[#111814] to-[#0a0f0d] text-gray-300 font-sans pt-12 pb-8 border-t border-emerald-500/20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 relative z-10">
        
        {/* Column 1: Brand Info */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-emerald-400">Konkan</span>
            <span className="text-2xl font-light text-white ml-1">Explorer</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your ultimate digital travel guide to discovering the best beaches, historical forts, and natural wonders of Ratnagiri and Sangameshwar.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4 tracking-wide uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/explore" className="hover:text-emerald-400 transition-colors">Explore All Places</Link>
            </li>
            <li>
              <a href="#add-spot" className="hover:text-emerald-400 transition-colors">Suggest a Spot</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact / Region Info */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4 tracking-wide uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Covered Regions
          </h4>
          <p className="text-sm text-gray-300 mb-2">📍 Ratnagiri District, Maharashtra</p>
          <p className="text-sm text-gray-300 mb-2">📍 Sangameshwar Taluka & Surroundings</p>
          <div className="text-sm text-emerald-400 font-medium mt-4 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl w-fit">
            Built with ❤️ for Konkan travelers.
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-white/10 text-center text-xs text-gray-400 relative z-10">
        <p>&copy; {new Date().getFullYear()} Konkan Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
}