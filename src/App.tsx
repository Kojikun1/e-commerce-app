import React, { useEffect, useState } from 'react';
import './App.css';

import jsonData from './services/products.json';
import { Product } from './types/interfaces';
import CardProduct from './components/CardProduct';

function App() {
  const [data,setData] = useState<Product[]>([]);
  useEffect(() => {
        setData(jsonData);
  },[])
  return (
    <div className="App">
        <div className='products-container'>
           {data.map(item => {
             return (
              <CardProduct item={item} />
             )
           })}  
        </div>
    </div>
  );
}

export default App;
