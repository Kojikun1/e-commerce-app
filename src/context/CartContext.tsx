import React, { useState, useContext, createContext, useEffect, Children } from 'react';
import { Product } from '../types/interfaces';
interface CartProducts{
    addToCart(data: Product): void;
    removeItem(id: number): void;
    removeById(id: number): void;
    getTotalProducts(): number;
    getTotalAmount(): string;
}

const CartContext = createContext<CartProducts>({} as CartProducts);

const CartProvider: React.FC = ({ children }) => {
    const [cartData,setCartData] = useState<Product[]>([]);

    function addToCart(data: Product){
          
        console.log('is running');
        let productExist = false;
          if(cartData.length !== 0){
              const newdata = cartData.map(item => {
                  if(item.id === data.id){
                      productExist = true;
                      item.amount++;
                       return item;
                  }
                  return item;
              });
              productExist ? setCartData(newdata) : setCartData([...newdata,data]);
          }else{
            setCartData([data]);
          };
  };
  function removeItem(id: number){
           const newArrayData = cartData.reduce( (amt: Product[] ,item) => {
               if(item.id === id){
                   item.amount--;
                   return item.amount <= 0 ? amt : [...amt,item];
               }else {
                    return [...amt,item];
               }
           },[]);
           setCartData(newArrayData);
  }

  function getTotalAmount(){
        const result = cartData.reduce((amt,item) => {
           return amt + (item.amount * item.price);
        },0)
        return result.toFixed(2);
  }
  function getTotalProducts(){
        const result = cartData.reduce((amt,item) => {
              return amt + item.amount;
        },0)
        return result;
  }
  function removeById(id: number){
      const result = cartData.filter(item => {
          return item.id !== id;
      });
      setCartData(result);
  }

        return (
            <CartContext.Provider value={{addToCart, removeItem, removeById, getTotalAmount, getTotalProducts}} >
                {children}
            </CartContext.Provider>
        )
}

export default CartProvider;


export function useCart(){
    return useContext(CartContext);
}

