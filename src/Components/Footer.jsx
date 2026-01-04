import React from "react";
import logo from "../assets/logo.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative text-gray-300 p-6 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/JWV9d23t/360-F-935557880-f-HXCbtx-Fn-PDOr-Fp-Ax-Jkh-MYi2wpnu-PHo-Z.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/80 -z-10"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} className="w-12 h-12 rounded-full" alt="logo" />
            <h2 className="text-[28px] italic font-bold text-green-600">
              Krishi<span className="text-lime-500">Link</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 max-w-md">
            KrishiLink builds a transparent bridge between farmers and buyers,
            empowering agriculture through trust, technology, and fair trade.
          </p>
        </div>

       
{/* Quick Links */}
<div>
  <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
  <ul className="space-y-3 text-sm">
    <li>
      <Link
        to="/"
        className="hover:text-green-400 transition"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        to="/about"
        className="hover:text-green-400 transition"
      >
        About
      </Link>
    </li>

    

    <li>
      <Link
        to="/contact"
        className="hover:text-green-400 transition"
      >
        Contact
      </Link>
    </li>
    <li>
      <Link to=''
        className="hover:text-green-400 transition"
      >
        Services
      </Link>
    </li>
  </ul>
</div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Explore</h3>
          <ul className="space-y-3 text-sm">
            {[
              "What We Offer",
              "Latest News",
              "Projects",
              "Terms & Conditions",
              "Privacy Policy",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-green-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Agriculture Products",
              "Organic Products",
              "Fresh Vegetables",
              "Dairy Products",
              "Farm Houses",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-green-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social + Bottom */}
      <div className="border-t border-white/10 mt-14 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Social */}
          <div className="flex gap-6 text-2xl">
            <FaFacebook className="hover:text-blue-500 transition cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
            <FaLinkedin className="hover:text-blue-600 transition cursor-pointer" />
            <FaXTwitter className="hover:text-white transition cursor-pointer" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} KrishiLink — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
