import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Users,
  GraduationCap,
  Award,
  Building2,
  Laptop,
  Heart,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

export default function EducationImpactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  // High-quality carousel images
  const images = [
    "/edu1.png",
    "/edu2.png",
    "/edu3.png",
    "/edu4.png",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

   const features = [
    "Inclusive learning centers for rural and urban communities",
    "Capacity building and modern teacher training",
    "Digital literacy and technology-enabled education",
    "Financial aid and mentorship for underprivileged students"
  ];

  const stats = [
    { label: "Children Educated", value: "10,000+", icon: Users },
    { label: "Schools Upgraded", value: "50+", icon: Building2 },
    { label: "Teachers Trained", value: "500+", icon: GraduationCap },
    { label: "Scholarships Awarded", value: "1,200+", icon: Award },
    { label: "Digital Learning Centers", value: "20+", icon: Laptop },
    { label: "Literacy Rate Improvement", value: "35%", icon: BookOpen },
  ];

  const programs = [
    {
      title: "School Infrastructure Development",
      desc: "We collaborate with local authorities and communities to renovate classrooms, build libraries, and improve sanitation and water facilities. Safe and stimulating school environments encourage attendance and enhance learning outcomes.",
      img: "/edu5.png",
    },
    {
      title: "Teacher Training & Capacity Building",
      desc: "Our teacher training modules focus on child-centered teaching methods, digital tools, and inclusive education practices. We ensure that educators are well-equipped to foster creativity, curiosity, and confidence in their classrooms.",
      img: "/edu6.png"
    },
    {
      title: "Adult & Women Literacy Programs",
      desc: "Through our literacy initiatives, adults—especially women—gain essential reading, writing, and numeracy skills. This not only improves household decision-making but also boosts confidence and financial independence.",
      img: "/edu7.png",
    },
    {
      title: "Digital Education & Scholarships",
      desc: "We integrate digital learning into our programs by establishing computer labs and e-learning centers. Scholarships are awarded to deserving students to help them continue their higher education without financial constraints.",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Our Impact on Education
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Transforming education through infrastructure, innovation, and inclusivity — empowering every learner to build a better future.
            </p>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div
          className={`bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="/programs1.jpg"
              alt="Education Program"
              className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h2 className="text-4xl font-bold mb-6">Shaping Futures Through Learning</h2>
              <p className="text-lg mb-6 leading-relaxed opacity-95">
                We aim to transform lives through education by providing equal learning opportunities to children, youth, and adults.
                Our initiatives focus on building sustainable learning ecosystems that enhance access, quality, and equity in education.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
                  >
                    <span className="text-blue-200 text-xl">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE CAROUSEL */}
      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="overflow-hidden rounded-3xl shadow-xl h-96 md:h-[500px] relative">
            {images.map((img, idx) => (
            <img
                key={idx}
                src={img}
                srcSet={`${img} 1x, ${img.replace(
                ".jpg",
                "@2x.jpg"
                )} 2x, ${img.replace(".jpg", "@3x.jpg")} 3x`}
                alt={`Education Impact ${idx + 1}`}
                className={`absolute w-full h-full object-cover object-center transition-opacity duration-1000 will-change-opacity ${
                idx === current ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
            />
            ))}

            {/* Previous Button */}
            <button
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
            >
            <ArrowLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
            onClick={() => setCurrent((current + 1) % images.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
            >
            <ArrowRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
            {images.map((_, idx) => (
                <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                    current === idx ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
                />
            ))}
            </div>
        </div>
      </div>

      {/* IMPACT NUMBERS */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div
          className={`bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-10 shadow-lg transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-blue-900 mb-2">By the Numbers</h2>
            <p className="text-lg text-slate-700">
              Our measurable outcomes demonstrate how sustained interventions drive change in communities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-all hover:shadow-lg"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-full mb-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-blue-700">
                    {item.value}
                  </span>
                  <span className="text-slate-700 mt-1">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* PROGRAM HIGHLIGHTS */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-10">
          Our Educational Initiatives
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-blue-800">
                  {prog.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{prog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUCCESS STORIES */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl text-white shadow-2xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-yellow-300" />
              <h2 className="text-3xl font-bold">Real Stories, Real Change</h2>
            </div>
            <p className="text-blue-50 mb-8 text-lg leading-relaxed">
              Beyond the numbers, the stories of our beneficiaries speak volumes.
              Each child, teacher, and family touched by our programs represents a
              journey toward empowerment and hope.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-yellow-100">
                  Rani's Journey
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Rani, a 12-year-old from a rural village, had never attended
                  school before. With our outreach and mobile learning center, she
                  enrolled, learned to read, and today dreams of becoming a
                  teacher herself.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-yellow-100">
                  Teacher Rajesh's Transformation
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Rajesh, a primary teacher, joined our training program in 2023.
                  Through new pedagogical tools and peer learning sessions, he now
                  engages students in creative, participatory ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl shadow-2xl p-12 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <Heart className="w-12 h-12 text-blue-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Together, we can bridge the education gap and shape a generation
              ready to lead with knowledge and compassion. Your support fuels
              our mission to bring education to every doorstep.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all hover:scale-105">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}