import DonationsHelp from "../DonationsHelp/DonationsHelp.tsx";
import { FaWallet, FaUsers, FaRunning } from "react-icons/fa";

const Impact = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center py-20">
      
      {/* HEADER SECTION - Now transparent with refined spacing */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-20 mb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
          Efficiency & impact of your donation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="group transition-transform hover:scale-105">
            <FaWallet className="text-5xl mx-auto mb-6 text-red-500" />
            <h3 className="text-4xl font-black text-gray-900">4x</h3>
            <p className="mt-4 text-gray-600 leading-relaxed uppercase tracking-wide text-xs font-bold">
              We quadruple your donation <br /> through grants →
            </p>
          </div>

          <div className="group transition-transform hover:scale-105">
            <FaUsers className="text-5xl mx-auto mb-6 text-red-500" />
            <h3 className="text-4xl font-black text-gray-900">649</h3>
            <p className="mt-4 text-gray-600 leading-relaxed uppercase tracking-wide text-xs font-bold">
              funded projects in 2024 →
            </p>
          </div>

          <div className="group transition-transform hover:scale-105">
            <FaRunning className="text-5xl mx-auto mb-6 text-red-500" />
            <h3 className="text-4xl font-black text-gray-900">18.7m</h3>
            <p className="mt-4 text-gray-600 leading-relaxed uppercase tracking-wide text-xs font-bold">
              people supported in 2024 →
            </p>
          </div>
        </div>
      </div>

      {/* DETAIL SECTION - Removed gray bg, added subtle border or clean white look */}
      <div className="max-w-6xl mx-auto w-full px-6 md:px-20">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT CIRCLE */}
          <div className="flex justify-center">
            <div className="w-56 h-56 rounded-full border-[12px] border-red-500 flex flex-col items-center justify-center shadow-inner">
              <h3 className="text-4xl font-black text-red-500">90.9%</h3>
              <p className="text-[10px] uppercase font-bold text-gray-500 mt-2 tracking-widest text-center px-4">
                direct project impact
              </p>
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Your donation goes to people in need
            </h3>

            <div className="space-y-4">
              <p className="flex items-center text-sm font-medium text-gray-700">
                <span className="w-2 h-2 rounded-full bg-red-600 mr-3"></span>
                <span className="font-bold text-red-600 mr-2">2.5%</span> project support abroad
              </p>

              <p className="flex items-center text-sm font-medium text-gray-700">
                <span className="w-2 h-2 rounded-full bg-yellow-500 mr-3"></span>
                <span className="font-bold text-yellow-500 mr-2">0.8%</span> campaigning & education
              </p>

              <p className="flex items-center text-sm font-medium text-gray-700">
                <span className="w-2 h-2 rounded-full bg-purple-500 mr-3"></span>
                <span className="font-bold text-purple-500 mr-2">3.5%</span> advertising & PR
              </p>

              <p className="flex items-center text-sm font-medium text-gray-700">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                <span className="font-bold text-blue-500 mr-2">2.3%</span> administration
              </p>
            </div>

            <button className="mt-8 w-full md:w-auto bg-red-500 hover:bg-black text-white px-10 py-4 rounded-full font-bold transition-colors duration-300">
              More on the use of funds
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <DonationsHelp />
      </div>
    </section>
  );
};

export default Impact;