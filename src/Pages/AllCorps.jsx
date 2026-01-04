import React, { useState } from "react";
import CorpCard from "../Components/CorpCard";
import { useLoaderData } from "react-router";
import Spinner from "../Components/Spinner";
import { FaSearch } from "react-icons/fa";

const AllCorps = () => {
  const data = useLoaderData();
  const [corps, setCorps] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value.trim();
    if (!search) return;

    setLoading(true);

    fetch(`https://krishilinkapi-server.vercel.app/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setCorps(data);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-green-100 to-lime-100">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-700 via-lime-500 to-yellow-400 pb-16">

      {/* Header */}
      <div className="text-center pt-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Explore All Crops
        </h1>
        <p className="mt-3 text-lg text-white/90 font-medium">
          Fresh, verified & directly from farmers
        </p>
      </div>

      {/* Search */}
      <form
        onSubmit={handleSearch}
        className="mt-8 flex justify-center px-4"
      >
        <div className="flex w-full max-w-xl bg-white rounded-full shadow-xl overflow-hidden">
          <input
            type="search"
            name="search"
            placeholder="Search crops by name ...."
            className="flex-1 px-6 py-3 outline-none text-gray-700"
          />
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 flex items-center gap-2 font-semibold transition"
          >
            <FaSearch />
            Search
          </button>
        </div>
      </form>

      {/* Corps Grid */}
      <div className="max-w-7xl mx-auto mt-12 px-4">
        {corps.length === 0 ? (
          <div className="text-center italic text-white text-3xl font-bold mt-16">
            No crops found
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {corps.map((corp) => (
              <CorpCard key={corp._id} corp={corp} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCorps;
