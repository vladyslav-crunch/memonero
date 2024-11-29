import React, { FC } from "react";
import {
  ErrorToaster,
  SuccessToaster,
  WarningToaster,
} from "./toaster.styles";

export enum toasterTypes {
  success = "success",
  warning = "warning",
  error = "error",
}

type ToasterProps = {
  type: toasterTypes;
  text: string;
};

const getToaster = (toasterType = toasterTypes.success) =>
  ({
    [toasterTypes.success]: SuccessToaster,
    [toasterTypes.error]: ErrorToaster,
    [toasterTypes.warning]: WarningToaster,
  })[toasterType];

const Toaster: FC<ToasterProps> = ({ type, text }) => {
  const CustomToaster = getToaster(type);
  return <CustomToaster>{text}</CustomToaster>;
};

export default Toaster;
