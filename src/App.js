import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Product from "./Product";
import { MyContextProvider } from "./context/Context";
import CartWidget from "./CartWidget";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <MyContextProvider>
      <CartProvider>
        <div className="App">
          <NavBar />
          <CartWidget />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={ProductList} />
            <Route path="/products/:productId" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </CartProvider>
    </MyContextProvider>
  );
}

export default App;
