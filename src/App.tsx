import React from 'react';
import {Route, Switch, BrowserRouter as Router, Redirect} from "react-router-dom";
import './App.css';

import Header from './components/Header';
import CartProvider from './context/CartContext';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';

function App(){
    return (
      <Router>
      <CartProvider>
           <Header />
        <div className="App">
        <Switch>
        <Route exact path="/e-commerce-app">
              <Redirect to="/home" />
         </Route>
         <Route exact path="/e-commerce-app/">
              <Redirect to="/home" />
         </Route>
          <Route exact path="/home"> 
               <Home />
          </Route>
          <Route  exact path="/checkout">
              <Checkout />
          </Route>
          <Route  exact path="/payment">
              <Payment />
          </Route>
        </Switch>
        </div>
      </CartProvider>
      </Router>
    )
}

export default App;
