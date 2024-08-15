import { Outlet } from "react-router-dom";
import {
  AppWrapper,
  NavigationContainer,
  NavLinkContainer,
  NavLink,
  NavigationTitle,
  OutletWrapper,
} from "./navigation.style";

const Navigation = () => {
  return (
    <AppWrapper>
      <NavigationContainer>
        <NavigationTitle>Memonero</NavigationTitle>
        <NavLinkContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/setting">Setting</NavLink>
          <NavLink to="/support">Support</NavLink>
        </NavLinkContainer>
      </NavigationContainer>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </AppWrapper>
  );
};

export default Navigation;
