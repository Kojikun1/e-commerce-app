import React from 'react';
import { Link } from "react-router-dom";

import './styles.css';
import cartIcon from '../../assets/cart-icon.svg';
import arrow from '../../assets/arrow-down-icon.svg';

export default function Header() {
    return (
        <header>
            <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/checkout">Cart</Link>
            </li>
          </ul>
        </header>
    )
}