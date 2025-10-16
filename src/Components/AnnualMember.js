import React from 'react';
import { Crown, Gift, Calendar, Users, Award, TrendingUp, Heart, CheckCircle, Star, Zap } from 'lucide-react';

export default function AnnualMember() {
  const membershipTiers = [
    {
      name: "Bronze Member",
      price: "₹5,000",
      period: "per year",
      icon: <Award className="w-12 h-12" />,
      color: "from-amber-700 to-amber-900",
      benefits: [
        "Quarterly newsletter updates",
        "Annual impact report",
        "Member certificate",
        "Tax exemption certificate",
        "Invitation to annual event",
        "Social media recognition"
      ]
    },
    {
      name: "Silver Member",
      price: "₹15,000",
      period: "per year",
      icon: <Star className="w-12 h-12" />,
      color: "from-gray-400 to-gray-600",
      popular: true,
      benefits: [
        "All Bronze benefits",
        "Monthly newsletter",
        "Quarterly meet-ups with team",
        "Priority event registration",
        "Personalized impact updates",
        "Website recognition",
        "Exclusive volunteer opportunities"
      ]
    },
    {
      name: "Gold Member",
      price: "₹35,000",
      period: "per year",
      icon: <Crown className="w-12 h-12" />,
      color: "from-yellow-400 to-yellow-600",
      benefits: [
        "All Silver benefits",
        "Bi-weekly project updates",
        "Annual site visit",
        "Advisory board participation",
        "Dedicated relationship manager",
        "Annual appreciation dinner",
        "Customized engagement options",
        "Legacy giving consultation"
      ]
    }
  ];

  const perks = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Exclusive Benefits",
      description: "Access special perks and recognition for your continued support"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Year-Round Engagement",
      description: "Stay connected with regular updates and exclusive member events"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Access",
      description: "Join a network of like-minded individuals committed to change"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Impact Tracking",
      description: "See exactly how your contribution creates measurable impact"
    }
  ];

  const impactStats = [
    { number: "500+", label: "Active Annual Members" },
    { number: "₹2.5Cr", label: "Raised This Year" },
    { number: "95%", label: "Renewal Rate" },
    { number: "15", label: "Years Running" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4">
            <Heart className="w-16 h-16 mx-auto animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Annual Membership</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Join our community of dedicated supporters and be part of sustainable change. Your annual commitment powers year-round impact.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Why Annual Membership */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Become an Annual Member?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Annual membership provides predictable support that allows us to plan and execute long-term programs with confidence.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">{perk.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{perk.title}</h3>
                <p className="text-sm text-gray-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Choose Your Membership Level</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Select the membership tier that aligns with your commitment to creating lasting impact
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
                  tier.popular ? 'ring-4 ring-blue-500' : ''
                }`}
              >
                {tier.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className={`bg-gradient-to-r ${tier.color} text-white p-8 text-center`}>
                  <div className="flex justify-center mb-4">{tier.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold mb-1">{tier.price}</div>
                  <p className="text-sm opacity-90">{tier.period}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Become a {tier.name.split(' ')[0]} Member
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-10 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Members' Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Member Benefits Breakdown */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Exclusive Member Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Priority Access</h3>
                <p className="text-gray-600 text-sm">Get first access to new programs, events, and volunteer opportunities before the general public.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Recognition</h3>
                <p className="text-gray-600 text-sm">Receive public acknowledgment on our website, annual reports, and at special events.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Impact Reports</h3>
                <p className="text-gray-600 text-sm">Receive detailed reports showing exactly how your membership is creating change in communities.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Networking</h3>
                <p className="text-gray-600 text-sm">Connect with other passionate members at exclusive events and networking opportunities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-200 rounded-full mr-3 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Meera Reddy</p>
                  <p className="text-sm text-gray-600">Gold Member</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Being a member for 5 years has been incredibly fulfilling. Seeing the direct impact of my contribution keeps me motivated."</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                  <Star className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Arjun Singh</p>
                  <p className="text-sm text-gray-600">Silver Member</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"The transparency and regular updates make me confident that my membership is being put to good use. Highly recommend!"</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full mr-3 flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Kavita Desai</p>
                  <p className="text-sm text-gray-600">Bronze Member</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Even as a Bronze member, I feel valued and connected to the mission. The community is amazing!"</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Can I upgrade my membership tier?</h3>
              <p className="text-gray-600 text-sm">Yes! You can upgrade at any time, and we'll adjust your benefits accordingly.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Is my membership tax-deductible?</h3>
              <p className="text-gray-600 text-sm">Yes, we provide tax exemption certificates under Section 80G for all memberships.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How do I renew my membership?</h3>
              <p className="text-gray-600 text-sm">We'll send you renewal reminders 60 days before expiration with easy payment options.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Can I gift a membership?</h3>
              <p className="text-gray-600 text-sm">Absolutely! Gift memberships are a wonderful way to share your commitment with others.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Become an annual member today and be part of a movement that's creating lasting positive change every single day.
          </p>
          <button className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
            Choose Your Membership
            <Crown className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}