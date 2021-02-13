import React from 'react';
import { Product } from '../../types/interfaces';
import './styles.css';

interface Props {
    item: Product;
}

const CardProduct: React.FC<Props>  = ({ item }) => {
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