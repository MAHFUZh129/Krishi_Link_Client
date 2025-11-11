import React from 'react';
import { Link } from 'react-router';

const CorpCard = ({corp}) => {
    // console.log(corp)
    const {name, image, type,quantity,location,
         pricePerUnit, _id} = corp
    return (
         <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full rounded-md  h-48 object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-green-600 font-bold">{name}</h2>
        <div className=" bg-amber-500 text-white font-bold text-center p-1 w-20 rounded-full">{type}</div>
        
        <p className="text-gray-600 font-semibold md:text-lg">Price: {pricePerUnit}/kg</p>
          <div className="md:flex  md:justify-between mb-2 ">
            <span className="md:text-lg font-semibold text-blue-600">
             
               {location}
            </span>
            <span className='text-lg font-semibold text-red-500 hidden md:block'>
                Stock: {quantity}kg
            </span>
          </div>
          <Link
          to={`/corps-details/${_id}`}
            className="btn rounded-full bg-gradient-to-br from-green-600 via-lime-500 md:p-5 to-green-500 text-xs md:text-lg md:font-bold text-white w-25 md:w-full btn-sm">
                View Details</Link>
      </div>
    </div>
    );
};

export default CorpCard;