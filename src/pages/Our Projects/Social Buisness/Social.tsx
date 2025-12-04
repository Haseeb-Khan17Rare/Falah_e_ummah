import React from "react";
import { 
  FaHandHoldingUsd, 
  FaChartLine, 
  FaStore, 
  FaUsers, 
  FaCheckCircle, 
  FaSyncAlt, 
  FaClipboardCheck, 
  FaMoneyBillWave,
  FaUtensils 
} from "react-icons/fa";

// Mapping icons for business types
const businessIcons = {
  stall: FaStore,
  food: FaUtensils, 
  roadside: FaUtensils,
  kiosk: FaStore,
  delivery: FaUsers,
  other: FaMoneyBillWave,
};

const SocialBusinessDifferent: React.FC = () => {
  const businessTypes = [
    { name: "Fruit or refreshment stalls", icon: 'stall' },
    { name: "Tikka stands and small food carts", icon: 'food' },
    { name: "Roadside food outlets", icon: 'roadside' },
    { name: "Tea/coffee kiosks", icon: 'kiosk' },
    { name: "Delivery-based home canteens (often run by women preparing meals for local offices)", icon: 'delivery' },
    { name: "Other practical, income-generating ideas suited to their skills and local needs", icon: 'other' },
  ];

  const benefits = [
    "**Sustainable Job Creation:** Focus on long-term employment through self-owned ventures, mitigating reliance on temporary aid.",
    "**Financial Inclusion:** Provision of targeted seed capital (PKR 50,000 to PKR 100,000) tailored to specific micro-business needs.",
    "**Accountability & Growth:** Implementation of structured mentorship, including weekly and monthly performance reviews.",
    "**Community Reinvestment Model:** Establishment of the PKR 1,000 monthly contribution as a non-repayment, revolving fund, ensuring perpetual sustainability.",
    "**Dignity & Independence:** Empowering deserving individuals to achieve financial autonomy and uplift their families.",
  ];

  return (
    // Uses a light background with strong shadows for the blocks
    <section className="py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Heading & Project Mandate */}
        <div className="text-center mb-16">
          <FaHandHoldingUsd className="mx-auto text-6xl text-red-700 mb-4" /> 
          <p className="text-lg font-semibold text-gray-600 mb-2 uppercase tracking-widest">
            Investment in Long-Term Autonomy
          </p>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Small Business <span className="text-red-700">Project</span>
          </h2>
          <div className="h-1 w-24 bg-red-700 mx-auto mb-8"></div>

          <p className="text-gray-700 max-w-5xl mx-auto text-xl leading-relaxed">
            The **Social Business Project** provides verified individuals with the essential **financial support (PKR 50k - 100k)**, training, and guidance to launch their own profitable micro-businesses, ensuring a systemic break from the cycle of poverty.
          </p>
        </div>

        {/* Financial Snapshot & Business Examples (Side-by-Side Cards) */}
        <div className="mb-20 grid lg:grid-cols-2 gap-8">
            
            {/* Left Card: Financials & Commitment */}
            <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-red-700">
                <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-2">Our Commitment</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Targeted Start-Up Capital</h3>
                <div className="flex items-center space-x-6">
                    <FaMoneyBillWave className="text-5xl text-red-600 flex-shrink-0" />
                    <div>
                        <p className="text-4xl font-extrabold text-gray-900 leading-none">PKR 50,000 - 100,000</p>
                        <p className="text-base text-gray-600 mt-1">Provided per individual, based on verified business type.</p>
                    </div>
                </div>
                <p className="text-gray-700 text-sm mt-6">
                    **Goal:** To create sustainable employment, not temporary relief. Individuals receive comprehensive planning and budgeting support.
                </p>
            </div>

            {/* Right Card: Business Scope */}
            <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-red-700">
                <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-2">Business Scope</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Viable Micro-Enterprise Models</h3>
                <ul className="space-y-2 text-gray-700">
                    {businessTypes.slice(0, 3).map((type, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaStore className="text-red-600 text-md mr-3 mt-1 flex-shrink-0" />
                        <span className="font-medium">{type.name}</span>
                      </li>
                    ))}
                    <li className="flex items-start">
                        <FaCheckCircle className="text-red-600 text-md mr-3 mt-1 flex-shrink-0" />
                        <span className="italic text-sm">And other practical, income-generating ideas suited to local needs...</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* How the Program Works - Linear, Step-by-Step Focus */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            The Three Pillars of Program Success
          </h3>
          <div className="relative">
            {/* Vertical Red Connector Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-200 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-3 gap-12">
            
              {/* Step 1: Initial Setup */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500 lg:text-center">
                <div className="text-5xl text-red-700 mb-4 mx-auto lg:w-fit">
                  <FaHandHoldingUsd />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">1. Initial Setup & Guidance</h4>
                <p className="text-gray-600 text-sm">
                  Recipients receive capital and hands-on guidance to plan, budget, and establish operations for guaranteed long-term viability.
                </p>
              </div>

              {/* Step 2: Support & Monitoring */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500 lg:text-center">
                <div className="text-5xl text-red-700 mb-4 mx-auto lg:w-fit">
                  <FaChartLine />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">2. Structured Mentorship & Review</h4>
                <p className="text-gray-600 text-sm">
                  Accountability is ensured via **Weekly check-ins (first 3 months)** and subsequent monthly reviews, providing essential, practical business advice.
                </p>
              </div>

              {/* Step 3: Giving Back */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500 lg:text-center">
                <div className="text-5xl text-red-700 mb-4 mx-auto lg:w-fit">
                  <FaSyncAlt />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">3. Community Reinvestment</h4>
                <p className="text-gray-600 text-sm">
                  A **PKR 1,000 monthly contribution** creates the revolving fund, perpetually funding the next deserving entrepreneur and expanding the chain of empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Project Matters - Impact Section (Bullet Focus) */}
        <div className="bg-gray-100 p-10 lg:p-16 rounded-3xl border border-red-200">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Why This Project Matters
            </h3>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto text-center mb-10">
                Talented, hardworking individuals simply lack the initial resources for financial independence. This project provides the crucial starting push, giving them dignity, stability, and a genuine chance at long-term success.
            </p>
            
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                        <FaCheckCircle className="text-red-700 text-lg flex-shrink-0 mt-1" />
                        <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: benefit }} />
                    </div>
                ))}
            </div>
        </div>
        
        {/* Call to Action - Highlighted Footer */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto bg-red-700 p-12 rounded-xl shadow-2xl shadow-red-500/50">
            <h4 className="text-3xl font-extrabold text-white mb-4">
              Invest in Perpetual Empowerment
            </h4>
            <p className="text-red-100 text-lg leading-relaxed mb-8">
              Your support expands this cycle of opportunity, ensuring the community reinvestment model continues to launch new entrepreneurs every month.
            </p>
            <button className="bg-white text-red-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors duration-300 shadow-xl">
              Support the Initiative
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialBusinessDifferent;