import React, { use, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const InterestForm = ({ data }) => {
    // console.log(data)
  const { _id: cropId, pricePerUnit } = data;
  const {user} =use(AuthContext)
//   console.log(user)
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const totalPrice = quantity * pricePerUnit;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (quantity < 1) {
      toast.error("Quantity must be at least 1!");
      return;
    }

    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    const interestData = {
      cropId,
      userEmail: user?.email,
      userName: user?.displayName || "Anonymous",
      quantity,
      message,
      status: "pending",
    };

    try {
      const res = await fetch("http://localhost:3000/interests", {
        method: "POST",
        headers: { "Content-Type": "application/json",
    
         },
        body: JSON.stringify(interestData),
      });
    //   console.log(res)

      if (res.ok) {
        toast.success("Interest submitted successfully!");
      } else {
        toast.error("Failed to submit interest.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }

    setShowConfirm(false);
  };

  return (
    <div className="md:mt-8 m-4 border-dotted md:border-0 border-2 md:border-l-2 py-4 px-3 md:px-15 md:pt-35 ">
      <h2 className="text-2xl font-bold mb-4">Send Interest</h2>

      <form onSubmit={handleSubmit} className="disabled space-y-4">
        {/* Quantity */}
        <div>
          <label className="block font-medium mb-1">Quantity (in kg)</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input input-bordered w-full"
            min="1"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium mb-1">Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Write a message..."
            required
          />
        </div>

        {/* Total Price */}
        <div className="font-semibold">
          Total Price: <span className="text-green-600">{totalPrice} ৳</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-success bg-black w-full text-white rounded-full"
        >
          Submit Interest
        </button>
      </form>

      {/* Confirmation  */}
      {showConfirm && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Submission</h3>
            <p className="py-4">
              Are you sure you want to send this interest request for{" "}
              {quantity} kg?
            </p>
            <div className="modal-action">
              <button className="btn" onClick={handleConfirm}>
                Yes, Submit
              </button>
              <button className="btn" onClick={() => setShowConfirm(false)}>
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










