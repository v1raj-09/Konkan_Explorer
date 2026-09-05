import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DistrictNavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDistrict, setActiveDistrict] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const districtsData = [
    {
      name: 'Ratnagiri',
      categories: ['Beaches', 'Temples', 'Forts', 'Waterfalls']
    },
    {
      name: 'Sindhudurg',
      categories: ['Beaches', 'Temples', 'Forts', 'Waterfalls']
    },
    {
      name: 'Raigad',
      categories: ['Beaches', 'Temples', 'Forts', 'Waterfalls']
    }
  ];

  // Close dropdown when clicking outside (essential for mobile/tablet UX)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveDistrict(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (district, category) => {
    const formattedCat = category.toLowerCase().endsWith('s') 
      ? category.toLowerCase().slice(0, -1) 
      : category.toLowerCase();

    navigate(`/explore?district=${district.toLowerCase()}&category=${formattedCat}`);
    
    setIsOpen(false);
    setActiveDistrict(null);
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative inline-block text-left"
      onMouseLeave={() => { 
        setIsOpen(false); 
        setActiveDistrict(null); 
      }}
    >
      {/* Navbar Trigger Button */}
      <button 
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="text-gray-300 hover:text-emerald-400 font-medium px-3 py-2 rounded-lg text-sm transition-colors duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 cursor-pointer"
      >
        Explore by District 
        <span className={`transform transition-transform duration-200 text-xs ${isOpen ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>

      {/* Main Dropdown (Districts) */}
      {isOpen && (
        <div className="absolute left-0 pt-2 w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="bg-[#111a16] border border-emerald-900/40 rounded-2xl shadow-2xl py-2 backdrop-blur-md">
            {districtsData.map((item) => {
              const isDistrictActive = activeDistrict === item.name;
              return (
                <div 
                  key={item.name}
                  onMouseEnter={() => setActiveDistrict(item.name)}
                  onClick={() => {
                    // Toggle sub-menu on mobile touch
                    setActiveDistrict(isDistrictActive ? null : item.name);
                  }}
                  className={`relative px-4 py-2.5 text-sm text-gray-200 hover:bg-emerald-950/60 hover:text-emerald-400 cursor-pointer flex justify-between items-center transition-colors ${
                    isDistrictActive ? 'bg-emerald-950/40 text-emerald-400 font-medium' : ''
                  }`}
                >
                  <span>{item.name}</span>
                  <span className={`text-xs text-emerald-500/70 transition-transform ${isDistrictActive ? 'translate-x-0.5' : ''}`}>
                    ▶
                  </span>

                  {/* Sub-dropdown (Categories) */}
                  {isDistrictActive && (
                    <div className="absolute left-full top-0 pl-1 w-48 z-50 animate-in fade-in slide-in-from-left-2 duration-150">
                      <div className="bg-[#111a16] border border-emerald-900/40 rounded-2xl shadow-2xl py-2">
                        <div className="px-4 py-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider border-b border-emerald-900/30 mb-1">
                          Select Vibe
                        </div>
                        {item.categories.map((cat) => (
                          <div
                            key={cat}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelect(item.name, cat);
                            }}
                            className="px-4 py-2 text-sm text-gray-300 hover:bg-emerald-500 hover:text-black font-medium cursor-pointer transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {cat}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DistrictNavDropdown;