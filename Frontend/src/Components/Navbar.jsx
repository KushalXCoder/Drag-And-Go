import React from 'react';
import { motion } from "framer-motion";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className='w-full px-12 py-8 bg-black fixed z-10 flex justify-between top-0'>
          <h1 className='text-3xl'>Drag And Go</h1>
          <div className="other-components">
            <ul className='text-white flex gap-10 text-2xl mt-0.5 cursor-pointer'>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default Navbar