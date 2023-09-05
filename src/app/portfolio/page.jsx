import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold text-center m-10'>Our Works</h1>
        <div className='flex flex-row gap-10  justify-center'>
          <div className='relative'>
            <Image
              src='/illustration.png'
              alt='illustration'
              width={250}
              height={250}
              className='object-cover'
            />
            <h1 className='absolute bottom-0 right-0 z-10 p-6 font-bold text-xl text-white'>
              Writing
            </h1>
          </div>
          <div className='relative'>
            <Image
              src='/websites.jpg'
              alt='web'
              width={400}
              height={300}
            />
            <h1 className='absolute bottom-0 right-0 z-10 p-6 font-bold text-xl'>
              Publishing
            </h1>
          </div>
          <div className='relative'>
            <Image
              src='/apps.jpg'
              alt='app'
              width={400}
              height={300}
            />
            <h1 className='absolute bottom-0 right-0 z-10 p-6 font-bold text-xl'>
              Content Management
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
