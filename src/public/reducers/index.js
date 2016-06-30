import { combineReducers } from 'redux';
import { reducer as views } from './views/index.js';
import { reducer as marketPrices } from './marketPrices.js';

function holdings(state = []) {
  return state;
}



function user(state = null) {
  return state;
}

function transactions(state = []) {
  return state;
}

export const reducer = combineReducers({
  holdings: holdings,
  marketPrices: marketPrices,
  user: user,
  views: views,
  transactions: transactions
})
