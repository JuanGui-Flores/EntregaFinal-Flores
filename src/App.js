import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Catalog from './componentes/Catalog/Catalog';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import products from './componentes/Product/product';

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  }, []);

  return (
    <div>
      {children({ cartItems, addToCart })}
    </div>
  );
}

function App() {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulación de carga de productos desde el archivo products.js
    try {
      // Simular un error para demostración
      if (Math.random() < 0.2) {
        throw new Error('Error al cargar los productos');
      }
      setProductsData(products);
      setError(null);
    } catch (error) {
      setError('Hubo un error al cargar los productos.');
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <CartProvider>
            {({ cartItems, addToCart }) => (
              <Routes>
                <Route
                  path="/"
                  element={<ItemListContainer greeting={'¡Hola!'} />}
                />
                <Route
                  path="/catalogo"
                  element={<Catalog products={productsData} addToCart={addToCart} />}
                />
                <Route
                  path="/producto/:id"
                  element={<ItemDetailContainer products={productsData} />}
                />
                {/* Redirigir a una página de error si la ruta no coincide */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            )}
          </CartProvider>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;