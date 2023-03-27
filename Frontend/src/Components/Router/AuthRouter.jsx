import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const AuthRouter = ({ allowedRoles }) => {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <>
      {isAuthenticated && user && allowedRoles.includes(user.role) ? (
        <Outlet />
      ) : (
        <Navigate to='/authentication' state={{ from: location }} replace />
      )}
    </>
  );
};

export default AuthRouter;
