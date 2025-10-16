import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Heart, Users, Calendar, MapPin, DollarSign, Clock, Award, Share2, CheckCircle, AlertCircle, Zap, BookOpen, Droplet, Utensils, Shirt, Stethoscope, Briefcase, Globe, Phone, Mail, Download, ChevronRight, Eye } from 'lucide-react';

export default function CurrentCampaignsPage({onDonateClick}) {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const navigate = useNavigate();

  const activeCampaigns = [
    {
      id: 1,
      title: "Education for Every Girl",
      tagline: "Breaking Barriers Through Education",
      category: "Education",
      icon: <BookOpen className="w-8 h-8" />,
      status: "Active",
      urgency: "High",
      description: "Providing quality education, school supplies, and scholarships to underprivileged girls in rural areas. Every girl deserves the right to learn and dream.",
      longDescription: "Our Education for Every Girl campaign aims to bridge the gender gap in education by providing comprehensive support to girls from marginalized communities. We provide free education, books, uniforms, transportation, and nutritious meals to ensure no girl drops out of school due to financial constraints.",
      goal: 5000000,
      raised: 3750000,
      supporters: 1250,
      daysLeft: 45,
      startDate: "Oct 1, 2025",
      endDate: "Dec 15, 2025",
      location: "Rural India - 15 States",
      beneficiaries: "5,000 girls",
      image: "EDU",
      color: "from-blue-500 to-cyan-500",
      impact: [
        "1,200 girls enrolled in schools",
        "500 scholarships provided",
        "100% attendance improvement",
        "50 new classrooms built"
      ],
      needs: [
        "School uniforms and bags",
        "Books and stationery",
        "Teacher training programs",
        "Digital learning devices",
        "Scholarship funds"
      ],
      updates: [
        { date: "Nov 10, 2025", text: "300 new girls enrolled this month!" },
        { date: "Nov 5, 2025", text: "2 new schools opened in Bihar" },
        { date: "Oct 28, 2025", text: "Received laptops donation from tech partner" }
      ]
    },
    {
      id: 2,
      title: "Clean Water for Communities",
      tagline: "Every Drop Counts",
      category: "Health & Sanitation",
      icon: <Droplet className="w-8 h-8" />,
      status: "Active",
      urgency: "Critical",
      description: "Installing hand pumps, water purification systems, and sanitation facilities in water-scarce villages to combat water-borne diseases.",
      longDescription: "Access to clean water is a basic human right. Our Clean Water for Communities campaign focuses on providing safe drinking water and proper sanitation facilities to villages suffering from water scarcity. We install bore wells, water purification plants, and educate communities about hygiene practices.",
      goal: 8000000,
      raised: 2400000,
      supporters: 890,
      daysLeft: 60,
      startDate: "Sep 15, 2025",
      endDate: "Jan 15, 2026",
      location: "Rajasthan, Gujarat, Maharashtra",
      beneficiaries: "50,000 people",
      image: "H2O",
      color: "from-cyan-500 to-blue-600",
      impact: [
        "15 hand pumps installed",
        "3 water purification plants built",
        "8 villages now have clean water",
        "60% reduction in water-borne diseases"
      ],
      needs: [
        "Water purification systems",
        "Hand pump installations",
        "Sanitation infrastructure",
        "Hygiene awareness programs",
        "Maintenance equipment"
      ],
      updates: [
        { date: "Nov 12, 2025", text: "New purification plant inaugurated in Village Kheda" },
        { date: "Nov 8, 2025", text: "500 families now have access to clean water" },
        { date: "Nov 1, 2025", text: "Community training on water conservation completed" }
      ]
    },
    {
      id: 3,
      title: "Feed the Hungry",
      tagline: "No Child Should Sleep Hungry",
      category: "Nutrition",
      icon: <Utensils className="w-8 h-8" />,
      status: "Active",
      urgency: "Critical",
      description: "Providing nutritious meals to malnourished children and pregnant women in slum areas and remote villages.",
      longDescription: "Malnutrition is a silent killer affecting millions of children in India. Our Feed the Hungry campaign provides daily nutritious meals to children under 5 years and pregnant/lactating mothers. We run community kitchens and distribute food packets to ensure no one goes to bed hungry.",
      goal: 6000000,
      raised: 4500000,
      supporters: 2100,
      daysLeft: 30,
      startDate: "Oct 10, 2025",
      endDate: "Dec 10, 2025",
      location: "Urban Slums & Rural Villages",
      beneficiaries: "10,000 children daily",
      image: "FOOD",
      color: "from-orange-500 to-red-500",
      impact: [
        "10,000 meals served daily",
        "5 community kitchens operational",
        "70% improvement in nutrition levels",
        "2,500 mothers supported"
      ],
      needs: [
        "Food supplies and ingredients",
        "Kitchen equipment",
        "Nutritionist services",
        "Distribution volunteers",
        "Storage facilities"
      ],
      updates: [
        { date: "Nov 13, 2025", text: "Reached 10,000 meals per day milestone!" },
        { date: "Nov 7, 2025", text: "New community kitchen opened in Delhi slums" },
        { date: "Nov 2, 2025", text: "Partnership with local farmers for fresh produce" }
      ]
    },
    {
      id: 4,
      title: "Winter Relief Drive",
      tagline: "Warmth for the Needy",
      category: "Emergency Relief",
      icon: <Shirt className="w-8 h-8" />,
      status: "Active",
      urgency: "High",
      description: "Distributing blankets, warm clothes, and winter essentials to homeless people and families living in extreme poverty.",
      longDescription: "As winter approaches, thousands of homeless individuals and underprivileged families face life-threatening cold. Our Winter Relief Drive provides blankets, warm clothing, and essential items to help them survive the harsh winter months. Every contribution saves lives.",
      goal: 3000000,
      raised: 1800000,
      supporters: 650,
      daysLeft: 20,
      startDate: "Nov 1, 2025",
      endDate: "Dec 1, 2025",
      location: "North India - Delhi, UP, Punjab",
      beneficiaries: "15,000 individuals",
      image: "WNTR",
      color: "from-purple-500 to-pink-500",
      impact: [
        "5,000 blankets distributed",
        "3,000 winter jackets provided",
        "100 night shelters supported",
        "1,500 families helped"
      ],
      needs: [
        "Blankets and quilts",
        "Winter clothing",
        "Shoes and socks",
        "Hot meal provisions",
        "Temporary shelter support"
      ],
      updates: [
        { date: "Nov 11, 2025", text: "1,000 blankets distributed in Delhi streets" },
        { date: "Nov 6, 2025", text: "Clothing drive collected 2,000+ items" },
        { date: "Oct 30, 2025", text: "Campaign officially launched" }
      ]
    },
    {
      id: 5,
      title: "Skills for Tomorrow",
      tagline: "Empowering Youth Through Skills",
      category: "Skill Development",
      icon: <Briefcase className="w-8 h-8" />,
      status: "Active",
      urgency: "Medium",
      description: "Providing vocational training and skill development programs to unemployed youth, helping them become job-ready.",
      longDescription: "Unemployment among youth is a growing concern. Our Skills for Tomorrow campaign offers free vocational training in various trades including computer skills, tailoring, electrical work, plumbing, and more. We also provide job placement assistance to trained candidates.",
      goal: 4000000,
      raised: 2000000,
      supporters: 580,
      daysLeft: 90,
      startDate: "Oct 1, 2025",
      endDate: "Feb 1, 2026",
      location: "Urban Centers - 10 Cities",
      beneficiaries: "3,000 youth",
      image: "SKLL",
      color: "from-green-500 to-emerald-500",
      impact: [
        "800 youth trained so far",
        "450 job placements done",
        "15 training centers operational",
        "85% employment rate"
      ],
      needs: [
        "Training equipment and tools",
        "Certified trainers",
        "Computer systems",
        "Workshop materials",
        "Placement partnerships"
      ],
      updates: [
        { date: "Nov 9, 2025", text: "100 youth placed in companies this month" },
        { date: "Nov 3, 2025", text: "New partnership with IT firm for training" },
        { date: "Oct 25, 2025", text: "2 new centers opened in Bangalore" }
      ]
    },
    {
      id: 6,
      title: "Healthcare for All",
      tagline: "Because Health is a Right",
      category: "Health",
      icon: <Stethoscope className="w-8 h-8" />,
      status: "Active",
      urgency: "High",
      description: "Organizing free medical camps, providing medicines, and supporting critical treatments for underprivileged communities.",
      longDescription: "Healthcare should not be a privilege. Our Healthcare for All campaign provides free medical check-ups, medicines, and supports critical treatments for those who cannot afford it. We organize regular health camps in remote areas and slums.",
      goal: 7000000,
      raised: 3500000,
      supporters: 980,
      daysLeft: 75,
      startDate: "Sep 20, 2025",
      endDate: "Feb 5, 2026",
      location: "Pan India",
      beneficiaries: "25,000 patients",
      image: "HLTH",
      color: "from-red-500 to-pink-500",
      impact: [
        "50 medical camps conducted",
        "10,000 patients treated",
        "500 critical surgeries funded",
        "20 mobile health units deployed"
      ],
      needs: [
        "Medical equipment",
        "Medicines and supplies",
        "Doctor volunteers",
        "Ambulance services",
        "Diagnostic facilities"
      ],
      updates: [
        { date: "Nov 14, 2025", text: "Mega health camp in Mumbai - 1,000 patients screened" },
        { date: "Nov 10, 2025", text: "Partnership with hospital for free surgeries" },
        { date: "Nov 4, 2025", text: "Mobile health unit reached 10 remote villages" }
      ]
    }
  ];

  const campaignStats = [
    { label: "Active Campaigns", value: "6", icon: <Target className="w-6 h-6" /> },
    { label: "Total Raised", value: "₹1.8 Cr", icon: <DollarSign className="w-6 h-6" /> },
    { label: "Total Supporters", value: "6,450+", icon: <Users className="w-6 h-6" /> },
    { label: "Lives Impacted", value: "108,000+", icon: <Heart className="w-6 h-6" /> }
  ];

  const calculateProgress = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100).toFixed(0);
  };

  const formatCurrency = (amount) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
    return `₹${(amount / 1000).toFixed(0)}K`;
  };

  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const quickDonations = [500, 1000, 2500, 5000, 10000];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-3 bg-green-600 rounded-full text-sm font-bold">
              <Zap className="w-5 h-5" />
              Make an Impact Today
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Current Campaigns
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Join our active campaigns and be part of positive change. Every contribution creates ripples of hope.
            </p>
          </div>
          
          {/* Campaign Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12">
            {campaignStats.map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                <div className="text-blue-400 flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-6 py-2 bg-blue-900 text-white rounded-full font-semibold">
              All Campaigns
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200">
              Critical
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200">
              Education
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200">
              Health
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200">
              Emergency Relief
            </button>
          </div>
        </div>
      </div>

      {/* Campaign Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCampaigns.map((campaign) => (
            <div 
              key={campaign.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden cursor-pointer"
              onClick={() => setSelectedCampaign(selectedCampaign === campaign.id ? null : campaign.id)}
            >
              {/* Campaign Header */}
              <div className={`bg-gradient-to-r ${campaign.color} p-6 text-white relative`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-xl backdrop-blur-sm">
                    {campaign.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getUrgencyColor(campaign.urgency)}`}>
                    {campaign.urgency}
                  </span>
                </div>
                <div className="text-4xl font-bold mb-2">{campaign.image}</div>
                <h3 className="text-2xl font-bold mb-1">{campaign.title}</h3>
                <p className="text-sm text-white text-opacity-90">{campaign.tagline}</p>
              </div>

              {/* Campaign Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">{campaign.description}</p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(campaign.raised)} raised
                    </span>
                    <span className="text-gray-600">
                      Goal: {formatCurrency(campaign.goal)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${campaign.color} transition-all duration-500`}
                      style={{ width: `${calculateProgress(campaign.raised, campaign.goal)}%` }}
                    ></div>
                  </div>
                  <div className="text-center text-sm font-bold text-blue-900 mt-2">
                    {calculateProgress(campaign.raised, campaign.goal)}% Funded
                  </div>
                </div>

                {/* Campaign Info */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{campaign.supporters} supporters</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{campaign.daysLeft} days left</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{campaign.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Heart className="w-4 h-4" />
                    <span>{campaign.beneficiaries}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button onClick={onDonateClick} className="flex-1 bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition">
                    Donate Now
                  </button>
                  <button className="px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Expanded Details */}
                {selectedCampaign === campaign.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-900" />
                        About This Campaign
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{campaign.longDescription}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-green-600" />
                        Impact So Far
                      </h4>
                      <ul className="space-y-2">
                        {campaign.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600" />
                        What We Need
                      </h4>
                      <ul className="space-y-2">
                        {campaign.needs.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        Recent Updates
                      </h4>
                      <div className="space-y-3">
                        {campaign.updates.map((update, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500 mb-1">{update.date}</p>
                            <p className="text-gray-700 font-semibold">{update.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-3">Quick Donate</h4>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {quickDonations.slice(0, 3).map((amount) => (
                          <button 
                            key={amount}
                            className="bg-white border-2 border-blue-200 text-blue-900 py-2 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition"
                          >
                            ₹{amount}
                          </button>
                        ))}
                      </div>
                      <input 
                        type="number" 
                        placeholder="Enter custom amount"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-3"
                      />
                      <button onClick={onDonateClick} className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition">
                        Donate to This Campaign
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How Your Donation Helps */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Your Donation Helps</h2>
            <p className="text-xl text-gray-600">Every contribution, big or small, creates a meaningful impact</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-900">₹500</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Basic Support</h3>
              <p className="text-gray-600 text-sm">School supplies for 1 child for a month</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-900">₹1K</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Meaningful Impact</h3>
              <p className="text-gray-600 text-sm">Nutritious meals for 10 children for a week</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-900">₹5K</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Significant Change</h3>
              <p className="text-gray-600 text-sm">Complete skill training for 1 woman</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-900">₹10K</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Life-Changing</h3>
              <p className="text-gray-600 text-sm">1 year education support for a girl child</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Donate Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Support Our Campaigns?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">100% Transparency</h3>
                    <p className="text-gray-600">Every rupee accounted for with regular updates</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Direct Impact</h3>
                    <p className="text-gray-600">Funds reach beneficiaries directly, minimal overhead</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Tax Benefits</h3>
                    <p className="text-gray-600">80G certified - Get tax deductions on donations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Regular Updates</h3>
                    <p className="text-gray-600">Stay informed about campaign progress and impact</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Making a Difference</h3>
              <p className="text-gray-600 mb-6">Choose a campaign or make a general donation to support all our causes</p>
              <div className="space-y-3 mb-6">
                <button onClick={onDonateClick} className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold hover:bg-blue-800 transition flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </button>
                <button onClick={()=>navigate('/impact-stories')} className="w-full bg-gray-100 text-gray-900 py-4 rounded-lg font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  Watch Impact Stories
                </button>
                <button onClick={()=>navigate('/annual-reports')} className="w-full border-2 border-blue-900 text-blue-900 py-4 rounded-lg font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Report
                </button>
              </div>
              <div className="text-center text-sm text-gray-600">
                <p>Secure payment • 80G tax exemption • Instant receipt</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories from Campaigns */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campaign Success Stories</h2>
            <p className="text-xl text-gray-600">Real stories of how your contributions changed lives</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                RS
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Radha Sharma, 14</h3>
              <p className="text-sm text-blue-900 font-semibold mb-3">Education Campaign Beneficiary</p>
              <p className="text-gray-700 leading-relaxed">
                "I was about to drop out of school to work in fields. Thanks to the scholarship from this campaign, 
                I'm now studying in 9th grade and dream of becoming a teacher!"
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                MK
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mohit Kumar, 23</h3>
              <p className="text-sm text-green-900 font-semibold mb-3">Skills Training Graduate</p>
              <p className="text-gray-700 leading-relaxed">
                "After completing the free computer training, I got a job in a BPO. Now I earn ₹18,000 monthly 
                and support my family. Forever grateful!"
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                SD
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sunita Devi, 28</h3>
              <p className="text-sm text-orange-900 font-semibold mb-3">Nutrition Program Mother</p>
              <p className="text-gray-700 leading-relaxed">
                "My children were malnourished. The daily meal program not only fed them but taught me about 
                nutrition. They are now healthy and active!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Partnership */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Corporate & Institutional Support</h2>
            <p className="text-xl text-gray-300">Partner with us for CSR initiatives and bulk donations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <Globe className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">CSR Partnerships</h3>
              <p className="text-gray-300 mb-4">Align your CSR goals with our impactful campaigns</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-4">
                <li>• Customized campaign support</li>
                <li>• Regular impact reports</li>
                <li>• Employee engagement programs</li>
                <li>• Brand visibility opportunities</li>
              </ul>
              <button className="text-blue-400 font-semibold hover:underline">
                Explore CSR Options →
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Employee Giving Programs</h3>
              <p className="text-gray-300 mb-4">Set up payroll giving for your employees</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-4">
                <li>• Easy payroll integration</li>
                <li>• Tax-efficient giving</li>
                <li>• Matching donation options</li>
                <li>• Team building through volunteering</li>
              </ul>
              <button className="text-green-400 font-semibold hover:underline">
                Setup Employee Giving →
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <Award className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Sponsor a Campaign</h3>
              <p className="text-gray-300 mb-4">Fully or partially sponsor specific campaigns</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-4">
                <li>• Campaign naming rights</li>
                <li>• Exclusive updates and access</li>
                <li>• Media coverage opportunities</li>
                <li>• Long-term impact partnership</li>
              </ul>
              <button className="text-purple-400 font-semibold hover:underline">
                Become a Sponsor →
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* FAQs */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">How do I know my donation is being used properly?</h3>
              <p className="text-gray-700">We maintain complete transparency. You'll receive regular updates via email about your donated campaign. We also publish quarterly impact reports showing exactly how funds are utilized.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Is my donation tax-deductible?</h3>
              <p className="text-gray-700">Yes! We are registered under Section 80G of the Income Tax Act. You'll receive an instant tax receipt via email that you can use for tax deductions.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Can I donate to multiple campaigns?</h3>
              <p className="text-gray-700">Absolutely! You can donate to as many campaigns as you wish. You can also make a general donation that will be distributed across all active campaigns based on need.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">What happens if a campaign exceeds its goal?</h3>
              <p className="text-gray-700">Extra funds are used to expand the campaign's reach or carried forward to similar initiatives. We always inform donors about fund reallocation and maintain complete transparency.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Can I volunteer instead of donating?</h3>
              <p className="text-gray-700">Yes! We welcome volunteers. You can contribute your time, skills, or resources. Visit our volunteer page or contact us to learn about current opportunities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Every Contribution Counts</h2>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Your support, no matter the size, creates ripples of positive change. Together, we can transform 
            lives and build a better tomorrow for those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button onClick={onDonateClick} className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2 shadow-lg">
              <Heart className="w-6 h-6" />
              Make a Donation
            </button>
            <button onClick={()=>navigate('/volunteer')} className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition inline-flex items-center justify-center gap-2">
              <Users className="w-6 h-6" />
              Become a Volunteer
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-6 h-6" />
                <span className="font-bold">Contact Us</span>
              </div>
              <a href="tel:+917905226299" className="text-lg">+91 7905226299</a>
              <p className="text-sm text-gray-300">Mon-Sat, 9 AM - 6 PM</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-6 h-6" />
                <span className="font-bold">Email Support</span>
              </div>
              <a href="mailto:info@ngo.org" className="text-md">help@ankitawellbeingfoundation.org</a>
              <p className="text-sm text-gray-300">24-hour response time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 NGO Current Campaigns. Creating positive change, one campaign at a time.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <button className="hover:text-white">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-white">Terms of Service</button>
            <span>•</span>
            <button className="hover:text-white">Refund Policy</button>
            <span>•</span>
            <button className="hover:text-white">80G Certificate</button>
          </div>
        </div>
      </div>
    </div>
  );
}