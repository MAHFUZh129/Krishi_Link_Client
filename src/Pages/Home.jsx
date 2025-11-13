import React from 'react';
import Slides from '../Components/Slides';
import HowItWorks from '../Components/HowItWorks.jsx';
import ExtraSect01 from '../Components/ExtraSect01.jsx';
import ExtraSect02  from '../Components/ExtraSect02.jsx';
import NewsOrBlogs from '../Components/NewsOrBlogs.jsx';
import { Link, useLoaderData } from 'react-router';
import CorpCard from '../Components/CorpCard.jsx';

const Home = () => { 

    const data =useLoaderData()
    // console.log(data)
     
    return (
        <div className=''>
            <div className='space-y-5 bg-gradient-to-br from-gray-300 via-gray-800 to-white py-8 md:py-10'>
                <h1 className='text-5xl font-extrabold text-center text-green-600'><span className='text-white'>Wellcome To</span> The <br /> KrishiLink</h1>
                <h2 className='md:px-22 px-7 text-center font-semibold text-white'>KrishiLink is a modern web application that connects people in the agricultural  sector <br />
                    such as farmers, traders, and consumers in one digital space.</h2>
            </div>
            <Slides></Slides>
            <section className='bg-base-200 py-8'>
                <h5 className='text-center text-3xl pt-5  text-green-800 font-bold'>All Latest Corps Here</h5>
                <h4 className='text-center font-semibold text-amber-400 text-xl'>You Can Choose Here</h4>
                 <div className="grid p-5 grid-cols-2 md:grid-cols-3 gap-3">
                {data.map(corp => 
                    <CorpCard key={corp._id} corp={corp} />
                )
                }
            </div>
           <div className="text-center mt-4">
          <Link to='/all-corps' className="px-8 py-3 bg-green-500 hover:bg-green-800 text-white font-semibold rounded-full shadow-lg transition">
            View All 
          </Link>
        </div>
            
            </section>
            <section>
                <HowItWorks></HowItWorks>
            </section>
            <section>
                <NewsOrBlogs></NewsOrBlogs>
            </section>
         <section>
                <ExtraSect02></ExtraSect02>
            </section>
         <section>
                <ExtraSect01></ExtraSect01>
            </section>
        </div>   
    );
};

export default Home;