import React from "react";

const Changed: React.FC = () => {
  const stories = [
    {
      name: "Amina Shah",
      story: "Through the education program, I completed my schooling and now aim to become a teacher.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    },
    {
      name: "Bilal Ahmed",
      story: "The winter drive kept my family safe and warm. I am forever grateful for the support.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    },
    {
      name: "Sara Khan",
      story: "Volunteering made me realize the power of giving back to the community and supporting those in need.",
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    },
  ];

  return (
    <section className="py-24 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-yellow-800">Whose Lives Changed</h2>
        <p className="text-gray-700">
          Real stories of people whose lives have been positively impacted by our initiatives.
        </p>
      </div>

      {/* Beneficiary Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {stories.map((person, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition text-center"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{person.name}</h3>
            <p className="text-gray-700 italic">"{person.story}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Changed;
