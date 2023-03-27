import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sales = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/authentication");
    }
  };
  return (
    <div className='sales-info'>
      <div>
        <span className='selectable_underline_colWhite'>
          Subscribe Prime.ae
        </span>
        <span className='selectable_underline_colWhite'>
          Hotline 09715023635
        </span>
      </div>
      <div>
        <span className='cursor_colWhite' onClick={handleClick}>
          My Account
        </span>
        <span>Select Language &#8595;</span>
      </div>
    </div>
  );
};

export default Sales;
