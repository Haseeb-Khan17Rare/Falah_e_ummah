import type { FC } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaWhatsapp,
  FaTwitter, // Used for X
  FaThreads,
  FaTiktok,
} from "react-icons/fa6"; // Use fa6 for the latest Threads and X icons

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
                <span>falaheummat2020@gmail.com</span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <FaPhone className="text-red-400 text-2xl" />
                <span>+92 336 5177505</span>
              </li>
            </ul>

            {/* Social Media List */}
            <ul className="mt-8 flex flex-wrap gap-6">
              <li>
                <a href="https://www.instagram.com/falaheummat?igsh=MXQ3d3psNXByZTJhbA==" target="_blank" rel="noreferrer">
                  <FaInstagram className="text-2xl text-gray-300 hover:text-red-400 transition-colors" />
                </a>
              </li>
              <li>
                <a href="YOUR_WHATSAPP_LINK" target="_blank" rel="noreferrer">
                  <FaWhatsapp className="text-2xl text-gray-300 hover:text-red-400 transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://x.com/falah_e_ummat?t=afj3vGAqZAFtri4DTy4Tdw&s=09" target="_blank" rel="noreferrer">
                  <FaTwitter className="text-2xl text-gray-300 hover:text-red-400 transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://www.threads.com/@falaheummat" target="_blank" rel="noreferrer">
                  <FaThreads className="text-2xl text-gray-300 hover:text-red-400 transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@falaheummat?_t=ZS-8vxYlrBEr3P&_r=1" target="_blank" rel="noreferrer">
                  <FaTiktok className="text-2xl text-gray-300 hover:text-red-400 transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* ---------- RIGHT : GOOGLE MAP ----------- */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.4321!2d73.0!3d33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
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