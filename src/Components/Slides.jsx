import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router';


const Slides = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Navigation, Pagination, Autoplay]}
            >

                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full h-[500px]">

                        <img
                            src='https://i.ibb.co.com/ccrtPqqT/download-16.jpg'
                            alt="Winter Pets"
                            className="w-full h-full object-cover rounded-lg brightness-75"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 via-white/10 to-blue-200/30"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-white space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                                We Produce Natural Goods
                            </h2>
                            <p className="max-w-lg text-lg text-gray-100/90">
                                We produce high-quality natural goods made from pure, responsibly sourced ingredients. Our products are crafted with care to support a healthier lifestyle and a cleaner planet.
                            </p>
                            <Link
                                to="/services"
                                className="btn btn-primary font-semibold mt-3"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative w-full h-[500px]">
                        <img
                            src="https://i.ibb.co.com/m53XZj4j/download-15.jpg"
                            alt="Winter Kitten"
                            className="w-full h-full object-cover rounded-lg brightness-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/40 via-white/10 to-blue-300/40"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-white space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                                Organic Foodies & Veggies
                            </h2>
                            <p className="max-w-lg text-lg text-gray-100/90">
                                We provide high-quality organic foods and farm-fresh vegetables, cultivated without chemicals or preservatives. Pure taste, honest farming, and clean nutrition for mindful eaters.
                            </p>
                            <Link className="btn btn-primary font-semibold mt-3">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative w-full h-[500px]">
                        <img
                            src="https://i.ibb.co.com/QvxyR6Rd/bop-low-input-owner-og.jpg"
                            alt="Winter Dog"
                            className="w-full h-full object-cover rounded-lg brightness-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-300/40 via-white/10 to-blue-400/40"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-white space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                                High Quality Fresh And Organic Foods
                            </h2>
                            <p className="max-w-lg text-lg text-gray-100/90">
                                We specialize in high-quality fresh and organic foods, carefully selected from sustainable and ethical farms. Enjoy authentic flavors, superior nutrition, and nature’s purest quality in every bite.
                            </p>
                            <Link className="btn btn-primary font-semibold mt-3">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="relative w-full h-[450px]">
                        <img
                            src="https://i.ibb.co.com/4gpWRwdg/images-5.jpg"

                            alt="Pets"
                            className="w-full h-full object-cover rounded-lg brightness-75"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                                Fresh, Organic Fish, Goat, And Poultry—Naturally Raised AND Chemical-Free
                            </h2>
                            <p className="max-w-lg text-lg text-gray-200">
                                We provide high-quality, fresh, and organic fish, goat, and poultry products sourced from healthy, naturally raised animals. Free from chemicals and antibiotics, our meats deliver pure taste and trusted nutrition.
                            </p>
                            <Link to="/services" className="btn btn-primary font-semibold mt-3">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 5 */}
                <SwiperSlide>
                    <div className="relative w-full h-[450px]">
                        <img
                            src="https://i.ibb.co.com/jPThBpdr/Regulatory-Updates-In-Europe-U-S-Spell-Major-Boost-For-Organic-Agriculture.jpg"
                            alt="Cute kitten"
                            className="w-full h-full object-cover rounded-lg brightness-75"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                                Organic Products
                            </h2>
                            <p className="max-w-lg text-lg text-gray-200">
                                We offer high-quality fresh and organic foods sourced from trusted farms. Every product is naturally grown, chemical-free, and packed with pure, wholesome goodness.
                            </p>
                            <Link className="btn btn-primary font-semibold mt-3">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                
               
                       
            </Swiper>


        </div>
    );
};

export default Slides;