import {updateStockPrice} from '../reducers/marketPrices.js';
import axios from 'axios';
import {setUser} from '../reducers/setUser.js';




export function getStockPrice(symbol, dispatch){
  return axios.get('http://localhost:3002/stock/' + symbol).then(function(response) {
    const stock = response.data;

    dispatch(updateStockPrice(symbol, stock.price));

  })
  .catch(function(err){
    console.log("getStockPrice error", err);
  })


}

export function updateAllPrices(holdings, dispatch){
  for (var i = 0 ; i < holdings.length; i++ ) {
    getStockPrice(holdings[i].symbol, dispatch);
  }
}

export function createUser(username, name, dispatch){
  return axios.post('http://localhost:3002/users', {
      name: name,
      username: username,
      cash: 1000000,
      holdings: [],
      transactions: []

  })
  .then(function(response){
    getUser(username, dispatch);
  })
}

export function getUser(username, dispatch){
  return axios.get('http://localhost:3002/users/' + username)
    .then(function(response){
      updateAllPrices(response.data.holdings, dispatch)
      dispatch(setUser(response.data))
    })
    .catch(function(err){
      console.log("getUser error", err);
    })
}


//action to update the user on the database
export function updateUser(username, user){
  return axios.put('http://localhost:3002/users/' + username, user)
    // .then(function(respose){
    //   console.log("update user", response.data);
    //
    // })
}
