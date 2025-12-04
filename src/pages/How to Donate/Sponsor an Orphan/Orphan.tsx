import React from "react";

const SponsorOrphan: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Info */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Sponsor an Orphan</h2>
          <p className="text-gray-700">
            Make a lasting difference in a child’s life. By sponsoring an orphan, you provide education, healthcare, and a brighter future.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Monthly support for education and food</li>
            <li>Regular progress updates</li>
            <li>Direct impact on a child’s life</li>
          </ul>
        </div>

        {/* Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Sponsor Now</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border p-3 rounded" />
            <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
            <input type="number" placeholder="Monthly Sponsorship ($)" className="w-full border p-3 rounded" />
            <button className="w-full py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
              Sponsor a Child
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SponsorOrphan;
