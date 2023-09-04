import Link from "next/link";
import React from "react";

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
    </div>
  );
};

export default NavBar;
