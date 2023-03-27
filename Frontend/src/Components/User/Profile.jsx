import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MetaData } from "../../Layouts";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/admin");
  };

  return (
    <>
      <MetaData title={`${user.name}'s Profile`} />
      <div className='profileContainer'>
        <div className='profileContainer_left'>
          <h1>My Profile</h1>
          <img src={user.avatar.url} alt={user.name} />
          <Link to='/me/update'>Edit Profile</Link>
        </div>
        <div className='profileContainer_right'>
          <div>
            <h4>Full Name</h4>
            <p>{user.name}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{user.email}</p>
          </div>
          <div>
            <h4>Joined On</h4>
            <p>{String(user.createdAt).substr(0, 10)}</p>
          </div>

          <div>
            <Link to='/orders'>My Orders</Link>
            <Link to='/password/update'>Change Password</Link>
          </div>
          {user.role === "admin" ? (
            <div>
              <button onClick={clickHandler} className='primary_button'>
                Admin Panel
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Profile;
