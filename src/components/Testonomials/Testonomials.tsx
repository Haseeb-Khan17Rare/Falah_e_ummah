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

  const stats = [
    { label: 'Average Rating', value: '4.9', sub: 'Out of 5' },
    { label: 'Response Rate', value: '98%', sub: 'Within 24hrs' },
    { label: 'Recommendations', value: '1.2k', sub: 'Verified users' },
  ];

  return (
    <section className="bg-[#FAF9F6] py-24 px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Top Tier: Impact Metrics --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-16 rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-10 flex flex-col items-center border-r last:border-r-0 border-gray-100">
              <span className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-2">{stat.label}</span>
              <span className="text-5xl font-light text-gray-900 mb-1">{stat.value}</span>
              <span className="text-gray-400 text-sm">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* --- Mid Tier: Header & Filters --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <h2 className="text-4xl font-medium tracking-tight text-gray-900">User Testimonials</h2>
            <p className="mt-2 text-gray-500">Real feedback from our global community.</p>
          </div>
          
          <div className="flex items-center gap-4 w-full lg:w-auto">
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

        {/* --- Bottom Tier: The Feed --- */}
        <div className="space-y-6">
          {[1, 2].map((review) => (
            <div key={review} className="group bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 hover:border-red-200 transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Author Info */}
                <div className="md:w-1/4">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-red-500" />
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                    Jameson Locke <CheckBadgeIcon className="h-5 w-5 text-blue-500" />
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">Executive Director</p>
                  <span className="bg-green-50 text-green-700 text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full border border-green-100">
                    Verified Purchase
                  </span>
                </div>

                {/* Content */}
                <div className="md:w-3/4">
                  <p className="text-xl text-gray-700 leading-relaxed font-light italic">
                    "The integration process was seamless. What impressed me most was the granular level of reporting available. It’s not just a tool; it’s a strategic advantage for our outreach team."
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Published Oct 24, 2025</span>
                    <button className="text-gray-400 hover:text-red-600 flex items-center gap-2 text-sm font-medium transition-colors">
                      Helpful? (24) <ArrowUpRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <BlogSection/>
    </section>
  );
};

export default ProjectReviewSection;