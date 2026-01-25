import Impact from '../Impact/Impact';
import Image from '../Causes/Causes.jpg'
import { Heart, GraduationCap, Droplet, Snowflake, AlertTriangle, HandHeart, Hammer, Moon } from "lucide-react";

const Causes = () => {
  const projects = [
    { name: "Social Business Project", icon: HandHeart, color: "bg-blue-500" },
    { name: "Dastkari Project", icon: Hammer, color: "bg-orange-600" },
    { name: "Education Project", icon: GraduationCap, color: "bg-green-600" },
    { name: "Health Camps", icon: Heart, color: "bg-red-500" },
    { name: "Blood Donation", icon: Droplet, color: "bg-red-600" },
    { name: "Winter Drive", icon: Snowflake, color: "bg-blue-400" },
    { name: "Natural Disaster Relief", icon: AlertTriangle, color: "bg-yellow-500" },
    { name: "Ramadan Projects", icon: Moon, color: "bg-green-500" }
  ];

  return (
    <section className="bg-gray-100 py-24 px-6 md:px-20">
      
      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT BIG CARD */}
        <div className="lg:col-span-2 bg-white rounded shadow">
          <img 
            src={Image} 
            alt="Community Support" 
            className="w-full h-64 object-cover rounded-t" 
          />
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              We work with people who give their all to improve their living conditions. 
              We support them with sustainable concepts and strong partnerships.
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded font-semibold inline-flex items-center gap-2">
              Read more 
              <span>→</span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="flex flex-col gap-6">

          <div className="bg-white rounded shadow p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="text-white w-8 h-8" />
            </div>
            <p className="font-semibold text-gray-800 flex items-center gap-2">
              Education Project
              <span className="text-green-600">→</span>
            </p>
          </div>

          <div className="bg-white rounded shadow p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <Droplet className="text-white w-8 h-8" />
            </div>
            <p className="font-semibold text-gray-800 flex items-center gap-2">
              Water, Sanitation & Hygiene
              <span className="text-blue-600">→</span>
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded shadow p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 ${project.color} rounded-full flex items-center justify-center mb-4`}>
                <Icon className="text-white w-8 h-8" />
              </div>
              <p className="font-semibold text-gray-800 flex items-center gap-2">
                {project.name}
                <span className={project.color.replace('bg-', 'text-')}>→</span>
              </p>
            </div>
          );
        })}

      </div>
      <Impact/>
    </section>
  );
};

export default Causes;