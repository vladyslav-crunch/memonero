import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownMenuContainer = styled.ul`
  position: absolute;
  right: 35px;
  top: 100px;
  @media (max-width: 450px) {
    top: 80px;
    right: 10px;
  }
  background: #fff;
  min-width: 200px;
  border-radius: 15px;
  padding: 10px;
  z-index: 2;
`;

export const DropdownMenuItem = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #d5d5d5;
    border-radius: 15px;
  }
`;

export const DropdownMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
