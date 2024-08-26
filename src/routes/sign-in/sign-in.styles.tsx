import styled from "styled-components";
export const SignInContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  padding: 30px 40px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  &::after {
    content: "";
    z-index: -2;
    position: absolute;
    width: 430px;
    height: 300px;
    top: 10%;
    right: 0;
    opacity: 0.3;
    background: #ff7a00;
    filter: blur(100px);
  }
  &::before {
    content: "";
    z-index: -2;
    position: absolute;
    width: 400px;
    height: 300px;
    top: 20%;
    right: 20%;
    opacity: 0.4;
    background: #fb617d;
    filter: blur(200px);
  }
`;

export const SignInHeader = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 24px;
    color: #1a0933;
    font-weight: 700;
    margin-left: 20px;
  }
  &::after {
    content: "";
    z-index: -2;
    position: absolute;
    width: 615px;
    height: 200px;
    top: 50%;
    right: 5%;
    opacity: 0.2;
    background: #b24be2;
    filter: blur(200px);
  }
`;

export const SignInMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const SignInCardsContainer = styled.div``;
