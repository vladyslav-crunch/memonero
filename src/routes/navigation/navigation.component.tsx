import { Outlet } from "react-router-dom";
import {
  AppWrapper,
  NavigationContainer,
  NavLinkContainer,
  NavLink,
  NavigationTitle,
  OutletWrapper,
} from "./navigation.style";

import { auth, getUserInfoFromDB } from "../../utils/firebase/firebase.utils";

import { useEffect, useState } from "react";
import { User } from "firebase/auth";

const Navigation = () => {
  const [user, setUser] = useState<User>();

  const setUserFromDataBase = async (user: User) => {
    const UserFromDB = await getUserInfoFromDB(user);
    if (!UserFromDB || !UserFromDB.displayName) {
      return;
    }
    const newUser = { ...user, displayName: UserFromDB.displayName };
    setUser(newUser);
  };

  useEffect(() => {
    // Get the current user
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.providerData[0].providerId === "google.com") {
          setUser(user);
        } else {
          setUserFromDataBase(user);
        }
      } else {
        setUser(undefined);
      }
    });
    console.log(user);
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AppWrapper>
      <NavigationContainer>
        <NavigationTitle>Memonero</NavigationTitle>
        <NavLinkContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/setting">Setting</NavLink>
          <NavLink to="/support">Support</NavLink>
        </NavLinkContainer>
        <div>{user && <p>You are logged as: {user.displayName}</p>}</div>
      </NavigationContainer>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </AppWrapper>
  );
};

export default Navigation;