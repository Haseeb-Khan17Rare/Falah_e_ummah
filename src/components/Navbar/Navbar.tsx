import { useState } from "react";
import Logo from "./Logo.jpeg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaSearch,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full shadow-md">
      {/* -------- TOP INFO BAR -------- */}
      <div className="w-full bg-red-600 text-sm border-b hidden md:flex justify-between items-center px-6 py-2">
        <div className="flex items-center gap-2 text-white">
          <HiOutlineMail size={18} />
          <span>falaheummat2020@gmail.com</span>
        </div>

        <p className="text-white">
          Your charity can save life , so donate your donation to save life
        </p>

        <div className="flex items-center gap-4 text-white">
          <FaFacebookF size={15} />
          <FaTwitter size={15} />
          <FaInstagram size={15} />
          <FaPinterestP size={15} />
        </div>
      </div>

      {/* -------- MAIN NAVBAR -------- */}
      <div className="w-full bg-white px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Falah e Ummah" className="w-20 h-auto" />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-semibold uppercase text-sm">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">About Us</li>
          <li className="hover:text-red-500 cursor-pointer">Gallery</li>
          <li className="hover:text-red-500 cursor-pointer">Blog</li>
          <li className="hover:text-red-500 cursor-pointer">Page</li>
          
          <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
        </ul>

        {/* SEARCH ICON */}
        <div className="hidden lg:block">
          <FaSearch size={17} className="text-gray-700 cursor-pointer" />
        </div>

        {/* MOBILE HAMBURGER */}
        <div
          className="lg:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-[3px] bg-black"></div>
          <div className="w-6 h-[3px] bg-black"></div>
          <div className="w-6 h-[3px] bg-black"></div>
        </div>
      </div>

      {/* -------- MOBILE MENU -------- */}
      {open && (
        <div className="lg:hidden bg-white px-6 pb-4 text-gray-700 font-semibold uppercase text-sm space-y-4">
          <p>Home</p>
          <p>About Us</p>
          <p>Event</p>
          <p>Causes</p>
          <p>Gallery</p>
          <p>Blog</p>
          <p>Page</p>
          <p>Shop</p>
          <p>Contact Us</p>

          <div className="pt-4">
            <FaSearch size={18} className="text-gray-700 cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
