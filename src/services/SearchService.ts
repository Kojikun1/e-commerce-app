import { JSONProduct } from '../types/interfaces';

export class SearchService {
    filterByName(data: JSONProduct[]){
        const result = data.sort((a,b) => {
             if(a.name.toLowerCase() > b.name.toLowerCase()){
               return 1;
             }else if (a.name.toLowerCase() < b.name.toLowerCase()){
               return -1;
             }else {
               return 0;
             }
        });
        return result;
    }
    filterByPrice(data: JSONProduct[]){
      const result = data.sort((a,b) => {
          return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
      });
      return result;
  }
  filterByScore(data: JSONProduct[]){
    const result = data.sort((a,b) => {
        return a.score < b.score ? 1 : a.score > b.score ? -1 : 0;
    });
    return result;
   }
searchByName(data: JSONProduct[],e: string){
    const result = data.filter(item => item.name.toLowerCase().includes(e.toLowerCase()));
    return result;
   }
}