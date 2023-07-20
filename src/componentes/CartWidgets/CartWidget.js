import React from "react";
import cart from './assets/cart.svg';

const CartWidget = () => {
    const cartCount = 0; // Acá podes usar la cantidad real de elementos en el carrito

    return (
        <div className="cart-widget">
            <img src={cart} alt="cart-widget" className="cart-icon" />
            <span className="cart-count">{cartCount}</span>
        </div>
    );
};

export default CartWidget;
