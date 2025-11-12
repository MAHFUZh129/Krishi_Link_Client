import React, { useState } from 'react';
import CorpCard from '../Components/CorpCard';
import { useLoaderData } from 'react-router';
import Spinner from '../Components/Spinner';

const AllCorps = () => {
    const data =useLoaderData()
    console.log(data)

    const [corps, setCorps] = useState(data)
  const [loading, setLoading] = useState(false)


     const handleSearch = (e) => { 
    e.preventDefault()
    const search = e.target.search.value.trim()

    // console.log(search)
    if (!search) return
    setLoading(true)

    fetch(`http://localhost:3000/search?search=${search}`)
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      setCorps(data)
      setLoading(false)
    })
  }


  
  


if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] ">
        <Spinner></Spinner>
      </div>
    );
  }

    return (
        <div className='bg-gradient-to-r from-amber-200 via-yellow-300 to-green-700'>
         
            <div className="text-3xl text-green-600 text-center pt-7 font-bold"> All Corps</div>
            <p className=" text-center text-xl font-semibold text-white ">Explore Corps Here.</p>
            {/* <search></search> */}
        <form onSubmit={handleSearch} className='space-x-1 flex  justify-end mx-6 md:mr-5 mt-2 md:mt-8'>
               <label className="input rounded-full  ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" name='search' placeholder="Search" />
</label>
<button className="btn btn-primary font-semibold">{loading?'Searching....':'Search'}</button>

         </form>
            <div className="grid p-5 grid-cols-2 md:grid-cols-3 gap-3">
                
                {corps.length === 0 ? (
          <div className="col-span-full text-center text-red-600 italic font-bold text-4xl mt-10">
            No results found
          </div>
        ) : (
          corps.map((corp) => <CorpCard key={corp._id} corp={corp} />)
        )}
            </div>
        </div>
    );
};

export default AllCorps;