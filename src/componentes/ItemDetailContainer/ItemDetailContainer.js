import React from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';


const ItemDetailContainer = ({ products }) => {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mt-5">{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;