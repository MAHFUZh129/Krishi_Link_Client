import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import OverveiwCard from "../Components/OverveiwCard";

const DashboardOverview = () => {
  const [stats, setStats] = useState(null);
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch("https://krishilinkapi-server.vercel.app/dashboard-overview")
      .then(res => res.json())
      .then(data => setStats(data));

    fetch("https://krishilinkapi-server.vercel.app/corps")
      .then(res => res.json())
      .then(data => setCrops(data));
  }, []);

  if (!stats) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const COLORS = ["#22c55e", "#84cc16", "#facc15", "#f97316"];

  return (
    <div className="py-22 px-8 space-y-10">

      {/* overvew card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <OverveiwCard title="Total Crops" value={stats.totalCrops} />
        <OverveiwCard title="Total Quantity" value={stats.totalQuantity} />
        <OverveiwCard title="Categories" value={stats.categoryWise.length} />
      </div>

      {/* charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* bar chart */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold mb-4">Crops by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.categoryWise}>
              <XAxis dataKey="_id" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#22c55e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* pie chart */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold mb-4">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stats.categoryWise}
                dataKey="count"
                nameKey="_id"
                cx="50%"
                cy="50%"
                outerRadius={100}
              >
                {stats.categoryWise.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* data table */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-green-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Location</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((c) => (
              <tr key={c._id} className="border-b hover:bg-lime-50">
                <td className="p-3 font-semibold">{c.name}</td>
                <td className="p-3">{c.type}</td>
                <td className="p-3">{c.pricePerUnit}/{c.unit}</td>
                <td className="p-3">{c.quantity}</td>
                <td className="p-3">{c.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};



export default DashboardOverview;
