import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

const AuthRoutes = () => {
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
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default AuthRoutes;
