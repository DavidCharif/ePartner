import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ProductContext } from "../Context/ProductContext";

const ShoppingCart = () => {
  const { cart } = React.useContext(ProductContext);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  React.useEffect(() => {
    // add listener for click event
    window.addEventListener("click", setOpen(false));
    // return function to be called when your component is unmounted
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="shoppingContainer">
      <div className="shoppingIcon">
        <AiOutlineShoppingCart size={30} color="blue" onClick={handleClick} />
        <p className="count">{cart.length}</p>
      </div>

      <p>CARRITO</p>
      <div className={`shoppingCart ${open ? "open" : ""}`}>
        <ul>
          <div className="header">
            <li>
              <p>Producto</p>
            </li>
            <li>
              <p>Nombre</p>
            </li>
            <li>
              <p>Precio</p>
            </li>
          </div>
          {cart.map((product, index) => {
            return (
              <div key={index} className="cartItem">
                <li>
                  <img src={product?.image} alt="header" />
                </li>
                <li>
                  <p>{product?.title}</p>
                </li>
                <li>
                  <p>{product?.price}</p>
                </li>
              </div>
            );
          })}
          <div className="total">
            <li>
              <p>Total</p>
            </li>
            <li>
              <p>{cart.reduce((acc, curr) => acc + curr.price, 0)}</p>
            </li>
          </div>
          <div className="buttons">
            <button type="button">Pagar</button>
            <button type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
