import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContext';

import './styles.css';

export default function Checkout(){
    const { loadCartItems, getTotalAmount, removeItem, removeById, getTotalProducts, addToCart } = useCart();
    const data = loadCartItems();
    return (
        <>
        <h2>Produtos no Carrinho</h2>
        <div className="checkout-container">
            {data.length == 0 ? <p id="empty-cart-message">Carrinho Vazinho</p> :
            <>
            <div className="products-container-checkout">
            {data.map(item => {
              return (
                  <div key={item.id} className='product-container'>
                    <div>
                    <p>Produto {item.name}</p>
                    <div className='product-action-value'>
                       <div>
                          <p>Valor: </p>
                          <p>R${item.price.toFixed(2)}</p>
                       </div>
                       <div>
                        <button className='product-action-button' onClick={ () => removeItem(item.id)} >-</button>
                        <input type="text" value={item.amount} className='input-value'/>
                        <button  className='product-action-button' onClick={ () => addToCart(item)} >+</button>
                       </div>
                       <div>
                           <p>Total: </p>
                            <p>R${(item.amount * item.price).toFixed(2)}</p> 
                       </div>
                       <div>
                           <button className='product-action-button' onClick={ () => removeById(item.id)} >X</button>
                        </div>
                    </div>
                    </div>
                  </div>
              )
            })}
            </div>
             <div id="total-output">
                <p>Produtos:  R${getTotalAmount()}</p>
                <p>Frete:  R${getTotalProducts() * 10}</p>
                <p>Total + Frete:  R${(Number(getTotalAmount()) + (getTotalProducts() * 10)).toFixed(2)}</p>
                <Link to="/payment" ><button className="finalize-button">Finalizar Compra</button></Link>
             </div>
            </>
          }
        </div>
        </>
    )
}