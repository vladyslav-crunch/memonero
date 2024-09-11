import styled from "styled-components";
export const SignUpFormContainer = styled.div`
  width: 520px;

  h2 {
    margin-bottom: 15px;
    font-size: 26px;
    color: #1a0933;
  }
  p {
    margin-top: 10px;
    text-align: center;
    a {
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      color: #1a0933;
    }
  }
  .form-input-container + button {
    margin-top: 10px;
  }
  p + button {
    margin-top: 15px;
  }
  div + label {
    margin-top: 5px;
  }
`;

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
