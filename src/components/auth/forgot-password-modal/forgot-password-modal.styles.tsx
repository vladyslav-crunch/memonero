import styled from "styled-components";
export const ModalWindowOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(56, 55, 55, 0.3);
  z-index: 2;
`;

export const ModalWindowWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  padding: 50px;
  background-color: #fff7f0;
  border-radius: 20px;
  z-index: 1000;    
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: #1a0933;
  }
  p {
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    color: #1a0933;
    max-width: 450px;
  }
  input {
    border: 1px solid #b5afaf;
    margin-bottom: 0;
  }
  input:focus {
    border: 1px solid #b5afaf;
  }
  input:read-only {
    background-color: #eeeeee;
  }
  .error {
    color: #f15e5e;
    font-weight: 400;
    text-align: center;
  }
  span {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  } 
  @media (max-width: 1100px) {  
    padding: 25px;
      min-width: 320px;
  } 
`;
