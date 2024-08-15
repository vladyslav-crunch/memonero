import styled from "styled-components";
import { NavLink as NavLinkRouter } from "react-router-dom";

export const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const NavigationContainer = styled.div`
  background-color: #ffffffeb;
  padding: 15px;
  display: flex;
  flex: 0 0 240px;
  flex-direction: column;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavigationTitle = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  color: #3c3c3c;

  font-weight: 500;
`;
export const NavLink = styled(NavLinkRouter)`
  text-decoration: none;
  color: #3c3c3c;
  font-weight: 500;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  &.active {
    background-color: #ebecec;
  }
  &:hover {
    color: #000000;
  }
`;

export const OutletWrapper = styled.div`
  overflow: auto;
  height: 100vh;
`;
