import styled from "styled-components";
import { NavLink as NavLinkRouter } from "react-router-dom";
import ProfileIcon from "../../assets/nav-icons/profile-icon.svg";

export const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px 40px;
  height: calc(100vh);
  position: relative;
  max-width: 1920px;
  @media (max-width: 450px) {
    padding: 15px 15px;
  }
  &::after {
    content: "";
    z-index: -2;
    position: absolute;
    width: 300px;
    height: 200px;
    top: 60%;
    opacity: 0.3;
    background: #b24be2;
    filter: blur(200px);
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  z-index: 2;

  img {
    height: 62px;
    width: 62px;
    border-radius: 50%;
    @media (max-width: 450px) {
      height: 50px;
      width: 50px;
    }
  }
`;

export const NavigationLogo = styled.div`
  font-size: 20px;
  z-index: 2;
  margin-right: 20px;
  @media (max-width: 450px) {
    margin-right: 10px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3c3c3c;
  }

  span {
    font-size: 24px;
    color: #1a0933;
    font-weight: 700;
    margin-left: 20px;
    margin-right: 20px;
    @media (max-width: 1100px) {
      display: none;
    }
  }

  font-weight: 500;
`;
export const NavLink = styled(NavLinkRouter)`
  text-decoration: none;
  color: #3c3c3c;
  font-weight: 500;
  border-radius: 50%;
  height: 62px;
  width: 62px;
  @media (max-width: 450px) {
    width: 50px;
    height: 50px;
  }
  background-color: #ffe5e0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  transition: 0.3s;

  #boardicon path {
    fill: #05020a;
  }

  svg path {
    stroke: #05020a;
  }

  &.active {
    color: #fff !important;
    background-color: #05020a;

    #boardicon path {
      fill: #ffffff;
    }

    svg path {
      stroke: #fff;
  }

  &:not(.active):hover {
    background-color: #e0b8b1;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-right: 20px;
    @media (max-width: 450px) {
      margin-right: 10px;
    }
  }
`;

export const UserWithoutPicture = styled.div`
  height: 62px;
  width: 62px;
  border-radius: 50%;
  background: url(${ProfileIcon}) no-repeat center #ffe5e0;
  background-size: 32px;
  margin-right: 20px;
  @media (max-width: 450px) {
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }
`;
export const OutletWrapper = styled.div`
  margin-top: 50px;
  height: 100%;
  &::after {
    content: "";
    z-index: -2;
    position: absolute;
    width: 800px;
    height: 300px;
    top: 15%;
    right: 40%;
    opacity: 0.2;
    background: #fa8e2b;
    filter: blur(100px);
  }
  &::before {
    content: "";
    z-index: -2;
    position: absolute;
    width: 800px;
    height: 300px;
    top: 50%;
    right: 20%;
    opacity: 0.3;
    background: #fb617d;
    filter: blur(200px);
  }
  @media (max-width: 800px) {
    margin-top: 25px;
  }
  @media (max-width: 450px) {
    margin-top: 20px;
  }
`;
