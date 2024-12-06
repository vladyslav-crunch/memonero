import styled from "styled-components";

export const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffe9db;
  padding: 10px 55px 10px 15px;
  border-radius: 15px;
  height: 120px;
  width: calc(50% - 7.5px);
  position: relative;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100%;
  }
  p {
    color: #353535;
  }
  h3 {
    color: #1a0933;
    font-size: 20px;
    font-weight: 500;
    margin-top: 5px;
  }
  span {
    position: absolute;
    bottom: 10px;
    right: 14px;
    background-color: #ff7f7f;
    height: 39px;
    width: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #fff;
  }
`;
