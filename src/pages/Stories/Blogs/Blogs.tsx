import React from "react";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Empowering Communities Through Education",
      excerpt: "Discover how our education programs are transforming lives in underserved communities.",
      date: "Nov 10, 2025",
      image: "https://images.unsplash.com/photo-1581090700227-4f5a69a0c0bc",
    },
    {
      title: "Impact of Winter Drive Initiatives",
      excerpt: "Learn about how our winter drive provided warmth and essentials to hundreds of families.",
      date: "Nov 5, 2025",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      title: "Ramadan Charity Highlights",
      excerpt: "See the amazing impact of our Ramadan initiatives and how you can participate.",
      date: "Oct 28, 2025",
      image: "https://images.unsplash.com/photo-1601933472225-29f071d82a1b",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Latest Blogs & Updates</h2>
        <p className="text-gray-700">
          Stay informed with the latest news, articles, and updates about our initiatives.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <button className="w-full py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
