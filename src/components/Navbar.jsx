import React from "react";

import { useState } from "react";
import {scs1, close, menu} from '../components/homepage/index.js'

import { contact, navLinks } from "../constants/index.js";


const Navbar = () => {
  const [toggle,setToggle] = useState
  (false);
  return (
    <nav className="z-10 fade-in w-full flex py-6 justify-between items-center navbar ">
      <img src={scs1} alt="scs" className="w-[80px]"  />
      
    
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="font-sora font-normal cursor-pointer text-[20px]  mx-[20px] ${index===navLinks.length-1? 'mr-0' : 'mr-15'} text-blackprime hover:text-primary"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        {contact.map((contact, index) => (
          <li
            key={contact.id}
            className="font-sora font-normal cursor-pointer text-[20px] text-white ml-[25px]  bg-primary rounded-xl py-[10px] px-[15px] transition-transform duration-300 ease-in-out transform hover:scale-105  shadow-primary/50 shadow-xl  hover:shadow-primary/75 hover:shadow-xl"
          >
            <a href={`#${contact.id}`}>{contact.title}</a>
          </li>
        ))}
      </ul>
      <div className="z-20 sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] object-contain cursor-pointer" onClick={()=> setToggle((prev) => !prev)}/>
          <div className={`${toggle ? 'flex': 'hidden'} p-6 bg-white absolute top-20 right-0 mx-4 my-10 min-w--[140px] rounded-xl fromleft shadow-secondary shadow-2xl`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="font-sora font-normal cursor-pointer text-[20px]  mb-4 text-blackprime hover:text-primary"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {contact.map((contact, index) => (
            <li
              key={contact.id}
              className="font-sora font-normal cursor-pointer text-[20px] text-white   bg-primary rounded-xl py-[10px] px-[15px] transition-transform duration-300 ease-in-out transform hover:scale-105  shadow-primary/50 shadow-xl  hover:shadow-primary/75 hover:shadow-xl"
            >
              <a href={`#${contact.id}`}>{contact.title}</a>
            </li>
          ))}
        </ul>
          </div>
      </div>
     
    </nav>
  );
};

export default Navbar;
