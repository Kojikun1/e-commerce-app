import { homedir } from 'os';
import React , { useEffect, useState }  from 'react';
import './styles.css';
import CardProduct from '../../components/CardProduct';
import jsonData from '../../services/products.json';
import { JSONProduct } from '../../types/interfaces';

export default function Home(){
    const [data,setData] = useState<JSONProduct[]>([]);

    useEffect(() => {
        setData(jsonData);
  },[]);
    return (
        <div className='products-container'>
           {data.map(item => {
             return (
              <CardProduct item={item} />
             )
           })}  
        </div>
    )
}