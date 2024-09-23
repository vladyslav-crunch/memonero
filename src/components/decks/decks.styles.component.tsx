import styled from "styled-components";

export const DecksWrapper = styled.div`
  width: 100%;
`;
export const DecksContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const DecksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
  svg:not(:last-child) {
    margin-right: 10px;
  }
  h2 {
    font-size: 36px;
    color: #150729;
  }
`;
