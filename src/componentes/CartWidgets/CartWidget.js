import React, { useState } from "react";
import cartIcon from "./assets/cart.svg";

const CartWidget = ({ cartItems, addToCart }) => {
  const [cartCount, setCartCount] = useState(cartItems.length);

  const handleAddToCart = () => {
    setCartCount((prevCartCount) => prevCartCount + 1);
    addToCart();
  };

  return (
    <div className="cart-widget">
      <img
        src={cartIcon}
        alt="cart-widget"
        className="cart-icon"
        onClick={handleAddToCart}
      />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
};

export default CartWidget;
