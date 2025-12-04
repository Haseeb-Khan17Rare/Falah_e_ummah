export default function VolunteerSection() {
  const roles = [
    "Event Management & On-Ground Support",
    "Community Outreach & Surveys",
    "Photography / Videography / Media Coverage",
    "Graphic Design & Social Media Assistance",
    "Education Support (tutoring, workshops)",
    "Dastakari Center Assistance",
    "Verification & Case Handling Support",
    "Documentation & Reporting",
  ];

  const benefits = [
    "Work with a registered welfare organization",
    "Certificates & recommendation letters",
    "Learn practical skills (media, management, teaching)",
    "Networking with skilled professionals",
    "Priority in future paid roles",
    "Real social impact experience",
  ];

  return (
    <>
      {/* ---------------------------------------------------------
        HERO SECTION (UNCHANGED)
      ----------------------------------------------------------- */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center flex items-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="text-white max-w-md">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Become a Volunteer
            </h2>
            <p className="text-sm leading-relaxed">
              Join hands with Falah-e-Ummat Welfare Foundation to make a real
              difference in education, women empowerment & community uplift.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
              />
              <textarea
                placeholder="Why do you want to volunteer?"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm h-20 focus:ring-2 focus:red-red-500 outline-none"
              ></textarea>
              <button className="bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
        NEW SECTION 1 — MODERN ABOUT VOLUNTEERING
      ----------------------------------------------------------- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Why Volunteer With Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Volunteers are the backbone of our mission. Whether you have skills or
            just passion to help, you can create real impact.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Serve Community</h3>
              <p className="text-gray-600 text-sm">
                Be part of projects that directly uplift people in need.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Build Skills</h3>
              <p className="text-gray-600 text-sm">
                Gain real-world experience in management, media, fieldwork & more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Grow Leadership</h3>
              <p className="text-gray-600 text-sm">
                Lead initiatives and work with a committed and passionate team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
        NEW SECTION 2 — VOLUNTEER ROLES (NEW DESIGN)
      ----------------------------------------------------------- */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Volunteer Roles</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <div
                key={i}
                className="bg-white p-5 border rounded-xl shadow-sm hover:shadow-md transition flex items-start gap-3"
              >
                <div className="w-3 h-3 bg-red-600 rounded-full mt-1"></div>
                <p className="text-gray-700">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
        NEW SECTION 3 — BENEFITS (ATTRACTIVE GRID)
      ----------------------------------------------------------- */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Volunteer Benefits</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
              >
                <p className="text-gray-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
        CTA
      ----------------------------------------------------------- */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Join our volunteer community and help uplift thousands of lives through
          service and compassion.
        </p>

        <button className="bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition">
          Become a Volunteer
        </button>
      </section>
    </>
  );
}
