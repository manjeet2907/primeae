import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
  BsTelegram,
  BsFillTelephoneFill,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-leftSide'>
        <h4>Prime Ae</h4>
        <div className='footer-leftside-description'>
          <div className='discp'>
            <div className='reacticons'>
              <AiFillHome />
            </div>
            <span>Prime.ae </span>
          </div>
          <div className='discp'>
            <div className='reacticons'>
              <BsTelegram />
            </div>

            <span>info@prime.ae </span>
          </div>
          <div className='discp'>
            <div className='reacticons'>
              <BsFillTelephoneFill />
            </div>

            <span>012345678 </span>
          </div>
          <div className='discp'>
            <h5 className='footer_icon'>
              <BsFacebook />
            </h5>
            <h5 className='footer_icon'>
              <BsTwitter />
            </h5>
            <h5 className='footer_icon'>
              <BsLinkedin />
            </h5>
            <h5 className='footer_icon'>
              <BsInstagram />
            </h5>
          </div>
        </div>
      </div>
      <div className='footer_rightSide'>
        <div className='footer_CC'>
          <h5>Customer Care</h5>
          <p>About Prime Ae</p>
          <p>Return Policy</p>
          <p>FAQs</p>
          <p>Contact US</p>
          <p>Sitemap</p>
        </div>
        <div className='footer_cat'>
          <h5>Categories</h5>
          <p>Phone</p>
          <p>Tablet</p>
          <p>Laptop</p>
          <p>Accessories</p>
          <p>Browse All</p>
        </div>
        <div className='foter_OtherInfo'>
          <h5>Other Info</h5>
          <p>Testimonials</p>
          <p>Subscribe Prime.ae</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Legal Disclaimer</p>
        </div>
        <div className='footer_logininfo'>
          <h5>Login Info</h5>
          <p>Login</p>
          <p>Register</p>
          <p>Shopping Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
