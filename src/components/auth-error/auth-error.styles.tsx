import styled from "styled-components";

export const AuthErrorContainer = styled.div`
  height: 60px;
  background-color: #fff7f0;
  display: flex;
  padding: 15px;
  align-items: center;
  border: 2px solid #766b85;
  border-radius: 13px;
  position: absolute;
  max-width: 320px;
  top: 25px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 30%; /* Need a specific value to work */
  p {
    margin-top: 0;
  }
  img {
    margin-right: 10px;
  }
`;
