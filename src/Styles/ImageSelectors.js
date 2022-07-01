import styled from "styled-components";

export const ImageSelectorsStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 150px;
  gap: 10px;
  width: 100%;  
  overflow-x: scroll;
  /* &::-webkit-scrollbar {
    width: 30px;
    background-color: black;
  } */
  height: 200px;
  .imageContainer{
    flex-shrink: 0;
    width: 300px;
    height: 150px;
  img {
    pointer-events: none;
    height: 150px;
    width:300px;
    object-fit: cover;
  }
  button {
    border: 0;
    background: none;
    outline: none;
    cursor: pointer;
  }
  p{
    text-align: center;
  }
}
  `;