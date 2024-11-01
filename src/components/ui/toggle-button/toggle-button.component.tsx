import React, { ButtonHTMLAttributes } from "react";
import { ToggleButtonContainer } from "./toggle-button.styled";
import { FC } from "react";

type ToggleButtonProps = {
  label: string;
  isToggled: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ToggleButton: FC<ToggleButtonProps> = ({
  label,
  isToggled,
  ...otherProps
}) => {
  return (
    <ToggleButtonContainer
      $isToggled={isToggled} // Use `$isToggled` here
      {...otherProps}
      type="button"
    >
      {label}
    </ToggleButtonContainer>
  );
};

export default ToggleButton;
