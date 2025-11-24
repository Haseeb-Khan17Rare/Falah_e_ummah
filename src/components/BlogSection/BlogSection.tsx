import Footer from '../Footer/Footer'
export default function BlogSection() {
  return (
    <>
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* TITLE */}
        <h2 className="text-3xl font-bold tracking-wide">OUR BLOG POST</h2>

        {/* GREEN LINE */}
        <div className="w-16 h-1 bg-red-500 mx-auto mt-3"></div>

        {/* SUB TEXT */}
        <p className="text-gray-600 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque suscipit
          donec, tortor duis phasellus vivamus wisi placerat, pellenteseque augue leo.
          Orci nullam, nonummy nam sed, sapien temporibus ac ac, velit ante volutpat enim
        </p>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md">
            ALL
          </button>

          <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700">
            TOP NEWS
          </button>

          <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700">
            LATEST NEWS
          </button>

          <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700">
            EVENT NEWS
          </button>

          <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700">
            OTHERS
          </button>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">

          <img
            src="https://i.ibb.co/6ym3G0R/water1.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-md"
          />

          <img
            src="https://i.ibb.co/w4H9k6r/water2.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-md"
          />

          <img
            src="https://i.ibb.co/g6Kq2TZ/water3.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-md"
          />

          <img
            src="https://i.ibb.co/BGJGzZs/children1.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-md"
          />

          <img
            src="https://i.ibb.co/PY4b0zZ/children2.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-md"
          />

          <img
            src="https://i.ibb.co/0CRHvZ3/children3.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-md"
          />

        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
