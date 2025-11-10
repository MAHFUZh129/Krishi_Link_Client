

import React from 'react';

const ExtraSect01 = () => {
    const stats = [
{ id: 1, label: "Farmers Registered", value: "12,500+" },
{ id: 2, label: "Successful Deals", value: "85,000+" },
{ id: 3, label: "Crop Types Listed", value: "350+" },
{ id: 4, label: "Active Buyers", value: "20,000+" },
];

    return (
        <div>
            <section className="py-14 bg-green-900 text-white">
<div className="max-w-7xl mx-auto px-4 text-center">
<h2 className="text-3xl font-bold">Our Impact in Agriculture</h2>
<p className="text-green-100 mt-2 max-w-xl mx-auto">
We are transforming the agricultural marketplace by empowering farmers and buyers.
</p>


<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
{stats.map((stat) => (
<div key={stat.id} className="p-4">
<h3 className="text-3xl font-extrabold">{stat.value}</h3>
<p className="text-green-100 mt-1">{stat.label}</p>
</div>
))}
</div>
</div>
</section>
        </div>
    );
};

export default ExtraSect01;