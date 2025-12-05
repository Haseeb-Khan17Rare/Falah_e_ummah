import  { useState, useEffect } from 'react';
import { Heart, Users, TrendingUp, Award, ArrowRight, Target, Eye } from 'lucide-react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: "2020", label: "Founded", icon: Award },
    { value: "1000+", label: "Lives Transformed", icon: Users },
    { value: "95%", label: "Success Rate", icon: TrendingUp },
    { value: "100%", label: "Transparency", icon: Heart }
  ];

  const values = [
    {
      title: "Empowerment Over Dependency",
      desc: "We don't just give aid—we provide skills, tools and confidence for long-term independence.",
      icon: TrendingUp
    },
    {
      title: "Dignity & Respect",
      desc: "Every individual deserves to earn their livelihood with honour and self-reliance.",
      icon: Heart
    },
    {
      title: "Community-Driven",
      desc: "We work alongside families in Mansehra, understanding their unique needs and dreams.",
      icon: Users
    },
    {
      title: "Sustainable Impact",
      desc: "Our programs are designed to create generational change, not temporary relief.",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium">Est. April 14, 2020</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering Lives,<br />
              <span className="text-red-200">Building Futures</span>
            </h1>
            <p className="text-xl lg:text-2xl text-red-100 mb-8 leading-relaxed">
              Creating a skilled and self-reliant society where dignity and opportunity transform communities—one family at a time.
            </p>
            <button className="group bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2">
              Join Our Mission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl p-6 shadow-xl border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className="w-8 h-8 text-red-600 mb-3" />
              <div className="text-3xl font-bold text-red-600 mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">Story</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Falah-e-Ummat Welfare Foundation was born during the COVID-19 crisis in April 2020, when helplessness and unemployment had reached their peak in Mansehra. A group of compassionate medical students, led by our founder <span className="font-semibold text-red-600">Dr Muhammad Hammad Naeem</span>, came together with a powerful vision.
              </p>
              <p>
                We were founded on a belief that <span className="font-semibold">every person deserves dignity, opportunity and the chance to transform their life</span>. In a region where opportunities are limited, we work to bring hope into homes that have gone without it for generations.
              </p>
              <p className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                What makes us different is our commitment to breaking the cycle of dependency. Instead of short-term relief, we focus on long-term independence—equipping individuals with skills, resources and confidence so they can sustain themselves with honour.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl transform rotate-3" />
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-red-200">
              <Heart className="w-16 h-16 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Belief</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe in creating a <span className="font-semibold text-red-600">skilled nation</span> rather than a dependent one. Through empowerment programs, we enable individuals to earn their livelihood with confidence and independence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            What Drives Us
          </h2>
          <p className="text-red-100 text-xl text-center mb-12 max-w-3xl mx-auto">
            Our approach is rooted in compassion, integrity and accountability
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <value.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-red-100 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
          Our <span className="text-red-600">Programs</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-8 shadow-xl border-2 border-red-100 hover:shadow-2xl transition-all duration-300">
            <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dastakari Project</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our flagship program trains women in sewing and tailoring, enabling them to earn a livelihood with confidence and independence. We provide skills that last a lifetime.
            </p>
            <div className="flex items-center text-red-600 font-semibold group cursor-pointer">
              Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-8 shadow-xl border-2 border-red-100 hover:shadow-2xl transition-all duration-300">
            <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Business Department</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We help individuals launch micro-businesses through transparent grants, mentorship and long-term follow-up, allowing families to build stable income streams and secure their futures.
            </p>
            <div className="flex items-center text-red-600 font-semibold group cursor-pointer">
              Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl transform -rotate-2" />
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border-2 border-red-200">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  To create a skilled and self-reliant society where every person has the dignity and opportunity to build a better future.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl transform rotate-2" />
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border-2 border-red-200">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  To empower communities by providing skills, education and support that help individuals become independent and financially stable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Together, We Create Change
          </h2>
          <p className="text-red-100 text-xl mb-8 leading-relaxed">
            Join us in our mission to empower communities and transform lives. Every contribution brings us closer to a skilled, self-reliant society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 shadow-xl">
              Donate Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;