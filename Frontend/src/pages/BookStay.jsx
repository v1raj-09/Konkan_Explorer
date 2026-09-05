import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BookStay() {
    const { placeName } = useParams();
    const navigate = useNavigate();
    const decodedPlace = decodeURIComponent(placeName || '');

    const [roomType, setRoomType] = useState('Standard Non-AC');
    const [days, setDays] = useState(2);
    const [guests, setGuests] = useState(2);

    const nonAcRate = 1500;
    const acRate = 2200;
    const currentRate = roomType === 'Standard Non-AC' ? nonAcRate : acRate;
    const totalAmount = currentRate * days * guests;

    const [showFormModal, setShowFormModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        checkInDate: '',
        specialRequest: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFinalBookingSubmit = (e) => {
        e.preventDefault();

        const newBooking = {
            id: 'KNK-' + Math.floor(100000 + Math.random() * 900000),
            destination: decodedPlace,
            roomType,
            days,
            guests,
            totalAmount,
            ...formData,
            bookingDate: new Date().toLocaleDateString()
        };

        const existingBookings = JSON.parse(localStorage.getItem('konkanBookings') || '[]');
        localStorage.setItem('konkanBookings', JSON.stringify([...existingBookings, newBooking]));

        setShowFormModal(false);
        setShowSuccessModal(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-white font-sans flex flex-col justify-between relative overflow-hidden pt-16 selection:bg-emerald-500 selection:text-black">

            {/* Background Ambient Glows */}
            <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/5 blur-[130px]" />

            <Navbar />

            <main className="max-w-4xl mx-auto px-4 py-12 w-full flex-grow relative z-10">
                <div className="bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden relative group hover:border-emerald-500/40 transition-all duration-300">

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 z-0 pointer-events-none rounded-3xl" />

                    <div className="relative z-10">

                        {/* --- Header Section --- */}
                        <div className="bg-black/40 backdrop-blur-md p-6 sm:p-8 border-b border-white/10">
                            <div className="flex justify-between items-center">
                                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Verified Stay Property
                                </span>
                                <span className="text-gray-400 text-xs font-mono">ID: KNK-STAY-2026</span>
                            </div>
                            <h1 className="text-3xl font-serif font-light text-white mt-3 mb-2">{decodedPlace} & Coastal Heritage Resort</h1>
                            <p className="text-gray-300 text-sm font-light leading-relaxed">
                                Experience premium seaside lodging, authentic Konkani food, and world-class hospitality.
                            </p>
                        </div>

                        {/* --- Booking Configuration Body --- */}
                        <div className="p-6 sm:p-8 space-y-6">

                            {/* Room Type Selection */}
                            <div>
                                <h3 className="text-xs font-semibold text-gray-300 mb-3 uppercase tracking-wider">Select Room Accommodation:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div
                                        onClick={() => setRoomType('Standard Non-AC')}
                                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${roomType === 'Standard Non-AC'
                                            ? 'border-emerald-400 bg-emerald-500/20 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)] font-bold'
                                            : 'border-white/10 bg-black/60 hover:bg-emerald-500/10 text-gray-300'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-base font-semibold text-white">Standard Non-AC</h4>
                                            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Popular</span>
                                        </div>
                                        <p className="text-xs text-emerald-400 font-medium mt-1">₹{nonAcRate} / night per person</p>
                                    </div>

                                    <div
                                        onClick={() => setRoomType('Deluxe AC Room')}
                                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${roomType === 'Deluxe AC Room'
                                            ? 'border-emerald-400 bg-emerald-500/20 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)] font-bold'
                                            : 'border-white/10 bg-black/60 hover:bg-emerald-500/10 text-gray-300'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-base font-semibold text-white">Deluxe AC Room</h4>
                                            <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Luxury</span>
                                        </div>
                                        <p className="text-xs text-emerald-400 font-medium mt-1">₹{acRate} / night per person</p>
                                    </div>
                                </div>
                            </div>

                            {/* Days Slider */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Duration of Stay:</h3>
                                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-0.5 rounded-full font-bold text-xs">
                                        {days} Night(s) / {days + 1} Days
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="15"
                                    value={days}
                                    onChange={(e) => setDays(Number(e.target.value))}
                                    className="w-full accent-emerald-400 cursor-pointer"
                                />
                            </div>

                            {/* Number of Guests */}
                            <div>
                                <h3 className="text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">Total Guests:</h3>
                                <input
                                    type="number"
                                    min="1"
                                    max="12"
                                    value={guests}
                                    onChange={(e) => setGuests(Number(e.target.value))}
                                    className="w-full bg-black/60 border border-white/10 p-3.5 rounded-xl text-sm outline-none text-white font-medium focus:border-emerald-400 transition-all cursor-text"
                                />
                            </div>

                            {/* --- Dynamic Calculation Summary Box --- */}
                            <div className="bg-gradient-to-r from-emerald-950/80 to-black/80 border border-emerald-500/30 text-white p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center shadow-lg gap-4 backdrop-blur-md">
                                <div>
                                    <p className="text-emerald-300 text-xs uppercase tracking-wider mb-1 font-semibold">
                                        Fare Breakdown ({roomType}):
                                        <span className="ml-2 font-mono text-white">₹{currentRate} × {days} Nights × {guests} Guests</span>
                                    </p>
                                    <h2 className="text-2xl font-serif font-light text-white">Total Payable Amount</h2>
                                </div>
                                <div className="text-4xl font-black text-emerald-400 font-mono tracking-tight">
                                    ₹{totalAmount.toLocaleString()}
                                </div>
                            </div>

                            {/* --- Trigger Action Button --- */}
                            <div className="bg-black/40 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 backdrop-blur-md">
                                <div>
                                    <h4 className="text-white font-bold text-base">Secure Your Reservation</h4>
                                    <p className="text-gray-400 text-xs mt-0.5">Instant booking confirmation with zero upfront cancellation fees.</p>
                                </div>

                                <button
                                    onClick={() => setShowFormModal(true)}
                                    className="w-full md:w-auto bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold px-8 py-4 rounded-xl transition-all uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer transform hover:-translate-y-0.5"
                                >
                                    Proceed to Guest Details ➔
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            {/* ================= 1. PROFESSIONAL CHECKOUT FORM MODAL ================= */}
            {showFormModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
                    <div className="bg-[#111c17] border border-emerald-900/60 p-6 md:p-8 rounded-3xl max-w-lg w-full shadow-2xl text-white relative">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-2xl font-serif font-light text-emerald-400">Guest Information</h3>
                                <p className="text-gray-400 text-xs mt-0.5">Booking for {decodedPlace} ({roomType})</p>
                            </div>
                            <button
                                onClick={() => setShowFormModal(false)}
                                className="text-gray-400 hover:text-white text-xl font-bold px-2 py-1 cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleFinalBookingSubmit} className="flex flex-col gap-4">
                            <div>
                                <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    placeholder="e.g. Omkar Rane"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full bg-black/50 border border-emerald-900/50 p-3.5 rounded-xl text-sm outline-none text-white focus:border-emerald-500 transition-all cursor-text"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="name@example.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-black/50 border border-emerald-900/50 p-3.5 rounded-xl text-sm outline-none text-white focus:border-emerald-500 transition-all cursor-text"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full bg-black/50 border border-emerald-900/50 p-3.5 rounded-xl text-sm outline-none text-white focus:border-emerald-500 transition-all cursor-text"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5">Check-in Date *</label>
                                <input
                                    type="date"
                                    name="checkInDate"
                                    required
                                    value={formData.checkInDate}
                                    onChange={handleInputChange}
                                    className="w-full bg-black/50 border border-emerald-900/50 p-3.5 rounded-xl text-sm outline-none text-white focus:border-emerald-500 transition-all cursor-text"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5">Special Requests (Optional)</label>
                                <textarea
                                    name="specialRequest"
                                    rows="2"
                                    placeholder="e.g. Sea-facing room preferred, extra mattress required"
                                    value={formData.specialRequest}
                                    onChange={handleInputChange}
                                    className="w-full bg-black/50 border border-emerald-900/50 p-3 rounded-xl text-sm outline-none text-white focus:border-emerald-500 transition-all resize-none cursor-text"
                                ></textarea>
                            </div>

                            <div className="bg-emerald-950/40 border border-emerald-900/40 p-3 rounded-xl flex justify-between items-center text-sm">
                                <span className="text-gray-300">Total Payable Amount:</span>
                                <span className="font-bold text-emerald-400 font-mono text-lg">₹{totalAmount.toLocaleString()}</span>
                            </div>

                            <div className="flex gap-3 mt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowFormModal(false)}
                                    className="w-1/3 bg-gray-800 hover:bg-gray-700 text-white py-3.5 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="w-2/3 bg-emerald-400 hover:bg-emerald-300 text-black py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                                >
                                    Confirm & Pay Now 🚀
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ================= 2. PROFESSIONAL SUCCESS INVOICE MODAL ================= */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50">
                    <div className="bg-white text-black p-8 rounded-3xl max-w-md w-full shadow-2xl relative text-center">

                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-inner">
                            ✓
                        </div>

                        <h3 className="text-2xl font-black text-gray-900 mb-1">Booking Confirmed!</h3>
                        <p className="text-gray-500 text-xs mb-6">Thank you, <span className="font-bold text-gray-800">{formData.fullName}</span>. Your stay has been successfully reserved.</p>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-left text-xs space-y-2 mb-6">
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-500">Destination:</span>
                                <span className="font-bold text-gray-900">{decodedPlace}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-500">Room Type:</span>
                                <span className="font-bold text-gray-900">{roomType}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-500">Check-in Date:</span>
                                <span className="font-bold text-gray-900">{formData.checkInDate}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-500">Duration & Guests:</span>
                                <span className="font-bold text-gray-900">{days} Nights / {guests} Guests</span>
                            </div>
                            <div className="flex justify-between pt-1 text-sm font-extrabold text-emerald-700">
                                <span>Total Paid:</span>
                                <span className="font-mono">₹{totalAmount.toLocaleString()}</span>
                            </div>
                        </div>

                        <p className="text-[11px] text-gray-400 mb-6">
                            Confirmation and support details have been dispatched to <span className="font-semibold text-gray-600">{formData.email}</span> & <span className="font-semibold text-gray-600">{formData.phone}</span>.
                        </p>

                        <button
                            onClick={() => navigate('/explore')}
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                        >
                            Back to Explore Places
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}