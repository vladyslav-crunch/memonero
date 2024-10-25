import styled from "styled-components";

export const ReportGraphContainer = styled.div`
  background-color: #ffe9db;
  height: 400px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 20px;
  flex-direction: column;
  @media (max-width: 600px) {
    height: 300px;
    align-items: center;
  }
`;
