import type { FC } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <section
      className="relative text-white bg-cover bg-center py-20"
      style={{
        backgroundImage: `url('/your-image.jpg')`,
      }}
    >
      <div className="bg-black/70 w-full h-full py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ---------- LEFT : CONTACT INFO ----------- */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              CONTACT <span className="text-red-400">US</span>
            </h2>

            <p className="text-gray-300 mb-6 max-w-md">
              Feel free to reach out for any inquiries, support, or collaboration.
              We’re always here to help.
            </p>

            <ul className="space-y-4 text-gray-300 text-lg">

              {/* Email */}
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-400 text-2xl" />
                <span>contact@charityhand.org</span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-400 text-2xl" />
                <span>+1 234 567 890</span>
              </li>

              {/* Social Icons */}
              <li className="mt-6 flex gap-4 text-xl">
                <FaFacebookF className="hover:text-red-400 cursor-pointer" />
                <FaTwitter className="hover:text-red-400 cursor-pointer" />
                <FaInstagram className="hover:text-red-400 cursor-pointer" />
                <FaPinterestP className="hover:text-red-400 cursor-pointer" />
              </li>
            </ul>
          </div>

          {/* ---------- RIGHT : GOOGLE MAP ----------- */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434510502!2d144.95373531531532!3d-37.8162797420136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1df1afd%3A0xa784a2dacf7d1cf0!2sVictoria%20State%20Library!5e0!3m2!1sen!2sus!4v1633959085692!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
