import React from 'react';
import Slides from '../Components/Slides';
import HowItWorks from '../Components/HowItWorks.jsx';
import ExtraSect01 from '../Components/ExtraSect01.jsx';
import ExtraSect02  from '../Components/ExtraSect02.jsx';
import NewsOrBlogs from '../Components/NewsOrBlogs.jsx';

const Home = () => { 
     
    return (
        <div className=''>
            <div className='space-y-5 bg-gradient-to-br from-gray-300 via-gray-800 to-white py-8 md:py-10'>
                <h1 className='text-5xl font-extrabold text-center text-green-600'><span className='text-white'>Wellcome To</span> The <br /> KrishiLink</h1>
                <h2 className='md:px-22 px-7 text-center font-semibold text-white'>KrishiLink is a modern web application that connects people in the agricultural  sector <br />
                    such as farmers, traders, and consumers in one digital space.</h2>
            </div>
            <Slides></Slides>
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