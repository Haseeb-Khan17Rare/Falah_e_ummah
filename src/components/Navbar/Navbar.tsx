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
  const [dropdown, setDropdown] = useState(null);

  const menuItems = [
    {
      label: "Home",
      dropdown: [],
    },
    {
      label: "About Us",
      dropdown: ["Vision","Mission", "History","Careers (paid roles)","Volunteer (info + volunteer form)","Partner With Us","Standards & Codes of Conduct","Contact Us","Feedback Form"],
    },
    {
      label: "Our Projects",
      dropdown: ["Social Business Project", "Dastakari Project", "Education Project", "Health Camps","Blood Donation Drive","Winter Drive","Natural Disaster Relief","Ramadan Projects"],
    },
    {
      label: "Stories",
      dropdown: ["Live Impact Tracker", "Blogs", "Stories of people whose lives have changed","Volunteer Experiences"],
    },
    {
      label: "How To Donate",
      dropdown: ["Bank Account Details", "Become a Regular Donor", "Sponsor an Orphan","Sponsor a Project"],
    },
    {
      label: "Contact Us",
      dropdown: [],
    },
  ];

  return (
    <div className="w-full shadow-md relative">
      {/* TOP BAR */}
      <div className="w-full bg-red-600 text-sm border-b hidden md:flex justify-between items-center px-6 py-2">
        <div className="flex items-center gap-2 text-white">
          <HiOutlineMail size={18} />
          <span>falaheummat2020@gmail.com</span>
        </div>

        <p className="text-white">Your charity can save life, donate to save life</p>

        <div className="flex items-center gap-4 text-white">
          <FaFacebookF size={15} />
          <FaTwitter size={15} />
          <FaInstagram size={15} />
          <FaPinterestP size={15} />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full bg-white px-6 py-4 flex justify-between items-center relative">
        {/* LOGO */}
        <img src={Logo} alt="Falah e Ummah" className="w-20 h-auto" />

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-semibold uppercase text-sm relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer hover:text-red-500"
              onMouseEnter={() => setDropdown(index)}
              onMouseLeave={() => setDropdown(null)}
            >
              {item.label}

              {/* DROPDOWN */}
              {item.dropdown.length > 0 && dropdown === index && (
                <div className="absolute left-0 mt-3 bg-white shadow-lg rounded-md py-3 px-4 flex flex-col gap-2 text-gray-600 normal-case z-50 min-w-[180px] border">
                  {item.dropdown.map((sub, i) => (
                    <p key={i} className="hover:text-red-500 cursor-pointer">
                      {sub}
                    </p>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* SEARCH ICON */}
        <FaSearch size={17} className="hidden lg:block text-gray-700 cursor-pointer" />

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

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white px-6 pb-4 text-gray-700 font-semibold uppercase text-sm space-y-4">
          {menuItems.map((item, idx) => (
            <div key={idx}>
              <p>{item.label}</p>
              {item.dropdown.length > 0 && (
                <div className="ml-4 mt-2 text-gray-500 normal-case space-y-2">
                  {item.dropdown.map((sub, s) => (
                    <p key={s}>{sub}</p>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4">
            <FaSearch size={18} className="text-gray-700 cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
