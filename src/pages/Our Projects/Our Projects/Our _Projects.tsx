import React from 'react';
import { 
  CheckCircleIcon, // Community-Driven
  EyeIcon, // Transparent
  SparklesIcon, // Sustainable (Replaced non-existent LeafIcon)
  GlobeAltIcon, // Accessible
} from '@heroicons/react/24/outline';

/**
 * Renders the main content section for the "Our Impactful Projects" page
 * using a modern Red and White color scheme.
 */
const Our_Projects: React.FC = () => {
  const standOutPoints = [
    {
      title: 'Community-Driven',
      description: 'Designed with real needs in mind',
      Icon: CheckCircleIcon, 
    },
    {
      title: 'Transparent',
      description: 'Every contribution makes a visible difference',
      Icon: EyeIcon,
    },
    {
      title: 'Sustainable',
      description: 'Focus on long-term empowerment, not temporary fixes',
      Icon: SparklesIcon,
    },
    {
      title: 'Accessible',
      description: 'Support reaches deserving families without barriers',
      Icon: GlobeAltIcon,
    },
  ];

  // Define the primary color (Red-600) for consistency
  const primaryColorClass = 'text-red-600'; 
  const primaryBorderClass = 'border-red-600'; 
  const primaryBgLightClass = 'bg-red-50';

  return (
    // Use white background for the main body
    <div className="min-h-screen bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header / Title Section --- */}
        <header className="text-center mb-12 lg:mb-16">
          <h1 className={`text-4xl font-extrabold tracking-tight ${primaryColorClass} sm:text-5xl lg:text-6xl border-b-2 border-red-100 pb-2 inline-block`}>
            OUR IMPACTFUL PROJECTS
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-medium sm:text-xl">
            — MAKE A SKILFUL NATION, NOT A NATION OF BEGGARS.
          </p>
        </header>

        {/* --- Main Introduction Section (Clean, Block Layout) --- */}
        <section className={`bg-white shadow-xl border-t-4 ${primaryBorderClass} rounded-lg p-6 sm:p-8 lg:p-10 mb-12`}>
          <h2 className={`text-2xl font-bold ${primaryColorClass} mb-4 sm:text-3xl`}>
            At Falah-e-Ummat Welfare Foundation,
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              every project represents hope, dignity and positive change. We work across diverse areas of welfare to uplift communities, empower women, support students, and provide relief during times of need.
            </p>
            <p className="font-semibold">
              Our projects are carefully planned to ensure transparency, long-term impact, and real transformation for the people we serve.
            </p>
          </div>
        </section>

        {/* --- Why Our Projects Stand Out Section --- */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10 border-b border-red-300 pb-3">
            WHY OUR PROJECTS STAND OUT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standOutPoints.map(({ title, description, Icon }) => (
              <div 
                key={title}
                // Card style: White background, thin red border, subtle shadow
                className={`bg-white p-6 rounded-lg shadow-md border ${primaryBorderClass} border-opacity-30 flex flex-col items-center text-center transition duration-300 hover:shadow-lg hover:border-opacity-100`}
              >
                {/* Heroicon Rendering - Primary Red color */}
                <div className="p-3 mb-4 rounded-full bg-red-50">
                    <Icon className={`h-8 w-8 ${primaryColorClass}`} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Message to Visitors Section (Callout / Banner) --- */}
        <section className="text-center">
          <div className={`${primaryBgLightClass} p-8 rounded-xl shadow-inner border border-red-300`}>
            <h2 className={`text-xl font-bold ${primaryColorClass} mb-4 sm:text-2xl`}>
              A Message to Visitors
            </h2>
            <blockquote className="italic text-lg text-gray-700 space-y-3">
              <p>Every project carries a story.</p>
              <p>Every story carries hope.</p>
              <p className={`font-extrabold ${primaryColorClass}`}>
                And every act of kindness builds a brighter tomorrow for someone in need.
              </p>
            </blockquote>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Our_Projects;