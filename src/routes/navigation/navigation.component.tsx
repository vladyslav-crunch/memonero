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

import { ReactComponent as DrowdownIcon } from "../../assets/nav-icons/dropdown-icon.svg";
import { useState } from "react";
import { useUserContext } from "../../contexts/user.context";
import SearhBox from "../../components/ui/search-box/search-box.component";
import DropdownMenuComponent from "../../components/dropdown-menu/dropdown-menu.component";

const Navigation = () => {
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { user } = useUserContext();

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
