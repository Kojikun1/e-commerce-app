import React from 'react';

import { useCart } from '../../context/CartContext';

import './styles.css';

export default function Checkout(){
    const { getTotalAmount, getTotalProducts} = useCart();
    return (
        <>
        <h2>Pagina de Pagamento</h2>
        <div className="checkout-container">
        <div id="total-output">
                <p>Produtos:  R${getTotalAmount()}</p>
                <p>Frete:  R${getTotalProducts() * 10}</p>
                <p>Total + Frete:  R${(Number(getTotalAmount()) + (getTotalProducts() * 10)).toFixed(2)}</p>
             </div>
        </div>
        </>
    )
}