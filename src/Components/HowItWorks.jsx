import React from "react";
import { FaUserPlus, FaSeedling, FaComments, FaHandshake } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-green-100 via-lime-100 to-green-100">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <h2
          className="text-center text-3xl md:text-4xl font-extrabold
          bg-gradient-to-r from-green-700 via-lime-500 to-green-700
          bg-clip-text text-transparent"
        >
          How KrishiLink Works
        </h2>

        <p className="text-center text-gray-600 text-lg font-medium mt-3">
          4 simple steps to connect farmers and buyers
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          
          <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full
              bg-green-100 text-green-600 text-2xl group-hover:scale-110 transition">
              <FaUserPlus />
            </div>
            <h3 className="text-xl font-bold mb-2">Create an Account</h3>
            <p className="text-gray-600 font-medium">
              Sign up as a farmer or buyer within a minute.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full
              bg-lime-100 text-lime-600 text-2xl group-hover:scale-110 transition">
              <FaSeedling />
            </div>
            <h3 className="text-xl font-bold mb-2">Post or Browse Crops</h3>
            <p className="text-gray-600 font-medium">
              Farmers post crops & buyers find what they need.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full
              bg-emerald-100 text-emerald-600 text-2xl group-hover:scale-110 transition">
              <FaComments />
            </div>
            <h3 className="text-xl font-bold mb-2">Connect & Chat</h3>
            <p className="text-gray-600 font-medium">
              Discuss price and details directly.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full
              bg-amber-100 text-amber-600 text-2xl group-hover:scale-110 transition">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-bold mb-2">Finalize the Deal</h3>
            <p className="text-gray-600 font-medium">
              Confirm and arrange pickup or delivery.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
