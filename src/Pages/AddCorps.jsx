import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Spinner from "../Components/Spinner";
import { GiPlantSeed } from "react-icons/gi";
import { FaMapMarkerAlt, FaImage } from "react-icons/fa";

const AddCorps = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = {
      name: form.name.value,
      type: form.type.value,
      pricePerUnit: form.pricePerUnit.value,
      unit: form.unit.value,
      quantity: form.quantity.value,
      description: form.description.value,
      location: form.location.value,
      image: form.image.value,
      owner: {
        ownerEmail: user?.email,
        ownerName: user?.displayName,
      },
    };

    fetch("http://localhost:5000/corps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Crop added successfully!");
        navigate("/dashboard/my-posts");
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong!");
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-4  md:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl mt-22 shadow-lg p-6 md:py-5">

        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-full bg-green-100 text-green-700 text-2xl">
            <GiPlantSeed />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-green-700">
              Add New Crop
            </h1>
            <p className="text-md text-amber-500">
              Share your crop details with buyers
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="font-semibold">Crop Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Tomato"
            />
          </div>

          <div>
            <label className="font-semibold">Crop Type</label>
            <select
              name="type"
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            >
              <option value="">Select type</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fruit">Fruit</option>
              <option value="Grain">Grain</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Price per Unit</label>
            <input
              type="number"
              name="pricePerUnit"
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="55"
            />
          </div>

          <div>
            <label className="font-semibold">Unit</label>
            <select
              name="unit"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              defaultValue="kg"
            >
              <option value="kg">Kg</option>
              <option value="dozen">Dozen</option>
              <option value="bag">Bag</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Estimated Quantity</label>
            <input
              type="number"
              name="quantity"
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="400"
            />
          </div>

          <div className="flex items-center gap-2">
            {/* <FaMapMarkerAlt className="text-green-600" /> */}
            <div className="w-full">
              <label className="font-semibold">Location</label>
              <input
                type="text"
                name="location"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Meherpur"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="font-semibold">Description</label>
            <textarea
              name="description"
              required
              rows="4"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Write details about your crop..."
            ></textarea>
          </div>

          <div className="md:col-span-2 flex  items-center gap-2">
            {/* <FaImage className="text-green-600" /> */}
            <div className="w-full">
              <label className="font-semibold">Image URL</label>
              <input
                type="text"
                name="image"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-lime-500 text-white font-semibold text-lg hover:scale-[1.01] transition"
            >
              {loading ? "Adding..." : "Add Crop"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCorps;
