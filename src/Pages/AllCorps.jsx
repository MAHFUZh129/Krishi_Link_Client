import React, { useEffect, useState } from "react";
import CorpCard from "../Components/CorpCard";
import Spinner from "../Components/Spinner";
import { FaSearch } from "react-icons/fa";

const AllCorps = () => {
  const [corps, setCorps] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [location, setLocation] = useState("all");
  const [sort, setSort] = useState("");

  const fetchCorps = () => {
    setLoading(true);

    let url = `https://krishilinkapi-server.vercel.app/corps?`;

    if (search) url += `search=${search}&`;
    if (type !== "all") url += `type=${type}&`;
    if (location !== "all") url += `location=${location}&`;
    if (sort) url += `sort=${sort}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCorps(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCorps(); // load all initially
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-700 via-lime-500 to-yellow-400 pb-16">

      {/* Header */}
      <div className="text-center pt-12">
        <h1 className="text-4xl font-extrabold text-white">
          Explore All Crops
        </h1>
        <p className="text-white/90 mt-2">
          Search, filter & sort crops easily
        </p>
      </div>

      {/* search */}
      <div className="mt-8 flex justify-center px-4">
        <div className="flex w-full max-w-xl bg-white rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search by crop name..."
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-6 py-3 outline-none"
          />
          <button
            onClick={fetchCorps}
            className="bg-green-600 text-white px-6 flex items-center gap-2"
          >
            <FaSearch /> Search
          </button>
        </div>
      </div>

      {/*  filter and sort */}
     
<div className="max-w-6xl mx-auto mt-10 px-4">
  <div
    className="
      bg-white/20 backdrop-blur-xl
      border border-white/30
      rounded-3xl shadow-2xl
      p-6 md:p-8
      transition
    "
  >
    <h3 className="text-white text-xl font-bold mb-6 text-center tracking-wide">
      Filter & Sort Crops 
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

      {/* Category */}
      <select
        onChange={(e) => setType(e.target.value)}
        className="
          p-3 rounded-xl bg-white text-gray-800
          shadow-md hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-green-500
          transition
        "
      >
        <option value="all"> All Categories</option>
        <option value="Fruit"> Fruit</option>
        <option value="Vegetable"> Vegetable</option>
        <option value="Grain"> Grain</option>
      </select>

      {/* Location */}
      <select
        onChange={(e) => setLocation(e.target.value)}
        className="
          p-3 rounded-xl bg-white text-gray-800
          shadow-md hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-green-500
          transition
        "
      >
        <option value="all"> All Locations</option>
        <option value="Tangail">Tangail</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Rajshahi">Rajshahi</option>
      </select>

      {/* Sort */}
      <select
        onChange={(e) => setSort(e.target.value)}
        className="
          p-3 rounded-xl bg-white text-gray-800
          shadow-md hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-green-500
          transition
        "
      >
        <option value=""> Sort By</option>
        <option value="price_asc"> Price: Low → High</option>
        <option value="price_desc"> Price: High → Low</option>
        <option value="latest"> Latest</option>
      </select>

      {/* apply button */}
      <button
        onClick={fetchCorps}
        className="
          rounded-xl
          bg-gradient-to-r from-green-600 to-lime-500
          text-white font-semibold
          hover:scale-105 hover:shadow-2xl
          transition duration-300
        "
      >
        Apply Filters
      </button>

    </div>
  </div>
</div>


      {/*  grid*/}
      <div className="max-w-7xl mx-auto mt-12 px-4">
        {corps.length === 0 ? (
          <p className="text-center text-white text-3xl font-bold">
            No crops found
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {corps.map(corp => (
              <CorpCard key={corp._id} corp={corp} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCorps;
