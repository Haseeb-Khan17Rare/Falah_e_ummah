import React from "react";

const History: React.FC = () => {
  const timeline = [
    {
      year: "2014",
      text: "Founded with a mission to support communities.",
    },
    {
      year: "2016",
      text: "Started major outreach and social projects.",
    },
    {
      year: "2019",
      text: "Recognized by national welfare authorities.",
    },
    {
      year: "2022",
      text: "Reached over 100,000 beneficiaries.",
    },
  ];

  return (
    <div className="w-full py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Our Journey
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-bold text-blue-600">{item.year}</h3>
            <p className="text-gray-700 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
