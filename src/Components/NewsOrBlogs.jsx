import React from "react";

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
    <section className="py-9 bg-gradient-to-br from-green-50 via-lime-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-extrabold
            bg-gradient-to-r from-green-700 via-lime-600 to-green-700
            bg-clip-text text-transparent"
          >
            Agro News & Blogs
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
            Latest agriculture updates, expert tips, and farmer-focused stories
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-2xl overflow-hidden
              shadow-md hover:shadow-2xl transition-all duration-300
              hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover
                  group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-sm font-semibold text-green-600">
                  {blog.date}
                </span>

                <h3 className="text-xl font-bold mt-2 text-gray-800 group-hover:text-green-700 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 flex-grow">
                  {blog.desc}
                </p>

                <button className="mt-5 inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all">
                  Read More
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
          <button
            className="px-10 py-3 rounded-full font-bold text-white
            bg-gradient-to-r from-green-600 via-lime-500 to-green-600
            hover:scale-105 transition shadow-lg"
          >
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsOrBlogs;
