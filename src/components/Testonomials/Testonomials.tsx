import BlogSection from "../BlogSection/BlogSection";

export default function Testimonials() {
  return (
    <>
        <section className="py-20 bg-white">
          <div className="max-w-[1300px] mx-auto px-6 flex gap-16">
            
            {/* LEFT SIDE */}
            <div className="w-[40%]">
              <p className="text-red-500 font-medium mb-2">
                We are the best than any other
              </p>
    
              <h2 className="text-4xl font-bold leading-snug mb-6">
                Whats Our Donor Say <br /> About Us
              </h2>
    
              <p className="text-gray-600 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, luctus posuere semper felis consectetur
                hendrerit, enim varius enim, tellus tincidunt tellus est sed mattis,
                libero elit mi suscipit. A nulla.
              </p>
    
              <button className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded font-semibold">
                READ MORE
              </button>
            </div>
    
            {/* RIGHT SIDE – TESTIMONIAL CARDS */}
            <div className="flex gap-8 overflow-x-auto pb-4 w-[60%]">
    
              {/* CARD 1 */}
              <div className="relative bg-white w-[330px] border border-gray-200 shadow-sm rounded-md p-8 flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  className="w-16 h-16 rounded-full absolute -top-8 left-8 border-4 border-white shadow-md"
                />
                
                <h3 className="font-semibold text-lg mt-10">John Chen</h3>
                <p className="text-gray-500 text-sm">CEO</p>
    
                <span className="text-red-200 text-[100px] leading-none block mt-2 -mb-6">
                  &ldquo;
                </span>
    
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, luctus posuere semper felis consectetur
                  hendrerit, enim varius enim, tellus tincidunt tellus est sed.
                </p>
    
                <div className="mt-4 text-yellow-400 text-lg">★★★★★</div>
              </div>
    
              {/* CARD 2 */}
              <div className="relative bg-white w-[330px] border border-gray-200 shadow-sm rounded-md p-8 flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/100?img=20"
                  className="w-16 h-16 rounded-full absolute -top-8 left-8 border-4 border-white shadow-md"
                />
                
                <h3 className="font-semibold text-lg mt-10">Enrique Lores</h3>
                <p className="text-gray-500 text-sm">CEO HP</p>
    
                <span className="text-red-200 text-[100px] leading-none block mt-2 -mb-6">
                  &ldquo;
                </span>
    
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, luctus posuere semper felis consectetur
                  hendrerit, enim varius enim, tellus tincidunt tellus est sed.
                </p>
    
                <div className="mt-4 text-yellow-400 text-lg">★★★★★</div>
              </div>
    
              {/* CARD 3 */}
              <div className="relative bg-white w-[330px] border border-gray-200 shadow-sm rounded-md p-8 flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/100?img=40"
                  className="w-16 h-16 rounded-full absolute -top-8 left-8 border-4 border-white shadow-md"
                />
    
                <h3 className="font-semibold text-lg mt-10">Jason Doe</h3>
                <p className="text-gray-500 text-sm">CEO ABC</p>
    
                <span className="text-red-200 text-[100px] leading-none block mt-2 -mb-6">
                  &ldquo;
                </span>
    
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, luctus posuere semper felis consectetur
                  hendrerit.
                </p>
    
                <div className="mt-4 text-yellow-400 text-lg">★★★★☆</div>
              </div>
    
            </div>
    
          </div>
    
          {/* DOTS */}
          <div className="flex justify-center mt-10 gap-3">
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </section>
    <BlogSection/>
    </>
  );
}
