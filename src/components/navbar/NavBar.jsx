"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex items-center justify-between mx-10 lg:mx-32 mt-10'>
      <div>
        <h1 className='text-2xl bg-gradient-to-r from-[#30df48] via-[#b609a7] to-[#077e64] text-transparent bg-clip-text animate-text font-bold'>
          Fusion
        </h1>
      </div>
      <div className='hidden md:flex'>
        {links.map((link) => (
          <Link
            className='p-2 text-white'
            href={link.url}
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className='md:hidden'>
        <nav className='bg-gray-900 text-white p-4'>
          <div className='flex items-center justify-between'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-white focus:outline-none focus:text-white'
            >
              <svg
                className='h-6 w-6 fill-current'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {isOpen ? (
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M3 18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18C21 16.8954 20.1046 16 19 16H5C3.89543 16 3 16.8954 3 18ZM3 11C3 12.1046 3.89543 13 5 13H19C20.1046 13 21 12.1046 21 11C21 9.89543 20.1046 9 19 9H5C3.89543 9 3 9.89543 3 11ZM3 6C3 7.10457 3.89543 8 5 8H19C20.1046 8 21 7.10457 21 6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6Z'
                  />
                ) : (
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5C20 6.10457 19.1046 7 18 7H6C4.89543 7 4 6.10457 4 5ZM6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14H18C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10H6ZM6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17H6Z'
                  />
                )}
              </svg>
            </button>
          </div>
          <ul
            className={`md:flex flex-col space-x-4 mt-4 md:mt-10 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <Link
              href='/'
              className='text-white hover:text-gray-400 transition duration-300 ease-in-out'
            >
              Home
            </Link>
            <Link
              href='/portfolio'
              className='text-white hover:text-gray-400 transition duration-300 ease-in-out'
            >
              Portfolio
            </Link>
            <Link
              href='/blog'
              className='text-white hover:text-gray-400 transition duration-300 ease-in-out'
            >
              Blog
            </Link>
            <Link
              href='/about'
              className='text-white hover:text-gray-400 transition duration-300 ease-in-out'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-white hover:text-gray-400 transition duration-300 ease-in-out'
            >
              Contact
            </Link>
            <Link
              href='/dashboard'
              className='text-white hover:text-gray-400 transition duration-300 ease-in-out'
            >
              Dashboard
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
