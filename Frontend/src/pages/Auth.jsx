
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // API URL
  // Render production URL is used as fallback
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://konkan-explorer.onrender.com";

  const navigate = useNavigate();

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // HANDLE LOGIN / REGISTER
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // =========================
      // LOGIN
      // =========================
      if (isLogin) {
        const res = await axios.post(
          `${API_URL}/api/auth/login`,
          {
            email: formData.email,
            password: formData.password,
          }
        );

        // Save user data
        if (res.data.user) {
          localStorage.setItem(
            "user",
            JSON.stringify(res.data.user)
          );
        }

        alert(res.data.message || "Login successful!");

        // Redirect to home
        navigate("/");
      }

      // =========================
      // REGISTER
      // =========================
      else {
        const res = await axios.post(
          `${API_URL}/api/auth/register`,
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }
        );

        alert(
          res.data.message ||
            "Registration successful!"
        );

        // Switch to Login
        setIsLogin(true);

        // Clear form
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      console.error("Authentication Error:", err);

      // Backend error message
      if (err.response) {
        alert(
          err.response.data?.message ||
            "Authentication failed."
        );
      }

      // Server/network error
      else if (err.request) {
        alert(
          "Unable to connect to the server. Please try again."
        );
      }

      // Other error
      else {
        alert(
          err.message ||
            "An error occurred during authentication."
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-white font-sans flex flex-col justify-between relative overflow-hidden selection:bg-emerald-500 selection:text-black pt-16">

      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/5 blur-[130px]" />

      {/* Navbar */}
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 py-12 relative z-10 w-full">

        <div className="relative w-full max-w-3xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.15)] overflow-hidden min-h-[560px] md:min-h-[520px]">

          {/* ================= FORM PANEL ================= */}

          <div
            className={`relative md:absolute md:inset-y-0 md:left-0 w-full md:w-1/2 flex items-center justify-center p-8 sm:p-12 transition-transform duration-700 ease-in-out bg-black/40 backdrop-blur-md ${
              isLogin
                ? "md:translate-x-0"
                : "md:translate-x-full"
            }`}
          >

            <div className="w-full max-w-sm">

              <h2 className="text-3xl font-serif font-light text-white text-center mb-6">
                {isLogin
                  ? "Sign In"
                  : "Create Account"}
              </h2>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 mb-4">

                {/* Facebook */}
                <button
                  type="button"
                  aria-label="Continue with Facebook"
                  className="w-10 h-10 rounded-full border border-white/10 bg-black/60 flex items-center justify-center text-gray-400 hover:border-emerald-400 hover:text-emerald-300 transition cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z" />
                  </svg>
                </button>

                {/* Google */}
                <button
                  type="button"
                  aria-label="Continue with Google"
                  className="w-10 h-10 rounded-full border border-white/10 bg-black/60 flex items-center justify-center text-gray-400 hover:border-emerald-400 hover:text-emerald-300 transition cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#EA4335"
                      d="M12 10.2v3.9h5.5c-.24 1.3-1.7 3.8-5.5 3.8-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.9 1.5l2.7-2.6C16.9 3 14.7 2 12 2 6.9 2 2.7 6.1 2.7 11.2S6.9 20.4 12 20.4c6.9 0 9.6-4.8 9.6-7.3 0-.5 0-.9-.1-1.3H12z"
                    />
                  </svg>
                </button>

                {/* LinkedIn */}
                <button
                  type="button"
                  aria-label="Continue with LinkedIn"
                  className="w-10 h-10 rounded-full border border-white/10 bg-black/60 flex items-center justify-center text-gray-400 hover:border-emerald-400 hover:text-emerald-300 transition cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </button>

              </div>

              <p className="text-center text-xs text-gray-400 mb-6 uppercase tracking-wider">
                {isLogin
                  ? "or use your account"
                  : "or use email for registration"}
              </p>

              {/* Form */}
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
              >

                {/* Name - Register only */}
                {!isLogin && (
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition cursor-text"
                  />
                )}

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition cursor-text"
                />

                {/* Password */}
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition cursor-text"
                />

                {/* Forgot Password */}
                {isLogin && (
                  <div className="text-center pt-1">
                    <a
                      href="#forgot"
                      className="text-xs text-gray-400 hover:text-emerald-300 transition"
                    >
                      Forgot your password?
                    </a>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2 flex justify-center">

                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full text-xs font-bold tracking-widest text-black bg-emerald-400 hover:bg-emerald-300 shadow-lg transition uppercase cursor-pointer"
                  >
                    {isLogin
                      ? "Sign In"
                      : "Sign Up"}
                  </button>

                </div>

              </form>

              {/* Back Home */}
              <div className="mt-6 text-center">

                <Link
                  to="/"
                  className="text-xs text-gray-400 hover:text-emerald-300 transition"
                >
                  ← Back to Home
                </Link>

              </div>

            </div>

          </div>

          {/* ================= GRADIENT SIDE PANEL ================= */}

          <div
            className={`relative md:absolute md:inset-y-0 md:left-1/2 w-full md:w-1/2 flex items-center justify-center text-center p-8 sm:p-12 bg-gradient-to-br from-[#0D3B3E]/80 via-[#123B3E]/60 to-black/90 text-white transition-transform duration-700 ease-in-out border-l border-white/10 ${
              isLogin
                ? "md:translate-x-0"
                : "md:-translate-x-full"
            }`}
          >

            <div className="max-w-xs">

              <h3 className="text-2xl font-serif font-light mb-3 text-white">
                {isLogin
                  ? "Welcome Back Traveler!"
                  : "Explore Konkan Heritage"}
              </h3>

              <p className="text-sm text-gray-300 font-light mb-8 leading-relaxed">
                {isLogin
                  ? "Begin your journey across pristine coastlines and historic forts by signing in."
                  : "Create your account to save your favorite destinations and plan trips seamlessly."}
              </p>

              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="px-8 py-3 rounded-full text-xs font-semibold tracking-widest border border-white/20 text-white hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition uppercase cursor-pointer"
              >
                {isLogin
                  ? "Sign Up"
                  : "Sign In"}
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );

}
