import React, { useState, useEffect, useRef } from 'react';
// Assuming Heroicons are available (using generic classes for styling)
// import { ClockIcon, HomeModernIcon, UserGroupIcon, CurrencyDollarIcon, HeartIcon } from '@heroicons/react/24/outline'; 

// --- 1. TypeScript Interfaces ---
interface ReliefItem {
  name: string;
  iconClass: string; // Tailwind icon classes/placeholders
}

interface OperationSummary {
  year: number;
  title: string;
  keyContributions: string[];
}

interface ImpactMetric {
  count: number;
  label: string;
  unit: string;
}

interface DisasterResponseStep {
  step: number;
  title: string;
  description: string;
  iconClass: string;
}

interface Testimonial {
  source: 'video' | 'quote';
  url?: string;
  content: string;
  person?: string;
}

// --- 2. Mock Data (Updated with icon classes) ---
const MOCK_DATA = {
  overview: {
    tagline: 'Responding Swiftly, Rebuilding with Dignity.',
    mission: 'Protect lives, restore hope, and help families rebuild with dignity.',
  },
  reliefItems: [
    { name: 'Emergency Food Packs', iconClass: 'food-icon' },
    { name: 'Clean Drinking Water', iconClass: 'water-icon' },
    { name: 'Temporary Shelter Kits', iconClass: 'shelter-icon' },
    { name: 'Medical Assistance', iconClass: 'medical-icon' },
  ] as ReliefItem[],
  majorOperations: [
    { year: 2022, title: 'Floods of 2022', keyContributions: ['Food, water, and clothing distribution', 'Assistance to families who lost homes'] },
    { year: 2025, title: 'Floods of 2025', keyContributions: ['Delivered emergency ration bags and crockery.', 'Supported families during evacuation and recovery'] },
  ] as OperationSummary[],
  impactMetrics: [
    { count: 300, label: 'Food Packs Distributed', unit: '+' },
    { count: 200, label: 'Families Reached', unit: '+' },
    { count: 150, label: 'Ration Kits Provided', unit: '+' },
    { count: 2, label: 'Major Operations Completed', unit: '' },
  ] as ImpactMetric[],
  responseSteps: [
    { step: 1, title: 'Assessment', description: 'Quick evaluation of affected areas.', iconClass: 'search-icon' },
    { step: 2, title: 'Mobilization', description: 'Volunteers and supplies arranged.', iconClass: 'truck-icon' },
    { step: 3, title: 'Distribution', description: 'Essentials delivered to families.', iconClass: 'gift-icon' },
    { step: 4, title: 'Support & Follow-up', description: 'Continued assistance for stability.', iconClass: 'heart-icon' },
    { step: 5, title: 'Reporting', description: 'Transparent documentation.', iconClass: 'document-icon' },
  ] as DisasterResponseStep[],
  reliefPackContents: [
    { name: 'Staple Foods (Rice, flour)', iconClass: '🍚' },
    { name: 'Cooking Essentials (Oil, sugar)', iconClass: '🍯' },
    { name: 'Hygiene Kits (Soap, sanitary)', iconClass: '🧼' },
    { name: 'Basic Medicines', iconClass: '💊' },
    { name: 'Water Bottles', iconClass: '💧' },
    { name: 'Blankets & Clothing', iconClass: '👕' },
  ],
  longTermVision: [
    'Rebuilding damaged homes',
    'Medical camps in disaster zones',
    'Psychological comfort & community rebuilding',
    'Helping families regain livelihood',
  ],
  galleryImages: [
    'https://via.placeholder.com/1200x600/cc0000/ffffff?text=Disaster+Relief+Scene+1',
    'https://via.placeholder.com/1200x600/b80000/ffffff?text=Disaster+Relief+Scene+2',
    'https://via.placeholder.com/1200x600/a30000/ffffff?text=Disaster+Relief+Scene+3',
  ],
  testimonials: [
    { source: 'quote', content: "The temporary shelter kits saved my family when we lost everything. We are forever grateful.", person: "Aisha, Flood Victim" },
    { source: 'video', content: "Testimonial Video Placeholder", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" } // Rickroll placeholder
  ] as Testimonial[]
};

// --- 3. Custom Hook for Counting Animation ---
const useCountUp = (end: number, duration: number = 2000): number => {
  const [count, setCount] = useState(0);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const elapsed = timestamp - startTimestamp.current;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return count;
};

// --- 4. Main Component (Single File) ---
const DisasterReliefPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = MOCK_DATA.galleryImages.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  useEffect(() => {
    // Auto-rotate the slider
    const timer = setInterval(nextSlide, 5000); 
    return () => clearInterval(timer);
  }, [totalSlides]);


  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* --- 4.1. Header/Hero Section --- */}
      <header className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x800/808080/ffffff?text=Disaster+Relief+Background)' }}>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-red-800 bg-opacity-70 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <p className="text-xl font-medium uppercase tracking-widest mb-3">Natural Disaster Relief Program</p>
            <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
              {MOCK_DATA.overview.tagline}
            </h1>
            <p className="text-2xl font-light italic max-w-3xl mx-auto">
              {MOCK_DATA.overview.mission}
            </p>
            <a href="#how-we-work" className="mt-8 inline-block bg-white text-red-700 font-bold py-3 px-8 rounded-full shadow-xl hover:bg-red-50 transition duration-300">
                See Our Response
            </a>
          </div>
        </div>
      </header>

      {/* --- 4.2. Impact Counters --- */}
      <section className="py-16 bg-white shadow-inner -mt-16 z-10 relative">
        <div className="container mx-auto px-6">
          <h2 className="sr-only">Our Impact Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {MOCK_DATA.impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 md:p-8 bg-white rounded-xl shadow-xl text-center border-t-4 border-red-600 transition hover:shadow-2xl"
              >
                <p className="text-5xl lg:text-6xl font-extrabold text-red-600 mb-2">
                  {useCountUp(metric.count)}
                  {metric.unit}
                </p>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- 4.3. Relief Response Overview (What We Provide) --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Our Disaster Relief Response</h2>
            <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 mb-10">
                In times of crisis, timely support can mean the difference between survival and despair. Our team works on the ground to provide:
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {MOCK_DATA.reliefItems.map((item) => (
                    <div key={item.name} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md border-l-4 border-red-600 hover:shadow-lg transition">
                        <div className="text-3xl text-red-600">{/* Placeholder for icon */}<span className="font-serif">i</span></div>
                        <span className="font-semibold text-gray-700">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- 4.4. How We Work During Disasters (Visual Steps) --- */}
      <section id="how-we-work" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How We Work During Disasters</h2>
          <div className="relative flex justify-center">
            {/* The main connecting line (only visible on large screens) */}
            <div className="hidden lg:block absolute top-10 left-1/2 w-4 bg-gray-200 h-[calc(100%-80px)] transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16 max-w-5xl">
                {MOCK_DATA.responseSteps.map((step, index) => (
                    <div 
                        key={step.step} 
                        className={`flex gap-6 p-4 ${index % 2 === 0 ? 'lg:justify-end lg:pr-16' : 'lg:justify-start lg:pl-16'}`}
                    >
                        <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                            {/* Step Number Circle */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-xl mb-3 shadow-lg flex-shrink-0">
                                {step.step}
                            </div>
                        </div>

                        <div className={`flex-1 ${index % 2 === 0 ? 'text-left lg:text-right lg:order-1' : 'text-left lg:order-2'}`}>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-1">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4.5. Gallery Slider --- */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Disaster Relief Gallery</h2>
          <div className="relative max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div 
              className="flex transition-transform duration-700" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {MOCK_DATA.galleryImages.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0 h-96">
                  <img 
                    src={src} 
                    alt={`Relief Operation Photo ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4.6. Operations Timeline (Simplified) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Major Relief Operations</h2>
          <div className="relative max-w-5xl mx-auto space-y-8">
            {MOCK_DATA.majorOperations.map((op) => (
              <div key={op.year} className="relative pl-12 border-l-4 border-red-600 group">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-red-600 border-4 border-white transform -translate-x-1/2 group-hover:bg-red-700 transition"></div>
                <p className="text-sm uppercase tracking-widest text-red-600 font-semibold">{op.year}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1 mb-3">{op.title}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {op.keyContributions.map((contribution, i) => (
                    <li key={i}>{contribution}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4.7. Relief Pack & Testimonials (Two Columns) --- */}
      <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* What Goes Into a Relief Pack? */}
              <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2 border-red-200">What Goes Into a Relief Pack?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {MOCK_DATA.reliefPackContents.map((item) => (
                          <div key={item.name} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                              <span className="text-2xl pt-0.5 flex-shrink-0 text-red-600">{item.iconClass}</span>
                              <span className="text-md font-medium text-gray-700">{item.name}</span>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Voices From the Field */}
              <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2 border-red-200">Voices From the Field</h2>
                  <div className="space-y-6">
                      {MOCK_DATA.testimonials.map((t, index) => (
                          <div key={index} className="p-6 rounded-lg bg-white shadow-xl">
                              {t.source === 'quote' ? (
                                  <>
                                      <blockquote className="italic text-gray-700 text-lg mb-3">"{t.content}"</blockquote>
                                      <p className="font-semibold text-sm text-red-600 text-right">- {t.person}</p>
                                  </>
                              ) : (
                                  <div className="aspect-video">
                                      <iframe 
                                          className="w-full h-full rounded-lg"
                                          src={t.url} 
                                          title={t.content} 
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                          allowFullScreen
                                      ></iframe>
                                  </div>
                              )}
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* --- 4.8. Long-Term Vision --- */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">Long-Term Vision: Building Community Resilience</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {MOCK_DATA.longTermVision.map((vision, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-800 rounded-xl shadow-xl transition transform hover:bg-gray-700"
              >
                <div className="text-3xl text-red-400 mb-3">{index + 1}</div>
                <p className="text-lg font-medium">{vision}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4.9. Footer --- */}
      <footer className="bg-red-700 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">&copy; 2025 Natural Disaster Relief Program. Rebuilding Hope with Dignity.</p>
        </div>
      </footer>
    </div>
  );
};

export default DisasterReliefPage;