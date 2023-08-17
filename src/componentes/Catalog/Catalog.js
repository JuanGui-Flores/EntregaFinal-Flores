import React from 'react';
import './Catalog.css';

const Catalog = ({ products, addToCart }) => {
  return (
    <div className="catalog">
      <h2>Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
