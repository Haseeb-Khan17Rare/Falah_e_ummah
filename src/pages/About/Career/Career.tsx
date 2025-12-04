export default function CareersSection() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-red-900 to-red-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Careers at Falah-e-Ummat Welfare Foundation
          </h1>
          <p className="mt-4 text-lg max-w-2xl opacity-90">
            Join a mission-driven team dedicated to empowering communities,
            supporting widows and orphans, and creating long-term sustainable
            change.
          </p>
        </div>
      </section>

      {/* ABOUT WORK SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-900">
              Why Work With Us?
            </h2>
            <p className="mb-4 leading-relaxed">
              At Falah-e-Ummat Welfare Foundation, we are building a team of
              passionate, skilled and mission-driven individuals committed to
              uplifting communities and enabling self-reliance.
            </p>

            <ul className="space-y-3 mt-6">
              {[
                "Be part of a purpose-driven organisation making real impact.",
                "Respectful, supportive and growth-focused work environment.",
                "Opportunities for leadership, skill development and learning.",
                "Contribute directly to projects that transform lives.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="text-red-700 text-xl">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Who We’re Looking For
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "Individuals with honesty, discipline and strong work ethics.",
                "People who believe in compassion, transparency and service.",
                "Those who value teamwork and constant self-improvement.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                >
                  <span className="text-red-700 text-xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* APPLY SECTION */}
      <section className="py-16 px-6 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-900 mb-4">
            Ready to Apply?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Send your updated CV and a brief cover note to the following email.
            Our HR team will review your application and contact shortlisted
            candidates.
          </p>

          <a
            href="mailto:falahemmat2020@gmail.com"
            className="inline-block bg-red-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:bg-red-800 transition"
          >
            Apply Now
          </a>

          <p className="mt-4 text-gray-600">
            Email: <span className="font-semibold">falahemmat2020@gmail.com</span>
          </p>
        </div>
      </section>
    </div>
  );
}
