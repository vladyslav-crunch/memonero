import { AuthContainer, AuthMainContent } from "./auth-page.styles";
import AuthCards from "../auth-cards/auth-cards.component";
import { FC, ReactNode } from "react";

type AuthPageProps = {
  children: ReactNode;
};

const AuthPage: FC<AuthPageProps> = ({ children }) => {
  return (
    <AuthContainer>
      <AuthMainContent>
        {children}
        <AuthCards />
      </AuthMainContent>
    </AuthContainer>
  );
};

export default AuthPage;
