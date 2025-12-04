import React from "react";

const Natural: React.FC = () => {
  const reliefPrograms = [
    {
      title: "Flood Relief",
      description: "Providing food, shelter, and medical aid to flood-affected communities.",
      icon: "🌊",
    },
    {
      title: "Earthquake Relief",
      description: "Emergency response and rebuilding support for earthquake victims.",
      icon: "🏚️",
    },
    {
      title: "Cyclone Support",
      description: "Immediate relief kits and rehabilitation for cyclone-hit areas.",
      icon: "🌪️",
    },
    {
      title: "Fire Aid",
      description: "Providing aid and resources for wildfire-affected families.",
      icon: "🔥",
    },
  ];

  return (
    <section className="py-24 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-orange-700">Natural Disaster Relief</h2>
        <p className="text-gray-700">
          Join us in supporting communities affected by natural disasters. Your help can save lives and rebuild hope.
        </p>
      </div>

      {/* Relief Programs */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {reliefPrograms.map((program, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition text-center"
          >
            <div className="text-4xl mb-4">{program.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
            <p className="text-gray-700">{program.description}</p>
            <button className="mt-4 w-full py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition">
              Support Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Natural;
