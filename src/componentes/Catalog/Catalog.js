import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

const Catalog = ({ products, addToCart }) => {
  return (
    <div className="catalog">
      <h2>Catálogo de Productos</h2>
      <br />
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>{product.details}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            <Link to={`/producto/${product.id}`} className="details-link">
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;