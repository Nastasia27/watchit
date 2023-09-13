import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { Outlet } from "react-router-dom";


const PrivateRoute = () => {
    const auth = getAuth();
    if (auth.currentUser) {
      return <Outlet />;
    } else {
      return <Navigate to="/auth/register" />;
    }
  };

export default PrivateRoute;