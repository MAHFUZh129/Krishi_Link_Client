import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { ImLeaf } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-green-100 via-white to-lime-100">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold
            bg-gradient-to-r from-green-700 via-lime-500 to-green-700
            bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions or need support? We’re here to help farmers and partners connect easily.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl flex items-center gap-2 font-bold text-gray-800">
              Get in Touch <ImLeaf className="text-green-600" />
            </h3>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Reach out to KrishiLink for any inquiries related to our platform,
              marketplace, or agricultural services. Our support team will respond
              as soon as possible.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="p-3 rounded-full bg-green-100 text-green-700 text-xl">
                  <FaLocationDot />
                </span>
                <p className="text-gray-700 text-lg">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="p-3 rounded-full bg-green-100 text-green-700 text-xl">
                  <IoCall />
                </span>
                <p className="text-gray-700 text-lg">
                  +880 1234-567890
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="p-3 rounded-full bg-green-100 text-green-700 text-xl">
                  <MdEmail />
                </span>
                <p className="text-gray-700 text-lg">
                  support@krishilink.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-green-100">
            <form className="space-y-6">

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-xl px-4 py-3 
                  focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-xl px-4 py-3 
                  focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border rounded-xl px-4 py-3 
                  focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold text-white
                bg-gradient-to-r from-green-600 via-lime-500 to-green-600
                hover:scale-[1.02] transition-all duration-300 shadow-md"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
