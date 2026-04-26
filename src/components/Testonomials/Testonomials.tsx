import BlogSection from '../BlogSection/BlogSection';
import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { 
  PencilSquareIcon, 
  ArrowUpRightIcon, 
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

const ProjectReviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('relevant');

  // Sample data array for easy management
  const reviews = [
    {
      id: 1,
      name: "Jameson Locke",
      role: "Executive Director",
      date: "Oct 24, 2025",
      text: "The integration process was seamless. What impressed me most was the granular level of reporting available. It’s not just a tool; it’s a strategic advantage for our outreach team.",
      helpfulCount: 24
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Operations Manager",
      date: "Nov 12, 2025",
      text: "Incredible support and a very intuitive interface. Our team was up and running in less than a week. Highly recommended for growing organizations.",
      helpfulCount: 18
    }
  ];

  return (
    <>
      <section className="bg-[#FAF9F6] py-24 px-6 lg:px-8 font-sans">
        <div className="max-w-6xl mx-auto">
          
          {/* --- Header & Filters --- */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div>
              <h2 className="text-4xl font-medium tracking-tight text-gray-900">User Testimonials</h2>
              <p className="mt-2 text-gray-500">Real feedback from our global community.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
              <div className="flex bg-gray-100 p-1 rounded-full text-sm font-medium">
                {['relevant', 'recent'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full capitalize transition-all ${
                      activeTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all shadow-lg shadow-red-200">
                <PencilSquareIcon className="h-5 w-5" />
                <span>Share Review</span>
              </button>
            </div>
          </div>

          {/* --- The Testimonial Feed --- */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="group bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 hover:border-red-200 transition-all duration-500">
                <div className="flex flex-col gap-6">
                  {/* Author Info */}
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 text-red-500" />
                      ))}
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                      {review.name} <CheckBadgeIcon className="h-5 w-5 text-blue-500" />
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">{review.role}</p>
                    <span className="bg-green-50 text-green-700 text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full border border-green-100">
                      Verified Purchase
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-xl text-gray-700 leading-relaxed font-light italic">
                      "{review.text}"
                    </p>
                    <div className="mt-8 flex items-center justify-between border-t border-gray-50 pt-6">
                      <span className="text-gray-400 text-sm">Published {review.date}</span>
                      <button className="text-gray-400 hover:text-red-600 flex items-center gap-2 text-sm font-medium transition-colors">
                        Helpful? ({review.helpfulCount}) <ArrowUpRightIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moved BlogSection outside the main section for better spacing */}
      <BlogSection />
    </>
  );
};

export default ProjectReviewSection;