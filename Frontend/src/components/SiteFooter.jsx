import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-gray-400 py-10 border-t border-emerald-500/20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <Link to="/" className="text-base font-black text-white tracking-tight group">
          Konkan<span className="text-yellow-400 font-light ml-1">Explorer</span>
        </Link>

        <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium">
          <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <Link to="/explore" className="hover:text-emerald-400 transition-colors">Explore</Link>
          <Link to="/about" className="hover:text-emerald-400 transition-colors">About</Link>
          <Link to="/konkanharvest" className="hover:text-emerald-400 transition-colors">Konkan Harvest</Link>
        </div>

        <p className="text-xs text-gray-500 font-mono">
          © {new Date().getFullYear()} Konkan Explorer. All rights reserved.
        </p>

      </div>
    </footer>
  );
}