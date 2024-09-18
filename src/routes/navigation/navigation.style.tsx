import styled from "styled-components";
import { NavLink as NavLinkRouter } from "react-router-dom";

export const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px 40px;
  height: calc(100vh);
  position: relative;
`;

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkContainer = styled.div`
  display: flex;
`;

export const NavigationLogo = styled.div`
  font-size: 20px;

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
  }

  &:not(.active):hover {
    background-color: #e0b8b1;
  }
`;

export const OutletWrapper = styled.div`
  margin-top: 30px;
  overflow: auto;
  background-color: #ffecdf;
  border-radius: 15px;
  height: 100%;
`;
