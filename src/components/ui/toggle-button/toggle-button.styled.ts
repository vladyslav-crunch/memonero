import styled from "styled-components";

type ToggleButtonContainerProps = {
  $isToggled?: boolean;
};

export const ToggleButtonContainer = styled.button<ToggleButtonContainerProps>`
  height: 40px !important;
  margin-top: 10px !important;
  width: 82px;
  font-size: 16px !important;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  background-color: ${({ $isToggled }) =>
    $isToggled ? "rgba(241, 140, 41, 0.3)" : "rgba(255, 255, 255, 0.3)"};
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
