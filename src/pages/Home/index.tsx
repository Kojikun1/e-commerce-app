import { useEffect, useState }  from 'react';
import './styles.css';
import AlertBox from '../../components/AlertBox';
import CardProduct from '../../components/CardProduct';
import jsonData from '../../services/products.json';
import { JSONProduct } from '../../types/interfaces';
import SearchBar from '../../components/SearchBar';


export default function Home(){
    const [data,setData] = useState<JSONProduct[]>([]);
    const [modalVisible,setModalVisible] = useState(false);

function handleModal(){
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    },1000);
}

    useEffect(() => {
        setData(jsonData);
  },[]);
    return (
      <>
        <SearchBar 
              data={data}
              updateFilter={(result: JSONProduct[]) => setData(prev => {
                return [...result];
              })}
        />
        <div className='products-container'>
        <AlertBox name="Produto" visible={modalVisible} />
           {data.map(item => {
             return (
              <CardProduct key={item.id} item={item} onClick={handleModal} />
             )
           })}  
        </div>
    </>
    )
}