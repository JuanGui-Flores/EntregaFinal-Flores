import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home'; 
import ProductList from './ProductList'; 
import Product from './Product'; 
import CartWidget from './CartWidget'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/products/:productId" component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
