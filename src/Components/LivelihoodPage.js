import React, { useState } from 'react';
import { Users, Briefcase, TrendingUp, Heart, Target, CheckCircle, ArrowRight, Award, BookOpen, DollarSign, MapPin, Calendar, Phone, Mail, Download, Video, UserCheck, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LivelihoodPage() {
  const [activeTab, setActiveTab] = useState('skills');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const navigate = useNavigate();

  const programs = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Skill Development",
      description: "Comprehensive training programs in tailoring, handicrafts, digital literacy, and entrepreneurship.",
      beneficiaries: "5,000+ women trained",
      duration: "3-6 months",
      details: {
        overview: "Our skill development program offers intensive, hands-on training in various vocational skills. We focus on market-relevant skills that enable women to earn sustainable incomes.",
        curriculum: ["Basic to advanced technical training", "Soft skills development", "Business management basics", "Quality standards and compliance", "Marketing and customer service"],
        outcomes: ["Industry-recognized certification", "Tool kit provision", "Job placement assistance", "Ongoing mentorship for 1 year", "Access to alumni network"],
        eligibility: "Women aged 18-45, basic literacy preferred but not mandatory"
      }
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Microfinance Support",
      description: "Access to micro-loans and financial literacy programs to start small businesses.",
      beneficiaries: "2,500+ loans disbursed",
      duration: "6-24 months repayment",
      details: {
        overview: "We provide collateral-free microloans with minimal interest rates to help women start or expand their small businesses. Our financial literacy program ensures sustainable business growth.",
        curriculum: ["Financial planning and budgeting", "Loan management", "Savings and investment strategies", "Banking procedures", "Record keeping and accounting"],
        outcomes: ["Loans from ₹10,000 to ₹1,00,000", "Flexible repayment terms", "Business mentorship", "Group support system", "Credit score building"],
        eligibility: "Women entrepreneurs with viable business plans, age 21-55"
      }
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employment Linkages",
      description: "Connecting trained individuals with employment opportunities and market access.",
      beneficiaries: "3,200+ placements",
      duration: "Ongoing support",
      details: {
        overview: "We maintain strong partnerships with over 200 companies and organizations to facilitate job placements. Our team works to match skills with appropriate employment opportunities.",
        curriculum: ["Resume building and interview skills", "Workplace etiquette", "Communication skills", "Rights and workplace safety", "Career counseling"],
        outcomes: ["Direct job placements", "Internship opportunities", "Contract work arrangements", "Home-based work options", "Regular job fairs and recruitment drives"],
        eligibility: "Completed skill training or relevant experience, all age groups"
      }
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Incubation",
      description: "Mentorship and support for women entrepreneurs to scale their businesses.",
      beneficiaries: "800+ businesses supported",
      duration: "12-18 months",
      details: {
        overview: "Our incubation program provides comprehensive support to women-led startups and small businesses, helping them grow from idea stage to sustainable enterprises.",
        curriculum: ["Business planning and strategy", "Market research and analysis", "Digital marketing and e-commerce", "Legal compliance and registration", "Networking and partnerships"],
        outcomes: ["Co-working space access", "One-on-one mentorship", "Funding connections", "Technology and digital tools", "Exhibition and market opportunities"],
        eligibility: "Women with existing businesses or strong business ideas, age 21+"
      }
    }
  ];

  const skillCategories = {
    skills: [
      { name: "Tailoring & Garment Making", description: "Professional stitching, pattern making, and fashion design" },
      { name: "Handicrafts & Artisan Work", description: "Traditional and contemporary craft techniques" },
      { name: "Beauty & Wellness Services", description: "Cosmetology, spa treatments, and wellness therapies" },
      { name: "Food Processing & Catering", description: "Commercial cooking, baking, and food business management" },
      { name: "Digital Marketing", description: "Social media management, content creation, online advertising" },
      { name: "Computer Skills & Data Entry", description: "MS Office, internet navigation, and data management" }
    ],
    support: [
      { name: "Free Training Materials", description: "All learning materials provided at no cost" },
      { name: "Certification Programs", description: "Government-recognized and industry-standard certificates" },
      { name: "Tool Kits & Equipment", description: "Starter kits for immediate income generation" },
      { name: "Childcare During Training", description: "On-site daycare facilities for young children" },
      { name: "Transportation Assistance", description: "Travel allowances or pickup/drop services" },
      { name: "Job Placement Support", description: "Career counseling and employer connections" }
    ],
    impact: [
      { stat: "85%", description: "Income increase for participants within first year" },
      { stat: "70%", description: "Achieve complete financial independence" },
      { stat: "90%", description: "Continue earning after 2 years" },
      { stat: "1,500+", description: "Families lifted above poverty line" },
      { stat: "95%", description: "Participant satisfaction rate" },
      { stat: "50+", description: "Self-help groups formed and active" }
    ]
  };

  const successStories = [
    {
      name: "Priya Sharma",
      age: 32,
      location: "Mumbai, Maharashtra",
      achievement: "From trainee to boutique owner",
      story: "After completing our tailoring program in 2021, Priya started with taking small orders from her neighborhood. Today, she runs 'Priya's Boutique' employing 5 other women and generating monthly revenue of ₹2 lakhs.",
      impact: "Supports family of 4, educated 2 children, built own house",
      image: "PS"
    },
    {
      name: "Meena Devi",
      age: 38,
      location: "Jaipur, Rajasthan",
      achievement: "Successful handicraft entrepreneur",
      story: "Meena learned traditional handicraft techniques and business skills through our program. Her handmade products now reach customers across India through our e-commerce partnerships and she has become a trainer herself.",
      impact: "Income increased from ₹3,000 to ₹40,000 per month",
      image: "MD"
    },
    {
      name: "Anjali Verma",
      age: 28,
      location: "Delhi",
      achievement: "Digital literacy champion",
      story: "A high school graduate with no computer knowledge, Anjali completed our digital skills program. She now works as a freelance data entry specialist from home, balancing work with caring for her elderly parents.",
      impact: "Financial independence, flexible work-life balance",
      image: "AV"
    },
    {
      name: "Lakshmi Reddy",
      age: 35,
      location: "Hyderabad, Telangana",
      achievement: "Catering business owner",
      story: "After losing her husband, Lakshmi joined our food processing program. She started with home-based tiffin services and now runs a full-fledged catering business with 3 employees, serving corporate clients.",
      impact: "Self-sufficient, educated 3 children, inspiring role model",
      image: "LR"
    }
  ];

  const statistics = [
    { number: "12,000+", label: "Women Empowered", icon: <Users className="w-6 h-6" /> },
    { number: "₹45 Cr", label: "Economic Impact", icon: <DollarSign className="w-6 h-6" /> },
    { number: "25+", label: "Skill Programs", icon: <BookOpen className="w-6 h-6" /> },
    { number: "200+", label: "Partner Organizations", icon: <Building2 className="w-6 h-6" /> },
    { number: "15", label: "States Covered", icon: <MapPin className="w-6 h-6" /> },
    { number: "98%", label: "Success Rate", icon: <Award className="w-6 h-6" /> }
  ];

  const trainingCenters = [
    { city: "Prayagraj", address: "Saray Inayat", capacity: "20 trainees", programs: "7 active programs" },
    { city: "Mumbai", address: "Andheri East", capacity: "10 trainees", programs: "8 active programs" },
    { city: "Delhi", address: "Dwarka Sector 12", capacity: "50 trainees", programs: "5 active programs" },
    { city: "Bangalore", address: "Whitefield", capacity: "30 trainees", programs: "6 active programs" },
    { city: "Kolkata", address: "Salt Lake City", capacity: "10 trainees", programs: "4 active programs" },
  ];

  const upcomingEvents = [
    { date: "Nov 15, 2025", title: "Job Fair - Hospitality Sector", location: "Delhi Center", slots: "200 openings" },
    { date: "Nov 22, 2025", title: "Entrepreneurship Workshop", location: "Mumbai Center", slots: "Limited seats" },
    { date: "Dec 5, 2025", title: "Digital Skills Bootcamp", location: "Online", slots: "500 participants" },
    { date: "Dec 18, 2025", title: "Handicraft Exhibition & Sale", location: "All Centers", slots: "100+ artisans" }
  ];

  const partners = [
    { name: "National Skill Development Corporation", type: "Government" },
    { name: "Women Entrepreneurship Platform", type: "NITI Aayog" },
    { name: "State Bank of India", type: "Banking Partner" },
    { name: "Tech Mahindra Foundation", type: "Corporate CSR" },
    { name: "SEWA (Self Employed Women's Association)", type: "NGO Partner" },
    { name: "Ministry of Women & Child Development", type: "Government" }
  ];

  const openContact = () => {   
    navigate('/get-in-touch');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold">
              Transforming Lives Since 2022
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Livelihood Empowerment Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Empowering women and children through comprehensive skill development, financial independence, 
              and sustainable livelihoods. Join thousands who have transformed their lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={()=>navigate('/programs')} className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2">
                 Programs <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={()=>navigate('/impact-stories')} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition inline-flex items-center justify-center gap-2">
                 Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="bg-white py-12 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-900 flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-900">
            <div className="flex items-start gap-4">
              <Target className="w-10 h-10 text-blue-900 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To create pathways to economic independence for women and vulnerable communities through 
                  skill development, financial literacy, and sustainable livelihood opportunities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We believe every woman deserves the opportunity to earn with dignity, support her family, 
                  and contribute to society's economic growth.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
            <div className="flex items-start gap-4">
              <Heart className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A society where every woman has access to quality education, skill training, and economic 
                  opportunities, enabling her to live a life of dignity and independence.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We envision empowered communities where women are leaders, entrepreneurs, and changemakers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Programs */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of carefully designed programs to build skills, start businesses, 
              and secure sustainable livelihoods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-200 cursor-pointer"
                onClick={() => setSelectedProgram(selectedProgram === index ? null : index)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-blue-900 bg-blue-50 p-4 rounded-xl">{program.icon}</div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-semibold text-gray-900">{program.duration}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-blue-900 bg-blue-50 px-4 py-2 rounded-full">
                    {program.beneficiaries}
                  </div>
                  <button className="text-blue-900 font-semibold hover:underline">
                    {selectedProgram === index ? 'Show Less' : 'Learn More'} →
                  </button>
                </div>
                
                {selectedProgram === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-900" />
                        Program Overview
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{program.details.overview}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-900" />
                        What You'll Learn
                      </h4>
                      <ul className="space-y-2">
                        {program.details.curriculum.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-blue-900 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-900" />
                        Program Benefits
                      </h4>
                      <ul className="space-y-2">
                        {program.details.outcomes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-green-600 mt-1">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-blue-900" />
                        Eligibility
                      </h4>
                      <p className="text-gray-700">{program.details.eligibility}</p>
                    </div>
                    
                    <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                      Apply for This Program
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills & Support Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Comprehensive Training & Support
        </h2>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex-1 py-4 px-6 font-semibold transition ${
                activeTab === 'skills'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Training Areas
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`flex-1 py-4 px-6 font-semibold transition ${
                activeTab === 'support'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Support Services
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`flex-1 py-4 px-6 font-semibold transition ${
                activeTab === 'impact'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Our Impact
            </button>
          </div>
          <div className="p-8">
            {activeTab === 'impact' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories[activeTab].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                    <div className="text-4xl font-bold text-blue-900 mb-2">{item.stat}</div>
                    <div className="text-gray-700">{item.description}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeTab].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Stories - Detailed */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Inspiring Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of transformation, determination, and success from women who changed their lives through our programs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {story.image}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600">{story.age} years • {story.location}</p>
                    <p className="text-blue-900 font-semibold mt-1">{story.achievement}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{story.story}</p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-900">
                  <p className="text-sm font-semibold text-gray-600 mb-1">Impact:</p>
                  <p className="text-gray-800">{story.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Centers */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Training Centers</h2>
            <p className="text-xl text-gray-600">State-of-the-art facilities across major cities in India</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingCenters.map((center, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <MapPin className="w-8 h-8 text-blue-900" />
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Active</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{center.city}</h3>
                <p className="text-gray-600 mb-4">{center.address}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-semibold text-gray-900">{center.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Programs:</span>
                    <span className="font-semibold text-gray-900">{center.programs}</span>
                  </div>
                </div>
                <button onClick={openContact} className="w-full mt-4 bg-blue-50 text-blue-900 py-2 rounded-lg font-semibold hover:bg-blue-100 transition">
                  Visit Center
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events & Workshops</h2>
            <p className="text-xl text-gray-300">Join us for job fairs, training workshops, and networking events</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-blue-400 text-sm font-semibold mb-1">{event.date}</div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" /> {event.slots}
                      </span>
                    </div>
                    <button onClick={openContact} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners & Collaborators */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners & Collaborators</h2>
            <p className="text-xl text-gray-600">Working together to create lasting impact</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-6 h-6 text-blue-900" />
                  <span className="text-sm font-semibold text-blue-600">{partner.type}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Apply */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How to Apply</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple 4-step process to start your journey towards financial independence
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Register Online</h3>
              <p className="text-gray-300">Fill out our simple application form with your details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Counseling Session</h3>
              <p className="text-gray-300">Meet with our counselor to discuss your goals and options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Program Selection</h3>
              <p className="text-gray-300">Choose the program that best fits your aspirations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Start Training</h3>
              <p className="text-gray-300">Begin your journey to financial independence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & CTA */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Life?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of women who have achieved financial independence through our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button onClick={openContact} className="bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition inline-flex items-center justify-center gap-2">
                <UserCheck className="w-5 h-5" />
                Apply Now
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-blue-900" />
                  <span className="font-semibold text-gray-900">Call Us</span>
                </div>
                <p className="text-gray-600">+91 7905226299</p>
                <p className="text-sm text-gray-500">Mon-Sat, 9 AM - 6 PM</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-blue-900" />
                  <span className="font-semibold text-gray-900">Email Us</span>
                </div>
                <p className="text-gray-600">help@ankitawellbeingfoundation.org</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 NGO Livelihood Programs. Empowering communities, transforming lives.
          </p>
        </div>
      </div>
    </div>
  );
}