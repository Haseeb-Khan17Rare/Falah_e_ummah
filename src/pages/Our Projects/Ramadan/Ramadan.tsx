import React, { useState, useEffect, useRef } from 'react';

// --- 1. TypeScript Interfaces ---
interface PackContent {
  name: string;
  icon: string; // Emoji/icon placeholder
}

interface ImpactMetric {
  count: number;
  label: string;
  unit: string;
}

interface ProgramDetail {
    title: string;
    details: string[];
}

interface RamadanStep {
  step: number;
  title: string;
  description: string;
}

// --- 2. Mock Data ---
const MOCK_DATA = {
  overview: {
    mission: 'No home should remain without food. No table should remain empty at Maghrib.',
    description: "Ramadan is a month of mercy, generosity, and compassion. Our Ramadan Drive ensures that families facing financial hardship are able to fast with dignity, break their fast with ease, and experience the blessings of this sacred month without worry.",
  },
  rationContents: [
    { name: 'Flour', icon: '🌾' },
    { name: 'Rice', icon: '🍚' },
    { name: 'Lentils (daal)', icon: '🥣' },
    { name: 'Cooking oil', icon: '🫗' },
    { name: 'Tea & Sugar', icon: '☕' },
    { name: 'Dates', icon: '🌴' },
    { name: 'Spices & Basic Groceries', icon: '🌶️' },
    { name: 'Rooh Afza / Sharbat', icon: '🍹' },
  ] as PackContent[],
  supportReasons: [
    { text: 'A stress-free month', icon: '✔' },
    { text: 'Ability to fast comfortably', icon: '✔' },
    { text: 'Food security', icon: '✔' },
    { text: 'A chance to enjoy Ramadan like everyone else', icon: '✔' },
  ] as { text: string; icon: string }[],
  iftarMeals: [
    'Dates',
    'Fruit chaat',
    'Pakoras / samosas',
    'Rice or biryani',
    'Water & sharbat',
  ],
  impactMetrics: [
    { count: 1000, label: 'Ration Bags Distributed', unit: '+' },
    { count: 9000, label: 'Iftar Meals Beneficiaries', unit: '+' },
    { count: 100, label: 'Community Dastarkhawns Arranged', unit: '+' },
    { count: 400, label: 'Families Supported Every Ramadan', unit: '+' },
  ] as ImpactMetric[],
  operationSteps: [
    { step: 1, title: 'Planning & Procurement', description: 'Essentials purchased in bulk for cost-effectiveness.' },
    { step: 2, title: 'Ration Packing', description: 'Volunteers prepare uniform bags with equal items.' },
    { step: 3, title: 'Distribution', description: 'Delivered to the most deserving families.' },
    { step: 4, title: 'Iftar Preparation', description: 'Meals cooked fresh with hygiene and care.' },
    { step: 5, title: 'Serving', description: 'Volunteers set up dastarkhawns and serve with respect.' },
    { step: 6, title: 'Monitoring & Reporting', description: 'Full transparency and accountability.' },
  ] as RamadanStep[],
  galleryImages: [
    'https://via.placeholder.com/1200x500/A00000/FFFFFF?text=Ration+Distribution+Event',
    'https://via.placeholder.com/1200x500/B00000/FFFFFF?text=Iftar+Dastarkhwan+Gathering',
    'https://via.placeholder.com/1200x500/C00000/FFFFFF?text=Volunteers+Packing+Kits',
  ],
  longTermVision: [
    { title: 'Monthly Ration Support', details: ['Ensuring basic food security outside Ramadan.'] },
    { title: 'Seasonal Food Drives', details: ['Targeted support during peak hardship months.'] },
    { title: 'Eid Support Programs', details: ['Helping families celebrate Eid with joy and dignity.'] },
  ] as ProgramDetail[],
};

// --- Custom Hook for Counting Animation ---
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

// --- Main Component ---
const RamadanProjectPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = MOCK_DATA.galleryImages.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); 
    return () => clearInterval(timer);
  }, [totalSlides]);


  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* --- 4.1. Header/Hero Section (Red Banner) --- */}
      <header className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x800/A00000/FFFFFF?text=Ramadan+Lanterns+Background)' }}>
        {/* Overlay for depth and text contrast */}
        <div className="absolute inset-0 bg-red-800 bg-opacity-80 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-6xl lg:text-8xl font-black mb-4 tracking-tighter drop-shadow-lg">
              Ramadan Projects
            </h1>
            <p className="text-2xl font-light italic max-w-4xl mx-auto border-t-2 border-white pt-4">
              {MOCK_DATA.overview.mission}
            </p>
            <a href="#impact" className="mt-10 inline-block bg-white text-red-700 font-bold py-3 px-10 rounded-full text-lg shadow-2xl hover:bg-red-50 transition duration-300 transform hover:scale-105">
                View Our Impact
            </a>
          </div>
        </div>
      </header>

      {/* --- 4.2. Overview & Main Projects (Two Column) --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Project Overview */}
            <div className="lg:col-span-1 p-6 bg-white shadow-xl rounded-xl border-t-4 border-red-600">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Project Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {MOCK_DATA.overview.description}
                </p>
                <div className="text-red-700 font-semibold text-lg italic">
                    Our mission: {MOCK_DATA.overview.mission}
                </div>
            </div>

            {/* Ramadan Ration Distribution */}
            <div className="lg:col-span-2 p-6 bg-white shadow-xl rounded-xl border-t-4 border-red-600">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">1. Ramadan Ration Distribution</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Ration Contents */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-red-600 border-b pb-1">Ration Pack Includes:</h3>
                        <ul className="space-y-2 text-gray-700">
                            {MOCK_DATA.rationContents.map(item => (
                                <li key={item.name} className="flex items-center space-x-2">
                                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Who We Support */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-red-600 border-b pb-1">Who We Support:</h3>
                        <ul className="space-y-2 text-gray-700">
                            {['Widows', 'Orphans', 'Labourers & daily wage families', 'Ultra-poor households', 'Remote-area families'].map(item => (
                                <li key={item} className="flex items-center space-x-2">
                                    <span className="text-red-600 font-bold flex-shrink-0">★</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Why This Matters */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-red-600 border-b pb-1">Why This Matters:</h3>
                        <ul className="space-y-2 text-gray-700">
                            {MOCK_DATA.supportReasons.map(item => (
                                <li key={item.text} className="flex items-center space-x-2">
                                    <span className="text-green-600 font-bold flex-shrink-0">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- 4.3. Iftar Dastarkhawns --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">2. Iftar Dastarkhawns</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Details & Locations */}
                <div className="p-6 bg-red-50 rounded-xl shadow-md">
                    <p className="text-lg mb-6 text-gray-700">
                        Our Iftar Dastarkhawn Program provides warm, fresh iftar meals to communities where people struggle to afford daily food.
                    </p>
                    
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3 text-red-700">Meals Typically Include:</h3>
                        <div className="flex flex-wrap gap-4">
                            {MOCK_DATA.iftarMeals.map(meal => (
                                <span key={meal} className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium shadow-md">
                                    {meal}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-red-700">Where We Arrange Dastarkhawns:</h3>
                        <ul className="grid grid-cols-2 gap-y-2 list-disc list-inside text-gray-700">
                            {['Labour colonies', 'Orphanages', 'Masajid', 'Areas affected by poverty or seasonal unemployment'].map(loc => <li key={loc}>{loc}</li>)}
                        </ul>
                    </div>
                </div>

                {/* Impact Points */}
                <div className="p-6 bg-red-100 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-red-700">Impact of Iftar Dastarkhawns:</h3>
                    <ul className="space-y-4 text-lg text-gray-800">
                        <li className="flex items-center space-x-3"><span className="text-3xl text-red-600">🤝</span><span>Create unity and joy in the community.</span></li>
                        <li className="flex items-center space-x-3"><span className="text-3xl text-red-600">✨</span><span>Bring dignity to those struggling during the month.</span></li>
                        <li className="flex items-center space-x-3"><span className="text-3xl text-red-600">🔗</span><span>Strengthen community bonds through shared meals.</span></li>
                        <li className="flex items-center space-x-3"><span className="text-3xl text-red-600">🌙</span><span>Ensure everyone breaks their fast with a warm, fresh meal.</span></li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* --- 4.4. Ramadan Impact Counters --- */}
      <section id="impact" className="py-20 bg-red-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Ramadan Impact (So Far)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {MOCK_DATA.impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 md:p-8 bg-white text-red-800 rounded-xl shadow-xl text-center border-b-4 border-red-500 transition hover:shadow-2xl"
              >
                <p className="text-5xl lg:text-6xl font-extrabold mb-2">
                  {useCountUp(metric.count)}
                  {metric.unit}
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4.5. How We Operate During Ramadan (Step Visuals) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">How We Operate During Ramadan</h2>
          
          <div className="relative grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {/* Horizontal Line Connector (Desktop) */}
            <div className="hidden lg:block absolute inset-y-1/2 left-4 right-4 h-1 bg-red-200"></div>

            {MOCK_DATA.operationSteps.map((step, index) => (
              <div key={step.step} className="text-center relative z-10 p-4">
                {/* Step Number/Icon */}
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-3xl shadow-xl border-4 border-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4.6. Ramadan Gallery Section --- */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Ramadan Gallery Section</h2>
          <div className="relative max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div 
              className="flex transition-transform duration-700" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {MOCK_DATA.galleryImages.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0 h-96">
                  <img 
                    src={src} 
                    alt={`Ramadan Project Photo ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
            
            {/* Dots */}
            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                {MOCK_DATA.galleryImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors shadow ${currentSlide === index ? 'bg-red-600' : 'bg-white bg-opacity-70'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4.7. Voices of Gratitude & Long-Term Vision --- */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Voices of Gratitude (Placeholder) */}
              <div className="p-8 bg-red-50 rounded-xl shadow-lg border-l-8 border-red-600">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Voices of Gratitude</h2>
                  <blockquote className="italic text-lg text-gray-700 border-l-4 border-red-400 pl-4">
                      "Receiving the ration bag meant we didn't have to worry about Sehri and Iftar. It brought immense peace to our Ramadan. May Allah reward the donors."
                  </blockquote>
                  <p className="mt-4 font-semibold text-red-600 text-right">- A Beneficiary Family</p>
                  <p className="mt-6 text-sm text-gray-500">
                      (Space reserved for actual video clips/graphics of testimonials)
                  </p>
              </div>

              {/* Long-Term Vision */}
              <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Long-Term Vision</h2>
                  <p className="text-lg text-gray-600 mb-8">
                      Our aim is not only to serve in Ramadan but to ensure **year-round food security** for vulnerable families through:
                  </p>
                  <div className="space-y-6">
                      {MOCK_DATA.longTermVision.map((program, index) => (
                          <div 
                              key={index} 
                              className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border-b-2 border-red-200 transition hover:shadow-lg"
                          >
                              <div className="text-3xl text-red-600 flex-shrink-0">
                                  {index === 0 ? '🗓️' : index === 1 ? '🍎' : '🕌'} 
                              </div>
                              <div>
                                  <h3 className="text-xl font-semibold text-red-700">{program.title}</h3>
                                  <p className="text-gray-600">{program.details[0]}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* --- 4.8. Footer --- */}
      <footer className="bg-red-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">&copy; 2025 Ramadan Projects. Generosity in the Sacred Month.</p>
        </div>
      </footer>
    </div>
  );
};

export default RamadanProjectPage;