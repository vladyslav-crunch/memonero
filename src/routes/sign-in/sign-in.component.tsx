import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { ReactComponent as MemoneroLogo } from "../../assets/sign-in-icons/logo.svg";
import {
  SignInContainer,
  SignInHeader,
  SignInMainContent,
  SignInCardsContainer,
} from "./sign-in.styles";
import AuthCards from "../../components/auth-cards/authCard.component";

const SignIn = () => {
  return (
    <SignInContainer>
      <SignInHeader>
        <MemoneroLogo />
        <span>Memonero</span>
      </SignInHeader>
      <SignInMainContent>
        <SignInForm />
        <SignInCardsContainer>
          <AuthCards />
        </SignInCardsContainer>
      </SignInMainContent>
    </SignInContainer>
  );
};

export default SignIn;
