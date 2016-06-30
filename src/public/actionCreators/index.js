import {updateStockPrice} from '../reducers/marketPrices.js';
import axios from 'axios';




export function getStockPrice(symbol, dispatch){
  axios.get('http://localhost:3002/stock/' + symbol).then(function(response) {
    var stock = response.data;
    console.log("response", response);
    console.log("stock", stock.price);
    dispatch(updateStockPrice(symbol, stock.price))

  })

}
