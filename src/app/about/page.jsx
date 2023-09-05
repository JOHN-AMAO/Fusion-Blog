import Image from "next/image";
import React from "react";
import Aboutimg from "public/about.jpg";
import Link from "next/link";

const About = () => {
  return (
    <>
      <h1 className='text-4xl font-bold text-center my-6'>About Us</h1>
      <Image
        src={Aboutimg}
        alt='abtimg'
        className='lg:w-9/12 lg:mx-36 mt-5'
      />
      <div className='flex lg:flex-row flex-col justify-between items-center mx-20 my-16'>
        <div className='mx-5 my-5'>
          <h1 className='text-center md:text-4xl'>Who are we?</h1>
          <p>
            At Fusion, we are on a mission to unleash the creative potential of
            writers from all walks of life. We believe that every voice deserves
            to be heard and that there are countless untapped stories and ideas
            waiting to be shared with the world. Our platform is designed to
            empower writers, both aspiring and seasoned, to create and share
            their ideas with millions of people through the internet.
          </p>
        </div>
        <div className='mx-5 my-5'>
          <h1 className='text-center md:text-4xl'>What do we do?</h1>
          <p>
            Fusion is a dynamic online platform designed to empower writers of
            all backgrounds and experiences to unleash their creativity and
            share their thoughts, ideas, and stories with a vast, global
            audience through the limitless power of the internet. We provide
            writers with the tools, resources, and community they need to turn
            their words into compelling content that captivates readers and
            connects with people from all corners of the world.
          </p>
        </div>
      </div>
      <div className=' flex  justify-center items-center'>
        <Link href='/contact'>
          <button className='bg-green-600 text-white p-5 rounded-lg'>
            Contact
          </button>
        </Link>
      </div>
    </>
  );
};

export default About;
