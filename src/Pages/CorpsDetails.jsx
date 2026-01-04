import { useLoaderData, useNavigation } from "react-router";
import InterestForm from "../Components/InterestForm";
import { AuthContext } from "../context/AuthContext";
import Table from "../Components/Table";
import { use } from "react";
import { TbCategory2, TbCurrencyTaka } from "react-icons/tb";

import Spinner from "../Components/Spinner";
import {
  FaLeaf,
  FaMapMarkerAlt,
  FaUserShield,
  
} from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

const CorpsDetails = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const { user } = use(AuthContext);

  const {
    name,
    image,
    type,
    quantity,
    location,
    pricePerUnit,
    _id,
    description,
    owner,
    unit,
  } = data;

  if (navigation.state === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-lime-100 to-amber-200">
        <Spinner />
        <p className="ml-4 text-green-800 font-bold text-xl">
          Loading premium crop details...
        </p>
      </div>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-lime-100 via-white to-green-100 py-14">
      {/* Decorative blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-300/30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-green-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-10">

            {/* Image Section */}
            <div className="relative group">
              <img
                src={image}
                alt={name}
                className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover rounded-3xl shadow-xl group-hover:scale-[1.03] transition duration-500"
              />

              <span className="absolute top-5 left-5 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <FaLeaf /> 100% Verified
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-800 leading-tight">
                {name}
              </h1>

              <div className="flex flex-wrap gap-3">
                <span className="px-5 flex items-center gap-1 py-1.5 rounded-full bg-green-100 text-green-700 font-semibold">
                 <TbCategory2 />
 {type}
                </span>
                <span className="px-5 py-1.5 flex items-center gap-1 rounded-full bg-lime-100 text-lime-700 font-semibold">
                  <TbCurrencyTaka />
 {pricePerUnit} / {unit}
                </span>
                <span className="px-5 py-1.5 rounded-full bg-amber-100 text-amber-700 font-semibold">
                  <MdEventAvailable className="inline mr-1" />
                  {quantity} {unit} available
                </span>
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {description}
              </p>

              {/* Info Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gradient-to-r from-amber-50 to-lime-50 p-5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-red-500 text-lg" />
                  <p className="font-medium text-gray-700">{location}</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaUserShield className="text-blue-500 text-lg" />
                  <div>
                    <p className="font-semibold text-gray-700">
                      {owner.ownerName}
                    </p>
                    <p className="text-sm text-blue-600">
                      {owner.ownerEmail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interest  */}
        <div className="mt-16">
          {user?.email !== owner?.ownerEmail ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-green-700">
                  Interested in this harvest?
                </h2>
                <p className="text-gray-600 text-lg">
                  Connect directly with farmers and secure fresh crops today.
                </p>

                <div className="hidden lg:block">
                  <img
                    src="https://i.ibb.co.com/ccrtPqqT/download-16.jpg"
                    alt=""
                    className="mt-6 w-[380px] rounded-3xl shadow-xl"
                  />
                </div>
              </div>

              {/* Form */}
              <InterestForm unit={unit} data={data} />
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <Table unit={unit} _id={_id} data={data} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CorpsDetails;
