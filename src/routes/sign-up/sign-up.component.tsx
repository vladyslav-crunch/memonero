import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { ReactComponent as MemoneroLogo } from "../../assets/sign-in-icons/logo.svg";
import {
  SignUpContainer,
  SignUpHeader,
  SignUpMainContent,
  SignUpCardsContainer,
} from "./sign-up.styles";
import AuthCards from "../../components/auth-cards/authCard.component";

const SignIn = () => {
  return (
    <SignUpContainer>
      <SignUpHeader>
        <MemoneroLogo />
        <span>Memonero</span>
      </SignUpHeader>
      <SignUpMainContent>
        <SignUpForm />
        <SignUpCardsContainer>
          <AuthCards />
        </SignUpCardsContainer>
      </SignUpMainContent>
    </SignUpContainer>
  );
};

export default SignIn;
