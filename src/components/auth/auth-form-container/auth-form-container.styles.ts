import styled from "styled-components";
export const AuthFormContainerStyled = styled.div`
  width: 520px;
  h2 {
    margin-bottom: 15px;
    font-size: 26px;
    color: #1a0933;
    @media (max-width: 1100px) {
      text-align: center;
    }
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
    margin-top: 10px;
  }
`;