import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Shield, Briefcase, BookOpen, Users, Award, Home, Scale, Megaphone, Lightbulb, Target, CheckCircle, ArrowRight, AlertCircle, Calendar, MapPin, Globe, Star, Zap } from 'lucide-react';

export default function WomanEmpowermentPage({ onDonateClick }) {
  const [activeInitiative, setActiveInitiative] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);
  const navigate = useNavigate();

  const heroStats = [
    { number: "10,000+", label: "Women Empowered", icon: <Users className="w-6 h-6" /> },
    { number: "500+", label: "Communities Reached", icon: <Globe className="w-6 h-6" /> },
    { number: "25", label: "Active Programs", icon: <Target className="w-6 h-6" /> },
    { number: "4 Years", label: "Of Impact", icon: <Award className="w-6 h-6" /> }
  ];

  const empowermentPillars = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Education & Literacy",
      description: "Breaking barriers through knowledge and learning opportunities for women of all ages.",
      programs: ["Adult Literacy Classes", "Digital Education", "Vocational Training", "Higher Education Support"],
      impact: "10,000+ women educated",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Economic Independence",
      description: "Enabling financial freedom through entrepreneurship, skills, and employment opportunities.",
      programs: ["Business Training", "Microfinance", "Skill Development", "Job Placement"],
      impact: "8,000+ entrepreneurs created",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Health & Wellness",
      description: "Ensuring physical and mental well-being through comprehensive healthcare initiatives.",
      programs: ["Health Camps", "Mental Health Support", "Nutrition Programs", "Maternal Care"],
      impact: "10,000+ health check-ups",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Scale className="w-12 h-12" />,
      title: "Legal Rights & Protection",
      description: "Protecting women's rights through legal aid, awareness, and advocacy programs.",
      programs: ["Legal Counseling", "Rights Awareness", "Domestic Violence Support", "Property Rights"],
      impact: "5,000+ legal cases supported",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Leadership & Advocacy",
      description: "Building women leaders who drive change in their communities and beyond.",
      programs: ["Leadership Training", "Political Participation", "Community Organizing", "Public Speaking"],
      impact: "2,000+ leaders developed",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Social Support",
      description: "Creating safe spaces and support systems for women facing challenges.",
      programs: ["Counseling Services", "Support Groups", "Crisis Helpline", "Shelter Homes"],
      impact: "5,000+ women supported",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const keyInitiatives = [
    {
      title: "She Leads Initiative",
      description: "A comprehensive leadership development program preparing women for decision-making roles in society.",
      features: [
        "6-month intensive training program",
        "Mentorship from women leaders",
        "Network building opportunities",
        "Career advancement support",
        "Public speaking and communication skills"
      ],
      participants: "200+ women trained annually",
      highlight: "85% participants in leadership positions"
    },
    {
      title: "Digital Didi Program",
      description: "Bridging the digital divide by training women in technology and digital skills for the modern workplace.",
      features: [
        "Computer basics and MS Office",
        "Internet and email usage",
        "Social media management",
        "Online safety and security",
        "E-commerce and digital marketing"
      ],
      participants: "3,000+ women trained",
      highlight: "70% now working in digital roles"
    },
    {
      title: "Women's Health First",
      description: "Comprehensive health and wellness program addressing physical, mental, and reproductive health needs.",
      features: [
        "Free health check-up camps",
        "Mental health counseling",
        "Nutrition and wellness workshops",
        "Maternal and child health services",
        "Disease prevention awareness"
      ],
      participants: "3500+ women benefited",
      highlight: "40% improvement in health indicators"
    },
    {
      title: "Her Money Matters",
      description: "Financial literacy and empowerment program teaching women to manage money, save, and invest wisely.",
      features: [
        "Financial planning workshops",
        "Savings group formation",
        "Investment education",
        "Banking and credit awareness",
        "Business financial management"
      ],
      participants: "5000+ women enrolled",
      highlight: "₹10 Cr+ in collective savings"
    }
  ];

  const successStories = [
    {
      name: "Dr. Sunita Patel",
      age: 42,
      location: "Rural Gujarat",
      journey: "From Illiterate to Community Doctor",
      story: "Married at 16, Sunita couldn't read or write. Through our adult literacy program, she not only learned to read but pursued her dream of becoming a healthcare worker. Today, she serves 50+ villages as a community health worker.",
      achievement: "Now training other women in healthcare",
      image: "SP",
      category: "Education"
    },
    {
      name: "Ritu Sharma",
      age: 35,
      location: "Delhi",
      journey: "Domestic Violence Survivor to Entrepreneur",
      story: "After leaving an abusive marriage with two children, Ritu found refuge and support through our programs. Our legal aid helped her secure her rights, and business training enabled her to start a successful catering business.",
      achievement: "Employs 12 women, earning ₹3 lakhs monthly",
      image: "RS",
      category: "Economic"
    },
    {
      name: "Asha Devi",
      age: 38,
      location: "Rajasthan",
      journey: "Homemaker to Panchayat Leader",
      story: "A homemaker with no formal education, Asha joined our leadership program. She learned about governance, public speaking, and community organizing. Today, she's an elected Sarpanch leading development in 5 villages.",
      achievement: "Transformed village infrastructure and women's lives",
      image: "AD",
      category: "Leadership"
    },
    {
      name: "Priya Kumari",
      age: 28,
      location: "Bihar",
      journey: "Child Bride to Tech Professional",
      story: "Married at 14, Priya was denied education. At 22, she joined our Digital Didi program with her husband's support. She learned computer skills and now works as a data analyst, inspiring other young women.",
      achievement: "Supporting 10 girls' education in her village",
      image: "PK",
      category: "Digital"
    },
    {
      name: "Lakshmi Menon",
      age: 45,
      location: "Kerala",
      journey: "Widow to Self-Help Group Leader",
      story: "Widowed young with three children, Lakshmi struggled financially. She joined our women's collective, learned tailoring, and now leads a 50-member self-help group providing livelihood to many families.",
      achievement: "Group revenue of ₹20 lakhs annually",
      image: "LM",
      category: "Social"
    },
    {
      name: "Fatima Khan",
      age: 33,
      location: "Uttar Pradesh",
      journey: "Oppressed to Rights Activist",
      story: "Facing discrimination and denied basic rights, Fatima learned about her legal rights through our program. She became a para-legal volunteer and now helps other women access justice and legal protection.",
      achievement: "Helped 200+ women secure their rights",
      image: "FK",
      category: "Legal"
    }
  ];

  const challenges = [
    {
      title: "Gender Discrimination",
      description: "Deep-rooted patriarchal mindsets limiting women's opportunities",
      solution: "Awareness campaigns and community engagement programs"
    },
    {
      title: "Limited Education Access",
      description: "Girls often denied education due to poverty or social norms",
      solution: "Free education programs and scholarship initiatives"
    },
    {
      title: "Economic Dependency",
      description: "Lack of financial independence and decision-making power",
      solution: "Skill training and entrepreneurship development"
    },
    {
      title: "Safety & Security",
      description: "Violence, harassment, and lack of safe spaces",
      solution: "Legal aid, support systems, and advocacy"
    },
    {
      title: "Health Disparities",
      description: "Inadequate healthcare access and gender health gap",
      solution: "Health camps, awareness, and free medical services"
    },
    {
      title: "Political Underrepresentation",
      description: "Limited participation in decision-making and governance",
      solution: "Leadership training and political empowerment programs"
    }
  ];

  const testimonials = [
    {
      quote: "This organization gave me wings when society tried to clip them. Today I fly high, helping others soar too.",
      name: "Meera Singh",
      role: "Program Beneficiary",
      year: "2022"
    },
    {
      quote: "From being told I couldn't do anything to running my own business - the transformation has been incredible.",
      name: "Anjali Reddy",
      role: "Entrepreneur",
      year: "2023"
    },
    {
      quote: "I learned that empowerment isn't just about money - it's about knowing your worth and rights.",
      name: "Kavita Sharma",
      role: "Rights Advocate",
      year: "2024"
    }
  ];

  const upcomingEvents = [
    {
      date: "Nov 20, 2025",
      title: "Women's Leadership Summit 2025",
      description: "Annual gathering of women leaders, changemakers, and activists",
      location: "New Delhi",
      participants: "500+ participants expected"
    },
    {
      date: "Dec 1, 2025",
      title: "Self Defense Training Camp",
      description: "Free self-defense training for women and girls",
      location: "Multiple Cities",
      participants: "1000+ registrations open"
    },
    {
      date: "Dec 10, 2025",
      title: "International Human Rights Day Special",
      description: "Women's rights awareness and legal aid camp",
      location: "Pan India",
      participants: "All women welcome"
    },
    {
      date: "Jan 15, 2026",
      title: "Women Entrepreneurship Fair",
      description: "Platform for women entrepreneurs to showcase products",
      location: "Mumbai",
      participants: "200+ exhibitors"
    }
  ];

  const openContact = () => {
    navigate('/get-in-touch');
  };

  const learnMore = () => {
    navigate('/learn-more');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold">
              <Heart className="w-5 h-5" />
              Empowering Women, Transforming Society
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Women Empowerment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 py-4">
                Creating Lasting Change
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-200">
              Breaking barriers, challenging stereotypes, and building a world where every woman has 
              the opportunity to realize her full potential and live with dignity, equality, and freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button onClick={openContact} className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2 shadow-lg">
                Join Our Movement <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={()=>navigate('/impact-stories')} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition inline-flex items-center justify-center gap-2">
                Impact Stories
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {heroStats.map((stat, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                  <div className="text-pink-400 flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We envision a world where women are equal partners in all spheres of life - social, economic, 
              political, and cultural. Our mission is to empower women through education, economic opportunities, 
              health support, legal rights awareness, and leadership development, enabling them to break free 
              from systemic barriers and create better futures for themselves and their communities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl">
                <Target className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-700">A society where every woman lives with dignity, freedom, and equal opportunities.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                <Zap className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Our Approach</h3>
                <p className="text-gray-700">Holistic, community-driven programs addressing root causes of inequality.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <Heart className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Our Values</h3>
                <p className="text-gray-700">Equality, dignity, empowerment, and social justice for all women.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Six Pillars of Empowerment */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Six Pillars of Women Empowerment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses all aspects of women's empowerment through interconnected programs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {empowermentPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden">
                <div className={`bg-gradient-to-r ${pillar.color} p-6 text-white`}>
                  <div className="mb-4">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                  <p className="text-white text-opacity-90">{pillar.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Key Programs
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {pillar.programs.map((program, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {program}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900">{pillar.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Initiatives - Detailed */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flagship Initiatives</h2>
            <p className="text-xl text-gray-600">Transformative programs creating measurable impact</p>
          </div>
          
          {/* Initiative Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {keyInitiatives.map((initiative, index) => (
              <button
                key={index}
                onClick={() => setActiveInitiative(index)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeInitiative === index
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {initiative.title}
              </button>
            ))}
          </div>

          {/* Active Initiative Details */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {keyInitiatives[activeInitiative].title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {keyInitiatives[activeInitiative].description}
                </p>
                <div className="space-y-3 mb-6">
                  {keyInitiatives[activeInitiative].features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button onClick={openContact} className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition">
                  Enroll in This Program
                </button>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-blue-900" />
                    <h4 className="font-bold text-gray-900">Participants</h4>
                  </div>
                  <p className="text-2xl font-bold text-blue-900">
                    {keyInitiatives[activeInitiative].participants}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-xl shadow-lg text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-6 h-6" />
                    <h4 className="font-bold">Success Highlight</h4>
                  </div>
                  <p className="text-lg font-semibold">
                    {keyInitiatives[activeInitiative].highlight}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                  <h4 className="font-bold text-gray-900 mb-2">Program Benefits</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Free of cost for eligible participants</li>
                    <li>✓ Certificate upon completion</li>
                    <li>✓ Ongoing support and mentorship</li>
                    <li>✓ Alumni network access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Challenges We Address</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the barriers women face and our strategic solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <h3 className="text-xl font-bold">{challenge.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{challenge.description}</p>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-green-400 mb-1">Our Solution:</p>
                  <p className="text-gray-300 text-sm">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories - Detailed */}
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories of Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real women, real struggles, real triumphs - inspiring journeys from adversity to empowerment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden cursor-pointer"
                onClick={() => setSelectedStory(selectedStory === index ? null : index)}
              >
                <div className="bg-gradient-to-r from-slate-700 to-blue-900 p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-900 text-2xl font-bold">
                      {story.image}
                    </div>
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold">
                      {story.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                  <p className="text-sm text-gray-200">{story.age} years • {story.location}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-blue-900 mb-3">{story.journey}</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {selectedStory === index ? story.story : story.story.substring(0, 120) + '...'}
                  </p>
                  {selectedStory === index && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500 mb-4">
                      <p className="text-sm font-semibold text-gray-600 mb-1">Achievement:</p>
                      <p className="text-gray-800 font-semibold">{story.achievement}</p>
                    </div>
                  )}
                  <button className="text-blue-900 font-semibold hover:underline text-sm">
                    {selectedStory === index ? 'Show Less' : 'Read Full Story'} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">In Their Own Words</h2>
            <p className="text-xl text-gray-600">Hear directly from the women whose lives have been transformed</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-900">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events & Programs</h2>
            <p className="text-xl text-gray-300">Join us in our mission to empower women</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-pink-400 text-sm font-semibold mb-1">{event.date}</div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-3">{event.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" /> {event.participants}
                      </span>
                    </div>
                    <button onClick={openContact} className="mt-4 bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition text-sm">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in creating a more equitable world for women
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Volunteer</h3>
              <p className="text-gray-600 text-sm mb-4">Contribute your time and skills to empower women</p>
              <button onClick={openContact} className="text-purple-600 font-semibold hover:underline text-sm">
                Join Us →
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Donate</h3>
              <p className="text-gray-600 text-sm mb-4">Support our programs with financial contributions</p>
              <button onClick={onDonateClick}  className="text-blue-600 font-semibold hover:underline text-sm">
                Donate Now →
              </button>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Advocate</h3>
              <p className="text-gray-600 text-sm mb-4">Raise awareness about women's rights and issues</p>
              <button onClick={learnMore} className="text-green-600 font-semibold hover:underline text-sm">
                Learn More →
              </button>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Partner</h3>
              <p className="text-gray-600 text-sm mb-4">Collaborate with us for greater impact</p>
              <button onClick={()=>navigate('/Partner')} className="text-orange-600 font-semibold hover:underline text-sm">
                Partner With Us →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Impact by Numbers */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Measurable change, lasting transformation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50,000+</div>
              <p className="text-gray-700 font-semibold">Women Empowered</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">15,000+</div>
              <p className="text-gray-700 font-semibold">Women Educated</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">8,000+</div>
              <p className="text-gray-700 font-semibold">Entrepreneurs Created</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100,000+</div>
              <p className="text-gray-700 font-semibold">Health Services</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5,000+</div>
              <p className="text-gray-700 font-semibold">Legal Cases Supported</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">2,000+</div>
              <p className="text-gray-700 font-semibold">Leaders Developed</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Communities Reached</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">₹100 Cr+</div>
              <p className="text-gray-700 font-semibold">Economic Impact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recognition & Awards */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600">Honored for our commitment to women's empowerment</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border-t-4 border-yellow-500 text-center">
              <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">National Award for Women Empowerment</h3>
              <p className="text-gray-600 mb-2">Ministry of Women & Child Development</p>
              <p className="text-sm text-gray-500">2023</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-t-4 border-blue-500 text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best NGO for Social Impact</h3>
              <p className="text-gray-600 mb-2">India NGO Awards</p>
              <p className="text-sm text-gray-500">2022</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-t-4 border-purple-500 text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence in Women's Health</h3>
              <p className="text-gray-600 mb-2">Healthcare Excellence Awards</p>
              <p className="text-sm text-gray-500">2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of the Change</h2>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Every woman deserves the opportunity to live with dignity, freedom, and equality. 
            Join us in creating a world where women are empowered to reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2 shadow-lg">
              <Heart className="w-5 h-5" />
              Support Women Empowerment
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition inline-flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Our Report
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-6 h-6" />
                <span className="font-bold">Helpline (24/7)</span>
              </div>
              <p className="text-lg">+91-1800-XXX-XXXX</p>
              <p className="text-sm text-gray-300">Free & Confidential</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-6 h-6" />
                <span className="font-bold">Email Support</span>
              </div>
              <p className="text-lg">empowerment@ngo.org</p>
              <p className="text-sm text-gray-300">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer Quote */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-2xl">
            <p className="text-2xl font-bold text-gray-900 italic mb-4">
              "When women are empowered, entire communities thrive. When women rise, we all rise together."
            </p>
            <p className="text-gray-600">- Our Founder's Vision</p>
          </div>
        </div>
      </div>
    </div>
  );
} 