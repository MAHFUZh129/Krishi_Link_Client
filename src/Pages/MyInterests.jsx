import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../Components/Spinner";

const statusColor = {
  accepted: "bg-green-500",
  rejected: "bg-red-500",
  pending: "bg-yellow-500",
};

const MyInterests = () => {
  const { user } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://krishilinkapi-server.vercel.app/my-interests?email=${user.email}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load interests");
        return res.json();
      })
      .then((data) => setInterests(data))
      .catch(() => setError("Could not load your interests"))
      .finally(() => setLoading(false));
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-28 bg-gradient-to-br from-lime-100 via-amber-100 to-green-100">
      <h1 className="text-4xl font-extrabold text-green-800 text-center mb-8">
         My Interests
      </h1>

      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}

      {interests.length === 0 ? (
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg text-center">
          <p className="text-gray-600 font-semibold mb-4">
            You haven’t sent any interests yet.
          </p>
          <p className="text-sm text-gray-500">
            Explore crops and send interest to connect with farmers 🌱
          </p>
        </div>
      ) : (
        <>
          {/* Desktop / Tablet */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-green-100 text-green-800">
                <tr>
                  <th className="p-4 text-left">Crop</th>
                  <th className="p-4 text-left">Owner</th>
                  <th className="p-4 text-center">Quantity</th>
                  <th className="p-4 text-left">Message</th>
                  <th className="p-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {interests.map((interest) => (
                  <tr
                    key={interest._id}
                    className="border-b hover:bg-lime-50 transition"
                  >
                    <td className="p-4 font-semibold text-green-700">
                      {interest.cropName}
                    </td>
                    <td className="p-4 text-amber-700">
                      {interest.ownerName}
                      <div className="text-xs text-gray-500">
                        {interest.ownerEmail}
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold">
                      {interest.quantity}
                    </td>
                    <td className="p-4 italic text-gray-600">
                      {interest.message}
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={`px-4 py-1 rounded-full text-white text-sm capitalize ${
                          statusColor[interest.status]
                        }`}
                      >
                        {interest.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="grid gap-5 md:hidden">
            {interests.map((interest) => (
              <div
                key={interest._id}
                className="bg-white/90 backdrop-blur-md border border-lime-200 rounded-2xl shadow-md p-5"
              >
                <h3 className="text-xl font-bold text-green-700">
                  {interest.cropName}
                </h3>

                <p className="text-sm text-amber-700 font-medium">
                  {interest.ownerName}
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  {interest.ownerEmail}
                </p>

                <p className="text-sm">
                  <span className="font-semibold">Quantity:</span>{" "}
                  {interest.quantity}
                </p>

                <p className="italic text-gray-600 mt-2">
                  “{interest.message}”
                </p>

                <div className="mt-4 text-right">
                  <span
                    className={`px-4 py-1 rounded-full text-white text-sm capitalize ${
                      statusColor[interest.status]
                    }`}
                  >
                    {interest.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyInterests;
