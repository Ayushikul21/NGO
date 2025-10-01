import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Target} from 'lucide-react';
import GetInTouch from './GetInTouch';
import Programs from './Programs';

const NGOWebsite = () => {
  const [activeTab, setActiveTab] = useState('purpose');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();


  const testimonials = [
    {
      quote: "Ankita Wellbeing Foundation didn't just change my life; they gave me the tools to change my entire community. Through their education program, I learned to read and write, and now I teach other women in my village.",
      name: "Priya Sharma",
      role: "Community Leader, Village Volunteer",
      location: "Prayagraj, UP"
    },
    {
      quote: "When my daughter fell sick, their mobile health clinic saved her life. The doctors not only treated her but also taught us about hygiene and nutrition. Now she's the healthiest child in our neighborhood.",
      name: "Rajesh Kumar",
      role: "Father & Local Farmer",
      location: "Banda, UP"
    },
    {
      quote: "The vocational training program helped me start my own computer training center. Today, I employ 6 other women as instructors, and together we are empowering many people with digital skills while being financially independent.",
      name: "Meera Devi",
      role: "Entrepreneur & Business Owner",
      location: "Allahabad, UP"
    },
    {
      quote: "I was married at 16 and thought my dreams were over. But this foundation showed me it's never too late. I completed my education and now I'm pursuing nursing. I want to help other girls like me.",
      name: "Sunita Yadav",
      role: "Nursing Student & Youth Advocate",
      location: "Fatehpur, UP"
    },
    {
      quote: "Our village had no proper school for years. When they built our new school and provided trained teachers, everything changed. My son is now the first in our family to reach high school.",
      name: "Ramesh Singh",
      role: "Village Elder",
      location: "Kaushambi, UP"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.jpg" alt="Logo" className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold text-gray-900">Ankita Wellbeing Foundation</span>
              </div>
            </div> */}
            
            {/* Desktop Navigation - UPDATED */}
            {/* <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleSmoothScroll('home')}
                className={`transition-colors ${
                  activeSection === 'home' ? 'text-pink-600 font-semibold' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleSmoothScroll('about')}
                className={`transition-colors ${
                  activeSection === 'about' ? 'text-pink-600 font-semibold' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => handleSmoothScroll('programs')}
                className={`transition-colors ${
                  activeSection === 'programs' ? 'text-pink-600 font-semibold' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                Programs
              </button>
              <button 
                onClick={() => handleSmoothScroll('impact')}
                className={`transition-colors ${
                  activeSection === 'impact' ? 'text-pink-600 font-semibold' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                Impact
              </button> */}
              {/* Documents Button */}
              {/* <button 
                onClick={() => setIsOpen(true)}
                className="text-gray-700 hover:text-pink-600 transition-colors flex items-center"
              >
                Documents
              </button>
              <button 
                onClick={() => handleSmoothScroll('contact')}
                className={`transition-colors ${
                  activeSection === 'contact' ? 'text-pink-600 font-semibold' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                Contact
              </button>
              <button 
                onClick={() => setIsDonate(true)} 
                className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Donate Now
              </button>
            </div> */}

            {/* Mobile menu button */}
            {/* <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div> */}

        {/* Mobile Navigation - UPDATED */}
        {/* {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => handleSmoothScroll('home')}
                className={`block px-3 py-2 transition-colors w-full text-left ${
                  activeSection === 'home' ? 'text-pink-600 font-semibold' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleSmoothScroll('about')}
                className={`block px-3 py-2 transition-colors w-full text-left ${
                  activeSection === 'about' ? 'text-pink-600 font-semibold' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => handleSmoothScroll('programs')}
                className={`block px-3 py-2 transition-colors w-full text-left ${
                  activeSection === 'programs' ? 'text-pink-600 font-semibold' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                Programs
              </button>
              <button 
                onClick={() => handleSmoothScroll('impact')}
                className={`block px-3 py-2 transition-colors w-full text-left ${
                  activeSection === 'impact' ? 'text-pink-600 font-semibold' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                Impact
              </button> */}
              {/* Documents Button */}
              {/* <button 
                onClick={() => { setIsOpen(true); setIsMenuOpen(false); }}
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors w-full text-left"
              >
                Documents
              </button>
              <button 
                onClick={() => handleSmoothScroll('contact')}
                className={`block px-3 py-2 transition-colors w-full text-left ${
                  activeSection === 'contact' ? 'text-pink-600 font-semibold' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                Contact
              </button>
              <button 
                onClick={() => { setIsDonate(true); setIsMenuOpen(false); }} 
                className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors w-full text-center"
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav> */}

      {/* Use the Header component */}

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-pink-600 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Women, Protecting Children
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Dedicated to creating safe spaces, providing opportunities, and building a brighter future for women and children in our communities
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              {/* <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                Get Involved
              </button> */}
              <button 
                onClick={() => navigate('/learn-more')}
                className="w-full sm:w-auto border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-600">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating lasting change through community-driven solutions and sustainable development initiatives
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('purpose')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'purpose' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Purpose
              </button>
              <button
                onClick={() => setActiveTab('dreams')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'dreams' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Our Dreams
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'values' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Values
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'purpose' && (
              <div className="text-center">
                <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Purpose</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our purpose is to ignite transformational change in the lives of women and children who deserve nothing less than hope, dignity, and boundless opportunities. We exist to break the chains of poverty, discrimination, and despair that hold back our communities.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through unwavering dedication and innovative programs, we create pathways to education, healthcare, and economic independence. Every woman empowered and every child educated becomes a beacon of change, lighting the way for generations to come.
                </p>
              </div>
            )}
            {activeTab === 'dreams' && (
              <div className="text-center">
                <Heart className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Dreams</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We dream of a world where every girl can pursue her education without fear, where every woman has the power to shape her destiny, and where every child grows up believing that their dreams are within reach.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  In our vision, communities thrive with self-reliance and resilience. We see villages transformed into centers of learning and growth, where knowledge flows freely and opportunities bloom like flowers after rain.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This isn't just a distant dream – it's our unwavering commitment to creating a future where equality, education, and empowerment are not privileges, but fundamental rights for all.
                </p>
              </div>
            )}
            {activeTab === 'values' && (
              <div className="text-center">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Core Values</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  These values are the heartbeat of our organization, guiding every decision and inspiring every action we take.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg border-l-4 border-pink-500">
                    <h4 className="font-bold text-pink-600 mb-3 text-lg">🤝 Compassion in Action</h4>
                    <p className="text-gray-600 leading-relaxed">We don't just feel for others – we act with deep empathy and understanding. Every person we serve is treated with the dignity and respect they deserve, creating healing spaces where hope can flourish.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-600 mb-3 text-lg">🌟 Unwavering Transparency</h4>
                    <p className="text-gray-600 leading-relaxed">Trust is our foundation. We maintain crystal-clear communication, open our books to scrutiny, and ensure every donated rupee creates maximum impact. Your faith in us drives our accountability.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-600 mb-3 text-lg">🌱 Sustainable Transformation</h4>
                    <p className="text-gray-600 leading-relaxed">We plant seeds that grow into mighty trees. Our solutions are designed to thrive long after we leave, empowering communities to become self-sufficient and resilient for generations ahead.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-600 mb-3 text-lg">⚡ Fearless Empowerment</h4>
                    <p className="text-gray-600 leading-relaxed">We don't create dependency – we ignite independence. By building skills, confidence, and leadership within communities, we ensure lasting change that spreads like wildfire across entire regions.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <Programs/>

      {/* Impact Section */}
      <section id="impact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of transformation and hope from the communities we serve
            </p>
          </div>

          {/* Enhanced Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 ml-4">Education Impact</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Schools Built</span>
                  <span className="font-bold text-blue-600 text-xl">25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Students Enrolled</span>
                  <span className="font-bold text-blue-600 text-xl">5,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Teachers Trained</span>
                  <span className="font-bold text-blue-600 text-xl">200+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Literacy Rate Improvement</span>
                  <span className="font-bold text-blue-600 text-xl">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Digital Learning Centers</span>
                  <span className="font-bold text-blue-600 text-xl">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Scholarships Awarded</span>
                  <span className="font-bold text-blue-600 text-xl">800+</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white p-3 rounded-lg">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-900 ml-4">Healthcare Impact</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Health Camps Conducted</span>
                  <span className="font-bold text-green-600 text-xl">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Patients Treated</span>
                  <span className="font-bold text-green-600 text-xl">8,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Vaccinations Given</span>
                  <span className="font-bold text-green-600 text-xl">12,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Health Workers Trained</span>
                  <span className="font-bold text-green-600 text-xl">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Mobile Clinics Deployed</span>
                  <span className="font-bold text-green-600 text-xl">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Maternal Deaths Prevented</span>
                  <span className="font-bold text-green-600 text-xl">95%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white p-3 rounded-lg">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-900 ml-4">Economic Impact</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Women Empowered</span>
                  <span className="font-bold text-purple-600 text-xl">3,200+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Self-Help Groups Formed</span>
                  <span className="font-bold text-purple-600 text-xl">120</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Microloans Disbursed</span>
                  <span className="font-bold text-purple-600 text-xl">₹2.5Cr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Businesses Started</span>
                  <span className="font-bold text-purple-600 text-xl">450+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Skills Training Programs</span>
                  <span className="font-bold text-purple-600 text-xl">35</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Income Increase</span>
                  <span className="font-bold text-purple-600 text-xl">300%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Impact Metrics */}
          <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-8 mb-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Community Transformation Metrics</h3>
              <p className="text-xl opacity-90">Measuring real change in the lives we touch</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">72%</div>
                <div className="text-lg opacity-90">Reduction in Child Malnutrition</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-lg opacity-90">Girls Completing Education</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-lg opacity-90">Women with Financial Independence</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">Community Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 relative overflow-hidden">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Stories of Transformation</h3>
              <p className="text-gray-600">Hear from the people whose lives have been touched by our work</p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Main Testimonial */}
              <div className="text-center px-16 md:px-20">
                <div className="mb-6">
                  <svg className="h-12 w-12 text-blue-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                <blockquote className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="mb-6">
                  <div className="font-bold text-gray-900 text-lg mb-1">{testimonials[currentTestimonial].name}</div>
                  <div className="text-blue-600 font-medium mb-1">{testimonials[currentTestimonial].role}</div>
                  <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].location}</div>
                </div>
              </div>

              {/* Navigation Arrows - Positioned further out */}
              <button
                onClick={prevTestimonial}
                className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
              >
                <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
              >
                <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>    

      {/* Contact Section */}
      <GetInTouch/>

      {/* Footer */}
    </div>
  );
};

export default NGOWebsite;