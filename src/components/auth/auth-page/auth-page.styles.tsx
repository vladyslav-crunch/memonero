import styled from "styled-components";
export const AuthContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  padding: 30px 40px;
  height: calc(100vh - 94px);
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

export const AuthMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
