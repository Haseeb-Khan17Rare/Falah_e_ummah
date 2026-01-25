import DonationsHelp from "../DonationsHelp/DonationsHelp";
import { FaWallet, FaUsers, FaRunning } from "react-icons/fa";

const Impact = () => {
  return (
    <section className="w-full">

      {/* red SECTION */}
      <div className="bg-red-500 text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Efficiency & impact of your donation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div>
            <FaWallet className="text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold">4x</h3>
            <p className="mt-2 text-sm">
              We quadruple your donation <br /> through grants →
            </p>
          </div>

          <div>
            <FaUsers className="text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold">649</h3>
            <p className="mt-2 text-sm">
              funded projects in 2024 →
            </p>
          </div>

          <div>
            <FaRunning className="text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold">18.7m</h3>
            <p className="mt-2 text-sm">
              people supported in 2024 →
            </p>
          </div>

        </div>
      </div>

      {/* WHITE SECTION */}
      <div className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="bg-white rounded shadow p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT CIRCLE */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-full border-[10px] border-red-500 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold text-red-500">90.9%</h3>
              <p className="text-sm text-gray-600 mt-2">
                go directly into our projects
              </p>
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              Your donation goes to people in need
            </h3>

            <p className="text-sm">
              <span className="text-red-600 font-bold">2.5%</span> in project support abroad
            </p>

            <p className="text-sm">
              <span className="text-yellow-500 font-bold">0.8%</span> in campaigning, educational and awareness-raising work
            </p>

            <p className="text-sm">
              <span className="text-purple-500 font-bold">3.5%</span> in expenses for advertising and public relations
            </p>

            <p className="text-sm">
              <span className="text-blue-500 font-bold">2.3%</span> in administrative expenses
            </p>

            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold">
              More on the use of funds
            </button>
          </div>

        </div>
      </div>
    <DonationsHelp/>
    </section>
  );
};

export default Impact;
