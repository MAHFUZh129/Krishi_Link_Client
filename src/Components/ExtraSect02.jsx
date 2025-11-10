import React from "react";

 const ExtraSect02=()=> {

const testimonials = [
{
id: 1,
name: "Rahim Uddin",
role: "Farmer, Rajshahi",
comment:
"This platform helped me sell my crops at a fair price without any middleman!",
image: "https://i.ibb.co.com/M5Dnhwtq/download-17.jpg",
},
{
id: 2,
name: "Anik Ahmed",
role: "Buyer, Dhaka",
comment:
"Very easy to find fresh and organic crops directly from farmers. Highly recommended!",
image: "https://i.ibb.co.com/xtP1rYmC/images-7.jpg",
},
{
id: 3,
name: "Mahmud Hasan",
role: "Farmer, Bogura",
comment:
"My income increased 35% after I started selling here. Great initiative for farmers!",
image: "https://i.ibb.co.com/s95dxK4J/download-18.jpg",
},
];


return (
<section className="py-14 bg-gradient-to-br from-pink-100 via-lime-200 to-green-200">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
<p className="text-green-800 font-bold text-center mt-2 max-w-xl mx-auto">
Real feedback from farmers and buyers using our platform.
</p>


<div className="grid grid-cols-1  md:grid-cols-3 gap-6 mt-10">
{testimonials.map((item) => (
<div
key={item.id}
className="bg-green-200 p-6 rounded-xl shadow hover:shadow-md transition text-center"
>
<img
src={item.image}
alt={item.name}
className="w-34 h-34 rounded-full mx-auto object-cover"
/>
<h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
<p className="text-md font-semibold text-green-600">{item.role}</p>
<p className="text-gray-800 font-semibold text-sm mt-3">“{item.comment}”</p>
</div>
))}
</div>
</div>
</section>
);
}

export default ExtraSect02;