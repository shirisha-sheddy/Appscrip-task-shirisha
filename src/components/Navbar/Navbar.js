import React, { useState } from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {/* Navigation links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home">SHOP</a></li>
          <li><a href="#about">SKILLS</a></li>
          <li><a href="#services">STORIES</a></li>
          <li><a href="#contact">ABOUT</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
