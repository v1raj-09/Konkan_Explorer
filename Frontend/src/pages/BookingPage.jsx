import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { packagesData } from '../data/packagesData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BookingPage() {
  const { placeName } = useParams();
  const navigate = useNavigate();

  const matchedPackage = packagesData.find(
    p => p.placeName.toLowerCase() === placeName?.toLowerCase()
  ) || {
    placeName: placeName || "Konkan Special",
    title: `Explore ${placeName || "Konkan"} Stay Package`,
    description: "Comfortable stay with all basic amenities, local food options, and scenic views.",
    pricePerDay: { nonAc: 1500, ac: 2200 },
    image: "/beaches/anjarle.png"
  };

  const [roomType, setRoomType] = useState('nonAc'); 
  const [days, setDays] = useState(2);              
  const [guests, setGuests] = useState(2);          

  const ratePerDay = roomType === 'ac' ? matchedPackage.pricePerDay.ac : matchedPackage.pricePerDay.nonAc;
  const totalPrice = ratePerDay * days * guests;

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    alert(`🎉 Booking Successful for ${matchedPackage.placeName}!\n\nRoom Type: ${roomType.toUpperCase()}\nDuration: ${days} Days\nGuests: ${guests}\nTotal Amount: ₹${totalPrice}\n\nThank you for booking with Konkan Explorer!`);
    navigate('/'); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-white font-sans flex flex-col justify-between relative overflow-hidden pt-16">

      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/5 blur-[130px]" />

      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-12 w-full flex-grow relative z-10">
        <div className="bg-black/60 backdrop-blur-xl p-6 sm:p-8 shadow-2xl rounded-2xl border border-white/10 relative group hover:border-emerald-500/40 transition-all duration-300">
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 z-0 pointer-events-none rounded-2xl" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-6 mb-8 items-center bg-black/40 p-4 rounded-xl border border-white/10 backdrop-blur-md">
              <img 
                src={matchedPackage.image} 
                alt={matchedPackage.placeName} 
                className="w-full md:w-48 h-36 object-cover rounded-lg shadow-md"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"; }}
              />
              <div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Selected Destination</span>
                <h2 className="text-2xl font-bold text-white mt-2 tracking-tight">{matchedPackage.title}</h2>
                <p className="text-gray-300 text-sm mt-1 font-light leading-relaxed">{matchedPackage.description}</p>
              </div>
            </div>

            <form onSubmit={handleConfirmBooking} className="space-y-6">
              
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Select Room Type:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setRoomType('nonAc')}
                    className={`p-4 rounded-xl border text-left transition cursor-pointer ${
                      roomType === 'nonAc' 
                        ? 'border-emerald-400 bg-emerald-500/20 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)] font-bold' 
                        : 'border-white/10 bg-black/60 hover:bg-emerald-500/10 text-gray-300'
                    }`}
                  >
                    <div className="text-base font-semibold">Standard Non-AC</div>
                    <div className="text-xs text-emerald-400 font-medium mt-1">₹{matchedPackage.pricePerDay.nonAc} / day per person</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRoomType('ac')}
                    className={`p-4 rounded-xl border text-left transition cursor-pointer ${
                      roomType === 'ac' 
                        ? 'border-emerald-400 bg-emerald-500/20 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)] font-bold' 
                        : 'border-white/10 bg-black/60 hover:bg-emerald-500/10 text-gray-300'
                    }`}
                  >
                    <div className="text-base font-semibold">Deluxe AC Room</div>
                    <div className="text-xs text-emerald-400 font-medium mt-1">₹{matchedPackage.pricePerDay.ac} / day per person</div>
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Number of Days / Nights:</label>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-0.5 rounded-full font-bold text-xs">{days} Day(s)</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={days} 
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Number of Guests (Persons):</label>
                <input 
                  type="number" 
                  min="1" 
                  max="15" 
                  value={guests} 
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-black/60 border border-white/10 p-3 rounded-xl focus:outline-none focus:border-emerald-400 text-sm text-white font-medium cursor-text"
                />
              </div>

              <div className="bg-gradient-to-r from-emerald-950/80 to-black/80 border border-emerald-500/30 text-white p-5 rounded-xl shadow-lg space-y-2 backdrop-blur-md">
                <div className="flex justify-between text-xs text-emerald-300">
                  <span>Rate ({roomType.toUpperCase()}):</span>
                  <span>₹{ratePerDay} × {days} days × {guests} guests</span>
                </div>
                <div className="border-t border-emerald-500/20 pt-2 flex justify-between items-center text-lg font-bold">
                  <span>Total Payable Amount:</span>
                  <span className="text-emerald-400 text-2xl font-mono">₹{totalPrice}</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-400 hover:bg-emerald-300 text-black py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                Confirm & Book Stay Now 🚀
              </button>

            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}