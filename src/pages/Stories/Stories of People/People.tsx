import React from "react";

const People: React.FC = () => {
  const stories = [
    {
      name: "Ayesha Khan",
      role: "Beneficiary",
      quote: "Thanks to the education program, I was able to continue my studies and pursue my dreams.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    },
    {
      name: "Ali Raza",
      role: "Volunteer",
      quote: "Volunteering with this organization has been a life-changing experience. I feel proud to help communities.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    },
    {
      name: "Sara Malik",
      role: "Beneficiary",
      quote: "The winter drive kept my family warm and safe. I am forever grateful for the support.",
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    },
  ];

  return (
    <section className="py-24 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-pink-700">Stories of People</h2>
        <p className="text-gray-700">
          Real stories from real people whose lives have been positively impacted by our initiatives.
        </p>
      </div>

      {/* Story Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-1">{story.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{story.role}</p>
            <p className="text-gray-700 italic">"{story.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default People;
