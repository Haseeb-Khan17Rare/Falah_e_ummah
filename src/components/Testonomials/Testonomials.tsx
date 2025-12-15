import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';

import BlogSection from "../BlogSection/BlogSection";   

interface ReviewData {
  rating: number;
  feedback: string;
}

/**
 * A professional, modern review and rating section using a distinct card layout
 * and the Red/White color scheme.
 */
const ProjectReviewSection: React.FC = () => {
  const [reviewData, setReviewData] = useState<ReviewData>({ rating: 0, feedback: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const primaryColorClass = 'text-red-600';
  const primaryBgClass = 'bg-red-600 hover:bg-red-700';
  const primaryBgLightClass = 'bg-red-50';

  const handleRatingChange = (newRating: number) => {
    setReviewData({ ...reviewData, rating: newRating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send reviewData to an API would go here.
    console.log('Review Submitted:', reviewData); 
    setIsSubmitted(true);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= reviewData.rating;
      const Star = isFilled ? StarIcon : StarIconOutline;
      
      stars.push(
        <Star
          key={i}
          className={`h-7 w-7 cursor-pointer transition duration-150 ${
            isFilled ? primaryColorClass : 'text-gray-300 hover:text-red-400'
          }`}
          onClick={() => handleRatingChange(i)}
          aria-label={`Give ${i} stars`}
        />
      );
    }
    return stars;
  };

  if (isSubmitted) {
    return (
      <div className={`max-w-3xl mx-auto mt-12 mb-20 ${primaryBgLightClass} p-8 rounded-xl text-center border-t-4 border-red-600 shadow-xl`}>
        <h3 className={`text-2xl font-bold ${primaryColorClass} mb-2`}>Thank You for your Valuable Feedback! 🙏</h3>
        <p className="text-gray-700">Your review helps us maintain transparency and improve our outreach.</p>
        <p className="mt-4 text-sm text-gray-500">You rated us **{reviewData.rating} out of 5 stars**.</p>
      </div>
    );
  }

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 pb-6">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 border-b-2 border-red-300 pb-3 inline-block">
            SHARE YOUR EXPERIENCE
          </h2>
          <p className="mt-3 text-lg text-gray-600">Your trust powers our mission. Leave a rating and review below.</p>
        </div>

        {/* --- Review Card Container --- */}
        <div className={`bg-white shadow-2xl rounded-2xl p-6 md:p-10 border border-red-100`}>
          <form onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              
              {/* --- Rating Selector (Left Column) --- */}
              <div className="md:col-span-1 text-center md:border-r border-red-100 md:pr-8 pb-6 md:pb-0">
                <h3 className={`text-xl font-semibold ${primaryColorClass} mb-3`}>
                  Rate Our Impact
                </h3>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars()}
                </div>
                <p className={`text-2xl font-bold ${primaryColorClass}`}>{reviewData.rating} / 5</p>
                {reviewData.rating === 0 && (
                  <p className="mt-1 text-sm text-red-500">Please click a star to begin.</p>
                )}
              </div>

              {/* --- Feedback Form (Right Columns) --- */}
              <div className="md:col-span-2">
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your experience:
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={5}
                  value={reviewData.feedback}
                  onChange={(e) => setReviewData({ ...reviewData, feedback: e.target.value })}
                  className="block w-full rounded-lg border border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-4 transition text-gray-700"
                  placeholder="Your feedback is confidential and helps us grow..."
                />
              </div>

            </div>
            
            {/* --- Submit Button (Full Width) --- */}
            <div className="mt-8 pt-6 border-t border-red-100 text-center">
              <button
                type="submit"
                disabled={reviewData.rating === 0}
                className={`w-full md:w-1/2 lg:w-1/3 py-3 px-6 border border-transparent rounded-full shadow-lg text-lg font-medium text-white ${primaryBgClass} focus:outline-none focus:ring-4 focus:ring-red-300 disabled:opacity-50 transition duration-200 uppercase tracking-wider`}
              >
                Submit Review
              </button>
            </div>

          </form>
        </div>
      </div>
      <BlogSection/>
    </section>
    
  );
};

export default ProjectReviewSection;