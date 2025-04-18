import React from "react";
import {
  DropdownMenuContainer,
  DropdownMenuItem,
  DropdownMenuOverlay,
} from "./dropdown-menu.styles";
import { signOutUser } from "../../utils/firebase/auth";
import { ReactComponent as ProfileIcon } from "../../assets/nav-icons/profile-icon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/nav-icons/logout-icon.svg";
import { ReactComponent as SettingIcon } from "../../assets/nav-icons/setting-icon.svg";
import { FC } from "react";

type DropdownMenuProps = {
  onOverlay: (value: boolean) => void;
};

const DropdownMenu: FC<DropdownMenuProps> = ({ onOverlay }) => {
  const onClickHandler = () => {
    onOverlay(false);
  };
  return (
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
    </>
  );
};

export default DropdownMenu;
