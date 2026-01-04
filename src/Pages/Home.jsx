import React from "react";
import Slides from "../Components/Slides";
import HowItWorks from "../Components/HowItWorks";
import NewsOrBlogs from "../Components/NewsOrBlogs";
import { Link, useLoaderData } from "react-router";
import CorpCard from "../Components/CorpCard";
import { FaSeedling } from "react-icons/fa";
import OurServices from "../Components/services";
import WhyChooseUs from "../Components/WhyChooseUs";
import Feedback from "../Components/Feedback";
import Statics from "../Components/Statics";

const Home = () => {
  const data = useLoaderData();
// console.log(data)
  return (
    <div className="bg-base-100">

      {/* hero */}
      <section className="py-20 bg-gradient-to-r from-green-700 via-lime-600 to-green-500 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-yellow-300">KrishiLink</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-lg opacity-90">
          Connecting farmers and buyers with trust & transparency.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/all-corps"
            className="px-8 py-3 bg-white text-green-700 font-bold rounded-full hover:scale-105 transition"
          >
            Explore Crops
          </Link>
          <Link
            to="/dashboard"
            className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-green-700 transition"
          >
            Dashboard
          </Link>
        </div>
      </section>


      <section className="">
        <Slides />
      </section>

      {/* corps latest */}
      <section className="py-14 bg-base-200">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold 
    bg-gradient-to-r from-green-700 via-lime-500 to-green-700 
    bg-clip-text text-transparent drop-shadow-sm">
          Latest Crops
        </h2>

        <p className="text-center text-md flex gap-2 justify-center items-center md:text-lg text-gray-600 mt-3 mb-8">
          <FaSeedling className="text-lime-500 text-2xl" />
          Fresh, verified & directly from trusted farmers
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 px-5">
          {data?.map((corp) => (
            <CorpCard key={corp._id} corp={corp} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/all-corps"
            className="px-10 py-3 bg-green-600 hover:bg-green-800 text-white font-semibold rounded-full transition"
          >
            View All
          </Link>
        </div>
      </section>
      {/* small section */}
      <OurServices />
      <WhyChooseUs />
      <HowItWorks />
      <NewsOrBlogs />
      <Feedback />
      <Statics />
    </div>
  );
};

export default Home;
