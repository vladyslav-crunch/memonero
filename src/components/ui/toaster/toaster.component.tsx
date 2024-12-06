import React, { FC, MouseEventHandler } from "react";
import { ReactComponent as InfoIcon } from "../../../assets/toaster-icons/info-icon.svg";
import { ReactComponent as CloseIcon } from "../../../assets/toaster-icons/close-icon.svg";
import { ReactComponent as SuccessIcon } from "../../../assets/toaster-icons/success-icon.svg";
import {
  ErrorToaster,
  SuccessToaster,
  WarningToaster,
  MotionBaseToaster,
} from "./toaster.styles";

export enum toasterTypes {
  success = "success",
  warning = "warning",
  error = "error",
  base = "base",
}

export type ToasterType = {
  type: toasterTypes;
  text: string;
  id: string;
  onClose?: MouseEventHandler<SVGSVGElement>;
};

const getToaster = {
  [toasterTypes.success]: SuccessToaster,
  [toasterTypes.error]: ErrorToaster,
  [toasterTypes.warning]: WarningToaster,
  [toasterTypes.base]: MotionBaseToaster,
};

const getIcon = {
  [toasterTypes.success]: SuccessIcon,
  [toasterTypes.error]: InfoIcon,
  [toasterTypes.base]: InfoIcon,
  [toasterTypes.warning]: InfoIcon,
};

const Toaster: FC<ToasterType> = ({ type, text, onClose }) => {
  const CustomToaster = getToaster[type];
  const Icon = getIcon[type];

  return (
    <CustomToaster
      variants={{
        hidden: { x: -30, opacity: 1 },
        visible: { x: 0, opacity: 1 },
        exit: { x: -100, opacity: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Icon />
        <p>{text}</p>
      </div>
      <CloseIcon style={{ cursor: "pointer" }} onClick={onClose} />
    </CustomToaster>
  );
};

export default Toaster;
