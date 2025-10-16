import React, { useState } from "react";
import { CheckCircle, Send, Award } from "lucide-react";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    volunteerType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    volunteerType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear field-specific error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: "" }));
    }
    
    // Phone number validation - only allow numbers and limit to 10 digits
    if (name === "phone") {
      // Remove any non-digit characters
      const numbersOnly = value.replace(/\D/g, '');
      // Limit to 10 digits
      const limitedNumbers = numbersOnly.slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: limitedNumbers }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Full Name validation
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters long";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address (e.g., example@email.com)";
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    // Volunteer Type validation
    if (!formData.volunteerType) {
      errors.volunteerType = "Please select a volunteer type";
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/volunteer/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Thank you for applying to volunteer with us! We will contact you soon.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          volunteerType: "",
          message: "",
        });
        // Clear all field errors on successful submission
        setFieldErrors({
          fullName: "",
          email: "",
          phone: "",
          volunteerType: "",
        });
      } else {
        const errorData = await response.json();
        setError(errorData.detail || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Error submitting volunteer application:", err);
    } finally {
      setLoading(false);
    }
  };

  const volunteerTypes = [
    {
      title: "White Volunteer",
      subtitle: "Hourly Certificate",
      desc: "These are virtual and unrecognized by verified authorities.",
      color: "from-gray-700 to-gray-900",
      icon: Award,
    },
    {
      title: "Grey Volunteer",
      subtitle: "Daily Certificate",
      desc: "These are virtual and unrecognized by verified authorities.",
      color: "from-gray-400 to-gray-600",
      icon: Award,
    },
    {
      title: "Yellow Volunteer",
      subtitle: "Weekly Certificate",
      desc: "These are virtual and recognized by verified authorities by certificate number and weeks.",
      color: "from-yellow-400 to-amber-500",
      icon: Award,
    },
    {
      title: "Green Volunteer",
      subtitle: "Monthly Certificate",
      desc: "These are recognized by verified authorities by certificate number and actual printed copies to be collected from office.",
      color: "from-green-400 to-emerald-500",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Matching Publications Page */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-600 rounded-full text-sm font-bold">
            <Award className="w-5 h-5" />
            Volunteer Opportunities
          </div>
          <h1 className="text-5xl font-bold mb-4">Join as a Volunteer</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Become part of our mission to bring hope to children, empower women, and uplift
            communities. Choose your volunteering level and contribute to real change.
          </p>
        </div>
      </div>

      {/* Volunteer Types - Using Publications Grid Style */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {volunteerTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                {/* Header matching publication cards */}
                <div className={`bg-gradient-to-r ${type.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 text-xs bg-white bg-opacity-20 rounded-full font-bold">
                      VOLUNTEER
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{type.title}</h3>
                  <p className="text-sm text-gray-200 italic">{type.subtitle}</p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {type.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Certificate Provided</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Volunteer Application Form - Updated Styling */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
            Volunteer Application Form
          </h2>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-green-700">{success}</span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-700">{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full p-3 rounded-lg bg-white border text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  fieldErrors.fullName ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your full name"
              />
              {fieldErrors.fullName && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {fieldErrors.fullName}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className={`w-full p-3 rounded-lg bg-white border text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                    fieldErrors.email ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  maxLength={10}
                  className={`w-full p-3 rounded-lg bg-white border text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                    fieldErrors.phone ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter 10-digit phone number"
                />
                <div className="flex justify-between mt-1">
                  {fieldErrors.phone ? (
                    <p className="text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {fieldErrors.phone}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-500">
                      {formData.phone.length}/10 digits
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Volunteer Type Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Volunteer Type *
              </label>
              <select
                name="volunteerType"
                value={formData.volunteerType}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full p-3 rounded-lg bg-white border text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  fieldErrors.volunteerType ? "border-red-300" : "border-gray-300"
                }`}
              >
                <option value="">Select a certificate type</option>
                <option value="White Volunteer">White Volunteer (Hourly)</option>
                <option value="Grey Volunteer">Grey Volunteer (Daily)</option>
                <option value="Yellow Volunteer">Yellow Volunteer (Weekly)</option>
                <option value="Green Volunteer">Green Volunteer (Monthly)</option>
              </select>
              {fieldErrors.volunteerType && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {fieldErrors.volunteerType}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to volunteer with us?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                disabled={loading}
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed resize-vertical"
                placeholder="Share your motivation or experience..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg ${
                loading 
                  ? "opacity-70 cursor-not-allowed" 
                  : "hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl transform hover:-translate-y-0.5"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Application
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Note - Matching Publications Style */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white py-12 text-center mb-4">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-gray-300 text-lg mb-6">
            Join our community of volunteers and help create lasting change for children, 
            women, and communities across India.
          </p>
          <div className="flex items-center justify-center gap-2 text-cyan-300">
            <CheckCircle className="w-5 h-5" />
            <span>Certificates are issued digitally or physically based on the volunteer type selected.</span>
          </div>
        </div>
      </div>
    </div>
  );
}