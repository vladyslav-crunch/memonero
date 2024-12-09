import styled from "styled-components";
import { motion } from "framer-motion";

type modalProps = {
  version?: string;
};

type overlayProps = {
  version?: string;
};

export const ModalWindowOverlay = styled.div<overlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(56, 55, 55, 0.2);
  z-index: 2;
  ${({ version }) => version === "confirm" && `z-index:3}`}
`;

export const ModalWindowWrapper = styled.div<modalProps>`
  position: fixed;
  width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  padding: 25px;
  background-color: #ffeade;
  border-radius: 20px;
  z-index: 3;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
  }
  .modalFormItem {
    display: flex;
    flex-direction: column;
  }
  .modalFooter {
    display: flex;
  }
  .toggle-buttons {
    display: flex;
  }
  h2 {
    font-size: 24px;
    font-weight: 500;
    color: #1a0933;
  }
  #error-message {
    min-width: 100%;
    text-align: center;
    color: #f15e5e;
    font-weight: 400;
    margin-bottom: -33px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    color: #1a0933;
    max-width: 450px;
  }

  input {
    margin-top: 10px;
  }
  input:focus {
  }
  input:read-only {
    background-color: #eeeeee;
  }
  button {
    font-size: 28px;
    margin-top: 40px;
    height: 65px;
  }
  label {
    font-size: 20px;
  }
  .error {
    color: #f15e5e;
    font-weight: 400;
    text-align: center;
  }
  span {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  @media (max-width: 1100px) {
    padding: 25px;
    min-width: 320px;
  }
  ${({ version }) =>
    version === "menu" &&
    `
width: 340px;
padding: 9px !important;
button{
margin-top: 6px;
font-size:16px;
height:54px;
}
button:first-child{
margin-top: 0;
}`}

  ${({ version }) =>
    version === "confirm" &&
    `
width: 535px;

background-color: #fff;
z-index:3;
padding: 12px !important;
.modalHeader{
margin-bottom: 5px;
}
.modalBody{
  padding:20px 40px;
  p{
  text-align:center;
font-size:24px !important;
font-weight:400}
}
button{
margin-top: 80px;
font-size:20px;
height:54px;
}
button:first-child{
margin-right: 10px;
}
}`}
`;

export const MotionModalWindowWrapper = motion(ModalWindowWrapper);
