import React from 'react';
import CorpCard from '../Components/CorpCard';
import { useLoaderData } from 'react-router';

const AllCorps = () => {
    const data =useLoaderData()
    console.log(data)
    return (
        <div className='bg-gradient-to-r from-amber-200 via-yellow-300 to-green-700'>
            <div className="text-3xl text-green-600 text-center pt-7 font-bold"> All Corps</div>
            <p className=" text-center text-xl font-semibold text-white ">Explore Corps Here.</p>
            <div className="grid p-5 grid-cols-2 md:grid-cols-3 gap-3">
                {data.map(corp => 
                    <CorpCard key={corp._id} corp={corp} />
                )
                }
            </div>
        </div>
    );
};

export default AllCorps;