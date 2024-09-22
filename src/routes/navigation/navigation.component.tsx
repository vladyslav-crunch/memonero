import { Link, Outlet } from "react-router-dom";
import {
  AppWrapper,
  NavigationContainer,
  NavLinkContainer,
  NavigationLogo,
  OutletWrapper,
  UserSection,
  UserWithoutPicture,
} from "./navigation.style";
import { ReactComponent as MemoneroLogo } from "../../assets/icons/logo.svg";
import { auth, getUserInfoFromDB } from "../../utils/firebase/firebase.utils";
import { ReactComponent as DrowdownIcon } from "../../assets/nav-icons/dropdown-icon.svg";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import SearhBox from "../../components/ui/search-box/search-box.component";
import DropdownMenuComponent from "../../components/dropdown-menu/dropdown-menu.component";

const Navigation = () => {
  const [user, setUser] = useState<User>();
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);
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
          {<SearhBox onSearch={setSearchValue} />}
          <UserSection onClick={() => setDropdownMenuOpen(!isDropdownMenuOpen)}>
            {user?.photoURL ? (
              <img src={user?.photoURL} alt="profile picture" />
            ) : (
              <UserWithoutPicture />
            )}
            <DrowdownIcon />
          </UserSection>
          {isDropdownMenuOpen && (
            <DropdownMenuComponent onOverlay={setDropdownMenuOpen} />
          )}
        </NavLinkContainer>
      </NavigationContainer>
      <OutletWrapper>
        <Outlet context={searchValue} />
      </OutletWrapper>
    </AppWrapper>
  );
};

export default Navigation;
