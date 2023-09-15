import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';
import { MyContextProvider } from '../../context/Context'; // Ajusta la ruta según tu estructura

const Catalog = ({ products, addToCart }) => {
  return (
    <MyContextProvider>
      <div className="catalog">
        <h2>Catálogo de Productos</h2>
        <br />
        <div className="ProductList">
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
    </MyContextProvider>
  );
};

export default Catalog;
