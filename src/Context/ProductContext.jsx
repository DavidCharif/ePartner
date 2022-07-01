import React from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
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