import React from "react";

const Winter: React.FC = () => {
  const drives = [
    {
      title: "Blanket Distribution",
      description: "Providing warm blankets to families in need during the cold season.",
      icon: "🛏️",
    },
    {
      title: "Warm Clothing",
      description: "Distributing jackets, sweaters, and scarves to the underprivileged.",
      icon: "🧥",
    },
    {
      title: "Hot Meals",
      description: "Serving nutritious hot meals to those affected by the winter cold.",
      icon: "🍲",
    },
    {
      title: "Winter Kits",
      description: "Providing full winter kits including blankets, clothes, and essentials.",
      icon: "🎁",
    },
  ];

  return (
    <section className="py-24 bg-blue-100">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">Winter Drive Initiatives</h2>
        <p className="text-gray-700">
          Help us keep communities warm this winter by participating in our winter drive initiatives.
        </p>
      </div>

      {/* Drive Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {drives.map((drive, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition text-center"
          >
            <div className="text-4xl mb-4">{drive.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{drive.title}</h3>
            <p className="text-gray-700">{drive.description}</p>
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Participate Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Winter;
