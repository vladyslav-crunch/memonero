import { ChangeEvent, useState, FormEvent } from "react";
import EmailIcon from "../../../assets/auth-icons/email-icon.svg";
import UsernameIcon from "../../../assets/auth-icons/username-icon.svg";
import PasswordIcon from "../../../assets/auth-icons/password-icon.svg";
import { createAuthUserWithEmailAndPassword } from "../../../utils/firebase/auth";
import { createUserDocumentFromAuth } from "../../../utils/firebase/user";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { SignUpFormStyled } from "./sign-up-form.styles";
import FormInput from "../../ui/form-input/form-input.component";
import Button from "../../ui/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../ui/button/button.component";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AuthErrorPopup from "../auth-error-popup/auth-error-popup.component";
import Checkbox from "../../ui/checkbox/checkbox.component";
import AuthFormContainer from "../auth-form-container/auth-form-container.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let TimeoutCounter: NodeJS.Timeout | undefined;

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [error, setError] = useState<string>();
  const [isAuthErrorVisible, setAuthErrorVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setCheckboxChecked(false);
  };

  const handleAuthError = (error: AuthError) => {
    switch (error.code) {
      case AuthErrorCodes.EMAIL_EXISTS:
        setError("This email is already in use");
        break;
      case AuthErrorCodes.INVALID_EMAIL:
        setError("Invalid email");
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

  const handleCheckboxChange = () => {
    setCheckboxChecked(!isCheckboxChecked);
    setError(undefined);
    setAuthErrorVisible(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!isCheckboxChecked) {
      setError("You must accept the terms of use");
      setAuthErrorVisible(true);
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setAuthErrorVisible(true);
      setLoading(false);
      return;
    }

    try {
      const userCred = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
      if (userCred) {
        const { user } = userCred;
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
        navigate("/");
      }
    } catch (error) {
      handleAuthError(error as AuthError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthFormContainer>
      <h2>Create your account</h2>
      <SignUpFormStyled onSubmit={handleSubmit} error={error}>
        <FormInput
          icon={UsernameIcon}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          placeholder="Username"
          maxLength={30}
        />
        <FormInput
          placeholder="Email"
          icon={EmailIcon}
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />
        <FormInput
          icon={PasswordIcon}
          placeholder="Password"
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
          minLength={6}
        />
        <FormInput
          icon={PasswordIcon}
          placeholder="Repeat the password"
          type="password"
          onChange={handleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
          minLength={6}
        />
        <Checkbox
          label="I accept terms of use"
          checked={isCheckboxChecked}
          onChange={handleCheckboxChange}
        />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.orange}
          type="submit"
          isLoading={isLoading}
        >
          Sign Up
        </Button>
        <p>
          Already have an account? <Link to={"/sign-in"}>Sign In</Link>
        </p>
        <AnimatePresence>
          {isAuthErrorVisible && <AuthErrorPopup error={error!} key="toast" />}
        </AnimatePresence>
      </SignUpFormStyled>
    </AuthFormContainer>
  );
};

export default SignUpForm;
