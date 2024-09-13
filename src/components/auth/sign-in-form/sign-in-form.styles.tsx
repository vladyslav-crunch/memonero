import styled from "styled-components";

type SignInFormStyledProps = {
  error?: string;
};

export const SignInFormStyled = styled.form<SignInFormStyledProps>`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (max-width: 1100px) {
    align-items: center;
  }

  div:nth-child(1) input {
    border: ${({ error }) => (error ? "solid 2px #FF7257 !important" : "none")};

    &:focus {
      border: 2px solid #ed9e8f;
      outline: none;
    }
  }
`;
