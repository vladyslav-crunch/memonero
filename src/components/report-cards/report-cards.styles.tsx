import styled from "styled-components";

export const ReportCardsContainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 40px;
  @media (max-width: 600px) {
    margin-left: 15px;
  }
`;
export const ReportCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 20px;
  color: #2c2c2c;

  &::after {
    content: "";
    background-color: ${({ color }) => `#${color}`};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: absolute;
    left: -27px;
    @media (max-width: 600px) {
      height: 15px;
      width: 15px;
      left: -20px;
    }
  }
  &:not(:first-child) {
    margin-left: 45px;
    @media (max-width: 600px) {
      margin-left: 30px;
    }
  }
  .report-card-title {
    font-weight: 600;
    font-size: 16px;
    @media (max-width: 350px) {
      font-size: 14px;
    }
  }
  .report-card-value {
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 350px) {
      font-size: 14px;
    }
  }
`;
