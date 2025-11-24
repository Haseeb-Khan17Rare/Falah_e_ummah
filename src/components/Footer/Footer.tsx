import type { FC } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaCheckCircle,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer
      className="relative text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('/your-image.jpg')`,
      }}
    >
      <div className="bg-black/70 w-full h-full">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ----- LOGO + TEXT ----- */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Charity Hand" className="h-10" />
              <span className="text-2xl font-bold">
                Charity <span className="text-red-400">Hand</span>
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, nulla fermentum, mollis ac lectus nulla,
              vel neque, risus non nunc dis lectus, ac id porttitor vulputate donec
              sed. Et commodo, turpis porttitor ligula maecenas luctus lorem. Lobortis.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-xl">
              <FaFacebookF className="hover:text-red-400 cursor-pointer" />
              <FaTwitter className="hover:text-red-400 cursor-pointer" />
              <FaInstagram className="hover:text-red-400 cursor-pointer" />
              <FaPinterestP className="hover:text-red-400 cursor-pointer" />
            </div>
          </div>

          {/* ----- QUICK LINKS ----- */}
          <div>
            <h3 className="font-semibold text-lg mb-4">QUICK LINKS</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-red-400" /> Support Forums
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-red-400" /> Faq & Help Center
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-red-400" /> About Us
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-red-400" /> Register And Account
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-red-400" /> Service And Help
              </li>
            </ul>
          </div>

          {/* ----- OFFICE INFO ----- */}
          <div>
            <h3 className="font-semibold text-lg mb-4">OFFICE INFO</h3>

            <ul className="space-y-3 text-sm">
              <li>
                Monday To Friday 10:00 AM To 07:00 PM
              </li>
              <li>Closed</li>
              <li>All Sunday</li>
              <li>All Branch Of Company</li>
            </ul>
          </div>

          {/* ----- NEWSLETTER ----- */}
          <div>
            <h3 className="font-semibold text-lg mb-4">NEWSLETTER</h3>
            <p className="text-sm text-gray-300 mb-4">
              Sign up for our mailing list to get latest updates and offers
            </p>

            <div className="flex bg-white rounded overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-black outline-none"
              />
              <button className="bg-red-500 px-6 text-white font-semibold hover:bg-red-600">
                Go
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-3">
              We respect your advice
            </p>
          </div>
        </div>

        {/* ----- COPYRIGHT ----- */}
        <div className="border-t border-white/20 py-4 mt-10 text-center text-sm text-gray-300">
          © 2025 <span className="text-red-400">ThemeEarth</span>,
          Designed by <span className="text-red-400">Istiyak Ahmed</span>
        </div>

        {/* Scroll-To-Top Button */}
        <button
          className="fixed bottom-6 right-6 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-xl hover:bg-green-600"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>

      </div>
    </footer>
  );
};

export default Footer;
