import { useState, useEffect } from 'react';
import { Heart, Users, Target, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

const NGOWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('purpose');
  const [isOpen, setIsOpen] = useState(false);
  const [isDonate, setIsDonate] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.jpg" alt="Logo" className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold text-gray-900">Ankita Wellbeing Foundation</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
              <a href="#programs" className="text-gray-700 hover:text-pink-600 transition-colors">Programs</a>
              <a href="#impact" className="text-gray-700 hover:text-pink-600 transition-colors">Impact</a>
              {/* Documents Button */}
              <button 
                onClick={() => setIsOpen(true)}
                className="text-gray-700 hover:text-pink-600 transition-colors flex items-center"
              >
                Documents
              </button>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
              <button 
                onClick={() => setIsDonate(true)} 
                className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Donate Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-pink-600">About</a>
              <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Programs</a>
              <a href="#impact" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Impact</a>
              {/* Documents Button */}
              <button 
                onClick={() => setIsOpen(true)}
                className="text-gray-700 hover:text-pink-600 transition-colors flex items-center"
              >
                Documents
              </button>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Contact</a>
              <button 
                onClick={() => setIsDonate(true)} 
                className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>

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
              <button 
                onClick={() => window.location.href = '#contact'}
                className="w-full sm:w-auto bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Involved
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
      <section id="programs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive initiatives designed to address the root causes of poverty and inequality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48">
                <img src="/programs1.jpg" alt="Education Program" className="w-full h-full object-fit" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Education & Literacy</h3>
                <p className="text-gray-600 mb-4">
                  Providing quality education and literacy programs to children and adults in underserved communities.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• School infrastructure development</li>
                  <li>• Teacher training programs</li>
                  <li>• Adult literacy classes</li>
                  <li>• Scholarship programs</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48">
                <img src="/programs2.jpg" alt="Healthcare Program" className="w-full h-full object-fit" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Healthcare Access</h3>
                <p className="text-gray-600 mb-4">
                  Ensuring accessible healthcare services and promoting health awareness in rural and urban areas.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mobile health clinics</li>
                  <li>• Vaccination drives</li>
                  <li>• Health education programs</li>
                  <li>• Medical equipment support</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48">
                <img src="/programs3.png" alt="Economic Empowerment Program" className="w-full h-full object-fit" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Economic Empowerment</h3>
                <p className="text-gray-600 mb-4">
                  Creating sustainable livelihood opportunities through skill development and microfinance programs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vocational training</li>
                  <li>• Microfinance initiatives</li>
                  <li>• Women's self-help groups</li>
                  <li>• Small business support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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

          {/* Documents */}
          <div className="relative">

            {/* Modal Overlay */}
            {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                {/* Modal Content */}
                <div className="bg-white rounded-lg w-11/12 max-w-2xl mx-auto p-6">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Documents</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Documents Content */}
                  <div className="space-y-4 flex-1 overflow-y-auto max-h-96">
                     {/* Image Document */}
                    <h3 className="font-semibold mb-2">License</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <img 
                          src="/doc.jpg" 
                          alt="Document"
                          className="w-50 h-64 object-contain border rounded"
                        />
                      </div>

                      <div>
                        <img 
                          src="/docs1.png" 
                          alt="Document"
                          className="w-50 h-64 object-contain border rounded"
                        />
                      </div>

                      <div>
                        <img 
                          src="/docs2.png" 
                          alt="Document"
                          className="w-50 h-64 object-contain border rounded"
                        />
                      </div>

                      <div>
                        <img 
                          src="/docs3.png"  
                          alt="Document"
                          className="w-50 h-64 object-contain border rounded"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">PAN</h3>
                        <img 
                          src="/docs4.png" 
                          alt="Document"
                          className="w-50 h-64 object-contain border rounded"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Income Tax Certificate</h3>
                        <img 
                          src="/docs5.png" 
                          alt="Document"
                          className="w-50 h-64 object-contain border rounded"
                        />
                      </div>
                    </div>  
                  </div>

                  {/* Close Button */}
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Donation */}
          <div className="relative" id='donate'>

            {/* Modal Overlay */}
            {isDonate && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                {/* Modal Content */}
                <div className="bg-white rounded-xl w-full max-w-4xl mx-auto max-h-[90vh] flex flex-col shadow-2xl">
                  {/* Header */}
                  <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">Support Our Mission</h2>
                    <button
                      onClick={() => setIsDonate(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                      aria-label="Close modal"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Donation Content - Scrollable */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* QR Code Section */}
                    <div className="text-center">
                      <div className="w-full max-w-xs mx-auto mb-4">
                        <div className="w-60 h-60 mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                          <img src="/donation.png" alt="QR Code" className="w-48 h-48 mx-auto object-cover" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">Scan to Donate</h3>
                      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Your generous contribution can make a significant difference in the lives of those we serve.
                        Scan the QR code above to donate securely and help us continue our mission of empowering communities,
                        transforming lives, and building a brighter future for all.
                      </p>
                    </div>

                    {/* Payment Methods */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Cheque Payment */}
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Cheque Payment</h3>
                        <p className="text-gray-700 mb-4 text-center leading-relaxed">
                          Cheques or Bank Drafts should be given in the name of <strong>"Ankita Wellbeing Foundation"</strong> payable at Prayagraj. 
                          You can courier the cheque to the address below:
                        </p>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <p className="text-sm text-gray-800 font-medium leading-relaxed">
                            <strong>Ankita Wellbeing Foundation</strong><br/>
                            703-A, Rudra Sangam Apartment, Sarai Inayat<br/>
                            GT Road near Prayag Dhaba<br/>
                            Prayagraj – 211019, U.P., India<br/>
                            <span className="text-blue-600">Mobile: (+91) 7905226299</span>
                          </p>
                        </div>
                      </div>

                      {/* Bank Transfer */}
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Bank Transfer (India)</h3>
                        <p className="text-gray-700 mb-4 text-center leading-relaxed">
                          You can donate using online bank transfer or wire transfer from your bank account 
                          in India using the following NGO account details:
                        </p>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <span className="font-medium text-gray-600">Account Name:</span>
                            <span className="col-span-2 text-gray-800">Ankita Wellbeing Foundation</span>
                            
                            <span className="font-medium text-gray-600">Account Type:</span>
                            <span className="col-span-2 text-gray-800">Current Account</span>
                            
                            <span className="font-medium text-gray-600">Account Number:</span>
                            <span className="col-span-2 text-gray-800 font-mono">50200072918073</span>
                            
                            <span className="font-medium text-gray-600">Bank Name:</span>
                            <span className="col-span-2 text-gray-800">HDFC Bank</span>
                            
                            <span className="font-medium text-gray-600">Branch:</span>
                            <span className="col-span-2 text-gray-800">Jhusi, Prayagraj, PIN - 211019</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="text-center bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        <strong>Tax Benefits:</strong> Donations are eligible for tax deductions under Section 80G of the Income Tax Act.
                        Receipt will be provided for all donations.
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-200 p-6 flex justify-end gap-3">
                    <button
                      onClick={() => setIsDonate(false)}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
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
                    <div className="text-blue-100">703-A, Rudra Sangam Apartment, Sarai Inayat, <br/>
                      GT Road near Prayag Dhaba, Prayagraj – 211019, U.P., India</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-blue-200" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+91 7905226299</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-3 text-blue-200" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">help@ankitawellbeingfoundation.org</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  ></textarea>
                </div>
                <button
                  className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  onClick={() => alert('Message sent! We will get back to you soon.')}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-blue-400 transition-colors">Programs</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Economic Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Community Building</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={()=>setIsDonate(true)} className="hover:text-blue-400 transition-colors">Donate</button></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Partner with Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy;2022 Ankita Wellbeing Foundation. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NGOWebsite;