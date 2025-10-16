import { MapPin, Phone, Mail } from 'lucide-react';
import React, { useState } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join us in our mission to create positive change. Every contribution makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-blue-200" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-blue-100">
                    703-A, Rudra Sangam Apartment, Sarai Inayat, <br/>
                    GT Road near Prayag Dhaba, Prayagraj – 211019, U.P., India
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-blue-200" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-blue-100">
                    <a href='tel:+917905226299' className="hover:text-white transition-colors">
                      +91 7905226299
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3 text-blue-200" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-blue-100">
                    <a href="mailto:help@ankitawellbeingfoundation.org" className="hover:text-white transition-colors">
                      help@ankitawellbeingfoundation.org
                    </a>  
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-700 rounded-lg">
              <h4 className="font-semibold mb-2">Why Contact Us?</h4>
              <ul className="text-blue-100 text-sm space-y-1">
                <li>• Get involved with our programs</li>
                <li>• Volunteer opportunities</li>
                <li>• Partnership inquiries</li>
                <li>• Donation-related questions</li>
                <li>• General information about our work</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            {/* Success Message */}
            {success && (
              <div className="mb-4 p-4 bg-green-500 text-white rounded-lg transition-all duration-300">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {success}
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-4 bg-red-500 text-white rounded-lg transition-all duration-300">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 resize-vertical"
                  required
                  disabled={loading}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                  loading 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            {/* Form Submission Info */}
            <div className="mt-4 text-blue-200 text-sm">
              <p>We typically respond within 24-48 hours. Your information is secure and will never be shared with third parties.</p>
            </div>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-blue-700 px-4 py-2 rounded-full">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">Average response time: 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;