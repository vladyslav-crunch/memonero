import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../../utils/firebase/firebase.utils";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useState, ChangeEvent, FormEvent } from "react";
import { SignInFormContainer, SignInFormStyled } from "./sign-in-form.styles";
import FormInput from "../../ui/form-input/form-input.component";
import EmailIcon from "../../../assets/sign-in-icons/Email.svg";
import KeyIcon from "../../../assets/sign-in-icons/key.svg";
import Button from "../../ui/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../ui/button/button.component";
import { ReactComponent as GoogleIcon } from "../../../assets/sign-in-icons/google.svg";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AuthErrorPopup from "../auth-error-popup/auth-error-popup.component";
import { useNavigate } from "react-router-dom";
import ForgotPasswordModal from "../forgot-password-modal/forgot-password-modal.component";
const MotionSingInFormContainer = motion(SignInFormContainer);

const container = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

let TimeoutCounter: NodeJS.Timeout | undefined;

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [error, setError] = useState<string>();
  const [isAuthErrorVisible, setAuthErrorVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const loginGoogleUser = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      const user = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      navigate("/");
    } catch (error) {
      handleAuthError(error as AuthError);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    setError(undefined);
    setAuthErrorVisible(false);
  };

  const handleAuthError = (error: AuthError) => {
    switch (error.code) {
      case AuthErrorCodes.POPUP_CLOSED_BY_USER:
        return;
      case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
        setError("Invalid Email or Password");
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (TimeoutCounter !== undefined) {
      clearTimeout(TimeoutCounter);
    }
    if (!email || !password) {
      return;
    }
    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      setLoading(false);
      resetFormFields();
      navigate("/");
    } catch (error) {
      handleAuthError(error as AuthError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MotionSingInFormContainer
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 0.2 }}
    >
      <h2>Welcome Back!</h2>
      <SignInFormStyled onSubmit={handleSubmit} error={error}>
        <FormInput
          icon={EmailIcon}
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />
        <FormInput
          withForgot
          icon={KeyIcon}
          placeholder="Password"
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
          minLength={6}
          adornment={() => setModalOpen(true)}
        />
        <Button
          type="submit"
          buttonType={BUTTON_TYPE_CLASSES.sign}
          isLoading={isLoading}
        >
          Sign in
        </Button>
        <p>
          Don't have an account? <Link to={"/sign-up"}>Sign Up</Link>
        </p>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.googleSignIn}
          onClick={loginGoogleUser}
        >
          <GoogleIcon />
          Sign in with Google
        </Button>
      </SignInFormStyled>
      <AnimatePresence>
        {isAuthErrorVisible && <AuthErrorPopup error={error!} key="toast" />}
      </AnimatePresence>
      {isModalOpen && (
        <ForgotPasswordModal onClose={() => setModalOpen(false)} />
      )}
    </MotionSingInFormContainer>
  );
};

export default SignInForm;