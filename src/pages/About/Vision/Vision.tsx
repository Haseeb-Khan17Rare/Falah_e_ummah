import React from "react";

export default function VisionSection() {
  return (
    <div className="w-full">
      {/* Vision Section */}
      <section className="w-full py-16 text-center text-white" style={{
        background: "linear-gradient(90deg, #0cc2a3, #3bb4f2)",
      }}>
        <div className="max-w-3xl mx-auto px-6">
          {/* Shape Image (Dummy) */}
          <div className="w-24 h-24 mx-auto mb-4 opacity-80">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                fill="#7fffd4"
                d="M54.2,-58.6C68.6,-44.5,78.5,-22.3,77.4,-1.2C76.2,19.9,64,39.8,49.6,56C35.3,72.3,17.6,85,-2.8,88.5C-23.1,92.1,-46.2,86.6,-59.9,70.7C-73.6,54.9,-78,28.8,-77.4,3.1C-76.9,-22.5,-71.4,-47.6,-57.7,-61.9C-44,-76.2,-22,-79.8,0.1,-79.9C22.2,-80,44.4,-77.7,54.2,-58.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Our Vision</h2>
          <p className="text-sm md:text-base max-w-xl mx-auto">
            We aim to create a sustainable future and bring innovation to every corner of life.
          </p>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-14 bg-white text-center">
        <h3 className="text-2xl font-semibold mb-10">Our Goals</h3>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
          {["Innovation", "Sustainability", "Impact"].map((item) => (
            <div
              key={item}
              className="border rounded-xl shadow-sm p-6 bg-gray-50 hover:shadow-md transition"
            >
              <h4 className="text-lg font-medium">{item}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}