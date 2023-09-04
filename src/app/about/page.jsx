import Image from "next/image";
import React from "react";
import Aboutimg from "public/about.jpg";

const About = () => {
  return (
    <>
      <Image
        src={Aboutimg}
        alt='abtimg'
        className='lg:w-9/12 lg:mx-36 mt-5'
      />
    </>
  );
};

export default About;
