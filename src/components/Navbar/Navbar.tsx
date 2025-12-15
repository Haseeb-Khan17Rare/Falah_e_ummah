import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpeg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaSearch,
  FaChevronDown, // Added for visual dropdown indicator
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<number | null>(null);

  const menuItems = [
    { label: "Home", path: "/", dropdown: [] },
    {
      label: "About Us",
      path: "/about",
      dropdown: [
        { label: "Vision", path: "/vision" },
        { label: "Mission", path: "/mission" },
        { label: "History", path: "/history" },
        { label: "Careers (paid roles)", path: "/Career" },
        { label: "Volunteer (info + volunteer form)", path: "/volunteer" },
        { label: "Partner With Us", path: "/partner" },
        { label: "Standards & Codes of Conduct", path: "/standards" },
        { label: "Feedback Form", path: "/feedback" },
      ],
    },
    {
      label: "Our Projects",
      path: "/Our_Projects",
      dropdown: [
        { label: "Social Business Project", path: "/social" },
        { label: "Dastkari Project", path: "/Dastkari" },
        { label: "Education Project", path: "/education" },
        { label: "Health Camps", path: "/health" },
        { label: "Blood Donation Drive", path: "/blood" },
        { label: "Winter Drive", path: "/winter" },
        { label: "Natural Disaster Relief", path: "/Natural" },
        { label: "Ramadan Projects", path: "/ramadan" },
      ],
    },
    {
      label: "Stories",
      path: "/stories",
      dropdown: [
        { label: "Live Impact Tracker", path: "/stories/impact" },
        { label: "Blogs", path: "/stories/blogs" },
        { label: "Stories of people whose lives have changed", path: "/stories/lives" },
        { label: "Volunteer Experiences", path: "/stories/volunteer" },
        { label: "DonationJar", path: "/stories/DonationJar" },
      ],
    },
    {
      label: "How To Donate",
      path: "/donate",
      dropdown: [
        { label: "Bank Account Details", path: "/Bank" },
        { label: "Become a Regular Donor", path: "/Donor" },
        { label: "Sponsor an Orphan", path: "/Orphan" },
        { label: "Sponsor a Project", path: "/Projects" },
      ],
    },
    { label: "Contact Us", path: "/contact", dropdown: [] },
  ];

  return (
    // Used shadow-lg for a slightly more defined, floating appearance
    <div className="w-full shadow-lg relative z-50 bg-white"> 
      
      {/* TOP BAR - Increased professionalism with subtle background and text sizes */}
      <div className="w-full bg-red-600 text-xs sm:text-[13px] border-b border-red-700 hidden sm:flex justify-between items-center px-4 sm:px-6 xl:px-8 py-2 font-medium">
        <div className="flex items-center gap-2 text-white/90">
          <HiOutlineMail size={16} />
          <span className="truncate">falaheummat2020@gmail.com</span>
        </div>

        <p className="text-white font-semibold text-center flex-1 mx-4 italic hidden lg:block">
            Your charity can save life, donate to save life
        </p>

        <div className="flex items-center gap-3 text-white">
          <a href="#" aria-label="Facebook" className="hover:text-white/70 transition duration-200"><FaFacebookF size={14} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white/70 transition duration-200"><FaTwitter size={14} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-white/70 transition duration-200"><FaInstagram size={14} /></a>
          <a href="#" aria-label="Pinterest" className="hover:text-white/70 transition duration-200"><FaPinterestP size={14} /></a>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full bg-white px-4 sm:px-6 xl:px-8 py-3 flex justify-between items-center relative">
        {/* LOGO */}
        <Link to="/" className="flex-shrink-0">
          <img src={Logo} alt="Falah e Ummah" className="w-16 sm:w-20 lg:w-24 h-auto" />
        </Link>

        {/* DESKTOP MENU - Cleaner font, tighter spacing, visible hover */}
        <ul className="hidden xl:flex gap-8 text-gray-800 font-semibold text-[15px] relative items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer"
              onMouseEnter={() => setDropdown(index)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link 
                to={item.path} 
                className="flex items-center gap-1 transition duration-200 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1"
              >
                {item.label}
                {item.dropdown.length > 0 && (
                    <FaChevronDown size={8} className={`ml-1 transition-transform duration-300 ${dropdown === index ? 'rotate-180 text-red-600' : 'text-gray-500'}`} />
                )}
              </Link>

              {/* DROPDOWN - Sharper shadow, cleaner list style */}
              {item.dropdown.length > 0 && dropdown === index && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg py-3 px-0 flex flex-col gap-1 text-gray-700 normal-case z-50 min-w-[240px] border border-gray-100 animate-slide-down">
                    <style>{`
                        /* Simple keyframes for a professional appearance */
                        @keyframes slide-down {
                            from { opacity: 0; transform: translateY(-10px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        .animate-slide-down {
                            animation: slide-down 0.2s ease-out forwards;
                        }
                    `}</style>
                  {item.dropdown.map((sub, i) => (
                    <Link 
                      key={i} 
                      to={sub.path} 
                      className="px-4 py-2 hover:bg-gray-50 hover:text-red-600 cursor-pointer whitespace-nowrap text-[14px] transition duration-200"
                      onClick={() => setDropdown(null)} 
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* SEARCH & DONATE */}
        <div className="flex items-center gap-4 lg:gap-6">
            <FaSearch size={18} className="hidden lg:block text-gray-600 cursor-pointer hover:text-red-600 transition duration-200" />
            
            {/* Professional Donate Button */}
            <Link 
                to="/donate" 
                className="bg-red-600 text-white px-5 py-2 text-sm font-extrabold rounded-full shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105 uppercase tracking-wider"
            >
                Donate
            </Link>
        </div>


        {/* MOBILE HAMBURGER - Cleaner lines and animation */}
        <div
          className="xl:hidden flex flex-col gap-[5px] cursor-pointer ml-4"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <div className={`w-7 h-[3px] bg-gray-800 transition-all duration-300 ${open ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
          <div className={`w-7 h-[3px] bg-gray-800 transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-7 h-[3px] bg-gray-800 transition-all duration-300 ${open ? '-rotate-45 translate-y-[-8px]' : ''}`}></div>
        </div>
      </div>

      {/* MOBILE MENU - Clean slide-down from the top */}
      <div 
        className={`xl:hidden bg-white absolute top-full w-full shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ transitionProperty: 'max-height, opacity' }} // Explicit transition property for better control
      >
        <div className="px-6 pb-6 text-gray-800 font-semibold uppercase text-sm space-y-2 overflow-y-auto max-h-[70vh]">
          {menuItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-b-0">
              <Link 
                to={item.path} 
                className="flex justify-between items-center py-3 hover:text-red-600 transition duration-200" 
                onClick={() => {
                    // Toggle dropdown for mobile if it has sub-items
                    if (item.dropdown.length > 0) {
                        setDropdown(dropdown === idx ? null : idx);
                    } else {
                        setOpen(false); // Close mobile menu if it's a direct link
                        setDropdown(null);
                    }
                }}
              >
                {item.label}
                {item.dropdown.length > 0 && (
                    <FaChevronDown size={10} className={`text-gray-500 transition-transform duration-300 ${dropdown === idx ? 'rotate-180' : ''}`} />
                )}
              </Link>
              
              {/* MOBILE DROPDOWN - Smooth visibility toggle */}
              {item.dropdown.length > 0 && (
                <div 
                    className={`ml-4 text-gray-600 normal-case text-[13px] space-y-2 transition-all duration-300 ease-in-out ${dropdown === idx ? 'max-h-96 py-2 opacity-100' : 'max-h-0 opacity-0 py-0 overflow-hidden'}`}
                    style={{ transitionProperty: 'max-height, opacity, padding' }}
                >
                  {item.dropdown.map((sub, s) => (
                    <Link 
                      key={s} 
                      to={sub.path} 
                      className="block hover:text-red-600 transition duration-200"
                      onClick={() => setOpen(false)} 
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile search icon at the bottom */}
          <div className="pt-4 border-t border-gray-100">
            <FaSearch size={18} className="text-gray-700 cursor-pointer hover:text-red-600 transition duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;