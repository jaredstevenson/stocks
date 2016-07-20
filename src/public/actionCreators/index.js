import {updateStockPrice} from '../reducers/marketPrices.js';
import axios from 'axios';




export function getStockPrice(symbol, dispatch){
  axios.get('http://localhost:3002/stock/' + symbol).then(function(response) {
    var stock = response.data;

    dispatch(updateStockPrice(symbol, stock.price))

  })

}

export function createUser(username, name){
  axios.post('http://localhost:3002/users', {
    user: {
      name: name,
      username: username,
      cash: 1000000
    },
    holdings: [],
    transactions: {}

  })
}
