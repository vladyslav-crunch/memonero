import styled from "styled-components";
import { SpinnerContainer } from "../spinner/spinner.styles";
export const BaseButton = styled.button`
  min-width: 165px;
  width: 100%;
  height: 55px;
  border: 1px solid;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 400;
  font-family: "Montserrat";
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;

export const SignButton = styled(BaseButton)`
  background: linear-gradient(
    150deg,
    rgba(236, 156, 51, 0.616) 0%,
    rgba(245, 163, 119, 1) 42%,
    rgba(243, 157, 142, 1) 100%
  );
  border: none;
  color: #fff;
  z-index: 1;

  &::after {
    content: "";
    border-radius: 10px;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    top: 0;
    left: 0;
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    background: linear-gradient(
      150deg,
      #ff945b 0%,
      rgba(245, 163, 119, 1) 42%,
      rgba(233, 184, 121, 0.616) 100%
    );
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const SingInGoogle = styled(BaseButton)`
  width: 235px;
  font-size: 16px;
  justify-content: space-around;
  border: none;
  background-color: #fff7f0;
  font-weight: 500;
  color: #6e6e6e;

`;

export const BlackButton = styled(BaseButton)`
  border: none;
  background-color: #1a0933;
  color: #fff;
  font-weight: 500;
  &:disabled {
    background-color: #434343;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 35px;
  height: 35px;
  display: inline-block;
  border: 3px solid #d8d7d7;
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
