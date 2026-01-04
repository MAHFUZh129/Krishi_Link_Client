import React, { useEffect, useState } from "react";

const Table = ({ _id, unit }) => {
  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingId, setLoadingId] = useState(null);

  const fetchCropData=()=>{
    setLoading(true);
    fetch(`http://localhost:5000/corps/${_id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch crop")


        return res.json();
      })
      .then((data) =>
                // console.log(data)
         setCrop(data))
      .catch((err) => console.error("Failed to fetch crop:", err))
      .then(() =>
         setLoading(false)
    );
  };

   const handleAction = (interestId, newStatus) => {
    setLoadingId(interestId);
    const interest = crop.interests.find((i) => i._id === interestId);
    const reduceAmount = parseInt(interest?.quantity || 0);

    fetch(`http://localhost:5000/corps/${_id}/interests/${interestId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => 
        res.json())
      .then(() => {
        setCrop((prev) => ({
          ...prev,
          interests: prev.interests.map((i) =>
            i._id === interestId ? { ...i, status: newStatus } : i
          ),
          quantity:
            newStatus === "accepted"
              ? prev.quantity - reduceAmount
              : prev.quantity,
        }));
      })
      .then(() =>
         setLoadingId(null)
    )
  };

  

  useEffect(() => {
    fetchCropData();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading crop data...</p>;
  }

  if (!crop || !crop.interests || crop.interests.length === 0) {
    return (
      <div className="p-22 text-center text-4xl font-bold text-red-600 italic">
        Oops!! No interest requests yet.
      </div>
    );
  }

  return (
    <div className="md:p-8 p-2">
      <div className="md:hidden space-y-4">
      <p className="text-xl font-semibold m-8 italic text-green-700">Received {crop.interests.length} Interests for: {crop.name}</p>
        {crop.interests.map((interest) => (
          <div
            key={interest._id}
            className="border border-green-200 rounded-xl p-4 shadow-sm bg-green-50"
          >
            <p className="font-semibold text-lg text-amber-700">
              {interest.userName}
            </p>

            <p className="text-gray-800">
              <span className="font-medium">Quantity:</span>{" "}
              {interest.quantity}
              {unit}
            </p>

            <p className="text-gray-800">
              <span className="font-medium">Message:</span> {interest.message}
            </p>

            <p className="text-gray-800">
              <span className="font-medium">Status:</span>{" "}
              {interest.status === "pending" ? (
                <span className="text-yellow-600 font-semibold">Pending</span>
              ) : interest.status === "accepted" ? (
                <span className="text-green-600 font-semibold">Accepted</span>
              ) : (
                <span className="text-red-600 font-semibold">Rejected</span>
              )}
            </p>

            {interest.status === "pending" && (
              <div className="flex gap-2 mt-3">
                <button
                  disabled={loadingId === interest._id}
                  onClick={() => handleAction(interest._id, "accepted")}
                  className="bg-green-600 text-white px-3 py-1 rounded font-semibold text-sm hover:bg-green-700"
                >
                  {loadingId === interest._id ? "..." : "Accept"}
                </button>

                <button
                  disabled={loadingId === interest._id}
                  onClick={() => handleAction(interest._id, "rejected")}
                  className="bg-red-500 text-white px-3 py-1 rounded font-semibold text-sm hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="h-76 p-5 hidden md:block bg-white rounded-2xl shadow-md">
        <h2 className="text-3xl pb-8 text-green-700 font-bold text-center py-3 border-b">
          Received {crop.interests.length} Interests for: {crop.name}
        </h2>

        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-green-100 text-gray-800 uppercase text-xs font-semibold">
            <tr className="text-[14px]">
              <th className="px-6 py-3">Buyer Name</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {crop.interests.map((interest) => (
              <tr
                key={interest._id}
                className="border-b hover:bg-green-50 transition"
              >
                <td className="px-6 py-3 text-[16px] text-amber-600 font-medium">
                  {interest.userName}
                </td>
                <td className="px-6 text-black text-lg py-3">
                  {interest.quantity}
                  {unit}
                </td>
                <td className="px-6 text-black text-[16px] py-3">
                  {interest.message}
                </td>
                <td className="px-6 py-3 capitalize">
                  {interest.status === "pending" ? (
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-2 rounded-full font-semibold text-md">
                      Pending
                    </span>
                  ) : interest.status === "accepted" ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      Accepted
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold text-md">
                      Rejected
                    </span>
                  )}
                </td>
                <td className="px-6 py-3 text-center">
                  {interest.status === "pending" && (
                    <div className="flex gap-2 justify-center">
                      <button
                        disabled={loadingId === interest._id}
                        onClick={() => handleAction(interest._id, "accepted")}
                        className="bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-700 font-semibold text-md"
                      >
                        {loadingId === interest._id ? "..." : "Accept"}
                      </button>
                      <button
                        disabled={loadingId === interest._id}
                        onClick={() => handleAction(interest._id, "rejected")}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 font-semibold text-md"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
