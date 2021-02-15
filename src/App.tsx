import React from 'react';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import './App.css';

import Header from './components/Header';
import CartProvider from './context/CartContext';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App(){
    return (
      <Router>
      <CartProvider>
           <Header />
        <div className="App">
        <Switch>
          <Route path="/" exact> 
               <Home />
          </Route>
          <Route path="/checkout">
              <Checkout />
          </Route>
        </Switch>
        </div>
      </CartProvider>
      </Router>
    )
}

export default App;
