import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isNeonHovered, setIsNeonHovered] = useState(false);
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const timerRef = useRef(null);

  // ✅ Real-time IST Clock + Date
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
      });
      const formattedDate = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      });
      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => () => timerRef.current && clearTimeout(timerRef.current), []);

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setError("");
    setSuccess("");
    setLoading(false);
    setShowPassword(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // ✅ Handle Login with FastAPI Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/admin/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          username: username.trim(), 
          password: password.trim() 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Login successful! Redirecting...");
        // ✅ Store the access token from FastAPI response
        localStorage.setItem("adminToken", data.access_token);
        
        timerRef.current = setTimeout(() => {
          setLoading(false);
          resetForm();
          navigate("/admin/dashboard");
        }, 1500);
      } else {
        setError(data.detail || "Login failed. Please check your credentials.");
        setLoading(false);
      }
    } catch (err) {
      setError("Network error. Please check if the server is running.");
      setLoading(false);
    }
  };

  const togglePassword = () => setShowPassword((s) => !s);
  const handleForgot = () => alert("Please contact your system administrator for password recovery.");
  const handleBackToHome = () => navigate("/");
  const handleNeonClick = () => navigate("/");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden font-sans">
      {/* Custom animations */}
      <style>
        {`
          @keyframes neonGlow {
            0% {
              text-shadow: 0 0 10px rgba(255, 0, 127, 0.3), 0 0 20px rgba(255, 105, 180, 0.2);
            }
            100% {
              text-shadow: 0 0 15px rgba(255, 0, 127, 0.5), 0 0 25px rgba(255, 105, 180, 0.4), 0 0 35px rgba(255, 20, 147, 0.3);
            }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* 🕒 Clock (Top Right) */}
      <div className="fixed top-4 right-4 text-right text-gray-700 text-sm font-medium leading-tight bg-white/80 px-3 py-2 rounded-lg shadow-sm z-10">
        🕒 {time}
        <br />
        📅 {date}
      </div>

      {/* ← Back Button */}
      <button
        className={`fixed top-4 left-4 bg-gray-600 text-white border-none rounded-lg px-4 py-2 text-sm cursor-pointer transition-all duration-200 shadow-md z-10 ${
          isBackHovered ? "bg-gray-700 transform -translate-y-0.5" : ""
        }`}
        onClick={handleBackToHome}
        onMouseEnter={() => setIsBackHovered(true)}
        onMouseLeave={() => setIsBackHovered(false)}
      >
        ← Back to Home
      </button>

      {/* 🎯 Login Card */}
      <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-200 w-full max-w-md mx-4 relative text-center">
        <div className="text-center mb-6 relative">
          <div className="flex items-center justify-center gap-4 mb-3">
            <button
              onClick={handleNeonClick}
              className={`font-bold text-4xl bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 bg-clip-text text-transparent m-0 cursor-pointer transition-transform duration-200 ${
                isNeonHovered ? "scale-105" : ""
              }`}
              style={{ animation: "neonGlow 2s ease-in-out infinite alternate" }}
              onMouseEnter={() => setIsNeonHovered(true)}
              onMouseLeave={() => setIsNeonHovered(false)}
            >
              Admin Login NGO
            </button>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 m-0 mb-1">Administration Panel</h2>
          <p className="text-gray-500 text-sm m-0">Secure access for authorized personnel only</p>
          {/* ✅ Display time inside card too */}
          <p className="text-gray-500 text-xs mt-1 italic">🕒 {time} | 📅 {date}</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm mb-4 border border-red-200">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm mb-4 border border-green-200">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-6 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              autoComplete="username"
              className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm pr-12 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 bg-none border-none text-gray-500 cursor-pointer text-xs font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-blue-500 text-white border-none rounded-md text-sm font-medium cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600 hover:transform hover:-translate-y-0.5"
            }`}
          >
            {loading && (
              <div 
                className="w-4 h-4 border-2 border-transparent border-t-current rounded-full"
                style={{ animation: "spin 1s linear infinite" }}
              />
            )}
            <span>{loading ? "Signing In..." : "Sign In"}</span>
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-6">
          <button 
            onClick={handleForgot}
            className="text-gray-500 text-sm no-underline cursor-pointer bg-none border-none p-0 transition-colors duration-200 hover:text-gray-700"
          >
            Forgot your password?
          </button>
        </div>
      </div>
    </div>
  );
}