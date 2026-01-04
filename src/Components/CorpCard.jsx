import React from "react";
import { Link } from "react-router";
import { GiWheat } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CorpCard = ({ corp }) => {
  const {
    name,
    image,
    type,
    quantity,
    location,
    pricePerUnit,
    _id,
    unit,
  } = corp;

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden
      shadow-md hover:shadow-2xl transition-all duration-300
      hover:-translate-y-2 border border-gray-100"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover
          group-hover:scale-110 transition-transform duration-500"
        />

        <span
          className="absolute top-3 left-3 px-3 py-1 text-xs font-bold
          rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white"
        >
          {type}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-extrabold text-green-700 leading-tight">
          {name}
        </h2>

        <p className="text-lg font-semibold flex items-center gap-1 text-gray-700">
          <FaBangladeshiTakaSign />
 {pricePerUnit}
          <span className="text-sm text-gray-500"> / {unit}</span>
        </p>

        <div className="flex items-center justify-between text-sm font-medium">
          <span className="flex items-center gap-1 text-blue-600">
            <MdLocationOn /> {location}
          </span>

          <span className="hidden md:flex items-center gap-2 text-black">
            <GiWheat /> {quantity} {unit}
          </span>
        </div>

        <Link
          to={`/corps-details/${_id}`}
          className="block text-center mt-4
          rounded-full px-5 py-2 text-sm md:text-base font-bold text-white
          bg-gradient-to-r from-green-600 via-lime-500 to-green-600
          hover:scale-105 transition-transform duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CorpCard;
