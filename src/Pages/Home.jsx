import React from 'react';
import Slides from '../Components/Slides';

const Home = () => {
    return (
        <div className='my-'>
            <div className='space-y-5 bg-[#ffe4e1] py-8 md:py-10'>
            <h1 className='text-5xl font-extrabold text-center text-green-800'><span className='text-blue-700'>Wellcome To</span> The <br /> KrishiLink</h1>
              <h2 className='md:px-22 px-7 text-center font-bold text-amber-800'>KrishiLink is a modern web application that connects people in the agricultural  sector <br />
such as farmers, traders, and consumers in one digital space.</h2>
            </div>
          <Slides></Slides> 
        </div>
    );
};

export default Home;