
const data = [
  {
    title: "Flexible Schedules",
    desc: "We don’t just give charity — we build futures through sustainable, skill-based solutions.",
  },
  {
    title: "Friendly Culture",
    desc: "Women aren’t left after training — we connect them directly to real market projects like school uniforms.",
  },
  {
    title: "Learning Resources",
    desc: "Training + earning = empowerment Our women stitch, earn and stand proud — no dependency.",
  },
  {
    title: "Learning Resources",
    desc: "We set up fruit carts, shops, and more — full support, plus a return plan to keep the cycle of giving alive.",
  },
  {
    title: "Learning Resources",
    desc: "Rooted in Islamic values, we follow Jamia-style models to give practical, modern skill-based education.",
  },
  {
    title: "Learning Resources",
    desc: "We don’t stop at charity — we aim for national change, economic dignity, and unity across Pakistan.",
  },
];

export default function WorkUs() {
  return (
    <div className="bg-gray-50 py-10 w-full">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
        Why Work With Us?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
        {data.map((item, i) => (
          <div key={i} className="relative">
            {/* Red dot for 3rd card */}
            {i === 2 && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-red-500"></span>
            )}

            <div className="border border-gray-300 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-purple-600 font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
