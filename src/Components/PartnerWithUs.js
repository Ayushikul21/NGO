import React from 'react';
import { Users, Heart, Building2, Handshake, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PartnerWithUs() {
  const navigate = useNavigate();  

  const partnershipTypes = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Corporate Partners",
      description: "Join us as a corporate partner and make a lasting impact through CSR initiatives, employee engagement programs, and matching gift campaigns.",
      benefits: ["Brand visibility", "Employee engagement", "Tax benefits", "Impact reporting"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Partners",
      description: "Collaborate with us to strengthen community bonds and create grassroots-level change through local initiatives and programs.",
      benefits: ["Local impact", "Community building", "Resource sharing", "Joint events"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Philanthropic Partners",
      description: "Support our mission through grants, donations, and fundraising initiatives that directly impact the lives of those we serve.",
      benefits: ["Direct impact", "Recognition", "Regular updates", "Transparency"]
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Strategic Partners",
      description: "Form long-term strategic alliances to amplify our reach, share expertise, and create sustainable solutions together.",
      benefits: ["Knowledge exchange", "Shared resources", "Co-branding", "Long-term impact"]
    }
  ];

  const openContact = () => {
    navigate('/get-in-touch');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Partner With Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Together, we can create lasting change and build a better future for communities in need. Join us in our mission to make a difference.
          </p>
        </div>
      </div>

      {/* Partnership Types */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Partnership Opportunities</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We believe in the power of collaboration. Explore different ways to partner with us and amplify your impact.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partnershipTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-blue-600 mb-4">{type.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <div className="space-y-2">
                {type.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Partner Section */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-10 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <p className="text-gray-700">Lives Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <p className="text-gray-700">Active Partners</p>
            </div>
          </div>
        </div>

        {/* Our Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Partnership Impact</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            See how our partnerships create meaningful change in communities
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🌍</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">25+</div>
              <p className="text-gray-600 text-sm">Communities Served</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🎓</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">5000+</div>
              <p className="text-gray-600 text-sm">Children Educated</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">💼</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">200+</div>
              <p className="text-gray-600 text-sm">Jobs Created</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🤝</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">₹2Cr+</div>
              <p className="text-gray-600 text-sm">Funds Raised</p>
            </div>
          </div>
        </div>

        {/* Partnership Process */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Partnership Process</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Our streamlined process makes it easy to start making a difference
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Initial Contact</h3>
              <p className="text-sm text-gray-600">Reach out to us with your partnership interest</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Discussion</h3>
              <p className="text-sm text-gray-600">We discuss goals, expectations and opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Agreement</h3>
              <p className="text-sm text-gray-600">Formalize partnership terms and commitments</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Collaboration</h3>
              <p className="text-sm text-gray-600">Begin working together to create impact</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">What Our Partners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">"Partnering with this NGO has been incredibly rewarding. Their transparency and dedication to impact is remarkable."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-800">Rajesh Kumar</p>
                  <p className="text-sm text-gray-600">Tech Solutions Pvt Ltd</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">"The partnership has allowed us to give back to the community in meaningful ways. Highly recommend!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-800">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Global Enterprises</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">"Working together has created lasting change. The team is professional and results-driven."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-800">Amit Patel</p>
                  <p className="text-sm text-gray-600">Community Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join our network of partners and help us create lasting positive change in communities across the region.
          </p>
          <button onClick={openContact} className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center group">
            Start Your Partnership Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}