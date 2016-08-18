import { combineReducers } from 'redux';
import { reducer as views } from './views/index.js';
import { reducer as marketPrices } from './marketPrices.js';
import { buyShares, sellShares } from '../lib/model.js';
import { reducer as setUser } from './setUser.js';


// function holdings(currentHoldings = []) {
//   return currentHoldings;
// }

export function purchase (numShares, symbol, wholeState){
  return {
    type: "PURCHASE",
    payload: {
      numberShares: numShares,
      symbol: symbol,
      wholeState: wholeState
    }
  }
}

export function sell (wholeState){
  return {
    type: "SELL",
    payload: {
      wholeState: wholeState
    }
  }
}
//
// function transactions(state = []) {
//   return state;
// }

export const oldReducer = combineReducers({
  marketPrices: marketPrices,
  user: setUser,
  views: views,
})

export function reducer(state, action){
  switch(action.type) {
    case"PURCHASE":
      return buyShares(action.payload.wholeState)
      break;
    case "SELL":
      return sellShares(action.payload.wholeState)
      break;
    default:
      return oldReducer(state, action);
  }
}

export function reducerWithLog(state, action){
  const newState = reducer(state, action);
  console.log(action.type, state, newState);
  return newState;
}
