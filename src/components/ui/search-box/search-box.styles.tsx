import styled from "styled-components";
import SearchBoxIcon from "../../../assets/nav-icons/search-icon.svg";

export const SearchBoxContainer = styled.div`
  text-decoration: none;
  color: #3c3c3c;
  font-weight: 500;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  position: relative;

  input {
    display: none;
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
  }

  &:hover {
    justify-content: start;
    width: 350px;
    border-radius: 50px;
    padding: 0 25px;

    input {
      display: block;
    }
  }

  &:has(input:focus) {
    justify-content: start;
    width: 350px;
    border-radius: 50px;
    padding: 0 25px;

    input {
      display: block;
    }
  }
`;

export const SearchBoxInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 25px;
  background-color: #ffe5e0;
  border: none;
  transition: 0.3s;
  border-radius: 50px;

  &:focus {
    outline: none;
  }
`;
