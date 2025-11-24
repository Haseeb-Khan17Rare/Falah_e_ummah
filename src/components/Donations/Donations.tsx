import VolunteerSection from '../VolunteerSection/VolunteerSection';

import Children from './Children.jpg';

// React Icons
import { FaMoneyBillWave, FaHandsHelping, FaHandHoldingHeart } from "react-icons/fa";

const Donations = () => {
  return (
    <>
      <section className="w-full py-16 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              HOW YOU CAN HELP
            </h2>

            <div className="w-20 h-[3px] bg-red-500 mb-12"></div>

            <div className="space-y-10">

              {/* Donate Money */}
              <div className="flex items-start gap-5">
                <FaMoneyBillWave className="text-red-500 text-5xl" />
                <div>
                  <h3 className="font-bold text-lg">DONATE MONEY</h3>
                  <p className="text-gray-600">Help for poor</p>
                </div>
              </div>

              {/* Become Volunteer */}
              <div className="flex items-start gap-5">
                <FaHandsHelping className="text-red-500 text-5xl" />
                <div>
                  <h3 className="font-bold text-lg">BECOME VOLUNTEER</h3>
                  <p className="text-gray-600">Give your best services</p>
                </div>
              </div>

              {/* Sponsorship */}
              <div className="flex items-start gap-5">
                <FaHandHoldingHeart className="text-red-500 text-5xl" />
                <div>
                  <h3 className="font-bold text-lg">SPONSORSHIP</h3>
                  <p className="text-gray-600">Join with us good partner</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <img
              src={Children}
              className="w-full h-[250px] object-cover rounded"
              alt="help"
            />

            <h3 className="font-bold text-xl mt-5">HELP FOR HOMELESS CHILD</h3>

            <p className="mt-2">
              <span className="font-bold">Donation :</span>
              <span className="text-gray-700"> $ 5047 /</span>
              <span className="text-red-600 font-bold"> $ 80000</span>
            </p>

            <button className="mt-4 bg-red-500 hover:bg-black text-white px-6 py-3 font-semibold rounded">
              DONATION NOW
            </button>

            <div className="mt-6 w-full bg-gray-200 rounded-full h-4">
              <div className="bg-red-500 h-4 rounded-full" style={{ width: "35%" }}></div>
            </div>
          </div>

        </div>
      </section>

      <VolunteerSection />
    </>
  );
};

export default Donations;
