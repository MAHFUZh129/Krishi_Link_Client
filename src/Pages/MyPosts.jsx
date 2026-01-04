import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner";
import { FaLocationDot } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";

const MyPosts = () => {
  const { user } = useContext(AuthContext);
//   console.log(user)
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCrop, setEditingCrop] = useState(null);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:5000/my-posts?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
        setLoading(false);
      });
  }, [user]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      name: form.name.value,
      type: form.type.value,
      pricePerUnit: form.pricePerUnit.value,
      unit: form.unit.value,
      quantity: form.quantity.value,
      description: form.description.value,
      location: form.location.value,
      image: form.image.value,
    };

    fetch(`http://localhost:5000/corps/${editingCrop._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
        .then((res) => res.json())
      .then((updated) => {
        toast.success(" Crop updated successfully!")
        setCrops((prev) =>
          prev.map((crop) =>
            crop._id === updated._id ? { ...crop, ...updated } : crop
          )
        );
        setEditingCrop(null)
      });
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this crop?")
    if (!confirmDelete) return;

    fetch(`http://localhost:5000/corps/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        toast.success(" Crop deleted successfully!");
        setCrops((prev) => prev.filter((crop) => crop._id !== id))
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Spinner></Spinner>
      </div>
    );
  }

  if (crops.length === 0) {
    return (
      <div className="text-center text-red-600 italic my-5 font-bold text-4xl mt-10">
        You haven’t posted any crops yet!
      </div>
    );
  }

  return (
    <div className="p-4  md:py-19 bg-gradient-to-r from-lime-100 via-amber-200 to-green-100 min-h-screen">
  <h1 className="text-2xl md:text-3xl font-bold text-green-700 text-center mb-6">
    My Crop Posts
  </h1>

  {/* md/lg screen */}
  <div className="hidden md:block overflow-x-auto  shadow">
    <table className="min-w-full bg-white">
      <thead className="bg-green-100">
        <tr>
          <th className="p-3 text-left">Name</th>
          <th className="p-3">Type</th>
          <th className="p-3">Price</th>
          <th className="p-3">Quantity</th>
          <th className="p-3">Location</th>
          <th className="p-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {crops.map((crop) => (
          <tr key={crop._id} className="border-b hover:bg-lime-50 transition">
            <td className="p-3 font-semibold text-green-600">{crop.name}</td>
            <td className="p-3 font-bold text-amber-500">{crop.type}</td>
            <td className="p-3 font-bold">
              {crop.pricePerUnit} / {crop.unit}
            </td>
            <td className="p-3 font-bold">
              {crop.quantity} {crop.unit}
            </td>
            <td className="p-3 text-red-800 font-bold">{crop.location}</td>
            <td className="p-3 flex gap-2 justify-center">
              <button
                onClick={() => setEditingCrop(crop)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(crop._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

   {/* (< md) screens */}
  <div className="md:hidden space-y-4">
    {crops.map((crop) => (
      <div
        key={crop._id}
        className="bg-amber-50 p-4 space-y-4 rounded-xl shadow border border-lime-200"
      >
        <h2 className="text-lg font-bold text-green-700">{crop.name}</h2>
        <p className=" bg-amber-300 p-2 rounded-md text-lg font-semibold text-gray-800">{crop.type}</p>
        <p className="text-md text-green-500 flex items-center gap-2 font-semibold">
          <TbCurrencyTaka /> {crop.pricePerUnit} / {crop.unit}
        </p>
        <p className="text-md flex items-center gap-2 text-red-900 font-semibold">
          <MdProductionQuantityLimits /> {crop.quantity} {crop.unit}
        </p>
        <p className="text-xl flex font-bold items-center gap-2 text-blue-900"><FaLocationDot /> {crop.location}</p>

        <div className="flex justify-end gap-2 mt-3">
          <button
            onClick={() => setEditingCrop(crop)}
            className="bg-blue-500 text-sm text-white px-3 py-1 rounded hover:bg-blue-700 "
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(crop._id)}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* ✅ Edit modal same as before */}
  {editingCrop && (
    <dialog open className="modal">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-lg mb-4 text-green-700">
          Edit Crop: {editingCrop.name}
        </h3>
        <form onSubmit={handleEditSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            defaultValue={editingCrop.name}
            placeholder="Crop name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="type"
            defaultValue={editingCrop.type}
            placeholder="Type"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="pricePerUnit"
            defaultValue={editingCrop.pricePerUnit}
            placeholder="Price per unit"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="unit"
            defaultValue={editingCrop.unit}
            placeholder="Unit (kg, ton, etc.)"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="quantity"
            defaultValue={editingCrop.quantity}
            placeholder="Quantity"
            className="input input-bordered w-full"
          />
          <textarea
            name="description"
            defaultValue={editingCrop.description}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
          ></textarea>
          <input
            type="text"
            name="location"
            defaultValue={editingCrop.location}
            placeholder="Location"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="image"
            defaultValue={editingCrop.image}
            placeholder="Image URL"
            className="input input-bordered w-full"
          />
          <div className="modal-action flex justify-between">
            <button
              type="submit"
              className="btn bg-green-600 text-white hover:bg-green-700"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditingCrop(null)}
              className="btn bg-gray-400 text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )}
</div>

  );
};

export default MyPosts;
