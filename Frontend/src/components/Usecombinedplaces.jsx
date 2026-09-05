import { useMemo } from 'react';
import { placesData } from '../components/placesData.js';
import { fortsData } from '../components/fortsData.js';
import { templeData } from '../components/TempleData.jsx';

// Merges places/forts/temples into one uniform shape. Used by both the Hero
// (search + popular row) and the Trending section — each caller gets its
// own memoized copy, so no prop-drilling from Home.jsx is needed.
export function useCombinedPlaces() {
  return useMemo(() => [
    ...placesData,
    ...fortsData.map(fort => ({
      id: `fort-${fort.id}`,
      name: fort.name,
      category: 'Fort',
      images: [fort.image],
      distance: `${fort.region} • Built by ${fort.builtBy}`,
      mapLink: fort.mapLink || '#'
    })),
    ...templeData.map(temple => ({
      id: `temple-${temple.id}`,
      name: temple.name,
      category: 'Temple',
      images: [temple.image],
      distance: `${temple.region} • ${temple.deity || 'Sacred Shrine'}`,
      mapLink: temple.mapLink || '#'
    }))
  ], []);
}