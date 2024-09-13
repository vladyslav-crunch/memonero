import { ChangeEvent, useState, FormEvent } from "react";
import PasswordIcon from "../../../assets/sign-up-icons/Password.svg";
import { AuthError, AuthErrorCodes, confirmPasswordReset } from "firebase/auth";
import { ResetPasswordFormStyled } from "./reset-password-form.styles";
import FormInput from "../../ui/form-input/form-input.component";
import Button from "../../ui/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../ui/button/button.component";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AuthErrorPopup from "../auth-error-popup/auth-error-popup.component";
import { auth } from "../../../utils/firebase/firebase.utils";
import AuthFormContainerComponent from "../auth-form-container/auth-form-container.component";

const defaultFormFields = {
  password: "",
  confirmPassword: "",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let TimeoutCounter: NodeJS.Timeout | undefined;

const ResetPasswordForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { password, confirmPassword } = formFields;
  const [error, setError] = useState<string>();
  const [isAuthErrorVisible, setAuthErrorVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const oobCode = query.get("oobCode");
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleAuthError = (error: AuthError) => {
    switch (error.code) {
      case AuthErrorCodes.EXPIRED_OOB_CODE:
        setError("Reset link is invalid or expired");
        break;
      case AuthErrorCodes.INVALID_OOB_CODE:
        setError("Reset link is invalid or expired");
        break;
      case AuthErrorCodes.USER_DELETED:
        setError("Related user not found");
        break;
      default:
        setError("Something went wrong");
    }
    if (error.code) {
      setAuthErrorVisible(true);
      TimeoutCounter = setTimeout(() => {
        setAuthErrorVisible(false);
      }, 5000);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(undefined);
    setAuthErrorVisible(false);
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setAuthErrorVisible(true);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      if (!oobCode) {
        setError("Reset link is invalid or expired");
        setAuthErrorVisible(true);
        return;
      }
      await confirmPasswordReset(auth, oobCode, password);
      resetFormFields();
      navigate("/sign-in");
    } catch (error) {
      handleAuthError(error as AuthError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthFormContainerComponent>
      <h2>Reset your password</h2>
      <ResetPasswordFormStyled onSubmit={handleSubmit} error={error}>
        <FormInput
          icon={PasswordIcon}
          placeholder="New password"
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
          minLength={6}
        />
        <FormInput
          icon={PasswordIcon}
          placeholder="Repeat the new password"
          type="password"
          onChange={handleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
          minLength={6}
        />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.sign}
          type="submit"
          isLoading={isLoading}
        >
          Reset the password
        </Button>
        <AnimatePresence>
          {isAuthErrorVisible && <AuthErrorPopup error={error!} key="toast" />}
        </AnimatePresence>
      </ResetPasswordFormStyled>
    </AuthFormContainerComponent>
  );
};

export default ResetPasswordForm;
