// Header.js

import React from 'react';
import { FaReact } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <FaReact size={40} />
        <h1>LOGO</h1>
        <div className='icons-container'>
          <IoSearch className='icons-margin' />
          <FaRegHeart className='icons-margin' />
          <FaShoppingBag className='icons-margin' />
          <CgProfile className='icons-margin' />
        </div>
      </div>
      <nav>
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
