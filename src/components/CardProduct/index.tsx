import React from 'react';
import { JSONProduct } from '../../types/interfaces';
import './styles.css';

import { useCart } from '../../context/CartContext';
import CartIcon from '../../assets/cart-icon.svg';

interface Props {
    item: JSONProduct;
    onClick(): void;
}


const CardProduct: React.FC<Props>  = ({ item, onClick }) => {
  const { addToCart, getTotalAmount } = useCart();
  console.log(getTotalAmount());
      return (
        <div className="product-card">
        <img src={`${process.env.PUBLIC_URL}/assets/${item.image}`}  />
        <p>Title: {item.name}</p>
        <p>Price ${item.price}</p>
        <img 
           src={CartIcon} 
            alt="cart-icon" 
            id="cart-icon" 
            onClick={(e) => {
                onClick();
               addToCart({...item,amount: 1})
            } }/>
        </div>
      )
}

export default CardProduct;