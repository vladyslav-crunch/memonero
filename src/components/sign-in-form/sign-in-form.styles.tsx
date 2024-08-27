import styled from "styled-components";
export const SignInFormContainer = styled.div`
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
`;

type SignInFormStyledProps = {
  error?: string;
};

export const SignInFormStyled = styled.form<SignInFormStyledProps>`
  div:nth-child(1) input {
    border: ${({ error }) => (error ? "solid 2px #FF7257 !important" : "none")};
    &:focus {
      border: 2px solid #ed9e8f;
      outline: none;
    }
  }
`;
