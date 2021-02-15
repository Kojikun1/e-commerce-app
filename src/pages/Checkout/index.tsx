import React from 'react';

import { useCart } from '../../context/CartContext';

import './styles.css';

export default function Checkout(){
    const { loadCartItems, getTotalAmount, removeItem, removeById } = useCart();
    const data = loadCartItems();
    return (
        <div className="checkout-container">
            <h2>Produtos no Carrinho</h2>
            <ul className="products-container-checkout">
            {data.map(item => {
              return (
                  <li>
                      <p>Produto {item.name} Preço R${item.price} X {item.amount}</p>
                      <button onClick={ () => removeItem(item.id)} >-</button>
                      <button onClick={ () => removeById(item.id)} >X</button>
                  </li>
              )
            })}
            </ul>
            <p id="total-output" >TOTAL: R${getTotalAmount()}</p>
        </div>
    )
}