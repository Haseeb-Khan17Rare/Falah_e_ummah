import React from "react";

const StandardsTimeline: React.FC = () => {
  const data = [
    "Prepared Protocols",
    "Verification Stage",
    "Quality Testing",
    "Approval",
  ];

  return (
    <section className="py-20 bg-blue-50">
      <h2 className="text-center text-4xl font-bold mb-14">Quality Standards Process</h2>

      <div className="max-w-4xl mx-auto relative">
        <div className="w-full h-1 bg-blue-300 rounded"></div>

        <div className="flex justify-between mt-6">
          {data.map((step, i) => (
            <div key={i} className="w-40 text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto"></div>
              <p className="mt-4 font-semibold text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardsTimeline;
