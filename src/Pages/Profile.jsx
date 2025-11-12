import React, { use, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const { user } = use(AuthContext);
  const {profileUpdate}=use(AuthContext)
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    profileUpdate({
  displayName: formData.name,
  photoURL: formData.photoURL,
})
  .then(() => toast.success("Profile updated successfully!"))
  .catch((err) => toast.error(err.message));

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-amber-100 to-lime-200 flex items-center justify-center p-6">
  <div className="w-full max-w-lg bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-green-200">
    <h2 className="text-4xl text-center font-extrabold text-green-700 mb-6">
      My Profile 
    </h2>

    {!edit ? (
      <div className="flex flex-col items-center text-center">
        <div className="relative group">
          <img
            src={user?.photoURL || "https://i.ibb.co/Zm3nY8b/user.png"}
            alt="Profile"
            className="md:w-38 w-28 h-28 md:h-38 rounded-full border-4 border-green-400 shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h3 className="text-xl font-semibold text-red-700 mt-4">
          {user?.displayName || "No Name"}
        </h3>
        <p className="text-gray-600 text-sm md:text-md md:font-bold italic">{user?.email}</p>

        <button
          onClick={() => setEdit(true)}
          className="mt-6 px-6 py-2 bg-gradient-to-r flex items-center gap-2 from-green-600 to-lime-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <FaEdit /> Edit Profile
        </button>
      </div>
    ) : (
      <form
        onSubmit={handleSubmit}
        className="space-y-5 animate-fadeIn"
      >
        <div className="flex justify-center">
          <img
            src={formData.photoURL || "https://i.ibb.co/Zm3nY8b/user.png"}
            alt="Preview"
            className="w-20 h-20 rounded-full border-2 border-green-400 shadow-sm"
          />
        </div>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="input input-bordered w-full border-green-300 focus:border-green-500 focus:ring focus:ring-green-100"
          required
        />

        <input
          type="text"
          name="photoURL"
          value={formData.photoURL}
          onChange={handleChange}
          placeholder="Photo URL"
          className="input input-bordered w-full border-green-300 focus:border-green-500 focus:ring focus:ring-green-100"
        />

        <div className="flex justify-between pt-2">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-gradient-to-r from-green-600 to-lime-500 text-white font-semibold rounded-full shadow hover:scale-105 transition-all"
          >
            {loading ? "Saving..." : " Save"}
          </button>
          <button
            type="button"
            onClick={() => setEdit(false)}
            className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-full shadow hover:bg-gray-400 hover:scale-105 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    )}
  </div>
</div>

  );
};

export default Profile;
