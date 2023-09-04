import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <div className='flex items-center justify-between mx-32 mt-20'>
      <div className='text-white '>
        <p className='text-sm'>©2023 John Amao. All rights reserved.</p>
      </div>
      <div className='flex items-center justify-between'>
        <Image
          src='/1.png'
          width={25}
          height={25}
          className='pr-2'
          alt='Lama Dev Facebook Account'
        />
        <Image
          src='/2.png'
          width={25}
          height={25}
          className='pr-2'
          alt='AJy'
        />
        <Image
          src='/3.png'
          width={25}
          height={25}
          className='pr-2'
          alt='AJy'
        />
        <Image
          src='/4.png'
          width={25}
          height={25}
          className='pr-2'
          alt='AJy'
        />
      </div>
    </div>
  );
};

export default Footer;
