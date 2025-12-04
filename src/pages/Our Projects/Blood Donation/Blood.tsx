import React from "react";
import { FaTint, FaDatabase, FaHospital, FaClock, FaHeartbeat, FaHandHoldingHeart } from "react-icons/fa";

const BloodDonation: React.FC = () => {
  const driveFeatures = [
    { title: "Verified Donor Database", icon: FaDatabase, description: "We maintain a secure, active database categorized by blood group and recent availability." },
    { title: "Immediate Donor Mobilization", icon: FaClock, description: "Upon emergency contact, our team immediately reaches out to compatible, ready-to-donate individuals." },
    { title: "Efficient Coordination", icon: FaHospital, description: "We coordinate the entire donation process, providing guidance and logistical support to families and donors." },
    { title: "Voluntary & Safe Donations", icon: FaHandHoldingHeart, description: "All blood donations are voluntary, safe, professional, and provided entirely free of cost." },
  ];

  const impactPoints = [
    "Saving thousands of lives during **accidents, complex surgeries, and critical childbirth complications.**",
    "Providing **timely assistance** in emergencies where local blood bank resources are quickly exhausted.",
    "Bridging the critical resource gap for **low-income families** who struggle to find compatible, free donors.",
    "Ensuring the **availability of rare blood groups** through a dedicated and indexed donor network.",
    "Establishing a community culture of **voluntary, recurring donation**, building vital healthcare resilience.",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Heading & Project Overview */}
        <div className="text-center mb-20">
          <FaTint className="mx-auto text-6xl text-red-600 mb-4 animate-pulse" /> 
          <p className="text-md font-semibold text-gray-700 mb-2 uppercase tracking-widest">
            Critical Life Support
          </p>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Emergency Blood <span className="text-red-700">Donation Drive</span>
          </h2>
          <div className="h-1.5 w-32 bg-red-700 mx-auto mb-8 rounded-full"></div>

          <p className="text-gray-600 max-w-4xl mx-auto text-xl leading-relaxed">
            Our Blood Donation Drive is a vital, rapid-response network dedicated to saving lives across Mansehra and its surrounding regions. We work hand-in-hand with local hospitals, maintaining an active network of **verified, voluntary donors** ready to mobilize at a moment's notice.
          </p>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed mt-4 font-medium border-l-4 border-red-500 pl-4 py-2 bg-white shadow-sm inline-block">
            In critical emergency situations—where minutes matter—our organized system ensures that the required blood group reaches the patient quickly and efficiently.
          </p>
        </div>

        {/* How the Drive Works - Process Section */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Rapid Response Protocol
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {driveFeatures.map((feature, idx) => {
                const Icon = feature.icon; // <-- THIS LINE is required

                return (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-200 hover:border-red-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-4xl text-red-700 bg-red-100 p-3 rounded-full flex-shrink-0">
                        <Icon /> {/* use capitalized Icon here */}
                      </div>
                      <span className="text-3xl font-extrabold text-gray-300 opacity-75">{idx + 1}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                );
              })}

          </div>
        </div>

        {/* Why This Project Matters - Impact Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start bg-white p-10 lg:p-16 rounded-3xl shadow-2xl border border-red-100">
          
          {/* Left Column: Image with Gradient Mask */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1542884784-0a37e5e0544f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Blood donation process illustration"
                className="w-full h-auto object-cover"
              />
              {/* Stronger red gradient overlay for medical seriousness */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-700/50 to-transparent"></div>
            </div>
          </div>
          
          {/* Right Column: Impact Points */}
          <div className="order-1 lg:order-2">
            <h3 className="text-4xl font-bold text-gray-900 mb-8">
              Bridging the Critical Blood Gap
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              In Mansehra, the severe scarcity of blood due to poverty and limited resources turns every medical crisis into a life-or-death struggle. We eliminate this barrier by proactively managing the supply chain.
            </p>
            <div className="space-y-4">
              {impactPoints.map((impact, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                  <FaHeartbeat className="text-red-700 text-xl flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: impact }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto bg-white-900 p-12 rounded-3xl shadow-2xl">
            <h4 className="text-3xl font-extrabold text-black mb-4">
              Your Support Is The Lifeline
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Help us expand our donor network, improve our emergency communication systems, and ensure that no life is lost due to a lack of blood.
            </p>
            <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors duration-300 shadow-xl shadow-red-500/50">
              Contribute to the Drive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodDonation;