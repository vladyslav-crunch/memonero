import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { ReactComponent as MemoneroLogo } from "../../assets/sign-in-icons/logo.svg";
import {
  ResetPasswordContainer,
  ResetPasswordHeader,
  ResetPasswordMainContent,
  ResetCardsContainer,
} from "./reset-password.styles.component";
import AuthCards from "../../components/auth-cards/authCard.component";
import ResetPasswordForm from "../../components/reset-password-form/reset-password-form.component";

const ResetPassword = () => {
  return (
    <ResetPasswordContainer>
      <ResetPasswordHeader>
        <MemoneroLogo />
        <span>Memonero</span>
      </ResetPasswordHeader>
      <ResetPasswordMainContent>
        <ResetPasswordForm />
        <ResetCardsContainer>
          <AuthCards />
        </ResetCardsContainer>
      </ResetPasswordMainContent>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;
