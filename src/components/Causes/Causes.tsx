import { useNavigate } from "react-router-dom";
import Impact from '../Impact/Impact';
import Image from '../Causes/Causes.jpg';
import { Heart, GraduationCap, Droplet, Snowflake, AlertTriangle, HandHeart, Hammer, Moon } from "lucide-react";

const Causes = () => {
  const navigate = useNavigate();

  // Make sure slug matches the URL path exactly
  const projects = [
    { name: "Social Business Project", slug: "social", icon: HandHeart, color: "bg-blue-500" },
    { name: "Dastkari Project", slug: "dastkari", icon: Hammer, color: "bg-orange-600" },
    { name: "Education Project", slug: "education", icon: GraduationCap, color: "bg-green-600" },
    { name: "Health Camps", slug: "health", icon: Heart, color: "bg-red-500" },
    { name: "Blood Donation", slug: "blood", icon: Droplet, color: "bg-red-600" },
    { name: "Winter Drive", slug: "winter", icon: Snowflake, color: "bg-blue-400" },
    { name: "Natural Disaster Relief", slug: "natural", icon: AlertTriangle, color: "bg-yellow-500" },
    { name: "Ramadan Projects", slug: "ramadan", icon: Moon, color: "bg-green-500" }
  ];

  // Reusable card component
  const ProjectCard = ({ project }) => {
    const Icon = project.icon;
    return (
      <div
        onClick={() => navigate(`/${project.slug}`)}
        className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xl transition-shadow"
        role="button"
        aria-label={`Go to ${project.name}`}
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
  };

  return (
    <section className="py-32 px-6 md:px-20">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT BIG CARD */}
        <div
          onClick={() => navigate(`/${projects[0].slug}`)}
          className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          role="button"
          aria-label={`Go to ${projects[0].name}`}
        >
          <img 
            src={Image} 
            alt="Community Support" 
            className="w-full h-64 object-cover" 
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

        {/* RIGHT SIDE TOP CARDS */}
        <div className="flex flex-col gap-6">
          {projects.slice(2, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* BOTTOM CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <Impact />
    </section>
  );
};

export default Causes;
