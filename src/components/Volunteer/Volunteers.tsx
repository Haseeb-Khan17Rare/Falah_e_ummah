import Founders from '../Founders/Founders'

import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const volunteers = [
  {
    name: "ISTIAK AHMED",
    role: "Volunteer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "ISTIAK AHMED",
    role: "Volunteer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "ISTIAK AHMED",
    role: "Volunteer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "ISTIAK AHMED",
    role: "Volunteer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
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
