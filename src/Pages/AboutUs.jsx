import React from "react";
import { FaWpexplorer } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import { BsFillInfoCircleFill } from "react-icons/bs";


const AboutUs = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-green-100 via-white to-lime-100">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold 
            bg-gradient-to-r from-green-700 via-lime-500 to-green-700
            bg-clip-text text-transparent">
            About KrishiLink
          </h2>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            Connecting farmers with technology, fair markets, and trusted agricultural knowledge.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Left Text */}
          <div>
            <h3 className="text-2xl flex gap-3 md:text-3xl font-bold text-gray-800 mb-5">
              Empowering Farmers Digitally <ImLeaf className="text-green-600" />
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
              KrishiLink is a modern agriculture platform designed to help farmers
              sell produce fairly, access real-time crop prices, receive weather
              updates, and learn practical farming techniques — all in one place.
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Our goal is to make agriculture smarter, transparent, and more
              profitable by bridging the gap between farmers, buyers, and services
              through simple digital solutions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div
              className="bg-white rounded-2xl p-6 shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 border border-green-100"
            >
              <h4 className="text-lg flex items-center gap-2 font-semibold text-green-700 mb-2">
                <MdOutlineVolunteerActivism />
                Our Vision
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                A sustainable and technology-driven agricultural ecosystem where farmers grow with confidence.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 border border-green-100"
            >
              <h4 className="text-lg flex items-center gap-2 font-semibold text-green-700 mb-2">
                <FaWpexplorer />

                Our Mission
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                To empower farmers with information, tools, and fair access to markets using technology.              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 border border-green-100"
            >
              <h4 className="text-lg flex items-center gap-2 font-semibold text-green-700 mb-2">
                <SiCoinmarketcap />

                Smart Marketplace
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Buy and sell agricultural products transparently with trusted pricing.              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 border border-green-100"
            >
              <h4 className="text-lg flex items-center gap-2 font-semibold text-green-700 mb-2">
                <BsFillInfoCircleFill />

                Real-Time Info
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get accurate weather updates, crop prices, and government schemes.              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
