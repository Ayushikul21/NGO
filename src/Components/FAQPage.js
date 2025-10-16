import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageCircle, Mail, Phone, Users, Heart, BookOpen, Award, Globe } from 'lucide-react';

export default function FAQPage({onDonateClick}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Topics', icon: HelpCircle },
    { id: 'general', label: 'General', icon: Globe },
    { id: 'donations', label: 'Donations', icon: Heart },
    { id: 'programs', label: 'Programs', icon: BookOpen },
    { id: 'volunteering', label: 'Volunteering', icon: Users },
    { id: 'partnerships', label: 'Partnerships', icon: Award }
  ];

  const openVolunteer = () => { 
    navigate('/volunteer');     
  };

  const faqs = [
    // General FAQs
    {
      id: 1,
      category: 'general',
      question: 'What is your NGO\'s mission and vision?',
      answer: 'Our mission is to empower children, women, and communities across India through education, healthcare, livelihood support, and rights-based interventions. We envision a society where every individual has equal opportunities to thrive and contribute to nation-building. We work in partnership with communities, government agencies, and other stakeholders to create sustainable and scalable impact.'
    },
    {
      id: 2,
      category: 'general',
      question: 'In which states and regions do you operate?',
      answer: 'We currently operate across 15 states in India, including Uttar Pradesh, Bihar, Madhya Pradesh, Rajasthan, Maharashtra, Gujarat, West Bengal, Odisha, Jharkhand, Chhattisgarh, Delhi, Karnataka, Tamil Nadu, Andhra Pradesh, and Telangana. Our programs reach over 500 districts with a focus on rural and underserved urban areas where the need is greatest.'
    },
    {
      id: 3,
      category: 'general',
      question: 'How many people does your organization reach annually?',
      answer: 'We directly reach over 2 million beneficiaries annually through our various programs. This includes approximately 800,000 children in education programs, 400,000 women in empowerment initiatives, and 800,000 community members through health, nutrition, and livelihood programs. Our indirect reach through community mobilization and awareness campaigns extends to over 5 million people.'
    },
    {
      id: 4,
      category: 'general',
      question: 'Are you registered and compliant with government regulations?',
      answer: 'Yes, we are registered as a Section 8 Company under the Companies Act, 2013, and hold valid registrations under Section 12A and 80G of the Income Tax Act. We are also registered under the Foreign Contribution Regulation Act (FCRA) for receiving international donations. We maintain full compliance with all statutory requirements and undergo annual audits by certified chartered accountants. Our financial statements and annual reports are publicly available.'
    },
    {
      id: 5,
      category: 'general',
      question: 'How can I verify your organization\'s credibility?',
      answer: 'You can verify our credentials through multiple channels: (1) Check our registration details on the Ministry of Corporate Affairs (MCA) website, (2) View our 12A and 80G certificates on our website, (3) Access our annual reports and audited financial statements, (4) Review our ratings on platforms like GiveIndia and GuideStar India, (5) Read independent impact assessments and research publications about our work. We maintain complete transparency in our operations and finances.'
    },

    // Donation FAQs
    {
      id: 6,
      category: 'donations',
      question: 'How can I donate to your organization?',
      answer: 'You can donate through multiple convenient methods: (1) Online via our website using credit/debit cards, UPI, net banking, or digital wallets, (2) Bank transfer (NEFT/RTGS/IMPS) to our designated account, (3) Cheque or demand draft sent to our registered office, (4) Monthly recurring donations through standing instructions, (5) Corporate partnerships and CSR funding. All donations are processed securely and you receive instant receipts for tax purposes.'
    },
    {
      id: 7,
      category: 'donations',
      question: 'Are donations eligible for tax exemption?',
      answer: 'Yes, all donations to our organization are eligible for 50% tax deduction under Section 80G of the Income Tax Act, 1961. We provide 80G tax exemption certificates for all donations within 24-48 hours via email. For Indian donors, this means you can claim a deduction of 50% of the donated amount from your taxable income. We also accept donations from NRIs and foreign nationals through our FCRA account, though tax benefits vary by country of residence.'
    },
    {
      id: 8,
      category: 'donations',
      question: 'What is the minimum donation amount?',
      answer: 'There is no minimum donation amount - every contribution, big or small, makes a difference. However, for convenience in processing and tax receipts, we recommend a minimum of ₹500 for one-time donations. For monthly recurring donations, you can start with as little as ₹200 per month. Corporate CSR partnerships typically start from ₹5 lakhs annually. Remember, even a small donation can provide education materials for a child or nutritious meals for a week.'
    },
    {
      id: 9,
      category: 'donations',
      question: 'How is my donation utilized?',
      answer: 'Your donations are allocated as follows: 80% directly to program implementation (education, healthcare, women empowerment, community development), 15% to program support costs (monitoring, evaluation, training, capacity building), and 5% to administrative expenses (office operations, statutory compliance, audit). We maintain one of the lowest overhead ratios in the sector. Every quarter, we publish detailed utilization reports showing exactly how funds were spent and the impact created.'
    },
    {
      id: 10,
      category: 'donations',
      question: 'Can I donate in-kind or specify how my donation should be used?',
      answer: 'Yes, we accept in-kind donations such as educational materials, computers, books, sports equipment, medical supplies, and other useful items. Please contact our donations team before sending in-kind donations to ensure they align with current needs. You can also make earmarked donations for specific programs like child education, women\'s skills training, or health camps. However, unrestricted donations give us flexibility to direct funds where they\'re most needed and create maximum impact.'
    },
    {
      id: 11,
      category: 'donations',
      question: 'Will I receive updates on how my donation is being used?',
      answer: 'Absolutely! All donors receive: (1) Immediate donation receipt and 80G certificate via email, (2) Quarterly newsletters with program updates and impact stories, (3) Annual impact report with detailed financials and outcomes, (4) For donors contributing ₹50,000+, personalized impact reports and field visit opportunities, (5) Access to our donor portal to track program progress. We believe in complete transparency and keeping our supporters informed about the change they\'re enabling.'
    },

    // Program FAQs
    {
      id: 12,
      category: 'programs',
      question: 'What are your main program areas?',
      answer: 'We work across five main program areas: (1) Child Education & Development - remedial education, digital literacy, school infrastructure support, (2) Women Empowerment - skills training, entrepreneurship support, self-help groups, financial literacy, (3) Health & Nutrition - maternal and child health, nutrition programs, health camps, awareness campaigns, (4) Community Development - livelihood support, infrastructure development, rights awareness, (5) Child Protection - creating safe environments, prevention of abuse, legal support, counseling services.'
    },
    {
      id: 13,
      category: 'programs',
      question: 'How do you select communities and beneficiaries for your programs?',
      answer: 'We use a comprehensive needs assessment process: (1) Analyze government data on development indicators, (2) Conduct baseline surveys in potential intervention areas, (3) Hold consultations with community members, local authorities, and other stakeholders, (4) Prioritize areas with highest need, lowest existing services, and community willingness to participate, (5) Ensure inclusion of marginalized groups including SC/ST communities, minorities, and persons with disabilities. Our selection is transparent, data-driven, and focused on reaching the most vulnerable.'
    },
    {
      id: 14,
      category: 'programs',
      question: 'How do you measure the impact of your programs?',
      answer: 'We have a robust Monitoring & Evaluation (M&E) framework: (1) Clear, measurable indicators for each program area, (2) Regular data collection through field teams and digital tools, (3) Baseline, midline, and endline assessments for all major programs, (4) Independent third-party evaluations annually, (5) Beneficiary feedback and satisfaction surveys, (6) Case studies documenting transformation stories, (7) Comparison with control groups where feasible. All impact data is published in our annual reports and research publications.'
    },
    {
      id: 15,
      category: 'programs',
      question: 'Can I visit your project sites to see the work firsthand?',
      answer: 'Yes, we welcome visits from donors, partners, and supporters! We organize field visits throughout the year to help stakeholders witness our programs in action and interact with beneficiaries. Please contact us at least 2 weeks in advance to schedule a visit. We\'ll arrange transportation, coordinate with field teams, and ensure a meaningful experience. For major donors (₹1 lakh+), we can arrange customized visits to specific program areas of interest. All visits are conducted with full respect for beneficiary privacy and dignity.'
    },
    {
      id: 16,
      category: 'programs',
      question: 'Do you work directly or through implementing partners?',
      answer: 'We use a hybrid model. For programs in our core operational areas, we implement directly through our trained field teams. In remote or specialized areas, we work through vetted local partner organizations who have deep community connections and contextual expertise. All partners undergo thorough due diligence, sign formal agreements, receive training on our standards and protocols, and are monitored regularly. This approach helps us scale our reach while maintaining quality and ensuring local ownership.'
    },

    // Volunteering FAQs
    {
      id: 17,
      category: 'volunteering',
      question: 'What volunteer opportunities are available?',
      answer: 'We offer diverse volunteering opportunities: (1) Field Volunteering - teaching children, conducting awareness sessions, organizing community events, (2) Skills-based Volunteering - pro-bono consulting, graphic design, web development, legal support, (3) Online Volunteering - content writing, social media management, data analysis, research, (4) Corporate Volunteering - team building activities aligned with social impact, (5) Long-term Fellowships - 6-12 month immersive programs for professionals. Opportunities are available across all our operational states.'
    },
    {
      id: 18,
      category: 'volunteering',
      question: 'What is the minimum time commitment for volunteers?',
      answer: 'Time commitments vary by opportunity: (1) One-time events - single day commitments for specific activities, (2) Short-term volunteering - minimum 1 week for field-based work, (3) Regular volunteering - minimum 3 months, 2-3 days per week for sustained engagement, (4) Long-term fellowships - 6-12 months full-time commitment, (5) Online volunteering - flexible, project-based with agreed deadlines. We value consistency and ask volunteers to honor their commitments as our programs and beneficiaries depend on continuity.'
    },
    {
      id: 19,
      category: 'volunteering',
      question: 'Do you provide any support to volunteers?',
      answer: 'Yes, we provide comprehensive support: (1) Orientation and training on our programs, values, and field protocols, (2) Clear role descriptions and expectations, (3) Regular supervision and mentoring by experienced staff, (4) For field volunteers - accommodation assistance, local transportation, and basic amenities, (5) Insurance coverage during volunteering period, (6) Certificates and letters of recommendation after successful completion, (7) Networking opportunities with like-minded change-makers. However, volunteers typically bear their own travel and living costs.'
    },
    {
      id: 20,
      category: 'volunteering',
      question: 'Can international volunteers work with your organization?',
      answer: 'Yes, we welcome international volunteers! However, please note: (1) You must have appropriate visa - tourist visa holders cannot volunteer legally; consider employment or volunteer visa, (2) Minimum commitment of 2 weeks, preferably 1-3 months, (3) Cultural sensitivity and willingness to work in resource-constrained settings, (4) Volunteers bear their own travel, visa, insurance, and living costs, (5) We provide orientation, accommodation assistance, and program supervision, (6) Proficiency in English is required; Hindi or regional language skills are highly valued. Apply at least 3 months in advance for visa processing time.'
    },

    // Partnership FAQs
    {
      id: 21,
      category: 'partnerships',
      question: 'How can corporations partner with you for CSR?',
      answer: 'We offer multiple CSR partnership models: (1) Project Funding - support specific programs aligned with Schedule VII activities, (2) Thematic Partnerships - long-term collaboration on focus areas like education or women empowerment, (3) Employee Engagement - volunteering programs and payroll giving, (4) Cause Marketing - brand alignment with social causes, (5) In-kind Contributions - products, services, or expertise. We provide detailed proposals, regular reporting, impact measurement, visibility opportunities, and ensure full compliance with Section 135 of Companies Act, 2013. Contact our CSR team for customized partnership plans.'
    },
    {
      id: 22,
      category: 'partnerships',
      question: 'Do you collaborate with government agencies?',
      answer: 'Yes, government collaboration is central to our approach. We partner with: (1) Department of Education - supporting government schools, teacher training, (2) Women & Child Development - running Anganwadis, nutrition programs, (3) Health Department - conducting health camps, awareness campaigns, (4) Rural Development - livelihood programs, skill development, (5) District Administration - implementation of flagship schemes. We work as implementation partners, providing technical support, bringing innovation, and ensuring last-mile delivery. These partnerships help us scale impact and influence policy.'
    },
    {
      id: 23,
      category: 'partnerships',
      question: 'Can other NGOs collaborate with you?',
      answer: 'Absolutely! We believe in collective impact and actively seek NGO partnerships for: (1) Joint programs leveraging complementary expertise, (2) Knowledge sharing and capacity building, (3) Advocacy on common issues, (4) Research collaborations, (5) Resource sharing (training facilities, equipment, expertise), (6) Consortium approaches for large-scale programs. We have formal partnerships with over 50 grassroots organizations across India. If you\'re an NGO working in similar areas, reach out to explore collaboration opportunities. We value peer learning and believe partnerships multiply impact.'
    },
    {
      id: 24,
      category: 'partnerships',
      question: 'How can academic institutions partner with you?',
      answer: 'We welcome partnerships with universities and research institutions for: (1) Research Collaborations - joint studies, data access for thesis/dissertations, (2) Internships - structured field exposure for students in social work, development studies, public health, (3) Faculty Exchange - guest lectures, field visits for classes, (4) Action Research - testing innovative interventions, (5) Technical Support - expertise in specialized areas like data analytics, impact evaluation, (6) Student Projects - capstone projects aligned with our programs. Academic partnerships bring rigor to our work and provide students with real-world learning opportunities.'
    },
    {
      id: 25,
      category: 'partnerships',
      question: 'What due diligence do you conduct on partners?',
      answer: 'We have a stringent partner due diligence process: (1) Legal verification - registration certificates, compliance documents, tax exemptions, (2) Financial assessment - audited statements, fund utilization capacity, (3) Organizational capacity - governance structure, staff expertise, systems, (4) Track record - past program performance, beneficiary feedback, references, (5) Site visits to assess ground reality, (6) Background checks on key personnel, (7) Alignment check - values, approach, target beneficiaries. Only partners meeting our standards are onboarded. All partners sign formal agreements with clear deliverables, reporting requirements, and safeguarding protocols.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const stats = [
    { label: 'FAQs Available', value: '25+', icon: HelpCircle },
    { label: 'Topics Covered', value: '5', icon: BookOpen },
    { label: 'Avg Response Time', value: '24hrs', icon: MessageCircle },
    { label: 'Support Available', value: '24/7', icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-600 rounded-full text-sm font-bold">
            <HelpCircle className="w-5 h-5" />
            Help Center
          </div>
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-300 max-w-3xl mb-6">
            Find answers to common questions about our programs, donations, volunteering, partnerships, and more.
          </p>
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900 text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition text-center">
                <Icon className="h-10 w-10 text-blue-900 mx-auto mb-3" />
                <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Topic</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(category => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isActive
                    ? 'border-blue-600 bg-blue-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
                <p className={`text-sm font-semibold text-center ${isActive ? 'text-blue-900' : 'text-gray-700'}`}>
                  {category.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6 text-gray-600">
          Showing {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'}
        </div>

        <div className="space-y-4">
          {filteredFAQs.map(faq => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {categories.find(c => c.id === faq.category)?.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {expandedFAQ === faq.id && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Questions Found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or browse different categories</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Contact Support Section - Fixed */}
      <div className="bg-white py-16 mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600">
              Can't find what you're looking for? Our team is here to help you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="p-8 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Get response within 24 hours</p>
              <a 
                href="mailto:help@ankitawellbeingfoundation.org" 
                className="text-blue-600 hover:text-blue-700 font-semibold break-words text-sm md:text-base"
              >
                help@ankitawellbeingfoundation.org
              </a>
            </div>
            
            <div className="p-8 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Mon-Sat, 9 AM - 6 PM IST</p>
              <a 
                href="tel:+917905226299" 
                className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                +91 7905226299
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of supporters who are creating meaningful impact in the lives of children, women, and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onDonateClick} className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition inline-flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Donate Now
            </button>
            <button onClick={openVolunteer} className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition inline-flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}