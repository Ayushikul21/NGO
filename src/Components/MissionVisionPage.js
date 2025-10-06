import React, { useState, useEffect } from 'react';
import { Target, Eye, Compass, Heart, Users, BookOpen, Stethoscope, Briefcase, Home, Lightbulb, ChevronRight, Award, TrendingUp, Globe2, Shield, Handshake, CheckCircle } from 'lucide-react';

export default function MissionVisionPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeGoal, setActiveGoal] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGoal((prev) => (prev + 1) % strategicGoals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const coreValues = [
    {
      icon: Heart,
      title: 'Compassion',
      desc: 'Leading with empathy and understanding in all our interactions, recognizing the inherent dignity of every individual we serve',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      desc: 'Ensuring equal access and participation for all community members regardless of gender, caste, religion, or socioeconomic status',
      color: 'from-sky-500 to-blue-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'Maintaining highest standards in program delivery, impact measurement, and organizational governance to maximize community benefit',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Embracing creative solutions and adaptive approaches to address complex social challenges in evolving contexts',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Sustainability',
      desc: 'Building long-term capacity within communities and creating self-sustaining systems that continue beyond our direct involvement',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe2,
      title: 'Transparency',
      desc: 'Operating with integrity and accountability at all levels, maintaining open communication with stakeholders and beneficiaries',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const focusAreas = [
    {
      icon: Stethoscope,
      title: 'Healthcare Access & Wellness',
      desc: 'We provide comprehensive primary healthcare services including preventive care, maternal and child health programs, nutrition counseling, and awareness campaigns on communicable and non-communicable diseases. Our mobile health camps bring essential medical services to remote areas lacking basic healthcare infrastructure.',
      impact: '200+ health camps conducted',
      subImpact: '15,000+ patients screened'
    },
    {
      icon: BookOpen,
      title: 'Education & Skill Development',
      desc: 'Our education initiatives span early childhood development, remedial education for out-of-school children, adult literacy programs, and digital literacy training. We work to improve learning outcomes through teacher training, infrastructure support, and supplementary educational materials.',
      impact: '1,500+ students supported',
      subImpact: '45 learning centers established'
    },
    {
      icon: Briefcase,
      title: 'Livelihood & Economic Empowerment',
      desc: 'We empower women and youth through vocational training in tailoring, handicrafts, small business management, and agricultural practices. Our programs include formation of self-help groups, linkage with microfinance institutions, and market connectivity for income generation.',
      impact: '500+ individuals trained',
      subImpact: '120+ SHGs formed'
    },
    {
      icon: Home,
      title: 'Community Infrastructure & WASH',
      desc: 'We facilitate community-led development of essential infrastructure including water and sanitation facilities, community centers, and rural connectivity. Our WASH programs promote hygiene practices, construct toilets, and ensure access to safe drinking water.',
      impact: '50+ communities served',
      subImpact: '200+ toilets constructed'
    }
  ];

  const strategicGoals = [
    {
      year: '2026',
      goal: 'Expand Geographic Reach',
      desc: 'Scale operations to 75 communities across 5 districts, establishing regional resource centers for program coordination and community support'
    },
    {
      year: '2027',
      goal: 'Strengthen Digital Infrastructure',
      desc: 'Launch comprehensive digital literacy and financial inclusion programs, bridging the technology gap in rural communities'
    },
    {
      year: '2028',
      goal: 'Build Institutional Capacity',
      desc: 'Establish 10 permanent community resource centers with trained local facilitators for sustained program delivery'
    },
    {
      year: '2029',
      goal: 'Achieve Scale & Impact',
      desc: 'Reach 50,000+ beneficiaries through integrated programs while maintaining program quality and community participation'
    }
  ];

  const methodologies = [
    {
      title: 'Participatory Rural Appraisal',
      desc: 'We conduct comprehensive community needs assessments using PRA tools and techniques, ensuring programs are designed based on actual community priorities and ground realities.'
    },
    {
      title: 'Capacity Building Framework',
      desc: 'Our interventions focus on building local capacity through training of community volunteers, formation of village-level committees, and development of local leadership.'
    },
    {
      title: 'Monitoring & Evaluation',
      desc: 'We employ robust M&E systems with regular data collection, impact assessments, and third-party evaluations to ensure program effectiveness and course correction.'
    },
    {
      title: 'Partnership Approach',
      desc: 'We collaborate with government departments, local NGOs, academic institutions, and corporate partners to leverage resources and expertise for maximum impact.'
    }
  ];

  const principles = [
    { icon: Shield, text: 'Rights-based approach recognizing beneficiaries as rights holders' },
    { icon: Handshake, text: 'Collaborative partnerships with local governance structures' },
    { icon: CheckCircle, text: 'Evidence-based interventions grounded in research and data' },
    { icon: Users, text: 'Gender-sensitive programming ensuring women\'s participation' },
    { icon: TrendingUp, text: 'Scalable models designed for replication and sustainability' },
    { icon: Globe2, text: 'Environmental consciousness in all program activities' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              Our Direction & Purpose
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Mission & Vision
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Driving sustainable development through community empowerment and integrated interventions
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className={`bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white transition-all duration-1000 delay-200 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6">
              <Eye className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-95 mb-4">
              A just and equitable society where every individual, regardless of their circumstances of birth, has equal access to opportunities for health, education, and dignified livelihoods.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              We envision communities that are empowered to drive their own sustainable development, where local leadership flourishes, and where systemic barriers to progress are dismantled through collective action and inclusive participation.
            </p>
          </div>

          {/* Mission Card */}
          <div className={`bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white transition-all duration-1000 delay-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6">
              <Target className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-95 mb-4">
              To empower marginalized communities through integrated healthcare, education, and livelihood programs that foster sustainable development.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              We work through participatory approaches that honor dignity, build local capacity, strengthen community institutions, and create lasting systemic change. Our interventions are designed to be scalable, replicable, and sustainable beyond our direct involvement.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              What Drives Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These foundational principles guide every decision we make and action we take in service of communities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                  <div className={`bg-gradient-to-br ${value.color} rounded-xl p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Focus Areas */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Our Intervention Areas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Focus Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive programs addressing interconnected development challenges through integrated, community-driven solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 border border-slate-200 group hover:-translate-y-1">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">{area.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">{area.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                      <Award className="w-4 h-4" />
                      {area.impact}
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      {area.subImpact}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Goals Carousel */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Strategic Direction
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Roadmap</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A clear path forward with measurable milestones for expanding impact and deepening community engagement
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${activeGoal * 100}%)` }}>
                  {strategicGoals.map((goal, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 px-4">
                      <div className="text-center text-white">
                        <div className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {goal.year}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">{goal.goal}</h3>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">{goal.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-3 mt-10">
                {strategicGoals.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGoal(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeGoal === idx ? 'w-12 bg-white' : 'w-2 bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-lg p-8 md:p-12 border border-blue-100">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">Operational Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, idx) => {
                const Icon = principle.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-3 flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-1">{principle.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4">
                <Compass className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-800">Implementation Methodology</h2>
            </div>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our approach is rooted in participatory development principles and proven frameworks for sustainable community transformation. We combine grassroots engagement with systematic program management to ensure both depth and scale of impact.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {methodologies.map((method, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <ChevronRight className="w-6 h-6 text-blue-600" />
                    {method.title}
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {method.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl shadow-2xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Commitment</h2>
              <p className="text-xl leading-relaxed mb-6 text-blue-100 max-w-4xl mx-auto">
                We are committed to working with integrity, transparency, and accountability in all our operations. Every program is designed with community participation, implemented through local partnerships, and evaluated for measurable impact on people's lives.
              </p>
              <p className="text-lg leading-relaxed text-blue-100 max-w-4xl mx-auto">
                Our work is guided by the conviction that sustainable development is possible only when communities themselves become agents of change. We serve as catalysts and facilitators, building capacity and creating conditions for communities to realize their own aspirations for a better future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}