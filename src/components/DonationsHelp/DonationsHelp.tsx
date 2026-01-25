
import Testonomials from '../Testonomials/Testonomials'
import { FaHandHoldingHeart, FaUsers, FaUniversity, FaGift, FaRedo } from "react-icons/fa";
import Image from '../DonationsHelp/DonationsHelp.jpg'

const DonationsHelp = () => {
  return (
    <section className="w-full">

      {/* TOP DONATION SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">

        {/* LEFT IMAGE */}
        <div>
          <img
            src={Image}
            alt="donation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-8 md:p-14">
          <h2 className="text-2xl font-bold mb-6">Your donation helps!</h2>

          {/* ONCE / MONTHLY */}
          <div className="flex items-center gap-6 mb-6">
            <label className="flex items-center gap-2">
              <input type="radio" checked readOnly />
              once
            </label>
            <label className="flex items-center gap-2 text-gray-400">
              <input type="radio" readOnly />
              monthly
            </label>
          </div>

          {/* AMOUNT BUTTONS */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <button className="border py-2">50€</button>
            <button className="border py-2">75€</button>
            <button className="border py-2 border-red-500 text-red-500 font-semibold">
              100€
            </button>
            <button className="border py-2">250€</button>
          </div>

          {/* CUSTOM AMOUNT */}
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="My Donation"
              className="border px-4 py-2 w-full"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 font-semibold rounded">
              Donate now →
            </button>
          </div>

          {/* SECURITY */}
          <p className="text-sm text-gray-500">
            🔒 SSL – Secure connection
          </p>
        </div>
      </div>

      {/* OTHER WAYS TO HELP */}
      <div className="bg-red-500 py-16 px-6 md:px-20">
        <h2 className="text-white text-3xl font-bold text-center mb-12">
          Other ways to help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <HelpCard icon={<FaHandHoldingHeart />} text="Donate on a Larger Scale" />
          <HelpCard icon={<FaUsers />} text="Corporate Partnerships" />
          <HelpCard icon={<FaUniversity />} text="Foundation Support" />
          <HelpCard icon={<FaGift />} text="Leave a Legacy" />
          <HelpCard icon={<FaRedo />} text="Endowments" />
          <HelpCard icon={<FaHandHoldingHeart />} text="Regular Donation" />

        </div>
      </div>
    <Testonomials/>
    </section>
  );
};

interface HelpCardProps {
  icon: JSX.Element;
  text: string;
}
const HelpCard: React.FC<HelpCardProps> = ({ icon, text }) => {
  return (
    <div className="bg-white p-6 rounded shadow flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-red-500 text-2xl">{icon}</span>
        <p className="font-semibold">{text}</p>
      </div>
      <span className="text-red-500 text-xl">→</span>
    </div>
  );
};

export default DonationsHelp;
