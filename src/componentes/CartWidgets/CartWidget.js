import React, { useState } from "react";
import cart from './assets/cart.svg';

const CartWidget = ({ addToCart }) => {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
        addToCart();
    };

    return (
        <div className="cart-widget">
            <img src={cart} alt="cart-widget" className="cart-icon" onClick={handleAddToCart} />
            <span className="cart-count">{cartCount}</span>
        </div>
    );
};

export default CartWidget;
