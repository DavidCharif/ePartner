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
  
  .left{
    flex-basis:75%;
    display: flex;
    flex-direction: column;        
    gap: 10px;
    .left-top{
      height: 50%;
      display: flex;
      gap:10px;
      flex-direction: row;      
      .left-top-left{
        flex-basis: 70%;
        background-color: grey;
      }
      .left-top-right{
        flex-basis: 30%;
        background-color: grey;
      }
    }
    .left-bottom{
      height: 50%;
      display: flex;
      flex-direction: row;
      gap: 10px;      
      .left-bottom-left{
        flex-basis: 30%;
        background-color: grey;
      }
      .left-bottom-right{
        flex-basis: 70%;
        background-color: grey;
      }
    }
  }
  .right{
    flex-basis:25%;
    display: flex;
    flex-direction: column;
    background-color: grey;
  }


`