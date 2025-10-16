import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeartPulse,
  Users,
  Baby,
  Syringe,
  Activity,
  Hospital,
  Heart,
  Shield,
  ArrowLeft,
  ArrowRight,
  Droplets,
} from "lucide-react";

export default function HealthcarePage() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const images = [
    "https://images.unsplash.com/photo-1584515933487-779824d29309",
    "/health1.jpg",
    "/health2.jpg",
    "https://images.unsplash.com/photo-1550831107-1553da8c8464",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const stats = [
    { label: "Health Camps Conducted", value: "250+", icon: Hospital },
    { label: "Patients Treated", value: "25,000+", icon: Users },
    { label: "Maternal & Child Health Sessions", value: "600+", icon: Baby },
    { label: "Vaccination Drives", value: "180+", icon: Syringe },
    { label: "Medical Volunteers", value: "400+", icon: Activity },
    { label: "Sanitation Campaigns", value: "70+", icon: Droplets },
  ];

  const programs = [
    {
      title: "Mobile Health Units",
      desc: "Reaching villages where healthcare facilities are absent, our mobile clinics provide regular medical check-ups, diagnostics, and treatment for chronic and seasonal illnesses.",
      img: "/health3.png",
    },
    {
      title: "Maternal & Child Health Care",
      desc: "Focused on reducing maternal and infant mortality rates, our MCH program includes prenatal care, nutrition support, immunization, and postnatal follow-ups.",
      img: "health4.jpg",
    },
    {
      title: "Preventive Health Education",
      desc: "Workshops on hygiene, nutrition, menstrual health, and disease prevention are held for women, youth, and schools to foster long-term health literacy.",
      img: "health5.jpg",
    },
    {
      title: "Mental Health & Wellness",
      desc: "We partner with local psychologists to conduct stress management and counseling sessions for adolescents and women, ensuring emotional well-being and resilience.",
      img: "/health6.jpg",
    },
  ];

  const stories = [
    {
      name: "Meena’s Safe Motherhood Journey",
      quote:
        "Before joining our program, Meena had no access to prenatal care. Today, she volunteers with our maternal health project, helping other mothers receive safe deliveries.",
      img: "health8.jpg",
    },
    {
      name: "Village Wellness Drive",
      quote:
        "A hygiene awareness and water sanitation campaign in rural clusters helped reduce waterborne diseases by over 45% within six months.",
      img: "health7.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1612277790147-25a8d88e6e2b')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Healthcare & Wellness</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Strengthening community health through compassion, prevention, and access.
          </p>
        </div>
      </section>

      {/* IMAGE CAROUSEL */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="overflow-hidden rounded-3xl shadow-2xl h-96 md:h-[500px] relative">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Healthcare ${idx}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <button
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrent((current + 1) % images.length)}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === idx ? "w-6 bg-white" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH IMPACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Healthcare Impact</h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-12">
          Through our integrated healthcare approach, we address the root causes of poor health,
          emphasizing early intervention, preventive education, and sustainable community systems.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <Icon className="w-10 h-10 mb-4 opacity-80 mx-auto" />
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-blue-100 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
            Our Health Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-56 object-fill group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-3">
                    {prog.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-10 md:p-16 text-white">
          <div className="flex items-center gap-3 mb-8">
            <HeartPulse className="w-10 h-10 text-blue-200" />
            <h2 className="text-3xl font-bold">Stories of Healing & Hope</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/20 transition-all"
              >
                <img
                  src={story.img}
                  alt={story.name}
                  className="w-full h-48 object-fill rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-yellow-100">
                  {story.name}
                </h3>
                <p className="text-blue-100 leading-relaxed">{story.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl shadow-2xl p-12 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <Shield className="w-12 h-12 text-blue-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Partner with Us for Healthier Communities
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Together, we can expand access to healthcare and ensure that no
              individual is left behind. Join hands with us as a volunteer,
              medical partner, or donor to create lasting change.
            </p>
            <button onClick={()=>navigate('/Partner')} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all">
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
