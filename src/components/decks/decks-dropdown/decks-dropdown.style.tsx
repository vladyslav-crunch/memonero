import styled from "styled-components";
export const DropdownWrapper = styled.div`
  position: relative;
  width: 400px;
`;

export const StyledSelect = styled.div`
  padding: 15px;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  background-color: #ffe9db;
  color: #333;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const DropdownOptions = styled.ul`
  position: absolute;
  top: 70px;
  left: 0;
  background-color: #ffe9db;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const DropdownOption = styled.li`
  padding: 15px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #ffd3b8;
  }
`;
