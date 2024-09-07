import { FC } from "react";
import {
  ModalWindowOverlay,
  ModalWindowWrapper,
} from "./forgot-password-modal.styles";
import FormInput from "../form-input/form-input.component";
import ReactDOM from "react-dom";
import EmailIcon from "../../assets/sign-in-icons/Email.svg";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { sendPasswordResetLinkToEmail } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import { ChangeEvent } from "react";
import { AuthErrorCodes, AuthError } from "firebase/auth";
import closeButton from "../../assets/sign-in-icons/material-symbols_close.svg";
import { motion } from "framer-motion";

const MotionModalWindowWrapper = motion(ModalWindowWrapper);

type ForgotPasswordModalProps = {
  onClose: () => void;
};

const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({ onClose }) => {
  const [isLinkSent, setIsLinkSent] = useState(false);
  const [email, setEmail] = useState<string>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const handleAuthError = (error: AuthError) => {
    console.log(error.code);
    switch (error.code) {
      case AuthErrorCodes.INVALID_EMAIL:
        setError("Invalid email address");
        break;
      default:
        setError("Something went wrong");
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    try {
      setIsLoading(true);
      await sendPasswordResetLinkToEmail(email);
      setIsLinkSent(true);
      setError("");
    } catch (error) {
      console.log("Error: ", error);
      handleAuthError(error as AuthError);
    } finally {
      setIsLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <>
      <ModalWindowOverlay onClick={onClose}> </ModalWindowOverlay>
      <MotionModalWindowWrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        <form onSubmit={onSubmit}>
          <h2>Forgot the password?</h2>
          <p>
            Type your email address and Click "Send link" button. You will get a
            link to update your password.
          </p>
          <FormInput
            icon={EmailIcon}
            onChange={onChangeHandler}
            placeholder="Email"
            type="email"
            readOnly={isLinkSent}
          />
          <p
            className="error"
            style={error ? { display: "block" } : { display: "none" }}
          >
            {error ? error : ""}
          </p>
          <Button
            disabled={isLinkSent}
            isLoading={isLoading}
            buttonType={BUTTON_TYPE_CLASSES.black}
          >
            {isLinkSent ? "The link has been sent" : "Send link"}
          </Button>
        </form>
        <span>
          <img src={closeButton} alt="" onClick={onClose} />
        </span>
      </MotionModalWindowWrapper>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default ForgotPasswordModal;
