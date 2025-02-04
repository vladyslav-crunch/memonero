import { Link, Outlet, useLocation } from "react-router-dom";
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
import { ReactComponent as DropdownIcon } from "../../assets/nav-icons/dropdown-icon.svg";
import { useState } from "react";
import { useUserContext } from "../../contexts/user.context";
import SearhBox from "../../components/ui/search-box/search-box.component";
import DropdownMenu from "../../components/dropdown-menu/dropdown.menu";

const Navigation = () => {
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();
  const { user } = useUserContext();

  return (
    <AppWrapper>
      <NavigationContainer location={location.pathname}>
        <NavigationLogo>
          <Link to={"/"}>
            <MemoneroLogo />
            <span>Memonero</span>
          </Link>
        </NavigationLogo>
        {user && (
          <NavLinkContainer>
            {(location.pathname === "/" ||
              location.pathname.startsWith("/cardlist")) && (
              <SearhBox onSearch={setSearchValue} />
            )}
            <UserSection
              onClick={() => setDropdownMenuOpen(!isDropdownMenuOpen)}
            >
              {user!.photoURL ? (
                <img src={user?.photoURL} alt="profile" />
              ) : (
                <UserWithoutPicture />
              )}
              <DropdownIcon />
            </UserSection>
            {isDropdownMenuOpen && (
              <DropdownMenu onOverlay={setDropdownMenuOpen} />
            )}
          </NavLinkContainer>
        )}
      </NavigationContainer>
      <OutletWrapper>
        <Outlet context={searchValue} />
      </OutletWrapper>
    </AppWrapper>
  );
};

export default Navigation;
