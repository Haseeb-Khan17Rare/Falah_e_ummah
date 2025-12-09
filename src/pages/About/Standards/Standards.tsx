import React, { useState } from 'react';

interface Standard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const StandardsConduct: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const standards: Standard[] = [
    {
      id: 1,
      title: "Integrity & Honesty",
      description: "Everyone must act with fairness, truthfulness, and sincerity in all tasks, communication and decision-making.",
      icon: "⚖️"
    },
    {
      id: 2,
      title: "Respect & Dignity",
      description: "We treat every beneficiary, volunteer and team member with compassion, equality and respect, without discrimination.",
      icon: "🤝"
    },
    {
      id: 3,
      title: "Zero Tolerance for Misconduct",
      description: "Harassment, bullying, exploitation or misuse of authority is strictly prohibited.",
      icon: "🚫"
    },
    {
      id: 4,
      title: "Transparency in Work",
      description: "All work, reports and communications must be clear and honest. No hidden actions, misreporting, or manipulation of information.",
      icon: "🔍"
    },
    {
      id: 5,
      title: "Accountability & Responsibility",
      description: "Each member is responsible for completing their tasks, attending meetings on time and fulfilling commitments made to the organization.",
      icon: "✅"
    },
    {
      id: 6,
      title: "Confidentiality",
      description: "Any sensitive data, beneficiary information, financial records, internal discussions, must remain confidential unless officially authorized.",
      icon: "🔒"
    },
    {
      id: 7,
      title: "Professional Behavior",
      description: "Communication should be professional, respectful and aligned with Islamic values. No inappropriate language or behavior.",
      icon: "💼"
    },
    {
      id: 8,
      title: "No Misuse of Foundation Name",
      description: "Team members cannot use Falah-e-Ummat's name for personal benefit, political gain or unauthorized activities.",
      icon: "🏛️"
    },
    {
      id: 9,
      title: "Avoid Conflict of Interest",
      description: "Members must disclose if a decision may affect their personal relations or benefit someone they know.",
      icon: "⚠️"
    },
    {
      id: 10,
      title: "Responsible Use of Digital Platforms",
      description: "Social media posting, messaging, or sharing internal details must follow official guidelines. No sharing of incomplete or unverified information.",
      icon: "📱"
    },
    {
      id: 11,
      title: "Safe & Ethical Field Work",
      description: "Volunteers must ensure safety, follow instructions and treat beneficiaries with care and humility.",
      icon: "🛡️"
    },
    {
      id: 12,
      title: "Islamically Ethical Conduct",
      description: "All work must reflect honesty, humility, justice and compassion, aligned with Islamic teachings of service (khidmat) and amanah.",
      icon: "☪️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider shadow-lg">
                FALAH-E-UMMAT FOUNDATION
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-red-600 via-red-700 to-red-900 bg-clip-text text-transparent">
              Standards & Code of Conduct
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              For Staff, Volunteers & Executive Members
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
              <div className="w-3 h-1 bg-red-400 rounded-full"></div>
              <div className="w-3 h-1 bg-red-400 rounded-full"></div>
            </div>
          </div>

          {/* Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {standards.map((standard, index) => (
              <div
                key={standard.id}
                onMouseEnter={() => setHoveredCard(standard.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Content */}
                <div className="relative bg-white m-[2px] rounded-2xl p-6 h-full">
                  {/* Icon & Number */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {standard.icon}
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      hoveredCard === standard.id 
                        ? 'bg-gradient-to-br from-red-600 to-red-800 text-white scale-110' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {standard.id}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent group-hover:from-red-800 group-hover:to-red-950 transition-all duration-300">
                    {standard.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {standard.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Banner */}
          <div className="relative">
            <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl shadow-2xl p-8 text-center overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📜</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Mandatory Compliance
                </h3>
                <p className="text-red-50 text-lg max-w-3xl mx-auto">
                  These standards are mandatory for all members of Falah-e-Ummat Foundation. 
                  By joining our organization, you commit to upholding these principles in every action and decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default StandardsConduct;