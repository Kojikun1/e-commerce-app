import React from 'react';

import { useCart } from '../../context/CartContext';

import './styles.css';

export default function Checkout(){
    const { loadCartItems, getTotalAmount, removeItem, removeById, getTotalProducts} = useCart();
    const data = loadCartItems();
    return (
        <>
        <h2>Produtos no Carrinho</h2>
        <div className="checkout-container">
            {data.length == 0 ? <p id="empty-cart-message">Carrinho Vazinho</p> :
            <>
            <table className="products-container-checkout">
                <thead>
                <tr>
                    <th>Produto</th>
                    <th>Valor</th>
                    <th>Qtd</th>
                    <th>Total</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
            {data.map(item => {
              return (
                  <tr key={item.id}>
                  <td>
                     <p>Produto {item.name}</p>
                  </td>
                  <td>
                     <p>R${item.price.toFixed(2)}</p>
                  </td>
                  <td className="amount-td">
                     {item.amount}
                  </td>
                   <td>R${(item.amount * item.price).toFixed(2)}</td>
                  <td>
                      <button onClick={ () => removeItem(item.id)} >-</button>
                      <button onClick={ () => removeById(item.id)} >X</button>
                  </td> 
                  </tr>
              )
            })}
           </tbody>
            </table>
             <div id="total-output">
                <p>Produtos:  R${getTotalAmount()}</p>
                <p>Frete:  R${getTotalProducts() * 10}</p>
                <p>Total + Frete:  R${(Number(getTotalAmount()) + (getTotalProducts() * 10)).toFixed(2)}</p>
                <button className="finalize-button">Finalizar Compra</button>
             </div>
            </>
          }
        </div>
        </>
    )
}