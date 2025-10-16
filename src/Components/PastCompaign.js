// PastCampaignsPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Award,
  Heart,
  Users,
  Target,
  Globe,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function PastCampaignPage() {
  const navigate = useNavigate();

  const currCompaign = () => {
    navigate("/curr-compaign");
  }
  
  const pastCampaigns = [
    {
      id: 1,
      title: "Brighter Futures: Rural Education Drive",
      tagline: "Empowering 10,000 children through education",
      description:
        "This initiative helped transform access to education in rural schools by providing infrastructure, books, and teacher training programs.",
      goal: 4000000,
      raised: 4250000,
      beneficiaries: "10,000 students",
      duration: "Jan 2024 - Jun 2024",
      location: "Rural India (8 states)",
      impact: [
        "120 schools upgraded with new classrooms",
        "5,000 girls enrolled under scholarship program",
        "95% improvement in attendance rate",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Water of Life Initiative",
      tagline: "Clean drinking water for remote villages",
      description:
        "Focused on building sustainable water systems, this campaign brought clean water access to communities battling severe scarcity.",
      goal: 6000000,
      raised: 5800000,
      beneficiaries: "35,000 villagers",
      duration: "Mar 2024 - Sep 2024",
      location: "Rajasthan, Gujarat, MP",
      impact: [
        "45 borewells and 10 purification units installed",
        "Community awareness sessions on hygiene",
        "70% reduction in water-borne diseases",
      ],
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 3,
      title: "Nourish India Campaign",
      tagline: "Ending hunger one meal at a time",
      description:
        "Aimed at reducing child malnutrition, this drive provided balanced meals to underprivileged children and mothers across India.",
      goal: 5000000,
      raised: 5200000,
      beneficiaries: "12,000 individuals",
      duration: "Nov 2023 - Apr 2024",
      location: "Pan India",
      impact: [
        "2 million meals served",
        "3,500 children reached normal nutrition levels",
        "Partnered with 25 local kitchens for food supply",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const formatCurrency = (amount) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
    return `₹${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-green-600 rounded-full text-sm font-bold">
            <Award className="w-5 h-5" />
            Celebrating Our Achievements
          </div>
          <h1 className="text-5xl font-bold mb-4">Past Campaigns</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A look back at the incredible milestones we achieved together. Each
            campaign represents a story of hope, change, and collective impact.
          </p>
        </div>
      </div>

      {/* Campaign Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${campaign.color} p-6 text-white`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-xs bg-white bg-opacity-20 rounded-full font-bold">
                    Completed
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{campaign.title}</h3>
                <p className="text-sm text-gray-100">{campaign.tagline}</p>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {campaign.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-900" />
                    <span>{campaign.beneficiaries}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-900" />
                    <span>{campaign.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-900" />
                    <span>{campaign.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-600" />
                    <span>
                      Raised {formatCurrency(campaign.raised)} of{" "}
                      {formatCurrency(campaign.goal)}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {campaign.impact.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 leading-relaxed"
                      >
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Section */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white py-16 text-center mb-4">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Together, We Made It Happen</h2>
          <p className="text-gray-300 text-lg mb-6">
            Each completed campaign marks a milestone in our journey toward a
            more equitable and compassionate society. Thank you for being part
            of this mission.
          </p>
          <button onClick={currCompaign} className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition inline-flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Explore Current Campaigns
          </button>
        </div>
      </div>
    </div>
  );
}
