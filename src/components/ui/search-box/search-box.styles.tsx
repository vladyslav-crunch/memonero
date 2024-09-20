import styled from "styled-components";
import SearchBoxIcon from "../../../assets/nav-icons/search-icon.svg";

export const SearchBoxContainer = styled.div`
  text-decoration: none;
  color: #3c3c3c;
  font-weight: 500;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  @media (max-width: 450px) {
    height: 50px;
    margin-top: 20px !important;
  }
  position: relative;

  input {
    display: none;
    @media (max-width: 800px) {
      display: block;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    justify-content: start;
    border-radius: 50px;
    padding: 0 25px;
    margin-top: 25px;
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
    @media (max-width: 800px) {
      top: 31%;
    }
    @media (max-width: 450px) {
      top: 29%;
    }
  }

  &:hover {
    justify-content: start;
    width: 350px;
    border-radius: 50px;
    padding: 0 25px;
    @media (max-width: 800px) {
      width: 100%;
    }

    input {
      display: block;
    }
  }

  &:has(input:focus, input:not(:placeholder-shown)) {
    justify-content: start;
    width: 350px;
    border-radius: 50px;
    padding: 0 25px;
    @media (max-width: 800px) {
      width: 100%;
    }
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
