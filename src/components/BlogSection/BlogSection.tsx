import { useState } from "react";
import Footer from "../Footer/Footer";
import { FaFilePdf, FaArrowRight, FaCalendarAlt, } from "react-icons/fa";
import pdfimg from '../BlogSection/pdf image.png'
type BlogPost = {
  id: number;
  title: string;
  category: "Campaigns" | "Impact Report" | "Projects" | "Social Business";
  description: string;
  date: string;
  image: string;
  pdfUrl?: string;
  isFeatured?: boolean;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Quarterly Impact Report (March - June 2025)",
    category: "Impact Report",
    isFeatured: true,
    description: "Our first edition report: 200 ration packs distributed, 8,500 Iftar meals served, and clean water systems installed.",
    date: "July 2025",
    image: pdfimg, 
    pdfUrl: "/assets/DOC-20250708-WA0120..pdf" // Ensure this filename matches your file in public/assets
  },
  {
    id: 2,
    title: "Masjid Siddiq-e-Akbar Water Project",
    category: "Projects",
    description: "Ensuring sustainable access to clean drinking water for the community through our latest filtration installation.",
    date: "June 2025",
    image: "https://i.ibb.co/6ym3G0R/water1.jpg",
  },
  {
    id: 3,
    title: "Umeed-e-Zindagi School Collaboration",
    category: "Social Business",
    description: "Secured a major uniform order for our Dastakari Center, empowering local women through skilled stitching.",
    date: "May 2025",
    image: "https://i.ibb.co/BGJGzZs/children1.jpg",
  }
];

export default function BlogSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Impact Report", "Projects", "Social Business"];

  const filteredPosts = activeFilter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <>
      <section className="bg-[#FAF9F6] py-24 px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          
          {/* Header & Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none uppercase italic">
                Our <span className="text-red-600">Journal</span>
              </h2>
              <div className="w-20 h-2 bg-red-600 mt-4 mb-6"></div>
              <p className="text-gray-500 text-lg">
                Stories of progress, transparency, and the community impact we build together.
              </p>
            </div>

            <div className="flex p-1.5 bg-gray-200/50 rounded-2xl backdrop-blur-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    activeFilter === cat 
                      ? "bg-white text-red-600 shadow-md" 
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className={`group flex flex-col bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 border border-gray-100 hover:shadow-[0_20px_50px_rgba(220,38,38,0.1)] ${
                  post.isFeatured ? 'ring-2 ring-red-500/20' : ''
                }`}
              >
                {/* Media Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-gray-100">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <FaCalendarAlt className="text-red-500" />
                    {post.date}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {post.description}
                  </p>

                  <div className="mt-auto">
                    {post.pdfUrl ? (
                      <a 
                        href={post.pdfUrl} 
                        download 
                        className="flex items-center justify-center gap-3 bg-red-600 text-white w-full py-4 rounded-2xl font-bold hover:bg-gray-900 transition-all shadow-lg shadow-red-200"
                      >
                        <FaFilePdf /> Download Report
                      </a>
                    ) : (
                      <button className="flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest group/btn">
                        Read Story 
                        <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}