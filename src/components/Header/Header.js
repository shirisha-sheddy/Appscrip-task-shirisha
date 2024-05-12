import React from 'react';
import { FaReact } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Navbar from '../Navbar/Navbar';

import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='logo-container'>
          <div className='hamburger-menu'>
            <Navbar />
          </div>
          <FaReact size={40} />
          <h1>LOGO</h1>
          <div className='icons-container'>
            <IoSearch className='icons-margin' />
            <FaRegHeart className='icons-margin' />
            <FaShoppingBag className='icons-margin' />
            <div className='mobile-device-icons'>
              <CgProfile className='icons-margin' />
              <select className='language-select'>
                <option value='en'>Eng</option>
                <option value='es'>Fre</option>
                <option value='ge'>Ger</option>
            </select>
            </div> 
          </div>
        </div>
        <div className='nav-links'>
          <ul>
            <li><a href="#shop">SHOP</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#stories">STORIES</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
