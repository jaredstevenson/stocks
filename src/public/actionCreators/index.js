import {updateStockPrice} from '../reducers/marketPrices.js';
import axios from 'axios';
import {setUser} from '../reducers/setUser.js';




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
      cash: 1000000,
      holdings: [],
      transactions: {}
    }
  })
  .then(function(response){
    console.log("response", response);
  })
}

export function getUser(username, dispatch){
  axios.get('http://localhost:3002/users/' + username)
    .then(function(response){
      console.log("get response from getUser", response.data.user);

      dispatch(setUser(response.data.user))
    })
}
