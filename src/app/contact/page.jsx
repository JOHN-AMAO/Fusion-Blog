"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

const Contact = () => {
  return (
    <>
      <h1 className='text-4xl font-bold text-center mt-10'>
        Let&apos;s Keep in touch
      </h1>
      <div className='flex lg:flex-row flex-col justify-between items-center mx-20 my-8'>
        <motion.div
          className='ml-8'
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src='/contact.png'
            alt='contactImg'
            width={400}
            height={400}
          />
        </motion.div>

        <div className='flex flex-col gap-5'>
          <input
            className='p-2 bg-black border-2'
            type='text'
            placeholder='name'
          />
          <input
            className='p-2 bg-black border-white border-2'
            type='email'
            name=''
            id=''
            placeholder='email'
          />
          <textarea
            className='p-2 bg-black border-white border-2'
            cols='40'
            rows='10'
            placeholder='message'
          ></textarea>
          <button className='p-2 bg-green-400 text-white rounded'>Send</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
