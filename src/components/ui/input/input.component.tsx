import React, { FC, InputHTMLAttributes } from "react";
import { InputStyled } from "./input.styles";
type InputProps = {
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ placeholder, ...otherProps }) => {
  return (
    <>
      <InputStyled type="text" placeholder={placeholder} {...otherProps} />
    </>
  );
};

export default Input;
