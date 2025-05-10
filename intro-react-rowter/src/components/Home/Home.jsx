import React from 'react';
 

const Home = () => {
    return (
        <div className='flex justify-between  items-center bg-emerald-300 h-96 max-w-[1280px] '>
           <div className=' p-5'>
                <h1 className='text-4xl   font-bold text-cyan-500'>Hi......</h1>
                 <h2 className='text-3xl font-bold  '>Im  Md.Shajalal..</h2>
                 <h3 className='text-2xl font-bold  '>Im a Development </h3>
                 <p className='text-gray-400 '> Web development is the process of creating,
                     building, and maintaining websites and web applications. 
                     It involves various aspects, including web design,
                      programming, and database management. 
                      Web development is generally categorized into front-end, 
                      back-end, and full-stack development. </p>
           </div>
           <div className='h-full w-full'>
            <img className='h-full w-full' src="https://i.ibb.co.com/HTjMNqQF/1745646133822-removebg-preview.png"  alt="" />

           </div>
             
        </div>
    );
};

export default Home;