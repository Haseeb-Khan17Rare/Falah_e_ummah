import Donations from '../Donations/Donations'
import Background  from './Background.jpeg'

const Home = () => {
  return (
    <>
    <section
      className="w-full h-[90vh] bg-center bg-cover bg-no-repeat relative flex items-center"
      style={{
        backgroundImage: `url(${Background})`,
      }}>
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Content */}
      <div className=" p-3 ml-3 relative max-w-[600px] px-6 md:px-16 text-white 
     bg-white/5 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg">

        <p className="italic text-lg mb-4 tracking-wide">
        Helping the needy through empowerment
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight uppercase">
        Falah E Ummat  <br /> Welfare Foundation
        </h1>

        {/* Buttons */}
        <div className="flex gap-6 mt-10">
          <button className="bg-red-500 hover:bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm md:text-base shadow-lg">
            Donate Now
          </button>

          <button className="bg-red-500 hover:bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm md:text-base shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
    <Donations/>
    </>
  );
};

export default Home;
