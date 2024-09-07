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
    top: 35%;
    left: 15px;
    transform: translateY(-35%);
    width: 24px;
    height: 24px;
    margin-top: 4px;
    background: ${({ icon }) => `url(${icon}) center center no-repeat; `};
  }
`;

export const FormInputStyled = styled.input`
  padding-left: 50px;
  height: 60px;
  width: 100%;
  border: none;
  border-radius: 12px;
  background-color: #fff7f0;
  font-size: 16px;
  font-weight: 200;
  &:focus {
    border: 2px solid #ed9e8f;
    outline: none;
  }
`;

export const ForgotPassword = styled.span`
  position: absolute;
  top: 21px;
  right: 15px;
  font-size: 13px;
  color: #05020a;
  font-style: italic;
  cursor: pointer;
`;
