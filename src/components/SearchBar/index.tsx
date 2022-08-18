import React, { useState } from 'react';
import { JSONProduct } from '../../types/interfaces';
import { SearchService } from '../../services/SearchService';

import './styles.css';

interface Props{
    data: JSONProduct[];
    updateFilter: (value: JSONProduct[]) => void;
}

const SearchBar: React.FC<Props> = ({ data, updateFilter }) => {
    const [search,setSearch] = useState('');
    const searchService = new SearchService();

    return (
    <>
        <div className='search-container'>
            <input 
               type="text"
               onChange={(e) => setSearch(e.target.value) }
               value={search}
            />
            <button onClick={() => searchService.searchByName(data,search)  }>Procurar</button>
        </div>
        <div className='order-container'>
            <div className="sub-order-container">
                <label>Ordenar Por:</label>
                <p><a href="" onClick={(e) => { e.preventDefault(); const result = searchService.filterByPrice(data); updateFilter(result) } }>Preço</a></p>
                <p><a href="" onClick={(e) => { e.preventDefault(); const result = searchService.filterByScore(data); updateFilter(result) } }>Popularidade</a></p>
                <p><a href="" onClick={(e) => { e.preventDefault(); const result = searchService.filterByName(data);  updateFilter(result) } }>Alfabetica</a></p>
            </div>
        </div>
        </>
    )
}

export default SearchBar;