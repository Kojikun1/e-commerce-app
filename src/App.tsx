import React from 'react';
import './App.css';

import Header from './components/Header';
import CartProvider from './context/CartContext';
import Home from './pages/Home';

function App(){
    return (
      <CartProvider>
           <Header />
        <div className="App">
              <Home />
        </div>
      </CartProvider>
    )
}

export default App;
