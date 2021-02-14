import React from 'react';
import { JSONProduct } from '../../types/interfaces';
import './styles.css';

import { useCart } from '../../context/CartContext';

interface Props {
    item: JSONProduct;
}


const CardProduct: React.FC<Props>  = ({ item }) => {
  const {  } = useCart();
      return (
        <div className="product-card">
        <img src={`${process.env.PUBLIC_URL}/assets/${item.image}`}  />
          <p>Title: {item.name}</p>
          <p>Price ${item.price}</p>
          <p>Score {item.score}</p>
        </div>
      )
}

export default CardProduct;