import { AuthError as AuthErrorType } from "firebase/auth";
import { AuthErrorContainer } from "./auth-error.styles";
import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import errorIcon from "../../assets/sign-in-icons/error.svg";

const MotionAuthErrorContainer = motion(AuthErrorContainer);

type AuthErrorProps = {
  error: string;
};

const AuthError: FC<AuthErrorProps> = ({ error }) => {
  return (
    <MotionAuthErrorContainer
      key="toast"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <img src={errorIcon} alt="Error icon" />
      <p>{error}</p>
    </MotionAuthErrorContainer>
  );
};

export default AuthError;
