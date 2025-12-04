import Umar from './Umar.jpeg'
import Shehzad from './Shehzad.jpeg'
import Aqib from './Aqib.jpeg'
import Asim from './Asim.jpeg'
import Hammad from './Hammad.jpeg'
import Shahzeb from './Shahzeb.jpeg'
import Usama from './Usama.jpeg'
import Shabir from './Shabir.jpeg'
import Syed from './Syed.jpeg'
import Usman from './Usman.jpeg'
import Abdulwasay from './Abdul.jpeg'

import Founders from '../Founders/Founders'

import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const volunteers = [
  {
    name: "Usama Khan Baber ",
    role: "Vice President",
    img: Usama,
  },
  {
    name: "Shahzeb ",
    role: "Co-President",
    img: Shahzeb,
  },
  {
    name: "Muhammad Hammad ",
    role: "President ",
    img: Hammad,
  },
  {
    name: "Shabir Hussain Shah ",
    role: "Chairman",
    img: Shabir,
  },
  {
    name: "Muhammad Asim",
    role: "Vice Chairman ",
    img: Asim,
  },
  {
    name: "Syed Umerzaib Shah",
    role: "Vice Chairman ",
    img: Syed,
  },
  {
    name: "Umar Jahangir ",
    role: "Finance Secretary ",
    img: Umar,
  },
  {
    name: "Shehzad Ahmed ",
    role: "Vice Chairman ",
    img: Shehzad,
  },
  {
    name: "Abdul Waseh ",
    role: "Co Finance Secretary  ",
    img: Abdulwasay,
  },
  {
    name: "Muhammad Aqib ",
    role: "Press Secretary   ",
    img: Aqib,
  },
  {
    name: "Usman Bashir  ",
    role: "Office Secretary ",
    img: Usman,
  },
]; 
const Volunteers = () => {
  return (
    <>
    <section className="py-20 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold uppercase">
        MEET OUR Team 
      </h2>

      {/* Green underline */}
      <div className="w-20 h-1 bg-red-500 mx-auto mt-3 mb-6"></div>

      {/* Description */}
      <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base mb-14">
        Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque suscipit
        donec, tortor duis phasellus vivamus wisi placerat, pellentesque augue
        leo. <br />
        Orci nullam, nonummy nam sed, sapien temporibus ac ac, velit ante
        volutpat enim <span className="text-red-600 font-semibold">
          we help 22,4780 people
        </span>
      </p>

      {/* Volunteer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
        {volunteers.map((v, i) => (
          <div key={i} className="shadow-md pb-6">
            <img
              src={v.img}
              alt={v.name}
              className="w-full h-72 object-cover"
            />

            <h3 className="mt-4 font-semibold">{v.name}</h3>
            <p className="text-gray-500 text-sm">{v.role}</p>

            {/* Social Box */}
            <div className="mt-6 bg-red-500 py-3 flex justify-center gap-6 text-white text-lg">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaPinterestP />
            </div>
          </div>
        ))}
      </div>
    </section>
    <Founders/>
    </>
  );
};

export default Volunteers;
