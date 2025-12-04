import React from "react";

const Live: React.FC = () => {
  const impactStats = [
    { label: "Lives Impacted", value: 12500, icon: "👨‍👩‍👧‍👦" },
    { label: "Projects Completed", value: 320, icon: "🏗️" },
    { label: "Volunteers", value: 450, icon: "🤝" },
    { label: "Funds Utilized ($)", value: 780000, icon: "💰" },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Live Impact Tracker</h2>
        <p className="text-gray-700">
          See the real-time impact of our initiatives. Every contribution makes a difference.
        </p>
      </div>

      {/* Impact Stats */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6 text-center">
        {impactStats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold mb-2">{stat.value.toLocaleString()}</h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Live;
