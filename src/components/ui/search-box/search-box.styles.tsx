import styled from "styled-components";
import SearchBoxIcon from "../../../assets/nav-icons/search-icon.svg";

export const SearchBoxContainer = styled.div`
  text-decoration: none;
  color: #3c3c3c;
  font-weight: 500;
  border-radius: 50px;
  width: 350px;
  height: 62px;
  position: relative;
  background-color: #ffe5e0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  transition: 0.3s;

  @media (max-width: 1100px) {
    margin-right: 10px;
  }

  @media (max-width: 750px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    height: 50px;
    width: 100%;
  }

  #boardicon path {
    fill: #05020a;
  }

  &::after {
    content: "";
    position: absolute;
    top: 35%;
    left: 17px;
    transform: translateY(-35%);
    width: 24px;
    height: 24px;
    margin-top: 4px;
    background: url(${SearchBoxIcon});
    @media (max-width: 1100px) {
      top: 33%;
    }
  }
`;

export const SearchBoxInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 50px;
  background-color: #ffe5e0;
  border: none;
  transition: 0.3s;
  border-radius: 50px;

  &:focus {
    outline: none;
  }
`;
