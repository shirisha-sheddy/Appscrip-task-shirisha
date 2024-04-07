import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div className='footer-part-container'>
        <div>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from metta muse.</p>
          <div>
            <input type = "text" placeholder='Enter your e-mail...' />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p>.USD</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr />
      <div className='footer-part-container'>
        <div>
          <h3>metta muse</h3>
          <ul className='footer-list'>
            <li className='footer-list-items'>About Us</li>
            <li className='footer-list-items'>Stories</li>
            <li className='footer-list-items'>Artisans</li>
            <li className='footer-list-items'>Boutiques</li>
            <li className='footer-list-items'>Contact Us</li>
            <li className='footer-list-items'>EU Compliances Docs</li>    
          </ul>
        </div>
        <div>
          <h3>QUICK LINKS</h3>
          <ul className='footer-list'>
            <li className='footer-list-items'>Orders & Shipping</li>
            <li className='footer-list-items'>Join/Login as a Seller</li>
            <li className='footer-list-items'>Payment & Pricing</li>
            <li className='footer-list-items'>Return & Refunds</li>
            <li className='footer-list-items'>FAQs</li>
            <li className='footer-list-items'>Privact Policy</li>
            <li className='footer-list-items'>Terms & Conditions</li> 
          </ul>
        </div>
        <div>
          <h3>FOLLOW US</h3>
          <FaInstagram size={30} />
          <CiLinkedin size={30} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
