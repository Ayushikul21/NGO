import React, { useState } from 'react';
import { Calendar, Target, Award, TrendingUp, BookOpen, Shield, Lightbulb, Globe, ChevronDown, ChevronUp } from 'lucide-react';

export default function LearnMorePage() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const timeline = [
    { year: "2022", title: "Foundation", description: "Started with a small team of 5 volunteers, focusing on healthcare camps in 3 villages" },
    { year: "2023", title: "Expansion", description: "Launched education programs and expanded to 25 communities across the region" },
    { year: "2024", title: "Recognition", description: "Led impactful community healthcare initiatives, improving access and awareness among underserved populations." },
    { year: "2025", title: "Digital Transformation & Present Day", description: "Scaled initiatives to reach 10,000+ individuals through hybrid models of in-person and digital engagement." },
  ];

  const approaches = [
    {
      icon: Target,
      title: "Community-Led Development",
      description: "We believe sustainable change comes from within. Our programs are designed in collaboration with community members, ensuring initiatives address real needs and are culturally appropriate.",
      methodology: [
        "Conducting extensive needs assessments through focus groups",
        "Forming local community committees for program oversight",
        "Training community members as program facilitators",
        "Regular feedback loops and adaptive program management"
      ]
    },
    {
      icon: Shield,
      title: "Rights-Based Framework",
      description: "We approach all our work through a rights-based lens, ensuring that women, children, and marginalized communities understand and can access their fundamental rights.",
      methodology: [
        "Legal literacy workshops on constitutional rights",
        "Support in accessing government schemes and entitlements",
        "Advocacy for policy changes at district and state levels",
        "Collaboration with legal aid organizations"
      ]
    },
    {
      icon: TrendingUp,
      title: "Holistic & Integrated Model",
      description: "Understanding that challenges are interconnected, we implement integrated programs that address multiple dimensions of wellbeing simultaneously.",
      methodology: [
        "Combining health, nutrition, and education interventions",
        "Economic empowerment linked with social awareness",
        "Multi-generational approaches engaging entire families",
        "Cross-sectoral partnerships for comprehensive support"
      ]
    }
  ];

  const detailedPrograms = [
    {
      category: "Women's Empowerment",
      icon: Lightbulb,
      color: "border-pink-500",
      programs: [
        {
          name: "Skill Development & Livelihood",
          details: "Comprehensive vocational training in tailoring, handicrafts, food processing, and digital literacy. Over 5,000 women trained with 78% achieving economic independence within 18 months.",
          components: ["6-month intensive training", "Seed capital support", "Market linkage assistance", "Business mentoring"]
        },
        {
          name: "Women's Health & Wellness",
          details: "Reproductive health education, cervical cancer screening, anemia prevention, and mental health support targeting adolescent girls and women of all ages.",
          components: ["Monthly health camps", "Peer educator training", "Sanitary product distribution", "Counseling services"]
        },
        {
          name: "Leadership & Rights Awareness",
          details: "Building women leaders through training in governance, public speaking, and advocacy. Supporting women's participation in local governance bodies.",
          components: ["Leadership workshops", "Legal rights education", "Self-help group formation", "Political participation training"]
        }
      ]
    },
    {
      category: "Child Healthcare",
      icon: Shield,
      color: "border-blue-500",
      programs: [
        {
          name: "Preventive Healthcare",
          details: "Immunization drives, growth monitoring, and preventive health screenings reaching 15,000+ children annually across rural and urban slum areas.",
          components: ["Regular health checkups", "Vaccination tracking", "Growth monitoring", "Parasite prevention"]
        },
        {
          name: "Nutrition Programs",
          details: "Combating malnutrition through supplementary feeding, nutrition education for mothers, and kitchen garden promotion in 150 communities.",
          components: ["Supplementary feeding", "Nutrition education", "Kitchen gardens", "Cooking demonstrations"]
        },
        {
          name: "Mental Health & Counseling",
          details: "Age-appropriate counseling services, stress management workshops, and creating safe spaces for children dealing with trauma or difficult circumstances.",
          components: ["Individual counseling", "Group therapy sessions", "Teacher training", "Parent workshops"]
        }
      ]
    },
    {
      category: "Education Initiatives",
      icon: BookOpen,
      color: "border-purple-500",
      programs: [
        {
          name: "Formal Education Support",
          details: "Scholarship programs, learning material provision, and remedial classes ensuring children from disadvantaged backgrounds complete their education.",
          components: ["Merit scholarships", "School supplies", "Remedial coaching", "Career guidance"]
        },
        {
          name: "Alternative Learning Centers",
          details: "Bridge courses for out-of-school children, adult literacy programs, and skill-based education for early dropouts providing second chances at education.",
          components: ["Bridge courses", "Adult literacy", "Vocational training", "Digital literacy"]
        },
        {
          name: "STEM & Digital Education",
          details: "Computer literacy programs, science labs in under-resourced schools, and coding workshops encouraging girls and marginalized youth to pursue STEM careers.",
          components: ["Computer training", "Science workshops", "Coding classes", "STEM career mentoring"]
        }
      ]
    },
    {
      category: "Community Development",
      icon: Globe,
      color: "border-green-500",
      programs: [
        {
          name: "Infrastructure Development",
          details: "Building community halls, improving sanitation facilities, and creating safe public spaces fostering community cohesion and wellbeing.",
          components: ["Sanitation facilities", "Community centers", "Playgrounds", "Library spaces"]
        },
        {
          name: "Environmental Sustainability",
          details: "Promoting sustainable practices through waste management training, tree plantation drives, and renewable energy awareness in 80+ villages.",
          components: ["Waste segregation", "Tree plantation", "Water conservation", "Solar energy promotion"]
        },
        {
          name: "Cultural Preservation",
          details: "Supporting tribal and marginalized communities in preserving traditional arts, crafts, and cultural practices while ensuring economic opportunities.",
          components: ["Craft revival projects", "Cultural festivals", "Traditional art workshops", "Market development"]
        }
      ]
    }
  ];

  const challenges = [
    {
      challenge: "Deep-rooted social norms and resistance to change",
      approach: "Patient community engagement, working with local influencers, demonstrating success stories"
    },
    {
      challenge: "Limited resources in remote and difficult terrains",
      approach: "Strategic partnerships, mobile health units, technology-enabled solutions"
    },
    {
      challenge: "Ensuring program sustainability beyond intervention period",
      approach: "Building local capacity, creating community ownership, linking with government schemes"
    }
  ];

  return (
    <div id='learn-more' className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
            OUR STORY & APPROACH
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Understanding Our Journey and Methodology
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
            Discover the story behind our work, the principles that guide us, and the detailed approach we take to create meaningful, lasting change in communities across India.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Story</h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>
              Our organization was born from a simple observation and a profound commitment. In 2022, a group of healthcare professionals and social workers noticed that despite numerous government schemes and initiatives, marginalized communities—particularly women and children—continued to face significant barriers in accessing basic healthcare and education services.
            </p>
            <p>
              What started as weekend health camps in three villages has evolved into a comprehensive development organization working across multiple sectors. Our journey has been one of learning, adaptation, and deep partnership with the communities we serve. We've learned that sustainable change doesn't come from top-down interventions but from empowering communities to drive their own development.
            </p>
            <p>
              Today, we work in over 200 communities, but our approach remains rooted in the same principles that guided our founders: dignity, participation, and the belief that every individual deserves the opportunity to reach their full potential regardless of their circumstances of birth.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-slate-900 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-blue-600" />
            Our Journey Through the Years
          </h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-5 top-1 w-7 h-7 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                <div className="bg-slate-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                  <div className="text-xl font-semibold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Approach & Methodology</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            We employ a multi-dimensional approach that combines evidence-based practices with deep community engagement. Our methodology is built on three core pillars that inform all our work.
          </p>
          
          <div className="space-y-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-8 border-l-4 border-blue-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <approach.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{approach.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">{approach.description}</p>
                    <div className="bg-white rounded-lg p-5">
                      <div className="font-semibold text-slate-900 mb-3">Key Methodologies:</div>
                      <ul className="space-y-2">
                        {approach.methodology.map((method, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Programs */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Program Deep Dive</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Each of our programs is carefully designed based on community needs assessments, evidence-based practices, and continuous monitoring and evaluation.
          </p>

          <div className="space-y-6">
            {detailedPrograms.map((category, index) => (
              <div key={index} className="border-2 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className={`w-full p-6 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 ${category.color}`}
                >
                  <div className="flex items-center gap-4">
                    <category.icon className="w-6 h-6 text-slate-700" />
                    <h3 className="text-2xl font-bold text-slate-900">{category.category}</h3>
                  </div>
                  {expandedSection === index ? (
                    <ChevronUp className="w-6 h-6 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-600" />
                  )}
                </button>
                
                {expandedSection === index && (
                  <div className="p-6 bg-white space-y-6">
                    {category.programs.map((program, pIndex) => (
                      <div key={pIndex} className="pb-6 last:pb-0 border-b last:border-b-0">
                        <h4 className="text-xl font-bold text-slate-900 mb-3">{program.name}</h4>
                        <p className="text-slate-700 mb-4 leading-relaxed">{program.details}</p>
                        <div className="bg-slate-50 rounded-lg p-4">
                          <div className="font-semibold text-slate-900 mb-2 text-sm">Program Components:</div>
                          <div className="grid grid-cols-2 gap-2">
                            {program.components.map((component, cIndex) => (
                              <div key={cIndex} className="flex items-center gap-2 text-slate-600 text-sm">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                <span>{component}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Challenges & Our Response</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Working in complex social environments presents numerous challenges. Here's how we address some of the most significant obstacles we encounter.
          </p>

          <div className="space-y-4">
            {challenges.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border-l-4 border-amber-500">
                <div className="font-semibold text-slate-900 mb-2">Challenge:</div>
                <p className="text-slate-700 mb-4">{item.challenge}</p>
                <div className="font-semibold text-slate-900 mb-2">Our Approach:</div>
                <p className="text-slate-600">{item.approach}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monitoring & Evaluation */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900 flex items-center gap-3">
            <Award className="w-9 h-9 text-blue-600" />
            Monitoring, Evaluation & Learning
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-8">
            <p className="text-slate-700 leading-relaxed mb-6">
              We maintain rigorous monitoring and evaluation systems to ensure program quality, track impact, and continuously improve our interventions. Our M&E framework includes:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3">Quantitative Tracking</h4>
                <p className="text-slate-600 text-sm">Regular data collection on key indicators, baseline and endline surveys, and statistical analysis of program outcomes.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3">Qualitative Assessment</h4>
                <p className="text-slate-600 text-sm">Focus group discussions, case studies, and participatory evaluation with beneficiaries to understand lived experiences.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3">Third-Party Evaluation</h4>
                <p className="text-slate-600 text-sm">Independent assessment by academic institutions and research organizations ensuring objectivity and credibility.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3">Adaptive Learning</h4>
                <p className="text-slate-600 text-sm">Regular reflection sessions, documentation of lessons learned, and rapid program adjustments based on findings.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Strategic Partnerships</h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            We believe in the power of collaboration. Our work is strengthened through partnerships with government departments, academic institutions, corporate foundations, local NGOs, and international development organizations. These partnerships enable us to leverage resources, share expertise, and amplify our impact.
          </p>
          <div className="bg-slate-100 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">45+</div>
                <div className="text-slate-600">Partner Organizations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-slate-600">Government Collaborations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-slate-600">Academic Partnerships</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
            We're always happy to share more details about our work, discuss potential collaborations, or welcome visitors to our field sites.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Annual Report
            </button>
            <button className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}