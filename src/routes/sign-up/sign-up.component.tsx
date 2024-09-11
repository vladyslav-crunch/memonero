import SignUpForm from "../../components/auth/sign-up-form/sign-up-form.component";
import AuthPage from "../../components/auth/auth-page/auth-page.component";

const SignIn = () => {
  return (
    <AuthPage>
      <SignUpForm />
    </AuthPage>
  );
};

export default SignIn;
