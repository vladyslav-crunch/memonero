import styled from "styled-components";

export const DecksWrapper = styled.div`
  width: 100%;
`;
export const DecksContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex: 0 1 100%;
  flex-wrap: wrap;
  gap: 15px;
  overflow: auto;
  align-content: flex-start;
  padding-right: 15px;
  height: calc(100vh - 250px);
  @media (max-width: 1100px) {
    overflow: hidden;
    height: 100%;
    padding-right: 0;
  }
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #f8f8f8;
    border-radius: 10px;
  }
`;

export const DecksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  @media (max-width: 450px) {
    h2 {
      font-size: 24px;
    }
    svg {
      height: 30px;
      width: 30px;
    }
  }
`;
