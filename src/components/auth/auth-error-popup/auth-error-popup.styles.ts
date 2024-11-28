import styled from "styled-components";

export const AuthErrorContainer = styled.div`
  height: 60px;
  background-color: #fff7f0;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border: 2px solid #766b85;
  border-radius: 13px;
  position: absolute;
  max-width: 350px;
  top: 33px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1100px) {
  }
  p {
    margin-top: 0 !important;
  }
  img {
    margin-right: 10px;
  }
`;
