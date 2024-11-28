import styled from "styled-components";

type SignInFormStyledProps = {
  error?: string;
};

export const SignUpFormStyled = styled.form<SignInFormStyledProps>`
  display: flex;
  flex-direction: column;
  gap: 14px;

  div:nth-child(2) input {
    border: ${({ error }) =>
      error === "This email is already in use" || error === "Invalid email"
        ? "solid 2px #FF7257 !important"
        : "none"};

    &:focus {
      border: 2px solid #ed9e8f;
      outline: none;
    }
  }

  div:nth-child(4) input {
    border: ${({ error }) =>
      error === "Passwords do not match"
        ? "solid 2px #FF7257 !important"
        : "none"};

    &:focus {
      border: 2px solid #ed9e8f;
      outline: none;
    }
  }
`;
