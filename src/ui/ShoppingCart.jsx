import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { ProductContext } from '../Context/ProductContext'


const ShoppingCart = () => {
  const { cart } = React.useContext(ProductContext)
  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className='shoppingContainer'>

      <div className='shoppingIcon'>
        <AiOutlineShoppingCart
          size={30}
          color='blue'
          onClick={handleClick}
        />
        <p className="count">
          {cart.length}
        </p>
        </div>

        <p>CARRITO</p>
        <div className={`shoppingCart ${open ? 'open' : ''}`}>
          {cart.map((product, index) => {
            return (
              <div key={index} className='cartItem'>
                <img src={product?.image} alt='header'/>
                <p>{product?.title}</p>
                <p>{product?.price}</p>
                <p>aloha</p>
                </div>
            )
          }
          )}
          </div>
    </div>
  )
}

export default ShoppingCart