import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import {
  createUserDocumentFromAuth,
  auth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useState, ChangeEvent, FormEvent } from "react";
import { SignInFormContainer } from "./sign-in-form.styles";
import FormInput from "../form-input/form-input.component";
import EmailIcon from "../../assets/sign-in-icons/Email.svg";
import KeyIcon from "../../assets/sign-in-icons/key.svg";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ReactComponent as Google } from "../../assets/sign-in-icons/google.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionSingInFormContainer = motion(SignInFormContainer);

const container = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const SignInForm = () => {
  console.log(auth.currentUser);

  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logGoogleUser = async () => {
    const user = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    try {
      const userCred = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(userCred);
      resetFormFields();
    } catch (error) {
      console.log(error);
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
      <form onSubmit={handleSubmit}>
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
        />
        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.signIn}>
          Sign in
        </Button>
        <p>
          Don't have an account? <Link to={"/sign-up"}>Sign up</Link>
        </p>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.googleSignIn}
          onClick={logGoogleUser}
        >
          <Google />
          Sign in with Google
        </Button>
      </form>
    </MotionSingInFormContainer>
  );
};

export default SignInForm;
