import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";


const PrivateRoute = ({children}) => {
    const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);
    
    useEffect(() => {
      const unsubscribe =   onAuthStateChanged((maybeUser) => {
        if (maybeUser != null) {
          return setUser(maybeUser);
          <Navigate to={'/auth/register'}/>;
        }
        return  () => unsubscribe();  
      })
        // const unsubscribe = onAuthStateChanged(auth, (user) => {
        //   if (!user) {
        //     return <Navigate to={'/auth/register'} />;
        //   }
        // });
        // return () => unsubscribe();
      }, []);
    
      return children;
    
};

export default PrivateRoute;