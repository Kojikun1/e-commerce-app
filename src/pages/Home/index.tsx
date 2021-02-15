import React , { useEffect, useState }  from 'react';
import './styles.css';
import CardProduct from '../../components/CardProduct';
import jsonData from '../../services/products.json';
import { JSONProduct } from '../../types/interfaces';
import SearchBar from '../../components/SearchBar';

export default function Home(){
    const [data,setData] = useState<JSONProduct[]>([]);

    function filterByName(){
        const result = data.sort((a,b) => {
             if(a.name.toLowerCase() > b.name.toLowerCase()){
               return 1;
             }else if (a.name.toLowerCase() < b.name.toLowerCase()){
               return -1;
             }else {
               return 0;
             }
        });
        //console.log(result);
        setData(prev => {
          return [...result];
        });
    }
    function filterByPrice(){
      const result = data.sort((a,b) => {
          return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
      });
      //console.log(result);
      setData(prev => {
        return [...result];
      });
  }
  function filterByScore(){
    const result = data.sort((a,b) => {
        return a.score < b.score ? 1 : a.score > b.score ? -1 : 0;
    });
    console.log(result);
    setData(prev => {
      return [...result];
    });
}

function searchByName(e: string){
    const result = data.filter(item => item.name.toLowerCase().includes(e.toLowerCase()));
    console.log(result);
    setData(result);
}

    useEffect(() => {
        setData(jsonData);
  },[]);
    return (
      <>
        <SearchBar 
               filterByName={filterByName}
               filterByPrice={filterByPrice}  
               filterByScore={filterByScore}
               searchByName={searchByName}
        />
        <div className='products-container'>
           {data.map(item => {
             return (
              <CardProduct key={item.id} item={item} />
             )
           })}  
        </div>
    </>
    )
}