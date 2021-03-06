import styled from "styled-components";

export const ProductSelectStyled = styled.div`
  display: flex;
  position: relative ;
  flex-direction: column;
  align-items: center;  
  margin-top: 100px;
  .nav {
    display: flex;
    gap: 10px;
    button{
      background-color: blue;
      color: yellow;
      
    }
    .active{
      background-color: yellow;
      color: blue;
    }
  }
  .backgroundImage {
    width: 100%;
    height: 400px;
    background-color: darkgray;
  }
  .itemsSelected {
    position:absolute;
    top: 150px;
  }

`