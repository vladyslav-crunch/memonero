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
      type={"button"}
      $isToggled={isToggled}
      {...otherProps}
    >
      {label}
    </ToggleButtonContainer>
  );
};

export default ToggleButton;
