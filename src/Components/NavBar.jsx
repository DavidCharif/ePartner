import React from 'react'
import { NavBarStyled } from '../Styles/NavBarStyled'
import logo from '../Assets/logo.jpg'
import SearchBar from '../ui/SearchBar'
import ShoppingCart from '../ui/ShoppingCart'
import {FiMenu} from 'react-icons/fi'
import {FaWheelchair, FaHeartbeat} from 'react-icons/fa'
import {AiFillMedicineBox}  from 'react-icons/ai'
import { MdOutlineCleanHands } from 'react-icons/md'
const NavBar = () => {

  return (
    <NavBarStyled>
      <div
        className='firstRow'
      >
        <div className="logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="searchBar">
          <SearchBar/>
        </div>
        <div className="misPedidos">
          <p>Mis Pedidos</p>
        </div>
        <div className="cuenta">
          <p>hola aliad@</p>
          <a href='#'>INGRESA</a>
        </div>
        <div className="carrito">
          <ShoppingCart/>
        </div>
      </div>
      <div
        className='secondRow'
      >
        <div className="menu">
          <FiMenu
            size={30}
            color='black'
          />
        </div>
        <div className="innerMenu">
          <ul>
            <li>
              <FaWheelchair
                size={25}
                color='#2c4764'
              />
             <p>Movilidad</p>
              </li>
            <li>
              <FaHeartbeat 
                size={25}
                color='#2c4764'
                />
                <p>Cuidado en el hogar</p>
              </li>
            <li>
                <AiFillMedicineBox
                color='#2c4764'
                  size={25}
                  />
                  <p>Profesionales de la salud</p>
              </li>
            <li>
              <MdOutlineCleanHands
                color='#2c4764'
                size={25}
                />
                <p>Tapabocas y desinfeccion</p>
            </li>
          </ul>
        </div>
      </div>
    </NavBarStyled>
  )
}

export default NavBar