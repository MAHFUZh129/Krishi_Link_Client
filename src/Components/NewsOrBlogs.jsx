
import React from 'react';

const blogs = [
  {
    id: 1,
    title: "5 Smart Farming Tips to Increase Crop Production",
    desc: "Learn modern agricultural techniques to boost yield and reduce cost.",
    image: "https://i.ibb.co/cKcSmNn9/download-19.jpg",
    date: "Nov 08, 2025",
  },
  {
    id: 2,
    title: "Government Announces New Subsidy for Farmers",
    desc: "The agriculture department introduces new support schemes for small farmers.",
    image: "https://i.ibb.co/TDJK9KpN/download-20.jpg",
    date: "Nov 05, 2025",
  },
  {
    id: 3,
    title: "How to Protect Crops from Seasonal Diseases",
    desc: "A complete guide to identifying and preventing crop diseases naturally.",
    image: "https://i.ibb.co/RpP3wHTL/images-8.jpg",
    date: "Nov 03, 2025",
  },
];

const NewsOrBlogs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-600 via-lime-300 to-green-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Agro News & Blogs</h2>
          <p className="text-green-100 mt-2 max-w-2xl mx-auto">
            Stay updated with the latest agriculture news, tips, and informative articles.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-md shadow-lg hover:shadow-2xl transition p-4 flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-sm text-green-600 mt-3">{blog.date}</p>
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-700 text-sm mt-1 flex-grow">{blog.desc}</p>
              <button className="mt-4 text-green-700 font-medium hover:underline text-left">
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/blogs"
            className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full shadow-lg transition"
          >
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsOrBlogs;
