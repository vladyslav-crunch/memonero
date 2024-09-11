import { ChangeEvent, useState, FormEvent } from "react";
import EmailIcon from "../../../assets/sign-up-icons/Email.svg";
import UsernameIcon from "../../../assets/sign-up-icons/Username.svg";
import PasswordIcon from "../../../assets/sign-up-icons/Password.svg";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { SignUpFormStyled, SignUpFormContainer } from "./sign-up-form.styles";
import FormInput from "../../ui/form-input/form-input.component";
import Button from "../../ui/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../ui/button/button.component";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AuthErrorPopup from "../auth-error-popup/auth-error-popup.component";
import Checkbox from "../../ui/checkbox/checkbox.component";

const MotionSingUpFormContainer = motion(SignUpFormContainer);

const container = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

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
        password
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
    <MotionSingUpFormContainer
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 0.2 }}
    >
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
          buttonType={BUTTON_TYPE_CLASSES.sign}
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
    </MotionSingUpFormContainer>
  );
};

export default SignUpForm;
