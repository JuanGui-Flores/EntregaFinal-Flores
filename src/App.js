import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Catalog from './componentes/Catalog/Catalog';
import products from './product';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Holaa!'} />} />
          <Route path="/catalogo" element={<Catalog products={products} addToCart={addToCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
