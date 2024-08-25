import styled from "styled-components";

type FormInputContainerProps = {
  icon?: string;
};

export const FormInputContainer = styled.div<FormInputContainerProps>`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 13.5px;
    left: 15px;
    width: 24px;
    height: 24px;
    background: ${({ icon }) => `url(${icon}) center center no-repeat; `};
  }
`;

export const FormInputStyled = styled.input`
  padding-left: 50px;
  height: 50px;
  width: 100%;
  border: 2px solid #fff7f0;
  border-radius: 12px;
  background-color: #fff7f0;
  font-size: 16px;
  font-weight: 200;
  margin-bottom: 14px;
  &:focus {
    border: 2px solid #ed9e8f;
    outline: none;
  }
`;

export const ForgotPassword = styled.span`
  position: absolute;
  top: 20px;
  right: 15px;
  font-size: 13px;
  color: #05020a;
  font-style: italic;
  cursor: pointer;
`;
