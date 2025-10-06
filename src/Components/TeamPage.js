import React, { useState, useEffect } from 'react';
import { Users, Award, Heart, Target, Linkedin, Mail, ChevronLeft, ChevronRight, Quote, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function TeamPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % teamTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const leadership = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Founder & Executive Director',
      education: 'PhD in Public Health, AIIMS Delhi',
      experience: '15+ years in community health',
      bio: 'Dr. Sharma brings extensive experience in grassroots healthcare delivery and has led multiple national health programs. Her vision of participatory development has shaped our organizational approach.',
      expertise: ['Public Health', 'Program Design', 'Community Mobilization']
    },
    {
      name: 'Rajesh Kumar',
      role: 'Director of Operations',
      education: 'MBA, IIM Lucknow',
      experience: '12+ years in development sector',
      bio: 'Rajesh oversees program implementation across all districts, ensuring quality delivery and community engagement. His strategic planning has enabled our geographic expansion.',
      expertise: ['Operations Management', 'Strategic Planning', 'Resource Optimization']
    },
    {
      name: 'Meera Patel',
      role: 'Head of Programs',
      education: 'MSW, Tata Institute of Social Sciences',
      experience: '10+ years in rural development',
      bio: 'Meera leads our integrated development programs, focusing on women\'s empowerment and livelihood initiatives. She has pioneered innovative approaches to skill development.',
      expertise: ['Women Empowerment', 'Livelihood Programs', 'Community Development']
    },
    {
      name: 'Dr. Amit Verma',
      role: 'Medical Coordinator',
      education: 'MBBS, MD Community Medicine',
      experience: '8+ years in preventive healthcare',
      bio: 'Dr. Verma manages our healthcare interventions including health camps, screening programs, and health education initiatives across all project areas.',
      expertise: ['Community Medicine', 'Preventive Care', 'Health Systems']
    }
  ];

  const coreTeam = [
    {
      name: 'Anjali Singh',
      role: 'Education Program Manager',
      location: 'Lucknow',
      focus: 'Overseeing literacy programs and learning centers across 25 communities'
    },
    {
      name: 'Suresh Yadav',
      role: 'Livelihood Coordinator',
      location: 'Rae Bareli',
      focus: 'Managing skill development and SHG formation programs'
    },
    {
      name: 'Kavita Mishra',
      role: 'Monitoring & Evaluation Officer',
      location: 'Lucknow',
      focus: 'Data collection, impact assessment, and program quality monitoring'
    },
    {
      name: 'Ravi Prakash',
      role: 'Community Mobilization Lead',
      location: 'Unnao',
      focus: 'Building partnerships with village committees and local organizations'
    },
    {
      name: 'Pooja Gupta',
      role: 'Finance & Administration Manager',
      location: 'Lucknow',
      focus: 'Financial management, compliance, and organizational administration'
    },
    {
      name: 'Deepak Tiwari',
      role: 'Field Coordinator',
      location: 'Sitapur',
      focus: 'Ground-level program implementation and community liaison'
    }
  ];

  const advisoryBoard = [
    {
      name: 'Prof. Ramesh Chandra',
      designation: 'Professor Emeritus, Lucknow University',
      expertise: 'Rural Development & Social Policy',
      contribution: 'Provides strategic guidance on program design and impact assessment'
    },
    {
      name: 'Dr. Sunita Malhotra',
      designation: 'Former Director, State Health Mission',
      expertise: 'Public Health Systems & Policy',
      contribution: 'Advises on healthcare program strategy and government partnerships'
    },
    {
      name: 'Vikram Mehta',
      designation: 'Social Entrepreneur & Development Consultant',
      expertise: 'Sustainable Livelihoods & Enterprise Development',
      contribution: 'Guides livelihood programs and financial sustainability initiatives'
    },
    {
      name: 'Dr. Nandita Roy',
      designation: 'Child Rights Activist & Education Specialist',
      expertise: 'Education & Child Development',
      contribution: 'Supports design of education programs and child protection protocols'
    }
  ];

  const teamTestimonials = [
    {
      text: "Working here means being part of something truly meaningful. Every day, we see the tangible impact of our collective efforts on people's lives.",
      author: "Anjali Singh",
      role: "Education Program Manager"
    },
    {
      text: "The collaborative spirit and shared commitment to our mission makes this organization special. We're not just colleagues—we're a family united by purpose.",
      author: "Suresh Yadav",
      role: "Livelihood Coordinator"
    },
    {
      text: "What distinguishes us is our genuine respect for the communities we serve. We learn as much from them as they learn from us.",
      author: "Kavita Mishra",
      role: "M&E Officer"
    }
  ];

  const organizationalValues = [
    {
      icon: Heart,
      title: 'Collaborative Culture',
      desc: 'We foster a work environment based on mutual respect, open communication, and shared learning'
    },
    {
      icon: Target,
      title: 'Professional Excellence',
      desc: 'We maintain high standards of competence and continuously invest in team capacity building'
    },
    {
      icon: Award,
      title: 'Ethical Practice',
      desc: 'We uphold integrity, transparency, and accountability in all organizational operations'
    },
    {
      icon: Users,
      title: 'Inclusive Workplace',
      desc: 'We embrace diversity and ensure equal opportunities regardless of background or identity'
    }
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
              Meet Our Team
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Dedicated professionals united by a shared commitment to community empowerment and social transformation
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experienced professionals guiding our strategic direction and ensuring program excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 group hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl font-bold">{leader.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-lg text-blue-100 mb-4">{leader.role}</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      <GraduationCap className="w-4 h-4" />
                      {leader.education}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      <Briefcase className="w-4 h-4" />
                      {leader.experience}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-700 leading-relaxed mb-6">{leader.bio}</p>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 mb-3">Key Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIdx) => (
                        <span key={skillIdx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Program Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Core Team Members</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our dedicated program managers and coordinators implementing initiatives across communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 group hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <p className="text-lg text-blue-600 font-medium mb-3">{member.role}</p>
                <div className="flex items-center gap-2 text-slate-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{member.location}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Testimonials Carousel */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5"></div>
            <div className="relative">
              <Quote className="w-16 h-16 text-white/30 mb-6" />
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                  {teamTestimonials.map((testimonial, idx) => (
                    <div key={idx} className="w-full flex-shrink-0">
                      <p className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <div className="text-xl font-bold text-white">{testimonial.author}</div>
                        <div className="text-blue-100">{testimonial.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {teamTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'w-12 bg-white' : 'w-2 bg-white/40'}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveTestimonial((prev) => (prev - 1 + teamTestimonials.length) % teamTestimonials.length)}
                    className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button 
                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % teamTestimonials.length)}
                    className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Board */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Advisors
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Advisory Board</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Distinguished experts providing strategic guidance and technical support to our programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advisoryBoard.map((advisor, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{advisor.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{advisor.designation}</p>
                <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-4">
                  {advisor.expertise}
                </div>
                <p className="text-slate-700 leading-relaxed">{advisor.contribution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizational Culture */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              Our Culture
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">What Defines Us</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The values and principles that shape our organizational culture and team dynamics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationalValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 group hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Field Staff Recognition */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl shadow-2xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <div className="text-center mb-8">
                <Users className="w-16 h-16 mx-auto mb-6 text-blue-300" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Extended Family</h2>
                <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-6">
                  Beyond our core team, we work with 50+ community volunteers, 30+ field facilitators, and countless local partners who are the backbone of our grassroots operations.
                </p>
                <p className="text-lg text-blue-100 max-w-4xl mx-auto">
                  These dedicated individuals bring local knowledge, cultural understanding, and deep community connections that make our programs effective and sustainable. They are the true champions of change, working tirelessly at the village level to transform lives and build stronger communities.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Community Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">30+</div>
                  <div className="text-blue-100">Field Facilitators</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">100+</div>
                  <div className="text-blue-100">Local Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}