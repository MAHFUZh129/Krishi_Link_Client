import { FaShieldAlt, FaUsers, FaMobileAlt, FaChartLine, FaHeadset, FaClock, FaLeaf, FaHandshake } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-green-50 via-lime-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-lime-500">
            Why Choose KrishiLink?
          </h2>
          <p className="text-gray-600 mt-3">
            Built for farmers, powered by technology
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="flex gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-3xl text-green-600" />
            <div>
              <h4 className="font-bold text-lg">Trusted Platform</h4>
              <p className="text-gray-600 text-sm">
                Verified users and secure transactions.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaUsers className="text-3xl text-lime-600" />
            <div>
              <h4 className="font-bold text-lg">Farmer First</h4>
              <p className="text-gray-600 text-sm">
                Designed to ensure fair pricing and transparency.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaMobileAlt className="text-3xl text-amber-600" />
            <div>
              <h4 className="font-bold text-lg">Mobile Friendly</h4>
              <p className="text-gray-600 text-sm">
                Works smoothly on any device.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaChartLine className="text-3xl text-green-700" />
            <div>
              <h4 className="font-bold text-lg">Smart Insights</h4>
              <p className="text-gray-600 text-sm">
                Track interests and manage crops easily.
              </p>
            </div>
          </div>
           <div className="flex gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaHandshake className="text-3xl text-blue-600" />
            <div>
              <h4 className="font-bold text-lg">Direct Deal</h4>
              <p className="text-gray-600 text-sm">
                Connect directly with buyers without middlemen.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaLeaf className="text-3xl text-green-500" />
            <div>
              <h4 className="font-bold text-lg">Sustainable Farming</h4>
              <p className="text-gray-600 text-sm">
                Promote eco-friendly and responsible agriculture.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaClock className="text-3xl text-orange-500" />
            <div>
              <h4 className="font-bold text-lg">Time Efficient</h4>
              <p className="text-gray-600 text-sm">
                Faster listing, negotiation, and responses.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaHeadset className="text-3xl text-purple-600" />
            <div>
              <h4 className="font-bold text-lg">Dedicated Support</h4>
              <p className="text-gray-600 text-sm">
                Friendly support whenever you need help.
              </p>
            </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
