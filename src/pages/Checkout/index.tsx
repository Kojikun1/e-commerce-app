import React from 'react';

import { useCart } from '../../context/CartContext';

import './styles.css';

export default function Checkout(){
    const { loadCartItems, getTotalAmount, removeItem, removeById} = useCart();
    const data = loadCartItems();
    return (
        <div className="checkout-container">
            <h2>Produtos no Carrinho</h2>
            <table className="products-container-checkout">
                <tr>
                    <th>Produto</th>
                    <th>Valor</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th>Ações</th>
                </tr>
            {data.map(item => {
              return (
                  <tr>
                  <td>
                     <p>Produto {item.name}</p>
                  </td>
                  <td>
                     <p>R${item.price}</p>
                  </td>
                  <td>
                     <p>{item.amount}</p>
                  </td>
                  <td>
                     <p>{item.amount * item.price}</p>
                  </td>
                  <td>
                      <button onClick={ () => removeItem(item.id)} >-</button>
                      <button onClick={ () => removeById(item.id)} >X</button>
                  </td> 
                  </tr>
              )
            })}
            </table>
            <p id="total-output" >TOTAL: R${getTotalAmount()}</p>
        </div>
    )
}