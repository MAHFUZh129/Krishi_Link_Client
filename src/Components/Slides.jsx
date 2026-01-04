import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const Slides = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      modules={[Navigation, Pagination, Autoplay]}
      className=" overflow-hidden"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative h-[440px] md:h-[540px]">
          <img
            src="https://i.ibb.co.com/jPThBpdr/Regulatory-Updates-In-Europe-U-S-Spell-Major-Boost-For-Organic-Agriculture.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55 flex items-center">
            <div className="px-6 md:px-20 text-white max-w-2xl space-y-5">
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Fresh & Organic Crops Marketplace
              </h2>
              <p className="text-sm md:text-lg opacity-90">
                KrishiLink connects farmers and buyers in one trusted digital platform. 
                Buy fresh, seasonal, and chemical-free crops directly from local farms.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/all-corps"
                  className="px-7 py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold transition"
                >
                  Browse Crops
                </Link>
                <Link
                  to="/about"
                  className="px-7 py-3 border border-white/80 rounded-full hover:bg-white hover:text-green-700 font-semibold transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-[440px] md:h-[540px]">
          <img
            src="https://i.ibb.co.com/QvxyR6Rd/bop-low-input-owner-og.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-black/25 flex items-center">
            <div className="px-6 md:px-20 text-white max-w-2xl space-y-5">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Dairy, Grains & Farm Essentials
              </h2>
              <p className="text-sm md:text-lg opacity-90">
                Explore farm-fresh dairy, grains, and essentials sourced from 
                sustainable and ethical producers ensuring purity and nutrition.
              </p>
              <Link
                to="/all-corps"
                className="px-7 py-3 bg-lime-500 text-black rounded-full font-semibold hover:scale-105 transition"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative h-[440px] md:h-[540px]">
          <img
            src="https://i.ibb.co.com/MknDZ2Gx/organic.webp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55 flex items-center">
            <div className="px-6 md:px-20 text-white max-w-2xl space-y-5">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Organic Vegetables & Fruits
              </h2>
              <p className="text-sm md:text-lg opacity-90">
                Get freshly harvested vegetables and fruits grown without harmful 
                chemicals—supporting healthy families and fair farming.
              </p>
              <Link
                to="/dashboard"
                className="px-7 py-3 bg-green-600 rounded-full font-semibold hover:bg-green-800 transition"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div className="relative h-[440px] md:h-[540px]">
          <img
            src="https://i.ibb.co.com/YTyH7KjV/popular-types-of-birds-1440x961.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55 flex items-center">
            <div className="px-6 md:px-20 text-white max-w-2xl space-y-5">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Fish, Livestock & Poultry
              </h2>
              <p className="text-sm md:text-lg opacity-90">
                Buy fresh fish, goat, and poultry products from naturally raised 
                livestock—free from harmful additives and antibiotics.
              </p>
              <Link
                to="/contact"
                className="px-7 py-3 border border-white rounded-full hover:bg-white hover:text-green-700 font-semibold transition"
              >
                Contact Sellers
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slides;
