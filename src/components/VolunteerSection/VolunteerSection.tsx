import React from "react";
import Child2 from './Child2.jpg'
import Causes from "../Causes/Causes";
const VolunteerSection: React.FC = () => {
  return (
    <>
    <section className="w-full flex flex-col md:flex-row min-h-screen">
      {/* LEFT SIDE IMAGE */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto">
        <img
          src={Child2}
          alt="Child smiling in water"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full md:w-1/2 bg-red-500 text-white p-10 md:p-16 flex flex-col justify-center">
        <p className="italic text-lg">give your hand</p>
        <h1 className="text-4xl font-bold mt-2 mb-10">
          BECOME A VOLUNTEER
        </h1>

        {/* FORM */}
        <form className="space-y-8">
          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white focus:outline-none"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm mb-2">E-mail</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">City</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white focus:outline-none"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-black text-white font-bold px-6 py-3 rounded shadow hover:bg-red-500 transition"
          >
            SUBMIT NOW
          </button>

          {/* CHECKBOX SECTION */}
          <label className="flex items-start gap-3 text-sm leading-5 mt-4">
            <input type="checkbox" className="mt-1" />
            <span>
              Quam vulputate vehicula. Interdum blandit a aenean rhoncus,
              faucibus amet nullam a faucibus. Iaculis vesti
            </span>
          </label>
        </form>
      </div>
    </section>
    <Causes/>
    </>
  );
};

export default VolunteerSection;
