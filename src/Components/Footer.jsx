import React from 'react';
import logo from '../assets/logo.jpg';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>


            <footer className=" relative bg-white-900 text-gray-300 py-16 px-5 overflow-hidden">

                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        backgroundImage: `url('https://i.ibb.co.com/JWV9d23t/360-F-935557880-f-HXCbtx-Fn-PDOr-Fp-Ax-Jkh-MYi2wpnu-PHo-Z.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        
                    }}
                />

                <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>

                <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 z-10">

                    {/* Logo & About */}
                    <div>
                        <div className='flex items-center  gap-2'>
                            <img className='h-13 w-13  rounded-full' src={logo} alt="" />
                            <h2 className="text-3xl mt-2 font-bold text-white mb-4 tracking-tight">KrishiLink</h2>
                        </div>
                        <p className="text-sm leading-relaxed">
                            To transform the agricultural sector by eliminating intermediaries, connecting farmers directly with consumers and other stakeholders, and providing technology-driven solutions for better productivity and profitability                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='md:mt-2 md:ml-10 '>
                        <h3 className="text-xl font-semibold text-white mb-8">Quick Links</h3>
                        <ul className="space-y-3">
                            <li className="hover:text-white cursor-pointer transition duration-300">Home</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">About</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Services</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Contact</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className='mt-2'>
                        <h3 className="text-xl font-semibold text-white mb-8">Explore</h3>
                        <ul className="space-y-3">
                            <li className="hover:text-white cursor-pointer transition duration-300">What We Offer</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Latest News</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Project</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Terms & Conditions</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Privacy Policy</li>
                        </ul>
                    </div>
                    {/* Services */}
                    <div className='mt-2'>
                        <h3 className="text-xl font-semibold text-white mb-8">Service</h3>
                        <ul className="space-y-3">
                            <li className="hover:text-white cursor-pointer transition duration-300">Agriculture Products</li>
                            <li className="hover:text-white cursor-pointer transition duration-300"> Organic Products</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Fresh Vegetables</li>
                            <li className="hover:text-white cursor-pointer transition duration-300"> Dairy Products</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Vegetable Firms</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Water Management</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Farm House</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className='mt-2'>
                        <h3 className="text-xl font-semibold text-white mb-8">Follow Us</h3>
                        <div className="flex space-x-6 text-3xl">
                            <FaFacebook className="hover:text-blue-500 cursor-pointer transition duration-300" />
                            <FaInstagram className="hover:text-pink-500 cursor-pointer transition duration-300" />
                            <FaLinkedin className="hover:text-blue-600 cursor-pointer transition duration-300" />
                            <FaXTwitter className="hover:text-white cursor-pointer transition duration-300" />
                        </div>
                    </div>
                </div>

                <div className=" text-center border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400">
                    © {new Date().getFullYear()} MyWebsite — All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;