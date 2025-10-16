import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Globe, Sparkles, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function OurStoryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeImpact, setActiveImpact] = useState(0);
  const navigate = useNavigate();

  const openMission = () => {
    navigate('/mission-vision');
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImpact((prev) => (prev + 1) % impactStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const milestones = [
    { year: '2022', title: 'The Beginning', desc: 'Started with a small team of 5 volunteers, focusing on healthcare camps in 3 villages', color: 'from-blue-500 to-cyan-500' },
    { year: '2023', title: 'Growing Impact', desc: 'Launched education programs and expanded to 25 communities across the region', color: 'from-purple-500 to-pink-500' },
    { year: '2024', title: 'Community Network', desc: 'Led impactful community healthcare initiatives, improving access and awareness among underserved populations.', color: 'from-indigo-500 to-blue-500' },
    { year: "2025", title: "Digital Transformation", desc: "Scaled initiatives to reach 10,000+ individuals through hybrid models of in-person and digital engagement.", color: 'from-blue-700 to-purple-500' }
  ];

  const values = [
    { icon: Heart, title: 'Dignity', desc: 'Treating every individual with respect and honor', color: 'bg-red-500' },
    { icon: Users, title: 'Participation', desc: 'Empowering communities to lead their own change', color: 'bg-blue-500' },
    { icon: Globe, title: 'Opportunity', desc: 'Creating pathways to reach full potential', color: 'bg-green-500' },
    { icon: Sparkles, title: 'Sustainability', desc: 'Building lasting change through partnership', color: 'bg-purple-500' }
  ];

  const testimonials = [
    {
      text: "This organization didn't just provide services—they empowered us to become leaders in our own community's transformation.",
      author: "Community Health Worker",
      location: "Rural Development Program"
    },
    {
      text: "The education initiatives have opened doors we never thought possible for our children. Hope has returned to our village.",
      author: "Parent & Volunteer",
      location: "Education Initiative"
    },
    {
      text: "Their approach is different. They listen, they learn, and they work alongside us—not above us.",
      author: "Village Council Member",
      location: "Community Partnership"
    }
  ];

  const impactStories = [
    {
      stat: "50+",
      label: "Communities Served",
      desc: "Across rural and urban areas"
    },
    {
      stat: "10,000+",
      label: "Lives Impacted",
      desc: "Through direct interventions"
    },
    {
      stat: "200+",
      label: "Health Camps Conducted",
      desc: "Providing accessible healthcare"
    },
    {
      stat: "500+",
      label: "Women Empowered",
      desc: "Through skill development"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextImpact = () => {
    setActiveImpact((prev) => (prev + 1) % impactStories.length);
  };

  const prevImpact = () => {
    setActiveImpact((prev) => (prev - 1 + impactStories.length) % impactStories.length);
  };

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
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              Established 2022
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
              A journey of transformation, empowerment, and sustainable change
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-8"></div>
          </div>
        </div>
      </div>

      {/* Impact Carousel */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Our Impact in Numbers</h2>
            <div className="flex gap-2">
              <button onClick={prevImpact} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>
              <button onClick={nextImpact} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                <ChevronRight className="w-5 h-5 text-slate-700" />
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeImpact * 100}%)` }}>
              {impactStories.map((story, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      {story.stat}
                    </div>
                    <div className="text-2xl font-semibold text-slate-800 mb-2">{story.label}</div>
                    <div className="text-slate-600">{story.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {impactStories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImpact(idx)}
                className={`w-2 h-2 rounded-full transition-all ${activeImpact === idx ? 'w-8 bg-blue-600' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">The Genesis</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our organization was born from a simple observation and a profound commitment. In 2022, we realized that despite numerous government schemes and initiatives, marginalized communities—particularly women and children—continued to face significant barriers in accessing basic healthcare and education services.
              </p>
              <div onClick={openMission} className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow cursor-pointer">
                Learn More About Our Mission
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 text-white">
                <Quote className="w-12 h-12 mb-4 opacity-50" />
                <p className="text-xl font-medium mb-4">
                  "Sustainable change doesn't come from top-down interventions but from empowering communities to drive their own development."
                </p>
                <div className="text-blue-100">— Our Founding Principle</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Our Journey</h2>

          {/* Use grid + equal height fix */}
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex">
                {/* Make all cards equal height and aligned */}
                <div
                  className={`flex flex-col justify-between bg-gradient-to-br ${milestone.color} 
                  rounded-2xl p-8 text-white transform hover:scale-105 hover:-translate-y-2 
                  transition-all duration-300 shadow-lg hover:shadow-2xl w-full h-full`}
                >
                  <div>
                    <div className="text-5xl font-bold mb-3 opacity-90">{milestone.year}</div>
                    <div className="text-2xl font-semibold mb-3">{milestone.title}</div>
                    <div className="text-sm opacity-90 leading-relaxed">{milestone.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evolution Story */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-lg p-8 md:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Evolution & Growth</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              What started as weekend health camps in three villages has evolved into a comprehensive development organization working across multiple sectors. Our journey has been one of learning, adaptation, and deep partnership with the communities we serve.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We've learned that sustainable change doesn't come from top-down interventions but from empowering communities to drive their own development.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Our Guiding Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                  <div className={`${value.color} rounded-xl p-4 inline-block mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Voices from the Field</h2>
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
            <div className="relative">
              <Quote className="w-16 h-16 text-blue-200 mb-6" />
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="w-full flex-shrink-0">
                      <p className="text-2xl md:text-3xl text-slate-800 font-medium mb-8 leading-relaxed">
                        {testimonial.text}
                      </p>
                      <div>
                        <div className="text-lg font-semibold text-slate-800">{testimonial.author}</div>
                        <div className="text-slate-600">{testimonial.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${activeTestimonial === idx ? 'w-8 bg-blue-600' : 'bg-slate-300'}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={prevTestimonial} className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                    <ChevronLeft className="w-5 h-5 text-slate-700" />
                  </button>
                  <button onClick={nextTestimonial} className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Today Section */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl shadow-2xl p-8 md:p-16 text-white">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Today & Beyond</h2>
              <p className="text-xl leading-relaxed mb-6 text-blue-100">
                Today, we work in over 50 communities, but our approach remains rooted in the same principles that guided our founders: dignity, participation, and the belief that every individual deserves the opportunity to reach their full potential regardless of their circumstances of birth.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <button onClick={()=>navigate('/get-in-touch')} className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Join Our Mission
                </button>
                <button onClick={()=>navigate('/Partner')} className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}