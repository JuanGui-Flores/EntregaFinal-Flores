import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemQuantitySelector from "./ItemQuantitySelector";

const ItemDetailContainer = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  // Función para agregar el producto al carrito
  const handleAddToCart = () => {
    // Aquí puedes llamar a la función addToCart y pasar el producto y la cantidad seleccionada
    addToCart(product, selectedQuantity);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-5">{product.name}</h1>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <ItemQuantitySelector
            maxQuantity={10} // Cambia el valor máximo según tus necesidades
            onQuantityChange={(quantity) => setSelectedQuantity(quantity)}
          />
          <p>Cantidad seleccionada: {selectedQuantity}</p>
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
