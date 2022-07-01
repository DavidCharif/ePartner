import styled from "styled-components";

export const AdditionalOptionsStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 100%;  
  margin-top: 250px;
  justify-content: center;
  gap: 10px;
  div {
    width: 40%;
    height: 100%;
  }
  div:first-child {
    background-color: grey;
  }
  div:last-child {
    background-color: grey;
  }
`