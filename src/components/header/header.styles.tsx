import styled from "styled-components";

export const HeaderContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
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
  max-width: 1700px;
  padding: 30px 40px 0 40px;
`;
