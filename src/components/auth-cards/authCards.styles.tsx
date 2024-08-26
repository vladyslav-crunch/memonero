import styled from "styled-components";

type AuthCardProps = {
  color: string;
};

export const AuthCardsContainer = styled.div`
  .badge {
    position: absolute;
    right: 15px;
    top: 15px;
    border: 1px solid #3f3f3f;
    border-radius: 80px;
    padding: 3px 10px;
    background-color: #3f3f3f;
    color: #fff;
  }
  p:not(:first-child) {
    margin-top: 5px;
  }
  .auth-card:nth-child(2) {
    margin-left: 162px;
  }

  height: 515px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const AuthCard = styled.div<AuthCardProps>`
  position: relative;
  background-color: ${({ color }) => `#${color}`};
  width: 325px;
  color: #1a0933;
  padding: 30px 40px;
  border: 2px solid #766b85;
  border-radius: 20px;
  .auth-card-front {
    font-size: 16px;
    font-weight: 500;
  }
  .auth-card-back {
    font-size: 16px;
    font-weight: 500;
  }
`;
