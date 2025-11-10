import React from 'react';

const HowItWorks = () => {
  return (
    <div>
      <section className="py-12 ">
      {/* <section className="py-12 bg-gradient-to-br from-green-500 via-lime-200 to-green-400"> */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">How Our Website Works</h2>
        <p className=" text-xl font-semibold text-center mt-2">
          Follow these 4 simple steps to use our platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
           {/* Step 1  */}
          <div className="bg-gradient-to-r from-blue-300 to-cyan-300 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">1. Create an Account</h3>
            <p className="text-red-500  font-semibold">
              Sign up as a farmer or buyer within a minute.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-r from-blue-300 to-cyan-300 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">2. Post or Browse Crops</h3>
            <p className="text-red-500 font-semibold">
              Farmers post crops & buyers search for what they need.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-r from-blue-300 to-cyan-300 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">3. Connect & Chat</h3>
            <p className="text-red-500 font-semibold">
              Contact each other to negotiate price and details.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gradient-to-r from-blue-300 to-cyan-300 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">4. Finalize the Deal</h3>
            <p className="text-red-500 font-semibold">
              Confirm the deal and arrange pickup or delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HowItWorks;