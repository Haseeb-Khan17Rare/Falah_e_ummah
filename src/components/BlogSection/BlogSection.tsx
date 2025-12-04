import Footer from "../Footer/Footer";

type BlogPost = {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Updates on Current Campaigns",
    category: "Campaigns",
    description:
      "Here’s the latest progress on our running campaigns including water supply, sanitation, and child welfare.",
    date: "November 2025",
    image: "https://i.ibb.co/6ym3G0R/water1.jpg",
  },
  {
    id: 2,
    title: "New Projects Launched This Month",
    category: "Projects",
    description:
      "We launched 3 new community-driven projects focused on education and clean drinking water.",
    date: "November 2025",
    image: "https://i.ibb.co/w4H9k6r/water2.jpg",
  },
  {
    id: 3,
    title: "Monthly Activity Highlights",
    category: "Highlights",
    description:
      "A look back at this month’s on-ground activities, achievements, and volunteer efforts.",
    date: "November 2025",
    image: "https://i.ibb.co/g6Kq2TZ/water3.jpg",
  },
  {
    id: 4,
    title: "Educational: Understanding Water Scarcity",
    category: "Educational",
    description:
      "An informative article about the causes of water scarcity and how communities are affected.",
    date: "November 2025",
    image: "https://i.ibb.co/BGJGzZs/children1.jpg",
  },
  {
    id: 5,
    title: "How Your Donations Helped This Month",
    category: "Impact",
    description:
      "A transparent impact report showing how your donations changed lives this month.",
    date: "November 2025",
    image: "https://i.ibb.co/0CRHvZ3/children3.jpg",
  },
];

export default function BlogSection() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">

          {/* TITLE */}
          <h2 className="text-3xl font-bold">OUR BLOG POSTS</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-3"></div>

          {/* SUBTEXT */}
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Stay updated with our recent projects, campaign progress, and how your donations are making a real difference.
          </p>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5 text-left">
                  <span className="text-sm text-red-500 font-semibold">
                    {post.category}
                  </span>

                  <h3 className="text-lg font-bold mt-1">{post.title}</h3>

                  <p className="text-gray-600 mt-2 text-sm">
                    {post.description}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-red-500 font-semibold hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
