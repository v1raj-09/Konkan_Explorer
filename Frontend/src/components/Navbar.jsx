import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import DistrictNavDropdown from './DistrictNavDropdown';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navRef = useRef(null);

  // लॉगिन स्टेटस चेक करणे आणि इव्हेंट ऐकणे
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token') || localStorage.getItem('user');
      setIsLoggedIn(!!token);
    };

    checkAuthStatus();

    window.addEventListener('userLogin', checkAuthStatus);
    window.addEventListener('storage', checkAuthStatus);

    return () => {
      window.removeEventListener('userLogin', checkAuthStatus);
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // बाहेर क्लिक केल्यावर मोबाईल मेनू बंद करणे
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'About', path: '/about' },
    { name: 'Konkan Harvest', path: '/konkanharvest' },
  ];

  // Logout फंक्शन
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setIsLoggedIn(false);
    setIsOpen(false);

    window.dispatchEvent(new Event('userLogin'));
    window.location.href = '/';
  };

  return (
    <nav ref={navRef} className="fixed top-0 inset-x-0 z-50 w-full">
      <div
        className={`w-full transition-all duration-300 border-b border-emerald-500/20 backdrop-blur-xl px-3 sm:px-8 py-3 flex items-center justify-between shadow-2xl ${
          scrolled
            ? 'bg-black/90 py-2 border-emerald-500/30'
            : 'bg-[#020E08]/90'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <img
            src="/redbus1.png"
            alt="Konkan Explorer Logo"
            className="h-7 sm:h-9 w-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-lg sm:text-xl font-black text-white tracking-tight">
            Konkan
            <span className="text-yellow-400 font-light ml-0.5 sm:ml-1">
              Explorer
            </span>
          </span>
        </Link>

        {/* Desktop District Dropdown */}
        <div className="hidden md:block">
          <DistrictNavDropdown />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 bg-black/40 border border-white/10 px-3 py-1 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3 shrink-0">
          {!isLoggedIn ? (
            <>
              <Link
                to="/auth"
                className="text-xs font-semibold text-gray-300 hover:text-white px-3 py-2 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/auth"
                className="px-4 py-2 rounded-full text-xs font-bold text-black bg-yellow-400 hover:bg-yellow-300 transition-all shadow-md hover:scale-105 cursor-pointer"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-xs font-semibold text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer"
            >
              Logout
            </button>
          )}

          {/* Add Spot */}
          <Link
            to="/addSpot"
            className="flex items-center gap-1.5 bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-full text-xs font-bold shadow-lg transition-all hover:scale-105 border border-black/15 cursor-pointer"
          >
            <Leaf className="h-3.5 w-3.5 text-emerald-600" />
            <span>+ Add Spot</span>
          </Link>
        </div>

        {/* Mobile Right Section */}
        <div className="flex md:hidden items-center gap-1.5">
          <div className="scale-90 origin-right">
            <DistrictNavDropdown />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-full bg-black/60 border border-white/20 text-yellow-400 hover:bg-black transition-colors focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Tablet Menu Toggle */}
        <div className="hidden md:flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-full bg-black/60 border border-white/20 text-yellow-400 hover:bg-black transition-colors focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      <div
        className={`absolute top-full inset-x-0 lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/95 backdrop-blur-2xl border-b border-emerald-500/30 shadow-2xl ${
          isOpen
            ? 'max-h-[600px] opacity-100 p-5'
            : 'max-h-0 opacity-0 py-0 px-5 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-200 hover:text-yellow-400 hover:bg-white/5 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-3 mt-2 border-t border-white/10">
            {!isLoggedIn ? (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/auth"
                  className="px-3 py-2 rounded-xl text-center text-xs font-semibold bg-black text-gray-200 border border-white/10 hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth"
                  className="px-3 py-2 rounded-xl text-center text-xs font-bold bg-yellow-400 text-black hover:bg-yellow-300"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full px-3 py-2 rounded-xl text-center text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 cursor-pointer"
              >
                Logout
              </button>
            )}
          </div>

          <Link
            to="/addSpot"
            className="w-full mt-1 px-3 py-2.5 rounded-xl text-center bg-white text-black font-bold text-xs shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <Leaf className="h-3.5 w-3.5 text-emerald-600" />
            <span>+ Add a Spot</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;