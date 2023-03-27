import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { allCategories } from "../../store/actions/categoryAction";

const MainNavbar = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.allCategories);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpen1 = () => {
    setOpen1(!open1);
  };
  useEffect(() => {
    dispatch(allCategories());
  }, [dispatch]);
  return (
    <div className='navbar'>
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
                {categories &&
                  categories.map((category) => (
                    <Link
                      to={`/getcategory/${category._id}`}
                      key={category._id}
                      className='menu-item'>
                      {category.name}
                    </Link>
                  ))}
                <Link to={"/allproducts"} className='menu-item'>
                  Browse All
                </Link>
              </ul>
            ) : null}
          </div>
        </div>
        <div className='rightSide_navbar'>
          <div className='rightSide_navbarItem'>
            <NavLink to='/'>Home</NavLink>
          </div>
          {categories &&
            categories.slice(0, 3).map((category) => (
              <div key={category._id} className='rightSide_navbarItem'>
                <NavLink to={`/getcategory/${category._id}`}>
                  {category.name}
                </NavLink>
              </div>
            ))}

          <div className='rightSide_navbarItem'>
            <NavLink to='/shopbybrand'>Shop By Brand</NavLink>
          </div>
          <div className='rightSide_navbarItem'>
            <NavLink to='/aboutus'>About Us</NavLink>
          </div>
          <div className='rightSide_navbarItem'>
            <NavLink to='/customersupport'>Customer Support</NavLink>
          </div>
        </div>
        <div className='navbar_mobile'>
          <div className='dropdown'>
            <h3 onClick={handleOpen1}>
              <GoThreeBars />
            </h3>
            {open1 ? (
              <div className='menu'>
                <div className='mobile_navbarItem'>
                  <NavLink to='/'>Home</NavLink>
                </div>
                <div className='mobile_navbarItem'>
                  <NavLink to='/aboutus'>About Us</NavLink>
                </div>
                <div className='mobile_navbarItem'>
                  <NavLink to='/customersupport'>Customer Support</NavLink>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
