import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      name: "Hamza Ali",
      role: "Volunteer Coordinator",
      experience: "Coordinated 50+ volunteers for the winter drive, ensuring smooth distribution of supplies.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    },
    {
      name: "Fatima Noor",
      role: "Field Volunteer",
      experience: "Helped organize and deliver food packages to underprivileged families in remote areas.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    },
    {
      name: "Zain Khan",
      role: "Event Volunteer",
      experience: "Assisted in setting up community education workshops and managing participants.",
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    },
  ];

  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-green-800">Volunteer Experiences</h2>
        <p className="text-gray-700">
          Learn from our volunteers’ experiences and see how their contributions make a real impact.
        </p>
      </div>

      {/* Volunteer Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {experiences.map((volunteer, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            <img
              src={volunteer.image}
              alt={volunteer.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-1">{volunteer.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{volunteer.role}</p>
            <p className="text-gray-700">{volunteer.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
