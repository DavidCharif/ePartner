import styled from "styled-components";

export const AdditionalOptionsStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 100%;  
  margin: 150px auto;

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