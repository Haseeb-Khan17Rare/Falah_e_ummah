import { FaCheckCircle, FaLaptopCode, FaPalette, FaMobileAlt, FaDesktop, FaBookOpen } from "react-icons/fa";



// Mapping emojis to professional React Icons for visual consistency
const courseIcons = {
  "💻": FaLaptopCode,
  "🎨": FaPalette,
  "📱": FaMobileAlt,
  "🖥️": FaDesktop,
  "📘": FaBookOpen,
};
type CourseIconKey = keyof typeof courseIcons;
const Education = () => {
  const courses: { title: string; icon: CourseIconKey; description: string }[] = [
    { title: "Basic Computer Skills", icon: "💻", description: "Foundational digital literacy and software proficiency for the workplace." },
    { title: "Graphic Design", icon: "🎨", description: "Mastery of visual communication tools to create compelling branding and marketing assets." },
    { title: "Online Marketing & Social Media", icon: "📱", description: "Strategies for digital engagement, content creation, and market expansion." },
    { title: "IT Support Skills", icon: "🖥️", description: "Hands-on training in diagnosing, troubleshooting, and maintaining computer systems." },
    { title: "Other Market-Driven Training", icon: "📘", description: "Flexible programs based on current economic demands, ensuring high relevance." },
  ];

  const benefits = [
    "Youth and adults gain certified, <strong>employable skills</strong> in high-demand fields.",
    "Learners can pursue remote work opportunities and <strong>establish freelance careers</strong>.",
    "Individuals can start <strong>home-based services, small businesses</strong>, or specialized work.",
    "Communities benefit from a <strong>more skilled and capable workforce</strong> driving local development.",
    "Breaking the cycle of unemployment and creating <strong>sustainable, long-term income</strong> opportunities.",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(99, 102, 241) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Heading & Project Overview */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-red-600 bg-indigo-50 px-4 py-2 rounded-full uppercase tracking-wider">
              Empowering Futures
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Skill-Based Education <span className="text-red-600">Project</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-red-600 rounded"></div>
            <div className="h-1 w-8 bg-red-400 rounded"></div>
            <div className="h-1 w-4 bg-red-300 rounded"></div>
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            The Education Project provides accessible, skill-based training to equip youth and adults
            with practical, certified abilities that significantly increase their chances of employment and income generation.
            Our goal is to break the cycle of unemployment by offering courses aligned with current market
            needs and future job trends.
          </p>
        </div>

        {/* Courses Section - Grid Layout */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Specialized Courses & Training Tracks
          </h3>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Industry-aligned programs designed to build real-world skills and open doors to meaningful careers
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => {
              const IconComponent = courseIcons[course.icon as CourseIconKey];
              return (
                <div
                  key={idx}
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-5">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white text-2xl shadow-lg group-hover:shadow-red-300 transition-shadow duration-300">
                      <IconComponent />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{course.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact & Why it Matters Section - Split Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-10 lg:p-16 rounded-3xl shadow-xl border border-gray-100">
          {/* Left Column: Image/Illustration */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-purple-500 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1581091215369-59d2f17f8e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VlfHx8fHx8Mnx8MTY5OTY5ODQ3Mw&ixlib=rb-4.0.3&q=80&w=600"
                alt="Professional Education Illustration"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Right Column: Benefits List */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Driving Long-Term Socio-Economic Impact
            </h3>
            <p className="text-gray-500 mb-8">Measurable outcomes that transform lives and communities</p>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-50 to-transparent rounded-xl hover:from-red-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mt-0.5">
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                  <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: benefit }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action/Closing Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-300 p-12 rounded-3xl shadow-2xl">
            <h4 className="text-3xl font-bold text-white mb-4">
              Invest in Human Capital
            </h4>
            <p className="text-indigo-100 text-lg leading-relaxed mb-6">
              Your commitment to this project is an investment in human potential. Support from our donors helps us expand these critical opportunities, creating brighter, more secure futures for hundreds of learners each year.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Support This Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;