import React, { useMemo } from 'react';
import { placesData } from './placesData.js';
import { fortsData } from './fortsData.js';
import { templeData } from './TempleData.jsx';
import { useCountUp } from './Usecountup.jsx';
import { useInView } from './Useinview .jsx';

function StatCard({ label, value }) {
  const [ref, inView] = useInView(0.4);
  const count = useCountUp(value, inView);
  return (
    <div ref={ref} className="text-center p-4 rounded-2xl bg-[#0b1310]/60 border border-emerald-900/40 backdrop-blur-md shadow-lg hover:border-emerald-500/40 transition-all duration-300">
      <p className="text-3xl md:text-4xl font-extrabold text-emerald-400 tracking-tight">{count}+</p>
      <p className="text-gray-300 text-xs sm:text-sm mt-1 uppercase tracking-wider font-medium">{label}</p>
    </div>
  );
}

export default function StatsStrip() {
  const stats = useMemo(() => ({
    beaches: placesData.length,
    forts: fortsData.length,
    temples: templeData.length,
  }), []);

  return (
    <div className="bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] border-y border-emerald-500/20 relative z-20">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Pristine Beaches" value={stats.beaches} />
        <StatCard label="Historic Forts" value={stats.forts} />
        <StatCard label="Sacred Temples" value={stats.temples} />
      </div>
    </div>
  );
}