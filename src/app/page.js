"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className='flex items-center justify-between lg:mx-32 mt-16 lg:flex-row flex-col'>
      <div className=''>
        <motion.div
          initial={{ x: "-400%" }}
          animate={{ x: "calc(0vw - 2%)" }}
        >
          <h1 className='font-bold text-3xl  lg:text-6xl text-center lg:text-left mx-12 lg:mx-0 mb-5'>
            A{" "}
            <span className='bg-gradient-to-r from-[#581c87] via-blue-500 to-green-900 text-transparent bg-clip-text animate-text'>
              {" "}
              Canvas
            </span>{" "}
            for <span className=' lg:block'> your Creative</span>{" "}
            <span className='bg-gradient-to-r from-green-400 via-[#0891b2] to-red-500  lg:block'>
              {" "}
              Ideas
            </span>
          </h1>
          <p className='md:text-lg sm:text-sm text-sm lg:text-left text-center '>
            Tell stories, inspire people
          </p>
        </motion.div>
      </div>
      <div className=''>
        <Image
          src={Hero}
          width={350}
          height={350}
          alt=''
          className=''
        />
      </div>
    </div>
  );
}
