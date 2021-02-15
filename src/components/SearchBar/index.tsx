import React from 'react';

import './styles.css';

export default function SearchBar(){
    return (
    <>
        <div className='search-container'>
            <input type="text"/>
            <button>Procurar</button>
        </div>
        <div className='order-container'>
            <div className="sub-order-container">
                <label>Ordenar Por:</label>
                <p><a href="">Preço</a></p>
                <p><a href="">Popularidade</a></p>
                <p><a href="">Alfabetica</a></p>
            </div>
        </div>
        </>
    )
}