import styled from "styled-components";
export const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 520px;
  h2 {
    margin-bottom: 15px;
    font-size: 26px;
    color: #1a0933;
  }
  p {
    margin-top: 10px;
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
    margin-top: 10px;
  }
`;
