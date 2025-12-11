const Our_Projects = () => {
    return (
      <>
      <section className="w-full py-16 bg-gray-50">
  
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 px-4">
          <h2 className="text-3xl font-bold">OUR PROJECTS</h2>
  
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque suscipit donec,
            tortor duis phasellus vivamus wisi placerat. Orci nullam, nonummy nam sed.
            <span className="text-red-600 font-semibold"> we help 22,4780 people</span>
          </p>
        </div>
  
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
  
          {/* Card 1 */}
          <div className="bg-white shadow rounded-lg overflow-hidden text-center">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold uppercase mb-2">
                CLEAN WATER FOR CHILD
              </h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque suscipit donec.
              </p>
  
              <div className="flex justify-center gap-6 mt-4 text-sm text-gray-700">
                <p>Raised $7500</p>
                <p>Goal $9500</p>
              </div>
  
              <div className="flex justify-center mt-6">
                <div className="w-16 h-16 border-4 border-red-500 rounded-full flex items-center justify-center">
                  75%
                </div>
              </div>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="bg-white shadow rounded-lg overflow-hidden text-center">
            <img
              src="https://images.unsplash.com/photo-1542816417-0982f348a6c1"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold uppercase mb-2">
                HOME FOR HOMELESS CHILD
              </h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque suscipit donec.
              </p>
  
              <div className="flex justify-center gap-6 mt-4 text-sm text-gray-700">
                <p>Raised $8500</p>
                <p>Goal $9500</p>
              </div>
  
              <div className="flex justify-center mt-6">
                <div className="w-16 h-16 border-4 border-red-500 rounded-full flex items-center justify-center">
                  90%
                </div>
              </div>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white shadow rounded-lg overflow-hidden text-center">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold uppercase mb-2">
                EDUCATION FOR CHILD
              </h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque suscipit donec.
              </p>
  
              <div className="flex justify-center gap-6 mt-4 text-sm text-gray-700">
                <p>Raised $9000</p>
                <p>Goal $9500</p>
              </div>
  
              <div className="flex justify-center mt-6">
                <div className="w-16 h-16 border-4 border-red-500 rounded-full flex items-center justify-center">
                  80%
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
      </>
    );
  };
  
  export default Our_Projects;
  