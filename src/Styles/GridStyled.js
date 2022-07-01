import styled from "styled-components";

export const GridStyled = styled.div`
  
  display: flex;
  width: 80%;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  height: 500px;
  flex-direction: row;
  gap: 10px;
  .hover {
    &:hover {
      img{
        opacity: 0.3;
        overflow: hidden;
      }
      p {
        display: inline;
        opacity: 1;
      } 
    }
  }
  
  img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    // cover
    object-fit: cover;
    
  }
  p {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    font-weight: bold;
  }
  
  .left{
    
    flex-basis:75%;
    display: flex;
    flex-direction: column;        
    gap: 10px;
    .left-top{
      height: 49%;
      display: flex;
      gap:10px;
      flex-direction: row;      
      .left-top-left{
        position: relative;
        border-radius: 5px;
        flex-basis: 70%;
        background-color: grey;
      }
      .left-top-right{
        flex-basis: 30%;
        border-radius: 5px;
        position: relative;
        background-color: grey;
      }
    }
    .left-bottom{
      height: 49%;
      display: flex;
      flex-direction: row;
      gap: 10px;      
      .left-bottom-left{
        border-radius: 5px;
        flex-basis: 30%;
        position: relative;
        background-color: grey;
      }
      .left-bottom-right{
        border-radius: 5px;
        flex-basis: 70%;
        position: relative;
        background-color: grey;
      }
    }
  }
  .right{
    border-radius: 5px;
    flex-basis:25%;
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: grey;
  }


`