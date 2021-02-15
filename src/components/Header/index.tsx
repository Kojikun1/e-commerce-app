import React from 'react';
import { Link } from "react-router-dom";

import './styles.css';

export default function Header() {
    return (
        <header>
            <ul className="header-ul">
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