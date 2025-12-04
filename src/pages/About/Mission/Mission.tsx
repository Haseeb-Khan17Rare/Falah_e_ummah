const Mission5 = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Mission</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Built on three strong foundations.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        
        <div className="p-8 bg-white shadow-lg rounded-2xl text-center">
          <div className="text-5xl mb-4">🤝</div>
          <h3 className="text-xl font-bold">Support</h3>
          <p className="text-gray-600 mt-2">Strengthening lives through care and guidance.</p>
        </div>

        <div className="p-8 bg-white shadow-lg rounded-2xl text-center">
          <div className="text-5xl mb-4">📘</div>
          <h3 className="text-xl font-bold">Education</h3>
          <p className="text-gray-600 mt-2">Creating paths to learning and growth.</p>
        </div>

        <div className="p-8 bg-white shadow-lg rounded-2xl text-center">
          <div className="text-5xl mb-4">🌱</div>
          <h3 className="text-xl font-bold">Sustainability</h3>
          <p className="text-gray-600 mt-2">Ensuring long-lasting community impact.</p>
        </div>

      </div>
    </section>
  );
};

export default Mission5;
