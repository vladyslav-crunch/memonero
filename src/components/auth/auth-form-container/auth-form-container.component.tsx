import { AuthFormContainerStyled } from "./auth-form-container.styles";
import { FC } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const AuthFormContainerMotion = motion(AuthFormContainerStyled);

type AuthFormContainerProps = {
  children?: React.ReactNode;
};

const AuthFormContainer: FC<AuthFormContainerProps> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 1100px)");

  const container = isMobile
    ? {
        hidden: { opacity: 0, y: +50 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      };

  return (
    <AuthFormContainerMotion
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 0.2 }}
    >
      {children}
    </AuthFormContainerMotion>
  );
};

export default AuthFormContainer;
