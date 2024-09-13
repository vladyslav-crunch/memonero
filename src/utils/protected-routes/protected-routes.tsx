import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import {FC} from "react"

type ProtectedRoutesProps = {
  type: string;
}

const ProtectedRoutes: FC<ProtectedRoutesProps>= ({type}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <></>;
  }
  if(type === "Dashboard"){
    return user ? <Outlet /> : <Navigate to="/sign-in" />;
  }else if(type === "Auth"){
    return user ? <Navigate to="/" /> : <Outlet />;
  }
  return <></>
};

export default ProtectedRoutes;

