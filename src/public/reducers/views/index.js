import { reducer as portfolio } from './portfolio.js';
import { reducer as menu } from './menu.js';
import { reducer as priceCheck } from './priceCheck.js';
import { combineReducers } from 'redux';


export const reducer = combineReducers({
  portfolio: portfolio,
  menu: menu,
  priceCheck: priceCheck,
  buyField: buyField,
  sellField: sellField
})

function identity(s){
  return s;
}



function buyField(state, action){
  if (!state){
    return {
      numberShares: 0
    }
  }
  return state;
}

function sellField(state, action){
  if (!state){
    return {
      numberShares: 0
    }
  }
  return state;
}
