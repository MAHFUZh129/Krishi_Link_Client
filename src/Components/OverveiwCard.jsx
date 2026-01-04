
import React from 'react';

const OverveiwCard = ({ title, value }) => {
    return (
        <div className="bg-gradient-to-r from-green-600 to-lime-500 text-white p-6 rounded-2xl shadow">
    <h4 className="text-sm opacity-90">{title}</h4>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
    );
};

export default OverveiwCard;