import { useNavigate } from "react-router-dom";
import Impact from '../Impact/Impact';
import { Heart, GraduationCap, Droplet, Snowflake, AlertTriangle, HandHeart, Hammer, Moon } from "lucide-react";
import myVideo from './Video.mp4';
type Project = {
  name: string;
  slug: string;
  icon: React.ComponentType<any>;
  color: string;
};

const ProjectCard = ({ project, navigate }: { project: Project; navigate: any }) => {
  const Icon = project.icon;
  return (
    <div
      onClick={() => navigate(`/${project.slug}`)}
      className="group bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`w-16 h-16 ${project.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="text-white w-8 h-8" />
      </div>
      <p className="font-bold text-gray-800 flex items-center gap-2">
        {project.name}
        <span className={`${project.color.replace('bg-', 'text-')} group-hover:translate-x-1 transition-transform`}>→</span>
      </p>
    </div>
  );
};

const Causes = () => {
  const navigate = useNavigate();

  const projects: Project[] = [
    { name: "Social Business", slug: "social", icon: HandHeart, color: "bg-blue-500" },
    { name: "Dastkari Project", slug: "dastkari", icon: Hammer, color: "bg-orange-600" },
    { name: "Education Project", slug: "education", icon: GraduationCap, color: "bg-green-600" },
    { name: "Health Camps", slug: "health", icon: Heart, color: "bg-red-500" },
    { name: "Blood Donation", slug: "blood", icon: Droplet, color: "bg-red-600" },
    { name: "Winter Drive", slug: "winter", icon: Snowflake, color: "bg-blue-400" },
    { name: "Natural Disaster", slug: "natural", icon: AlertTriangle, color: "bg-yellow-500" },
    { name: "Ramadan Projects", slug: "ramadan", icon: Moon, color: "bg-green-500" }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED HIGHLIGHT SECTION */}
        <div className="flex flex-col items-center mb-20">
          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            
            {/* VIDEO CONTAINER */}
            <div className="relative aspect-video bg-gray-900 group">
            <video 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              controls
              preload="metadata"
            >
              <source src={myVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Subtle Red/White branding accent */}
              <div className="absolute top-4 left-4 bg-red-600 p-2 rounded-lg shadow-lg">
                <Heart className="text-white w-5 h-5" />
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="p-10 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Empowering Communities</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                We work with people who give their all to improve their living conditions. 
                Through sustainable concepts and strong partnerships, we build a better future together.
              </p>
              <button 
                onClick={() => navigate(`/${projects[0].slug}`)}
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-red-200 transition-all flex items-center gap-3 mx-auto"
              >
                Learn More About Our Mission
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID SECTION */}
        <div className="text-center mb-12">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Our Focus</span>
          <h3 className="text-4xl font-black text-gray-900 mt-2">Active Projects</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} navigate={navigate} />
          ))}
        </div>

        <div className="mt-24">
          <Impact />
        </div>
      </div>
    </section>
  );
};

export default Causes;