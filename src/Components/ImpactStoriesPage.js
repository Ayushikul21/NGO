// ImpactStoriesPage.js
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Download,
  Heart,
  Users,
  Calendar,
  MapPin,
  CheckCircle,
  X,
} from "lucide-react";

const HERO_SLIDES = [
  {
    id: "h1",
    title: "Education That Changes Futures",
    caption: "Girls in remote communities now have safe classrooms and learning kits.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=0d6f5b6a1b3b6a2f6a9e8c7b2d9f1a3e",
  },
  {
    id: "h2",
    title: "Safe Water & Healthy Homes",
    caption: "Communities gain reliable water sources and hygiene training.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4aa6b3a1fdf2d7b7a6d2a9e4f7a6c1b2",
  },
  {
    id: "h3",
    title: "Women Leading Change",
    caption: "Skill-training empowers women to start micro-businesses and earn sustainably.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f6c0f1a7a2b9c7d1e8f0b4c6a4d5e6f",
  },
];

const STORIES = [
  {
    id: 1,
    name: "Asha's Classroom",
    short:
      "Asha (12) no longer walks long distances — her village now has a classroom and study kits for girls.",
    images: [
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f3a9d6d6da16ea06f8f9a2d9f8adf78",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=a8d6b54a9b6f8f8b2d5b3af1d5b2d9d4",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=d3f2a3c3181d4c2e0aa4c8b6b6f0ad9",
    ],
    category: "Education — Children",
    location: "Rural Bihar",
    duration: "Jan 2024 – Jun 2024",
    beneficiaries: "520 children (60% girls)",
    raised: 2200000,
    goal: 2000000,
    quote:
      "I used to miss school during monsoon. Now I study near my home and dream to be a teacher.",
    impact: [
      "4 classrooms built and furnished",
      "520 children received study kits",
      "Teacher training for 12 local educators",
    ],
    reportUrl: "#",
  },
  {
    id: 2,
    name: "Meera's Savings Circle",
    short:
      "After a six-week tailoring course, Meera started a small tailoring group with other women — now they earn collectively.",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=d3f2a3c3181d4c2e0aa4c8b6b6f0ad9",
      "https://images.unsplash.com/photo-1520975698519-9a6a9f48a0f1?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a1c3b5c7d8e9f001122334455667788",
    ],
    category: "Women Empowerment",
    location: "Urban Township — Maharashtra",
    duration: "Apr 2024 – Sep 2024",
    beneficiaries: "180 women",
    raised: 1200000,
    goal: 1000000,
    quote:
      "The training taught me a skill and gave me confidence — we now stitch uniforms and sell locally.",
    impact: [
      "180 women trained in tailoring & bookkeeping",
      "3 women-run micro-enterprises launched",
      "Monthly savings group established",
    ],
    reportUrl: "#",
  },
  {
    id: 3,
    name: "Clean Water for Laxmi Nagar",
    short:
      "A neighborhood had recurrent waterborne illness — after installing a filtration unit and hygiene workshops, illness rates dropped.",
    images: [
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4aa6b3a1fdf2d7b7a6d2a9e4f7a6c1b2",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1b5bc5fce2f8c2e1b0636e2c1fb50f9a",
    ],
    category: "Health & Sanitation",
    location: "Laxmi Nagar — Rajasthan",
    duration: "Mar 2024 – Jul 2024",
    beneficiaries: "3,800 residents",
    raised: 900000,
    goal: 800000,
    quote:
      "Our children stopped falling sick as often. We spend more time learning and working now.",
    impact: [
      "1 community filtration unit installed",
      "3,800 residents reached with hygiene training",
      "Local committee trained for maintenance",
    ],
    reportUrl: "#",
  },
  {
    id: 4,
    name: "Nutrition & Mother Care Program",
    short:
      "Mothers received nutrition counseling and iron supplements; children gained healthy weight and energy for school.",
    images: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a1b2c3d4e5f67890123456789abcdef",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd1234efgh5678ijkl9012mnop3456",
    ],
    category: "Nutrition — Mothers & Children",
    location: "Urban Slums — Delhi",
    duration: "Nov 2023 – Apr 2024",
    beneficiaries: "6,400 individuals",
    raised: 1500000,
    goal: 1300000,
    quote:
      "My child gained weight and started going to school — the nutrition class changed how I cook for my family.",
    impact: [
      "1.5M nutritious meals distributed",
      "1,200 mothers trained on affordable nutrition",
      "Growth monitoring for 6,400 children",
    ],
    reportUrl: "#",
  },
  {
    id: 5,
    name: "Safe Spaces for Girls",
    short:
      "Safe after-school hubs created for adolescent girls to study, get mentorship, and access counselling.",
    images: [
      "https://images.unsplash.com/photo-1520975698519-9a6a9f48a0f1?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a1c3b5c7d8e9f001122334455667788",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=ccddeeff00112233445566778899aabb",
    ],
    category: "Child Protection",
    location: "Coastal Town — Gujarat",
    duration: "May 2024 – Oct 2024",
    beneficiaries: "720 girls",
    raised: 600000,
    goal: 600000,
    quote:
      "Now I can study after school and ask for help when I need it — I feel safer and more hopeful.",
    impact: [
      "3 safe after-school hubs created",
      "720 girls received mentorship and counselling",
      "Parent awareness workshops held monthly",
    ],
    reportUrl: "#",
  },
];

const formatCurrency = (amount) => {
  if (!amount && amount !== 0) return "₹0";
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
  return `₹${(amount / 1000).toFixed(0)}K`;
};

export default function ImpactStoriesPage({ onDonateClick }) {
  const navigate = useNavigate();
  const [heroIndex, setHeroIndex] = useState(0);
  const heroTimerRef = useRef(null);

  const [selectedStory, setSelectedStory] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const modalRef = useRef(null);

  useEffect(() => {
    heroTimerRef.current = setInterval(() => {
      setHeroIndex((p) => (p + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(heroTimerRef.current);
  }, []);

  const pauseHero = () => clearInterval(heroTimerRef.current);
  const resumeHero = () => {
    clearInterval(heroTimerRef.current);
    heroTimerRef.current = setInterval(() => {
      setHeroIndex((p) => (p + 1) % HERO_SLIDES.length);
    }, 5000);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openModal = (story) => {
    setSelectedStory(story);
    setModalImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedStory(null);
    document.body.style.overflow = "";
  };

  const prevModalImage = () => {
    if (!selectedStory) return;
    setModalImageIndex((i) => (i - 1 + selectedStory.images.length) % selectedStory.images.length);
  };

  const nextModalImage = () => {
    if (!selectedStory) return;
    setModalImageIndex((i) => (i + 1) % selectedStory.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <section
        className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden"
        onMouseEnter={pauseHero}
        onMouseLeave={resumeHero}
      >
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-green-600 rounded-full text-sm font-semibold">
              <PlayCircle className="w-5 h-5" />
              Impact in Focus
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Real lives. Real impact.</h1>
            <p className="text-lg text-blue-100 max-w-xl">
              Stories of children and women whose lives changed because of focused support — education,
              health, safe spaces, livelihoods and more. See the journeys, view photos, and read full narratives.
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById("stories-grid");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2 shadow"
              >
                <Heart className="w-4 h-4" /> Read Stories
              </button>

              <a
                href="#reports"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white bg-transparent hover:bg-white/10 transition"
              >
                <Download className="w-4 h-4" /> Download Reports
              </a>
            </div>
          </div>

          {/* HERO CAROUSEL */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={HERO_SLIDES[heroIndex].image}
              alt={HERO_SLIDES[heroIndex].title}
              className="w-full h-64 md:h-80 object-cover transform transition duration-700"
            />
            <div className="absolute left-4 bottom-4 bg-black/40 text-white p-4 rounded-lg max-w-[85%]">
              <h3 className="text-xl font-bold">{HERO_SLIDES[heroIndex].title}</h3>
              <p className="text-sm opacity-90 mt-1">{HERO_SLIDES[heroIndex].caption}</p>
            </div>

            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <button
                onClick={() => setHeroIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="bg-white/80 hover:bg-white/100 p-2 rounded-full shadow"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <button
                onClick={() => setHeroIndex((i) => (i + 1) % HERO_SLIDES.length)}
                className="bg-white/80 hover:bg-white/100 p-2 rounded-full shadow"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES GRID */}
      <main className="max-w-7xl mx-auto px-6 py-12" id="stories-grid">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Impact Stories</h2>
          <p className="text-sm text-gray-500">Browse first-person accounts and program highlights.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {STORIES.map((s) => (
            <article key={s.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={s.images[0]}
                  alt={s.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute left-3 bottom-3 bg-white/90 rounded-md px-3 py-1 text-xs font-semibold flex items-center gap-2 shadow">
                  <span className="text-sm text-gray-700">{s.category}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{s.short}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4" />
                    <span>{s.beneficiaries}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4" />
                    <span>{s.duration}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => openModal(s)}
                    className="flex-1 bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
                  >
                    Read Full Story
                  </button>
                  <button
                    onClick={() => window.open(s.reportUrl || "#", "_blank")}
                    className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                    title="Download Report"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* HIGHLIGHTS / CTA */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-center">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-bold text-lg mb-2">Local Partnerships</h4>
            <p className="text-sm text-gray-600">We work with village committees, women's groups and schools to ensure projects stick.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-bold text-lg mb-2">Sustainable Results</h4>
            <p className="text-sm text-gray-600">Every project includes a local plan for maintenance and community ownership.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow text-center">
            <h4 className="font-bold text-lg mb-2">Help More People</h4>
            <button onClick={onDonateClick} className="mt-2 bg-blue-900 text-white px-5 py-3 rounded-full font-semibold hover:bg-blue-800 inline-flex items-center gap-2">
              <Heart className="w-4 h-4" /> Support Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Modal: Detailed Story */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
          <div ref={modalRef} className="relative z-60 max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-lg font-bold">{selectedStory.name}</h3>
                <p className="text-sm text-gray-500">{selectedStory.location} • {selectedStory.duration}</p>
              </div>
              <button onClick={closeModal} className="p-2 rounded-md hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="relative rounded-lg overflow-hidden bg-gray-100">
                {/* inner carousel */}
                <img
                  src={selectedStory.images[modalImageIndex]}
                  alt={`${selectedStory.name} ${modalImageIndex + 1}`}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute left-3 top-3 flex gap-2">
                  <button onClick={prevModalImage} className="bg-white/90 p-2 rounded-full shadow" aria-label="Prev image">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={nextModalImage} className="bg-white/90 p-2 rounded-full shadow" aria-label="Next image">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex gap-2 p-3 overflow-x-auto bg-white">
                  {selectedStory.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModalImageIndex(idx)}
                      className={`flex-shrink-0 rounded-md overflow-hidden border ${idx === modalImageIndex ? "ring-2 ring-blue-500" : "border-gray-200"}`}
                      style={{ width: 90, height: 60 }}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">{selectedStory.quote}</p>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">Key Impacts</span>
                    </div>
                    <div className="text-sm text-gray-500">{selectedStory.impact.length} items</div>
                  </div>

                  <ul className="mt-2 text-sm text-gray-700 space-y-2">
                    {selectedStory.impact.map((it, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-100 rounded-lg text-sm">
                    <div className="text-xs text-gray-500">Beneficiaries</div>
                    <div className="font-semibold">{selectedStory.beneficiaries}</div>
                  </div>
                  <div className="p-3 bg-gray-100 rounded-lg text-sm">
                    <div className="text-xs text-gray-500">Funds Raised</div>
                    <div className="font-semibold">{formatCurrency(selectedStory.raised)}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href={selectedStory.reportUrl || "#"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800">
                    <Download className="w-4 h-4" /> Download Report
                  </a>

                  <button onClick={() => { navigator.share?.({ title: selectedStory.name, text: selectedStory.short, url: window.location.href }) || alert("Sharing not supported on this browser."); }} className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                    Share Story
                  </button>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Full Narrative</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedStory.short} — {selectedStory.quote} Our field team worked with local leaders and stakeholders to deliver infrastructure,
                    training and follow-up support so that results are sustained. The community now manages the resources with periodic technical support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reports anchor / footer CTA */}
      <footer id="reports" className="bg-slate-900 text-white py-12 mt-12 mb-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-3">Impact Reports & Photo Galleries</h3>
          <p className="text-sm text-gray-300 mb-6">Download program reports and view photo evidence for community projects supporting children, women, and families.</p>
          <div className="inline-flex gap-3">
            <a onClick={()=>navigate('/annual-reports')} className="bg-white text-blue-900 px-5 py-3 rounded-full font-semibold" href="#!">
              Download Annual Report
            </a>
            <a className="border border-white px-5 py-3 rounded-full hover:bg-white/10" href="#!">
              View All Galleries
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
