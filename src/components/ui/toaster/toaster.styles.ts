import styled from "styled-components";
import { motion } from "framer-motion";

export const ToasterContainer = styled.div`
  position: fixed;
  bottom: 25px;
  left: 25px;
  z-index: 1000;
  @media (max-width: 600px) {
    bottom: 10px;
    left: 10px;
  }
`;
export const BaseToaster = styled.div`
  min-height: 65px;

  background-color: white;
  width: 350px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  svg {
    min-width: 27px;
  }
  svg path {
    fill: black;
  }
  p {
    margin-left: 10px;
    padding-top: 2px;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    min-height: 30px;
    font-size: 12px;
    width: 250px;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const MotionBaseToaster = motion(BaseToaster);

export const SuccessToaster = styled(MotionBaseToaster)`
  background-color: #8cc377;
  p {
    color: white;
  }
  svg path {
    fill: white;
  }
`;
export const WarningToaster = styled(MotionBaseToaster)`
  background-color: #efd467;
  p {
    color: white;
  }
  svg path {
    fill: white;
  }
`;
export const ErrorToaster = styled(MotionBaseToaster)`
  background-color: #ffaaaa;
  p {
    color: white;
  }
  svg path {
    fill: white;
  }
`;
