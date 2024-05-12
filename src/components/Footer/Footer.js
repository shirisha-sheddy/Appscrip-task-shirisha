import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

import './Footer.css';


const Footer = () => {
  return (
    <footer>
      <div className='footer-section-desktop-device'>
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
          <p>
            <img src = "	https://appscrip-test-jayaram.netlify.app/images/Currency_Flag.png" alt = "currency-type" /> .USD
          </p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr />
      <div className='footer-part-container'>
        <div>
          <h3>metta muse</h3>
            <p className='footer-list-items'>About Us</p>
            <p className='footer-list-items'>Stories</p>
            <p className='footer-list-items'>Artisans</p>
            <p className='footer-list-items'>Boutiques</p>
            <p className='footer-list-items'>Contact Us</p>
            <p className='footer-list-items'>EU Compliances Docs</p>    
        </div>
        <div>
          <h3>QUICK LINKS</h3>
            <p className='footer-list-items'>Orders & Shipping</p>
            <p className='footer-list-items'>Join/Login as a Seller</p>
            <p className='footer-list-items'>Payment & Pricing</p>
            <p className='footer-list-items'>Return & Refunds</p>
            <p className='footer-list-items'>FAQs</p>
            <p className='footer-list-items'>Privact Policy</p>
            <p className='footer-list-items'>Terms & Conditions</p> 
        </div>
        <div>
          <h3>FOLLOW US</h3>
          <FaInstagram size={30} />
          <CiLinkedin size={30} />
        </div>
        <div>
          <p>Accepted Payment Methods:</p>
          <div>
            <img src = "https://appscrip-test-jayaram.netlify.app/images/payment-visa.png" alt = "visa" />
            <img src = "https://appscrip-test-jayaram.netlify.app/images/payment-iphone.png" alt = "iphone" />
            <img src = "https://appscrip-test-jayaram.netlify.app/images/payment-paypal.png" alt = "paypal" />
            <img src = "https://appscrip-test-jayaram.netlify.app/images/payment-gpay.png" alt = "gpay" />
            <img src = "https://appscrip-test-jayaram.netlify.app/images/payment-amex.png" alt = "amex" />
          </div>
        </div>
      </div>
      </div>
      <div className='footer-section-mobile-device'>
        <div>
          <h1>BE THE FIRST TO KNOW</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typisetting industry. This is simply dummy text.</p>
          <div>
            <input type = "text" placeholder='Enter your e-mail.....' />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <hr />
        <div>
          <h1>CALL US</h1>
          <p>+44 221 133 5360 . customercare@mettamuse.com</p>
        </div>
        <hr />
        <div>
          <h1>CURRENCY</h1>
          <p>
            <img src = "	https://appscrip-test-jayaram.netlify.app/images/Currency_Flag.png" alt = "currency-type" /> .USD
          </p>
        </div>
        <hr />
        <div>
          <h1>metta muse</h1>
          <hr />
          <h1>QUICK LINKS</h1>
          <hr />
          <h1>FOLLOW US</h1>
        </div>
        <hr />
        <div>
        <div>
          <p>Accepted Payment Methods:</p>
          <div>
            <img src = "https://appscrip-test-jayaram.netlify.app/images/payment-visa.png" alt = "visa" className='imgs' />
            <img src = "https://appscrip-test-jayaram.netlify.app/images/payment-iphone.png" alt = "iphone" className='imgs' />
            <img src = "https://appscrip-test-jayaram.netlify.app/images/payment-paypal.png" alt = "paypal" className='imgs' />
            <img src = "https://appscrip-test-jayaram.netlify.app/images/payment-gpay.png" alt = "gpay" className='imgs' />
            <img src = "https://appscrip-test-jayaram.netlify.app/images/payment-amex.png" alt = "amex" className='imgs' />
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
