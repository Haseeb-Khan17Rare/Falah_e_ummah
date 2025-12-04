import React from "react";
import { FaCheckCircle, FaStethoscope, FaEye, FaTooth, FaHeartbeat, FaUserMd, FaPills, FaHandHoldingHeart } from "react-icons/fa";

const serviceIcons = {
  stethoscope: FaStethoscope,
  eye: FaEye,
  tooth: FaTooth,
  heartbeat: FaHeartbeat,
  doctor: FaUserMd,
  pills: FaPills,
};

const Health: React.FC = () => {
  const services = [
    { title: "General Medical Checkups", icon: "stethoscope", description: "Comprehensive health assessments and primary care consultations by qualified physicians." },
    { title: "Vision Screening & Referrals", icon: "eye", description: "Professional vision testing, screening for common eye diseases, and referral services." },
    { title: "Preventive Dental Care", icon: "tooth", description: "Oral health examinations, cleanings, and essential education on dental hygiene." },
    { title: "Non-Communicable Disease Screening", icon: "heartbeat", description: "Vital health monitoring, including blood pressure and sugar testing for early detection." },
    { title: "Health Education & Counselling", icon: "doctor", description: "Expert guidance on sanitation, disease prevention, nutrition, and healthy living practices." },
    { title: "Essential Medicines & Supplements", icon: "pills", description: "Distribution of necessary, basic medication and vitamin supplements when available." },
  ];

  const impacts = [
    "Identifying **undiagnosed chronic and acute health issues early**, enabling timely treatment and saving lives.",
    "Providing **immediate care and professional medical guidance** to vulnerable populations lacking access.",
    "Educating communities on **hygiene, endemic disease prevention, and family health planning**.",
    "Reducing the strain on overburdened local hospitals by managing **preventable illnesses** at the community level.",
    "Restoring **hope, dignity, and productivity** by addressing health barriers to income and education.",
  ];

  return (
    <section className="py-24 bg-gray-50">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Heading & Project Overview */}
        <div className="text-center mb-20">
          <FaHandHoldingHeart className="mx-auto text-5xl text-red-700 mb-4" />
          <p className="text-sm font-semibold text-red-700 mb-2 uppercase tracking-widest">
            GLOBAL HEALTH INITIATIVE
          </p>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Community Health <span className="text-red-700">Camps</span>
          </h2>
          <div className="h-1 w-24 bg-red-700 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-4xl mx-auto text-xl leading-relaxed">
            Our specialized Health Camps deliver essential medical services to vulnerable, underserved, and remote communities, 
            bridging the critical gap where permanent healthcare is limited or financially inaccessible.
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed mt-4">
            We mobilize qualified volunteer healthcare professionals — including **physicians, nurses, optometrists, and dental staff** — to ensure that all services are delivered at the highest standard, **completely free of cost.**
          </p>
        </div>

        {/* Services Section - Modern Card Layout */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Core Medical Services Provided
          </h3>
          <p className="text-gray-500 text-center mb-12 max-w-3xl mx-auto text-lg">
            Our multi-disciplinary approach ensures comprehensive care addressing both immediate and long-term health needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-xl shadow-md border-t-4 border-red-200 hover:border-red-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 text-3xl text-red-700 bg-red-100 p-3 rounded-lg group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                      <IconComponent />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mt-1">{service.title}</h4>
                  </div>
                  <p className="text-gray-600 ml-14 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Section - Alternate Image/Text Layout */}
        <div className="bg-white p-10 lg:p-16 rounded-3xl shadow-2xl border border-red-100">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Measurable Impact and Value
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image with Gradient Overlay */}
            <div className="flex justify-center">
              <div className="relative rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Healthcare professionals at medical camp"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle dark gradient overlay for visual depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
              </div>
            </div>

            {/* Right Column: Impact Points */}
            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-6 border-b border-red-100 pb-3">
                Core Outcomes: Transforming Community Health
              </h4>
              <div className="space-y-5">
                {impacts.map((impact, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <FaCheckCircle className="text-red-700 text-xl flex-shrink-0 mt-1.5" />
                    <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: impact }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action - Elevated Section */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto bg-white-900 p-12 rounded-3xl shadow-2xl">
            <h4 className="text-3xl font-extrabold text-black mb-4">
              Mobilize Critical Medical Resources
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Every contribution funds essential supplies, medication, and logistical support needed to deploy a full medical team. **Your donation directly saves lives.**
            </p>
            <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors duration-300 shadow-xl shadow-red-500/50">
              Support Health Camps Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Health;