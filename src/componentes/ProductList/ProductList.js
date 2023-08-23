import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <Link to={`/producto/${product.id}`} className="product-link">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Precio: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;