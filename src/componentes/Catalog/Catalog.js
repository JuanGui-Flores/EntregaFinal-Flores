import React from 'react';
import './Catalog.css'; // Importa los estilos

const Catalog = ({ products, addToCart }) => {
  return (
    <div className="catalog">
      <h2>Catálogo de Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>{product.details}</p> {/* Agrega los detalles del producto */}
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
