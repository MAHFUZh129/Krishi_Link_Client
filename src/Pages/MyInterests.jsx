import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../Components/Spinner";

const MyInterests = () => {
  const { user } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/my-interests?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setInterests(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner></Spinner>
      </div>
    );
  }

  return (

        <div className="p-6 bg-gradient-to-r from-lime-100 via-amber-200 to-green-100 min-h-screen">
  <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
    My Interests
  </h1>

  {interests.length === 0 ? (
    <p className="text-center text-gray-600 font-semibold italic">
      You haven’t sent any interests yet.
    </p>
  ) : (
    <>
      {/*  md and lg scrren */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg ">
          <thead className="bg-green-100">
            <tr>
              <th className="p-3 text-left">Crop Name</th>
              <th className="p-3 text-left">Owner</th>
              <th className="p-3 text-center">Quantity</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {interests.map((interest, i) => (
              <tr
                key={i}
                className="border-b hover:bg-lime-50 transition-all"
              >
                <td className="p-3 font-semibold text-green-700">
                  {interest.cropName}
                </td>
                <td className="p-3 text-amber-700">
                  {interest.ownerName} <br />
                  <span className="text-xs text-gray-500">
                    {interest.ownerEmail}
                  </span>
                </td>
                <td className="p-3 text-center font-bold">
                  {interest.quantity}
                </td>
                <td className="p-3 text-gray-600 italic">
                  {interest.message}
                </td>
                <td className="p-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      interest.status === "accepted"
                        ? "bg-green-500"
                        : interest.status === "rejected"
                        ? "bg-red-500"
                        : "bg-yellow-500"
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

      {/* (<md) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {interests.map((interest, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-4 border border-lime-200"
          >
            <h3 className="text-xl font-bold text-green-700 mb-1">
              {interest.cropName}
            </h3>
            <p className="text-sm text-amber-700 font-medium">
              {interest.ownerName}
            </p>
            <p className="text-xs text-gray-500 mb-2">
              {interest.ownerEmail}
            </p>
            <div className="text-sm">
              <p>
                <span className="font-semibold text-green-700">
                  Quantity:
                </span>{" "}
                {interest.quantity}
              </p>
              <p className="italic text-gray-600 mt-1">
                “{interest.message}”
              </p>
            </div>
            <div className="mt-3 text-right">
              <span
                className={`px-3 py-1 rounded-full text-white text-sm ${
                  interest.status === "accepted"
                    ? "bg-green-500"
                    : interest.status === "rejected"
                    ? "bg-red-500"
                    : "bg-yellow-500"
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
