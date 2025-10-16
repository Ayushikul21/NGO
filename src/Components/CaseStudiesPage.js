import React, { useState } from 'react';
import { Search, ArrowRight, Star, MapPin, Users, BarChart3, Calendar, ChevronRight, Award, Heart, BookOpen } from 'lucide-react';

export default function CaseStudiesPage({onDonateClick}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedStudy, setExpandedStudy] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: 'From Dropout to Scholar: Priya\'s Journey',
      category: 'education',
      tagline: 'How education transformed a life',
      shortDescription: 'A girl who was pulled out of school now leads her village\'s education initiative.',
      fullDescription: 'Priya, 14, was forced to drop out of school to work in fields. Through our intervention, she not only completed her education but scored 95% in her board exams. Today, she runs a community learning center for 200+ children.',
      location: 'Bihar, India',
      duration: '2 years',
      beneficiary: 'Priya Kumar',
      age: '16',
      color: 'from-blue-500 to-cyan-500',
      impact: [
        '95% board exam score',
        'Scholarship to college',
        'Community learning center with 200+ students',
        'Mentoring 50 girls annually'
      ],
      stats: { children: '200+', score: '95%', villages: '1', impact: 'Transformational' },
      image_color: 'bg-gradient-to-br from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      title: 'Mala\'s Microfinance Success Story',
      category: 'women-empowerment',
      tagline: 'From zero to entrepreneur',
      shortDescription: 'A widow with no income now runs a thriving tailoring business.',
      fullDescription: 'Mala, a widow with three children, received microfinance support and vocational training. She started a tailoring business from home. Within 18 months, she generated ₹8 lakhs in revenue and employed 5 other women from her community.',
      location: 'Rajasthan, India',
      duration: '18 months',
      beneficiary: 'Mala Sharma',
      age: '38',
      color: 'from-purple-500 to-pink-500',
      impact: [
        '₹8L annual revenue',
        '5 women employed',
        'Business expansion planned',
        'Financial independence achieved'
      ],
      stats: { revenue: '₹8L', employed: '5', clients: '200+', growth: '400%' },
      image_color: 'bg-gradient-to-br from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'Clean Water Transforms Lakshmi\'s Health',
      category: 'health-nutrition',
      tagline: 'Access to clean water saved a life',
      shortDescription: 'A young mother\'s health transformed after her village got clean water access.',
      fullDescription: 'Lakshmi suffered from recurring waterborne diseases. After our community installed a borewell and purification system, her health improved dramatically. She now conducts hygiene awareness sessions in her village, reaching 500+ people.',
      location: 'Madhya Pradesh, India',
      duration: '1 year',
      beneficiary: 'Lakshmi Patel',
      age: '28',
      color: 'from-green-500 to-emerald-500',
      impact: [
        '90% reduction in illnesses',
        '500+ people reached with hygiene awareness',
        'Became village health ambassador',
        'Family health improved significantly'
      ],
      stats: { illnesses: '-90%', aware: '500+', families: '150+', saved: '₹2L' },
      image_color: 'bg-gradient-to-br from-green-400 to-emerald-500'
    },
    {
      id: 4,
      title: 'Ravi\'s Transformation Through Skill Training',
      category: 'skill-development',
      tagline: 'From unemployment to skilled professional',
      shortDescription: 'A school dropout now earns ₹20,000 monthly through solar panel installation.',
      fullDescription: 'Ravi dropped out of school at 12. Through our skill development program, he learned solar panel installation. He now earns ₹20,000 monthly, supports his family, and trains 10 other youth in his spare time.',
      location: 'Gujarat, India',
      duration: '8 months',
      beneficiary: 'Ravi Patel',
      age: '22',
      color: 'from-yellow-500 to-orange-500',
      impact: [
        '₹20K monthly income',
        '12 installations completed',
        'Training 10 youth',
        'Installed 3 systems in school'
      ],
      stats: { monthly: '₹20K', installations: '12', trained: '10', income: '+250%' },
      image_color: 'bg-gradient-to-br from-yellow-400 to-orange-500'
    },
    {
      id: 5,
      title: 'Anjali\'s Nutrition Program Success',
      category: 'health-nutrition',
      tagline: 'Malnutrition reversed in 6 months',
      shortDescription: 'A severely malnourished child now leads a healthy, active life.',
      fullDescription: 'Anjali, 5, was severely malnourished and weak. Through our nutrition program providing balanced meals and counseling, she gained 8kg, improved academically, and now actively participates in school activities.',
      location: 'Uttar Pradesh, India',
      duration: '6 months',
      beneficiary: 'Anjali Verma',
      age: '6',
      color: 'from-red-500 to-pink-500',
      impact: [
        '8kg weight gain',
        'School attendance: 95%',
        'Academic scores improved',
        'Active participation in activities'
      ],
      stats: { weight: '+8kg', attendance: '95%', meals: '180', health: '+85%' },
      image_color: 'bg-gradient-to-br from-red-400 to-pink-500'
    },
    {
      id: 6,
      title: 'Sunita\'s Women\'s Group Impact',
      category: 'women-empowerment',
      tagline: 'Collective empowerment creates change',
      shortDescription: 'Leading a group of 50 women saving and investing together.',
      fullDescription: 'Sunita formed a women\'s self-help group that now has 50 members collectively saving ₹5 lakhs. The group provides microloans for education, health, and business with 98% repayment rate.',
      location: 'Tamil Nadu, India',
      duration: '2 years',
      beneficiary: 'Sunita Devi',
      age: '35',
      color: 'from-indigo-500 to-blue-500',
      impact: [
        '₹5L collective savings',
        '50 women members',
        '98% loan repayment',
        '35 loans disbursed'
      ],
      stats: { savings: '₹5L', members: '50', repayment: '98%', loans: '35' },
      image_color: 'bg-gradient-to-br from-indigo-400 to-blue-500'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'education', label: 'Education' },
    { id: 'women-empowerment', label: 'Women Empowerment' },
    { id: 'health-nutrition', label: 'Health & Nutrition' },
    { id: 'skill-development', label: 'Skill Development' }
  ];

  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.beneficiary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || study.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 mb-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-600 rounded-full text-sm font-bold">
            <Heart className="w-5 h-5" />
            Impact Stories
          </div>
          <h1 className="text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Real stories of real people. Discover how our programs have transformed lives and empowered individuals and communities to build a better future.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Bar */}
        <div className="mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search case studies by name or topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredStudies.length > 0 ? (
            filteredStudies.map(study => (
              <div key={study.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                {/* Header with Image */}
                <div className={`${study.image_color} p-8 text-white relative`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-100">{study.tagline}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Beneficiary Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-blue-50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Beneficiary</p>
                      <p className="text-sm font-bold text-blue-900">{study.beneficiary}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Age</p>
                      <p className="text-sm font-bold text-blue-900">{study.age}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Location</p>
                      <p className="text-sm font-bold text-blue-900 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {study.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Duration</p>
                      <p className="text-sm font-bold text-blue-900 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {study.duration}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {study.shortDescription}
                  </p>

                  {/* Stats Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(study.stats).map(([key, value]) => (
                      <div key={key} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-100">
                        <p className="text-xs text-gray-600 capitalize mb-1">{key}</p>
                        <p className="text-lg font-bold text-blue-900">{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Key Achievements */}
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-green-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {study.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => setExpandedStudy(expandedStudy === study.id ? null : study.id)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    {expandedStudy === study.id ? 'Show Less' : 'Read Full Story'}
                    <ChevronRight className={`h-4 w-4 transition-transform ${expandedStudy === study.id ? 'rotate-90' : ''}`} />
                  </button>

                  {/* Expanded Content */}
                  {expandedStudy === study.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3">Full Story</h4>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {study.fullDescription}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No case studies found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What Our Beneficiaries Say</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These stories represent the voices of thousands transformed by our programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Priya Kumar', quote: 'This program changed my life. I went from being a dropout to scoring 95% in my boards.' },
              { name: 'Mala Sharma', quote: 'I never thought I could run my own business. Now I employ 5 women and generate lakhs!' },
              { name: 'Ravi Patel', quote: 'Skill training gave me confidence and income. I\'m now training others too.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-bold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Be Part of These Stories</h2>
          <p className="text-gray-300 text-lg mb-8">
            Every contribution helps create stories like these. Your support can transform lives and create lasting impact in communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onDonateClick} className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition inline-flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Support Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}