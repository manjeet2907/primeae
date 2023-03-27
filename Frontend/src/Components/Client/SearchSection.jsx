import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCart, BsSearch } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userAction";
import { toast } from "react-hot-toast";

const SearchSection = ({ match }) => {
  const [keyword, setKeyword] = useState("");

  const { isAuthenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  function logoutUser() {
    dispatch(logout());
    toast.success("Logout Successfully");
  }

  function gotoProfile() {
    navigate("/profile");
  }
  function gotoAuthenticate() {
    navigate("/authentication");
  }
  const handlecartClick = () => {
    navigate("/cart");
  };
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/allproducts");
    }
  };

  return (
    <>
      <div className='searchSection'>
        <div className='logoSection'>
          <h3 className='selectable' onClick={() => navigate("/")}>
            Prime Ae
          </h3>
        </div>
        <div className='searchbarSection'>
          <form onSubmit={searchSubmitHandler}>
            <input
              type='text'
              placeholder='Search For Keyword'
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type='submit'>
              <BsSearch />
            </button>
          </form>
        </div>
        <div className='carticon_container'>
          <span className='avatar' onClick={handleOpen}>
            <div className='userBadge'>
              <RxAvatar />
            </div>

            {open ? (
              <div className='menu'>
                {!isAuthenticated ? (
                  <div className='menu-item' onClick={gotoAuthenticate}>
                    Login
                  </div>
                ) : (
                  <>
                    <div className='menu-item' onClick={gotoProfile}>
                      My Profile
                    </div>
                    <div className='menu-item' onClick={logoutUser}>
                      Logout
                    </div>
                  </>
                )}
              </div>
            ) : null}
          </span>
          <div className='cartIcon' onClick={handlecartClick}>
            <BsCart />
            <span className='cartcount'>{cartItems.length}</span>
          </div>
        </div>
      </div>
      <div className='bottomsearchbar'>
        <div className='carticon_container'>
          <div className='cartIcon' onClick={handlecartClick}>
            <BsCart />
            <span className='cartcount'>{cartItems.length}</span>
          </div>
          <span className='avatar' onClick={handleOpen}>
            <div className='userBadge'>
              <RxAvatar />
            </div>

            {open ? (
              <div className='menu'>
                {!isAuthenticated ? (
                  <div className='menu-item' onClick={gotoAuthenticate}>
                    Login
                  </div>
                ) : (
                  <>
                    <div className='menu-item' onClick={gotoProfile}>
                      My Profile
                    </div>
                    <div className='menu-item' onClick={logoutUser}>
                      Logout
                    </div>
                  </>
                )}
              </div>
            ) : null}
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
