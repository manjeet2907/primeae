import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";

const MainNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className='mainNavbar'>
      <div className='leftSide_navbar'>
        <div className='dropdown'>
          <h3 onClick={handleOpen}>
            <span>
              <AiFillAppstore />
            </span>
            All Categories
          </h3>
          {open ? (
            <ul className='menu'>
              <li className='menu-item'>Phones</li>
              <li className='menu-item'>Laptops</li>
              <li className='menu-item'>Accessories</li>
            </ul>
          ) : null}
        </div>
      </div>
      <div className='rightSide_navbar'>
        <div className='rightSide_navbarItem'>
          <Link to='/'>Home</Link>
        </div>
        <div className='rightSide_navbarItem'>
          <Link to='/phone'>Phone</Link>
        </div>
        <div className='rightSide_navbarItem'>
          <Link to='/laptop'>Laptop</Link>
        </div>
        <div className='rightSide_navbarItem'>
          <Link to='/accessories'>Accessories</Link>
        </div>
        <div className='rightSide_navbarItem'>
          <Link to='/shopbybrand'>Shop By Brand</Link>
        </div>
        <div className='rightSide_navbarItem'>
          <Link to='/aboutus'>About Us</Link>
        </div>
        <div className='rightSide_navbarItem'>
          <Link to='/customersupport'>Customer Support</Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
