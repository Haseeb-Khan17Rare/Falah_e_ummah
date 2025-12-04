import React from "react";

const FeedbackForm: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1526256262350-7da7584cf5eb')",
      }}
    >
      <div className="w-[350px] md:w-[400px] p-8 rounded-2xl bg-white/20 backdrop-blur-xl shadow-xl border border-white/30">

        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Feedback Form
        </h2>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/80 outline-none border border-white/20 focus:border-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/80 outline-none border border-white/20 focus:border-white"
          />

          <select
            className="w-full px-4 py-2 rounded-lg bg-white/30 text-white outline-none border border-white/20 focus:border-white"
          >
            <option className="text-black">Rate Us</option>
            <option className="text-black">Excellent</option>
            <option className="text-black">Good</option>
            <option className="text-black">Average</option>
            <option className="text-black">Poor</option>
          </select>

          <textarea
            placeholder="Your Feedback"
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/80 outline-none border border-white/20 focus:border-white"
          />

          <button
            type="submit"
            className="w-full py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
