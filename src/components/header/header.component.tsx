import { HeaderContainer } from "./header.styles";
import { ReactComponent as MemoneroLogo } from "../../assets/sign-in-icons/logo.svg";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to={"/"}>
          <MemoneroLogo />
          <span>Memonero</span>
        </Link>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
