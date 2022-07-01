import styled from "styled-components";

export const NavBarStyled = styled.nav`
  width: 100%;
  height: 120px;
 
  .firstRow{
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 60%;
    width: 100%;
    overflow: hidden;
    .logo{
      width: 15%;
      height: 100%;      
      display: flex;
      justify-content: center;
      align-items: center;     
      img{       
        height: 100%;
      }
    }
    .searchBar{
      width: 45%;
      height: 100%;
      
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 2px;
      .searchBarContainer{
      border-radius: 5px;
      border: 1px solid black;
      padding: 3px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      input{
        flex-basis: 95%;
        height:80%;
        border: none;
        ::placeholder{
          padding : 5px
      }
    }
      button{
        border-radius: 5px;
        flex-basis: 5%;
        height: 80%;
        background-color: black;
        width: 30px;
        border: none;
        border-radius: 2px;
        color: white;
        font-size: 20px;
      }
    }
    }
    .misPedidos{
      width: 15%;
      height: 100%;      
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        font-size: 13px;
        font-weight: 700;
        color: blue;
        text-transform: uppercase;
      }
    }
    .cuenta{
      width: 10%;
      height: 100%;      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      p{
        font-size: 13px;
        font-weight: 500;
        text-transform: uppercase;
      }
      a {
        color: blue;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 15px;
        border-bottom: 1px solid blue;
      }

    }
    .carrito {
      width: 10%;
      padding: 0;
      height: 100%;      
      display: flex;
      justify-content: center;
      align-items: center;
      .shoppingContainer{
        display: flex;
        flex-direction: row;
        .shoppingIcon{
          position: relative;
          p {
            position: absolute;
            top: -6px;
            right: 8px;
            font-size: 15px;
            background-color: white;
          }
        }
        .shoppingCart {
          display: none;
          position: absolute;
          font-size: 15px;
          background-color: white;          
          width: 20px;
        }
        .open {
          display: flex;
          position: absolute;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          top: 100px;
          right: 8px;
          width: 300PX;
          height: fit-content;
          background-color: white;
          
        }
        p{
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;

        }
      }
    }
  }
  .secondRow{
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 40%;
    .menu{
      width: 20%;
      height: 100%;      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .innerMenu{
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;      
      ul{
        display: flex;
        list-style: none;
        flex-direction: row;
        gap: 30px;
        li{
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          width: fit-content;
          height: 100%;          
          p{
            font-size: 13px;
            text-transform: uppercase;
          }
        }
      }
    }
  }  
  `