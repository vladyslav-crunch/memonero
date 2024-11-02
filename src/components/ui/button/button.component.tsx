import {
  BaseButton,
  ButtonSpinner,
  OrangeButton,
  SingInGoogle,
  BlackButton,
  MenuButton,
} from "./button.styles";
import { ButtonHTMLAttributes } from "react";
import { FC } from "react";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  orange = "orange",
  googleSignIn = "google-sign-in",
  black = "black",
  menu = "menu",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.orange]: OrangeButton,
    [BUTTON_TYPE_CLASSES.googleSignIn]: SingInGoogle,
    [BUTTON_TYPE_CLASSES.black]: BlackButton,
    [BUTTON_TYPE_CLASSES.menu]: MenuButton,
  })[buttonType];

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
  icon?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  icon,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps} icon={icon}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};
export default Button;
