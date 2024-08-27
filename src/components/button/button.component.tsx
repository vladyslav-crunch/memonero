import {
  BaseButton,
  ButtonSpinner,
  SignInButton,
  SingInGoogle,
} from "./button.styles";
import { ButtonHTMLAttributes } from "react";
import { FC } from "react";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  signIn = "sign-in",
  googleSignIn = "google-sign-in",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.signIn]: SignInButton,
    [BUTTON_TYPE_CLASSES.googleSignIn]: SingInGoogle,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};
export default Button;
