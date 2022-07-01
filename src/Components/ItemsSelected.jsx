import React, { useContext } from 'react'
import { ItemsSelectedStyled } from '../Styles/ItemsSelected'

import image1 from '../Assets/silla1.jpg'
import image2 from '../Assets/silla2.jpg'
import image3 from '../Assets/silla3.jpg'
import image4 from '../Assets/silla4.jpg'
import { ProductContext } from '../Context/ProductContext'


const ItemsSelected = ({ title }) => {
  const images = [image1, image2, image3, image4]
  const { addToCart } = useContext(ProductContext)
  const items = new Array(4).fill(
    <></>
  )
  const handleClick = (index) => {
    console.log('adding to cart')
    addToCart(['index'])
  }
  return (
    <ItemsSelectedStyled
      className='itemsSelected'
    >
    <p      
    >{title}</p>
    <div
     className='itemsContainer'
    >      
      {
      items.map((item, index) => {
        return <div key={index} className='items'>
          <img src={images[index]} alt='header'/>
          <p>Silla de Ruedas Pediátrica con Respaldo Abatible Konfort Basic</p>
          <button type='button' onClick={handleClick}>Añadir al carrito</button>
        </div>
      }
      )
    }</div>
    </ItemsSelectedStyled>
  )
}

export default ItemsSelected