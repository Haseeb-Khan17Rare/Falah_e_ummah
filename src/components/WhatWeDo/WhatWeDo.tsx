import Volunteers from "../Volunteer/Volunteers";

const WhatWeDo = () => {
    return (
      <>
      <section
        className="relative w-full py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
  
        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center text-white px-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
            WHAT WE DO IN HERE
          </h2>
  
          {/* Green underline */}
          <div className="w-20 h-1 bg-red-500 mx-auto mt-3 mb-6"></div>
  
          {/* Subtitle */}
          <p className="text-sm md:text-base text-gray-300 mb-12 leading-relaxed">
            Lorem ipsum dolor sit amet, sed ac orci aliquam laoreet natoque,
            adipiscing et eu faucibus diam ligula sem, purus sit molestie.
            <br />
            Ligula vivamus arcu qui quis tortor in, massa portti.
          </p>
  
          {/* 6 items grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
            {/* ITEM 1 */}
            <div className="text-center">
              <h4 className="font-semibold tracking-wide">
                <span className="text-red-400">01. </span>COLLECT DONATION
              </h4>
            </div>
  
            {/* ITEM 2 */}
            <div className="text-center">
              <h4 className="font-semibold tracking-wide">
                <span className="text-red-400">02. </span>HELP FOR EDUCATION
              </h4>
            </div>
  
            {/* ITEM 3 */}
            <div className="text-center">
              <h4 className="font-semibold tracking-wide">
                <span className="text-red-400">03. </span>SCHOLARSHIP
              </h4>
            </div>
  
            {/* ITEM 4 */}
            <div className="text-center">
              <h4 className="font-semibold tracking-wide">
                <span className="text-red-400">04. </span>COLLECT DONATION
              </h4>
            </div>
  
            {/* ITEM 5 */}
            <div className="text-center">
              <h4 className="font-semibold tracking-wide">
                <span className="text-red-400">05. </span>HELP FOR EDUCATION
              </h4>
            </div>
  
            {/* ITEM 6 */}
            <div className="text-center">
              <h4 className="font-semibold tracking-wide">
                <span className="text-red-400">06. </span>SCHOLARSHIP
              </h4>
            </div>
          </div>
        </div>
      </section>
      <Volunteers/>
      </>
    );
  };
  
  export default WhatWeDo;
  