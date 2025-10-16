import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = ({ onDonateClick }) => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.jpg" alt="Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Ankita Wellbeing Foundation</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming lives with education, equality, and opportunities for women and children.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => navigate('/')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li>
                <button 
                  onClick={() => navigate('/programs')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/get-in-touch')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => navigate('/education')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/healthcare')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Healthcare
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/women-empowerment')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Women Empowerment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/livelihood')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Livelihood
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={onDonateClick} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Donate
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/volunteer')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/Internship')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Internships
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/Partner')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Partner With Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2022 Ankita Wellbeing Foundation. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;