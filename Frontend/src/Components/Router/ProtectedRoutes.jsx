import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet, redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return redirect("/authentication");
            }

            if (isAdmin === true && user.role !== "admin") {
              return redirect("/authentication");
            }

            return <Outlet />;
          }}
        />
      )}
    </>
  );
};

export default ProtectedRoute;
