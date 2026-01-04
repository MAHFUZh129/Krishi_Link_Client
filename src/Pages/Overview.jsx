import React from "react";
import { FaSeedling, FaHeart, FaUser } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-6">
        Dashboard Overview
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* My Posts */}
        <div className="bg-white shadow rounded-lg p-5 flex items-center gap-4">
          <FaSeedling className="text-3xl text-green-600" />
          <div>
            <p className="text-gray-500 text-sm">My Posts</p>
            <h3 className="text-xl font-bold">12</h3>
          </div>
        </div>

        {/* My Interests */}
        <div className="bg-white shadow rounded-lg p-5 flex items-center gap-4">
          <FaHeart className="text-3xl text-red-500" />
          <div>
            <p className="text-gray-500 text-sm">My Interests</p>
            <h3 className="text-xl font-bold">5</h3>
          </div>
        </div>

        {/* Profile */}
        <div className="bg-white shadow rounded-lg p-5 flex items-center gap-4">
          <FaUser className="text-3xl text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">Profile Status</p>
            <h3 className="text-xl font-bold">Active</h3>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white shadow rounded-lg p-5">
        <h3 className="text-lg font-semibold mb-3">
          Recent Activity
        </h3>
        <ul className="text-gray-600 text-sm space-y-2">
          <li>✅ You added a new crop post</li>
          <li>❤️ You showed interest in a crop</li>
          <li>✏️ You updated your profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
