import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Dastkari: React.FC = () => {
  const crafts = [
    { title: "Handmade Rugs", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b6" },
    { title: "Wooden Carvings", image: "https://images.unsplash.com/photo-1580910051071-1de82c5aa268" },
    { title: "Pottery", image: "https://images.unsplash.com/photo-1584270354949-3ff2d4d0a81a" },
    { title: "Embroidered Textiles", image: "https://images.unsplash.com/photo-1600185366259-9e5f0b8b8d4c" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white-50 to-white-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-red-800 mb-4 tracking-wide">
            Dastakari Project
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
            The Dastakari Project is our flagship women-empowerment initiative, enabling women
            to become financially independent, confident, and self-reliant through practical
            skills training.
          </p>
        </div>

        {/* Information Sections */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* About the Centre */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-red-800 mb-4">About the Centre</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Based in Mansehra, our Dastakari Centre operates in collaboration with the local
              Social Welfare Office. Women enroll in 3-month or 6-month stitching and tailoring
              courses taught by experienced instructors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Students learn essential tailoring skills and take a formal exam at the end.
              Successful graduates receive an official certificate.
            </p>
          </div>

          {/* After Training – Opportunities */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Long-Term Earning Opportunities</h3>
            <ul className="space-y-4 text-gray-700">
              
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-red-600 mt-1" />
                <span>
                  Women begin stitching clothes from home or within their communities, creating
                  a stable source of income.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-red-600 mt-1" />
                <span>
                  Our top graduates are employed at the Dastakari Centre to complete orders such
                  as school uniforms and local business stitching projects — earning fair wages.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-red-600 mt-1" />
                <span>
                  Women who prefer remote work receive sewing machines to support income from home.
                </span>
              </li>

            </ul>
          </div>
        </div>

        {/* Closing Message */}
        <div className="bg-white-100 p-8 border border-red-300 rounded-2xl shadow-md text-center mb-24">
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-3 text-lg">
            This project supports determined women who strive to break the cycle of poverty and
            create a better future for themselves and their families.
          </p>
          <p className="font-bold text-red-900 text-lg">
            Your support helps us expand this initiative and reach more women. Together, we can
            create lasting impact.
          </p>
        </div>

        {/* Craft Cards */}
        <h3 className="text-4xl font-bold text-red-800 text-center mb-12 tracking-wide">
          Explore Our Handicrafts
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {crafts.map((craft, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden 
              hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
            >
              <img
                src={craft.image}
                alt={craft.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{craft.title}</h3>
                <button className="w-full py-2.5 bg-red-600 text-white rounded-full font-semibold 
                hover:bg-red-700 transition">
                  Support / Buy
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Dastkari;
