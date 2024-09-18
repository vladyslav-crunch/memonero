import React from "react";
import {
  DropdownMenuContainer,
  DropdownMenuItem,
  DropdownMenuOverlay,
} from "./dropdown-menu.styles";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as ProfileIcon } from "../../assets/nav-icons/profile-icon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/nav-icons/logout-icon.svg";
import { ReactComponent as SettingIcon } from "../../assets/nav-icons/setting-icon.svg";
import ReactDOM from "react-dom";
import { FC } from "react";

type DropdownMenuComponentProps = {
  onOverlay: (value: boolean) => void;
};

const DropdownMenuComponent: FC<DropdownMenuComponentProps> = ({
  onOverlay,
}) => {
  const onClickHandler = () => {
    onOverlay(false);
  };
  return ReactDOM.createPortal(
    <>
      <DropdownMenuOverlay onClick={onClickHandler} />
      <DropdownMenuContainer>
        <DropdownMenuItem to="/" onClick={onClickHandler}>
          <ProfileIcon />
          <span>My profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem to="/setting" onClick={onClickHandler}>
          <SettingIcon />
          <span>Setting</span>
        </DropdownMenuItem>
        <DropdownMenuItem to="/" onClick={signOutUser}>
          <LogoutIcon />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContainer>
    </>,
    document.getElementById("portal") as HTMLElement,
  );
};

export default DropdownMenuComponent;
