import React from 'react';
import { Link } from "react-router-dom";

import './styles.css';
import cartIcon from '../../assets/cart-icon.svg';

import { useCart } from '../../context/CartContext';

export default function Header() {
  const { getTotalProducts } = useCart();
    return (
        <header>
           
            <ul className="header-ul">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/checkout">
                  <img src={cartIcon} alt="cart-icon" id="icon-cart" />
              </Link>
              <span id="total-items">{getTotalProducts()}</span>
            </li>
          </ul>
        </header>
    )
}