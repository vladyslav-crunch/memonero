import styled from "styled-components";

export const CheckBoxContainer = styled.label`
  font-size: 16px !important;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 5px;

  .checkbox-label {
    margin-top: 3px;
  }
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 4px;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #fcfcfc;
  }

  &:hover input ~ .checkmark {
    background-color: #eee;
  }

  input:checked ~ .checkmark {
    background-color: #f39d8e;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
