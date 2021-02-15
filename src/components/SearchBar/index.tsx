import React, { useState } from 'react';

import './styles.css';

interface Props{
    filterByName(): void;
    filterByPrice(): void;
    filterByScore(): void;
    searchByName(e: string): void;
}

const SearchBar: React.FC<Props> = ({ filterByName, filterByPrice, filterByScore, searchByName }) => {
    const [search,setSearch] = useState('');

    return (
    <>
        <div className='search-container'>
            <input 
               type="text"
               onChange={(e) => setSearch(e.target.value) }
               value={search}
            />
            <button onClick={() => searchByName(search)  }>Procurar</button>
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