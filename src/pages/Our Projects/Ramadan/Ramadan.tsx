import React from "react";

const Ramadan: React.FC = () => {
  const programs = [
    {
      title: "Iftar Distribution",
      description: "Providing meals to fasting individuals in need during Ramadan.",
      icon: "🍽️",
    },
    {
      title: "Zakat & Sadaqah Support",
      description: "Facilitating donations to help the underprivileged during Ramadan.",
      icon: "💰",
    },
    {
      title: "Ramadan Education",
      description: "Organizing religious and educational sessions for children and adults.",
      icon: "📖",
    },
    {
      title: "Community Events",
      description: "Engaging the community through charity events and gatherings.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-24 bg-purple-50">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-purple-800">Ramadan Initiatives</h2>
        <p className="text-gray-700">
          Celebrate the spirit of giving during Ramadan by participating in our initiatives and making a real impact.
        </p>
      </div>

      {/* Program Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {programs.map((program, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition text-center"
          >
            <div className="text-4xl mb-4">{program.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
            <p className="text-gray-700">{program.description}</p>
            <button className="mt-4 w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
              Participate Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ramadan;
