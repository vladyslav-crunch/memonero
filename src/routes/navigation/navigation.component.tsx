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
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const [user, setUser] = useState<User>();

  const setUserFromDataBase = async (user: User) => {
    const UserFromDB = await getUserInfoFromDB(user);
    console.log(UserFromDB);
    const newUser = { ...user, displayName: UserFromDB?.displayName };
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
      }
    });
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
        <div>
          <p>You are logged as: {user?.displayName}</p>
        </div>
        <button onClick={signOutUser}>Sign out</button>
      </NavigationContainer>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </AppWrapper>
  );
};

export default Navigation;
