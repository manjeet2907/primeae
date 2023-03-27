import React from "react";
import { useSelector } from "react-redux";
import { SignIn, SignUp } from "../Components/Authentication";
import { HeroImage } from "../Components/Client";

const Authentication = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <HeroImage />
      {!isAuthenticated && (
        <div className='signinup_page'>
          <SignIn />
          <SignUp />
        </div>
      )}
    </>
  );
};

export default Authentication;
