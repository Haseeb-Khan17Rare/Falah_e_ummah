import { FaSeedling, FaWater, FaHandsHelping, FaBullhorn, FaLeaf } from "react-icons/fa";
import Image from "./Children.jpg"; // replace with your image

const Causes = () => {
  return (
    <section className="bg-gray-100 py-14 px-6 md:px-20">
      
      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT BIG CARD */}
        <div className="lg:col-span-2 bg-white rounded shadow">
          <img src={Image} alt="" className="w-full h-64 object-cover rounded-t" />

          <div className="p-6">
            <p className="text-gray-600 mb-4">
              We work with people who give their all to improve their living conditions.
              We support them with sustainable concepts and strong partnerships.
            </p>

            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold">
              Read more →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="flex flex-col gap-6">

          <div className="bg-white rounded shadow p-6 flex items-center gap-4">
            <FaLeaf className="text-green-500 text-3xl" />
            <p className="font-semibold">End Hunger →</p>
          </div>

          <div className="bg-white rounded shadow p-6 flex items-center gap-4">
            <FaWater className="text-blue-500 text-3xl" />
            <p className="font-semibold">Water, Sanitation & Hygiene →</p>
          </div>

        </div>
      </div>

      {/* BOTTOM CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

        <div className="bg-white rounded shadow p-6 text-center">
          <FaSeedling className="text-green-600 text-3xl mx-auto mb-3" />
          <p className="font-semibold">Agriculture →</p>
        </div>

        <div className="bg-white rounded shadow p-6 text-center">
          <FaLeaf className="text-orange-500 text-3xl mx-auto mb-3" />
          <p className="font-semibold">Climate Crisis →</p>
        </div>

        <div className="bg-white rounded shadow p-6 text-center">
          <FaBullhorn className="text-yellow-500 text-3xl mx-auto mb-3" />
          <p className="font-semibold">Civil Society →</p>
        </div>

        <div className="bg-white rounded shadow p-6 text-center">
          <FaHandsHelping className="text-red-500 text-3xl mx-auto mb-3" />
          <p className="font-semibold">Humanitarian Assistance →</p>
        </div>

      </div>
    
    </section>
  );
};

export default Causes;
