import styled from "styled-components";

export const ItemsSelectedStyled = styled.div`
  width: 100%;  
  p { 
    text-align: center;
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
    color: '#17559b'
  }
  .itemsContainer{
    margin-top: 10px;
    height: 30vh;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap:5px;
    justify-content: center;
    margin-bottom: 100px;
  }
  .items{
    height: 350px;
    width: 280px;       
    display: flex;
    flex-direction: column;    
    margin-bottom: 60px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
    p{
      font-size: 18px;
      font-weight: 400;
      padding: 10px;
    }
    button {
      display: none;
      background-color: blue;
      border-radius: 5px;
      margin-bottom: 100px;
    }
    &:hover {
      button {
        display: inline;
      }
    }
  }
@media (max-width: 1100px) {
  .items {
    height: 300px;
    width: 200px;
  }
}
@media (max-width: 768px) {
  .items {
    height: 250px;
    width: 150px;
  }
}
@media (max-width: 480px) {
  .itemsContainer {
    flex-direction: column;
    width: 100%;

  }
  
  .items {
    height: 200px;
    width: 100%;

  }
}
`