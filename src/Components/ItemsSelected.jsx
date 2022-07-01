import React, { useContext } from 'react'
import { ItemsSelectedStyled } from '../Styles/ItemsSelected'

import { ProductContext } from '../Context/ProductContext'


const ItemsSelected = ({ title }) => {
  
  const { addToCart, products } = useContext(ProductContext)
  
  const handleClick = ({target: {value}}) => {
    const product = products.find(product => product.id === parseInt(value))
    
    console.log('productos', products)
    console.log('product' , product);
    addToCart(product)    
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
      products.map((item, index) => {
        return <div key={index} className='items'>
          <img src={item.image} alt='header'/>
          <p>{item.title}</p>
          <button type='button' value={item.id} onClick={handleClick}>Añadir al carrito</button>
        </div>
      }
      )
    }</div>
    </ItemsSelectedStyled>
  )
}

export default ItemsSelected