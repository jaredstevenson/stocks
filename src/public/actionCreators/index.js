import {updateStockPrice} from '../reducers/marketPrices.js';
import axios from 'axios';
import {setUser} from '../reducers/setUser.js';




export function getStockPrice(symbol, dispatch){
  return axios.get('http://localhost:3002/stock/' + symbol).then(function(response) {
    const stock = response.data;

    dispatch(updateStockPrice(symbol, stock.price.toFixed(2)));

  })
  .catch(function(err){
    console.log("getStockPrice error", err);
  })


}

export function updateAllPrices(holdings, dispatch){
  console.log("updateAllPrices", holdings);
  for (var i = 0 ; i < holdings.length; i++ ) {
    console.log("inside for loop", holdings[i].symbol);
    getStockPrice(holdings[i].symbol, dispatch);
  }
}

export function createUser(username, name){
  return axios.post('http://localhost:3002/users', {
      name: name,
      username: username,
      cash: 1000000,
      holdings: [],
      transactions: []

  })
  .then(function(response){
    console.log("response", response);
  })
}

export function getUser(username, dispatch){
  return axios.get('http://localhost:3002/users/' + username)
    .then(function(response){
      console.log("get response from getUser", response.data);
      updateAllPrices(response.data.holdings, dispatch)
      dispatch(setUser(response.data))
    })
    .catch(function(err){
      console.log("getUser error", err);
    })
}


//action to update the user on the database
export function updateUser(username, user){
  console.log("updateUser called", username, user);
  return axios.put('http://localhost:3002/users/' + username, user)
    // .then(function(respose){
    //   console.log("update user", response.data);
    //
    // })
}
