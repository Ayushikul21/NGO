import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header({ onDonateClick, onDocumentsClick }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { title: 'ABOUT US', items: ['Our Story', 'Mission & Vision', 'Team', 'Annual Reports', 'Financials'] },
    { title: 'OUR WORK', items: ['Education', 'Healthcare', 'Livelihood', 'Women Empowerment', 'Impact Stories'] },
    { title: 'CAMPAIGNS', items: ['Current Campaigns', 'Past Campaigns', 'Success Stories', 'Join Campaign'] },
    { title: 'GET INVOLVED', items: ['Donate', 'Volunteer', 'Partner With Us', 'Corporate Partnerships', 'Fundraise'] },
    { title: 'MEDIA CENTRE', items: ['Press Releases', 'News', 'Events', 'Gallery', 'Videos'] },
    { title: 'RESOURCE CENTRE', items: ['Publications', 'Case Studies', 'Research Papers', 'Downloads'] },
    { 
      title: 'CONTACT US', 
      items: [
        { name: 'Get In Touch', path: '/get-in-touch' },
        { name: 'Career', path: '/career' },
        { name: 'FAQ', path: '/faq' }
      ]
    }
  ];

  const NavItem = ({ menu, index }) => (
    <div
      key={index}
      className="relative"
      onMouseEnter={() => setActiveDropdown(index)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="flex items-center space-x-0.1 px-1 py-2 text-gray-700 hover:text-pink-900 text-xs font-medium transition-colors">
        <span>{menu.title}</span>
        <ChevronDown className="w-3 h-3" />
      </button>
      
      {activeDropdown === index && (
        <div className="absolute top-full left-0 mt-0 w-52 bg-white shadow-lg rounded-b-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {menu.items.map((item, idx) => (
            <Link
              key={idx}
              to={item.path || '#'}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-900 transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              {item.name || item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  const MobileNavItem = ({ menu, index }) => (
    <div key={index} className="border-b border-gray-100 pb-2">
      <button
        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
        className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-green-600 font-medium"
      >
        <span className="text-sm">{menu.title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
      </button>
      {activeDropdown === index && (
        <div className="pl-4 pt-2 space-y-2">
          {menu.items.map((item, idx) => (
            <Link
              key={idx}
              to={item.path || '#'}
              className="block py-1 text-sm text-gray-600 hover:text-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name || item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  const ActionButtons = ({ isMobile = false }) => (
    <>
      <button 
        onClick={() => {
          onDocumentsClick();
          if (isMobile) setMobileMenuOpen(false);
        }}
        className={`bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:from-pink-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg ${
          isMobile ? 'w-full px-6 py-3 text-sm' : 'hidden sm:block'
        }`}
      >
        DOCUMENTS
      </button>

      <button 
        onClick={() => {
          onDonateClick();
          if (isMobile) setMobileMenuOpen(false);
        }}
        className={`bg-pink-600 text-white hover:bg-pink-700 transition-colors ${
          isMobile ? 'w-full px-6 py-2 rounded-full text-center' : 'px-6 py-2 rounded-lg'
        }`}
      >
        DONATE
      </button>
    </>
  );

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div onClick={()=>navigate('/')} className="flex items-center cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-pink-600 to-purple-700 rounded-full p-1 relative">
                <img src="/logo.jpg" alt="Logo" className="h-8 w-8 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-pink-900 text-xs font-bold tracking-wider">Ankita Wellbeing</span>
                <span className="text-pink-900 text-xs tracking-widest -mt-1">Foundation</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {menuItems.map((menu, index) => (
              <NavItem key={index} menu={menu} index={index} />
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <ActionButtons />
            
            <button 
              className="lg:hidden p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top duration-300">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {menuItems.map((menu, index) => (
              <MobileNavItem key={index} menu={menu} index={index} />
            ))}
            
            <div className="pt-2 space-y-2">
              <ActionButtons isMobile={true} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}