import {
  FaSeedling,
  FaHandshake,
  FaUserShield,
  FaMobileAlt,
  FaMapMarkedAlt,
  FaChartLine,
  FaEdit,
  FaSearch,
  FaLock,
  FaLayerGroup,
  FaTruck
} from "react-icons/fa";

const services = [
  {
    icon: <FaSeedling />,
    title: "Crop Listing",
    desc: "Farmers can easily post crops with price, quantity, and location."
  },
  {
    icon: <FaHandshake />,
    title: "Smart Interest System",
    desc: "Buyers can send interests directly with custom quantity & message."
  },
  {
    icon: <FaUserShield />,
    title: "Secure Authentication",
    desc: "Email & social login ensure verified and trusted users."
  },
  {
    icon: <FaEdit />,
    title: "Easy Crop Management",
    desc: "Edit or delete crop posts anytime from dashboard."
  },
  {
    icon: <FaSearch />,
    title: "Quick Crop Discovery",
    desc: "Search and explore crops easily with filters."
  },
  
  {
    icon: <FaChartLine />,
    title: "Interest Tracking",
    desc: "Track interest status in real time."
  },
  {
    icon: <FaMobileAlt />,
    title: "Fully Responsive",
    desc: "Optimized for mobile, tablet and desktop."
  },
  
  {
    icon: <FaTruck />,
    title: "Future Logistics Support",
    desc: "Planned delivery & transport integration."
  }
];

const Services = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-lime-500">
            Our Services
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Powerful features designed to connect farmers and buyers seamlessly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md border border-green-100 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full 
                              bg-gradient-to-r from-green-500 to-lime-500 
                              text-white text-2xl mb-4 group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-green-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
