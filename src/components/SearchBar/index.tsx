import React from 'react';

import './styles.css';

interface Props{
    filterByName(): void;
    filterByPrice(): void;
    filterByScore(): void;
}

const SearchBar: React.FC<Props> = ({ filterByName, filterByPrice, filterByScore }) => {
    return (
    <>
        <div className='search-container'>
            <input type="text"/>
            <button>Procurar</button>
        </div>
        <div className='order-container'>
            <div className="sub-order-container">
                <label>Ordenar Por:</label>
                <p><a href="" onClick={(e) => { e.preventDefault(); filterByPrice(); } }>Preço</a></p>
                <p><a href="" onClick={(e) => { e.preventDefault(); filterByScore(); } }>Popularidade</a></p>
                <p><a href="" onClick={(e) => { e.preventDefault(); filterByName(); } }>Alfabetica</a></p>
            </div>
        </div>
        </>
    )
}

export default SearchBar;