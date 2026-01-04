import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { FaPaperPlane, FaCoins } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router";

const InterestForm = ({ data, unit }) => {
  const { _id: cropId, pricePerUnit } = data;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location.state?.from || "/";


  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const totalPrice = quantity * pricePerUnit;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login first to submit interest");

      navigate("/login", {
        state: { from: location.pathname },
        replace: true,
      });
      return;
    }

    if (quantity < 1) {
      toast.error("Quantity must be at least 1");
      return;
    }
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    const interestData = {
      cropId,
      userEmail: user?.email,
      userName: user?.displayName || "Anonymous",
      quantity,
      message,
      status: "pending",
    };

    fetch("https://krishilinkapi-server.vercel.app/interests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(interestData),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => {
        toast.success("Interest submitted successfully ");
        setQuantity(1);
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to submit interest");
      })
      .finally(() => setShowConfirm(false));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/80 backdrop-blur-xl border border-green-100 rounded-3xl shadow-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-6 text-center">
          Send Interest
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Quantity */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Quantity ({unit})
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full rounded-xl border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a short message to the farmer..."
              className="w-full rounded-xl border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Total Price */}
          <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-lime-50 px-4 py-3 rounded-xl">
            <span className="flex items-center gap-2 text-gray-700 font-medium">
              <FaCoins className="text-green-600" /> Total Price
            </span>
            <span className="text-xl font-bold flex items-center text-green-700">
              <TbCurrencyTaka />
              {totalPrice}
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 via-lime-500 to-green-600 hover:scale-[1.02] transition text-white font-semibold py-3 rounded-full shadow-lg"
          >
            <FaPaperPlane /> Submit Interest
          </button>
        </form>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <dialog open className="modal">
          <div className="modal-box rounded-2xl">
            <h3 className="font-bold text-lg text-green-700">
              Confirm Interest
            </h3>
            <p className="py-4 text-gray-600">
              Submit interest for{" "}
              <span className="font-semibold text-green-700">
                {quantity} {unit}
              </span>{" "}
              ?
            </p>
            <div className="modal-action">
              <button
                className="btn bg-green-600 text-white btn-success"
                onClick={handleConfirm}
              >
                Confirm
              </button>
              <button
                className="btn btn-outline"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default InterestForm;
