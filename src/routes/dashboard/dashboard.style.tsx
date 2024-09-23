import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
