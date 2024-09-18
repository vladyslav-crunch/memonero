import { Link, Outlet } from "react-router-dom";
import {
  AppWrapper,
  NavigationContainer,
  NavLinkContainer,
  NavLink,
  NavigationLogo,
  OutletWrapper,
} from "./navigation.style";
import { ReactComponent as MemoneroLogo } from "../../assets/icons/logo.svg";
import { auth, getUserInfoFromDB } from "../../utils/firebase/firebase.utils";
import { ReactComponent as DashboardIcon } from "../../assets/nav-icons/dashboard-icon.svg";
import { ReactComponent as BoardsIcon } from "../../assets/nav-icons/boards-icon.svg";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import SearhBox from "../../components/ui/search-box/search-box.component";

const Navigation = () => {
  const [user, setUser] = useState<User>();
  const [searchValue, setSearchValue] = useState("");
  const setUserFromDataBase = async (user: User) => {
    const UserFromDB = await getUserInfoFromDB(user);
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
        <NavigationLogo>
          <Link to={"/"}>
            <MemoneroLogo />
            <span>Memonero</span>
          </Link>
        </NavigationLogo>
        <NavLinkContainer>
          <SearhBox onSearch={setSearchValue} />
          <NavLink to="/setting">
            <BoardsIcon id={"boardicon"} />
          </NavLink>
          <NavLink to="/support">
            <DashboardIcon />
          </NavLink>
          <button onClick={signOutUser}>Sign out</button>
        </NavLinkContainer>
      </NavigationContainer>
      <OutletWrapper>
        <Outlet context={searchValue} />
      </OutletWrapper>
    </AppWrapper>
  );
};

export default Navigation;
