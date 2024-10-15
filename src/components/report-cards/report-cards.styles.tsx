import styled from "styled-components";

export const ReportCardsContainer = styled.div`
  display: flex;
  margin-top: 25px;
`;
export const ReportCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 75px;
  width: 125px;
  border-radius: 20px;
  background-color: #eeb0a4;
  color: #2c2c2c;
  &::after {
    content: "";
    background-color: ${({ color }) => `#${color}`};
    border-radius: 20px 100% 100% 20px;
    width: 25px;
    position: absolute;
    left: 0px;
    height: 100%;
    @media (max-width: 340px) {
      width: 20px;
    }
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
  .report-card-title {
    font-weight: 600;
    font-size: 16px;
  }
  .report-card-value {
    font-size: 20px;
    font-weight: 500;
  }
`;
