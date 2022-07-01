import React from "react";

import image1 from '../Assets/silla1.jpg'
import image2 from '../Assets/silla2.jpg'
import image3 from '../Assets/silla3.jpg'
import image4 from '../Assets/silla4.jpg'
const localProducts = [
  {
    id: 1,
    title: "Product 1",
    price: 10000,
    image: image1,
  },
  {
    id: 2,
    title: "Product 2",
    price: 20000,
    image: image2,

  },
  {
    id: 3,
    title: "Product 3",
    price: 30000,
    image: image3,

  },
  {
    id: 4,
    title: "Product 4",
    price: 40000,
    image: image4,
  }
]
export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState(localProducts);
  const [cart, setCart] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartTotal(cartTotal + product.price);
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
    setCartTotal(cartTotal - cart.find((product) => product.id === id).price);
  }

  const clearCart = () => {
    setCart([]);
    setCartTotal(0);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );

}

