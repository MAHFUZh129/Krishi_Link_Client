import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Spinner from "../Components/Spinner";

const AddCorps = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
//   console.log(user)
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

    fetch("http://localhost:3000/corps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok)
        
        return res.json()
      })
      .then((data) => {
        toast.success("Crop added successfully!!")
        // console.log( data);
        navigate("/my-posts")
        setLoading(false)
      })
      .catch((err) => {
        console.error( err);
        toast.error("Something went wrong!");
        setLoading(false)
      });
  };

  if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <Spinner></Spinner>
        </div>
      );
    }

  return (
    <div className="bg-gradient-to-r from-gray-100 via-lime-200 to-gray-400 p-7">
      <div className="max-w-xl bg-amber-100 mx-auto p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Add New Crop
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-semibold">Crop Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border p-2 rounded mt-1"
              placeholder="e.g. Tomato"
            />
          </div>

          <div>
            <label className="font-semibold">Type</label>
            <select
              name="type"
              required
              className="w-full border p-2 rounded mt-1"
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
              className="w-full border p-2 rounded mt-1"
              placeholder="e.g. 55"
            />
          </div>

          <div>
            <label className="font-semibold">Unit</label>
            <select
              name="unit"
              className="w-full border p-2 rounded mt-1"
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
              className="w-full border p-2 rounded mt-1"
              placeholder="e.g. 400"
            />
          </div>

          <div>
            <label className="font-semibold">Description</label>
            <textarea
              name="description"
              required
              className="w-full border p-2 rounded mt-1"
              placeholder="Write In details about your crop"
            ></textarea>
          </div>

          <div>
            <label className="font-semibold">Location</label>
            <input
              type="text"
              name="location"
              required
              className="w-full border p-2 rounded mt-1"
              placeholder="e.g. Meherpur"
            />
          </div>

          <div>
            <label className="font-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              required
              className="w-full border p-2 rounded mt-1"
              placeholder="https://example.com/tomato.jpg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 font-semibold transition"
          >
            {loading ? "Adding..." : "Add Crop"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCorps;
