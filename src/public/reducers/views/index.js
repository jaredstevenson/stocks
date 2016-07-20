import { reducer as portfolio } from './portfolio.js';
import { reducer as menu } from './menu.js';
import { reducer as priceCheck } from './priceCheck.js';
import { reducer as buyQuantity } from './buyField.js';
import { reducer as buyField } from './buyField.js';
import { reducer as sellField } from './sellField.js';

import { combineReducers } from 'redux';


export const reducer = combineReducers({
  portfolio: portfolio,
  menu: menu,
  priceCheck: priceCheck,
  buyField: buyField,
  sellField: sellField,
  buyQuantity: buyQuantity
})

function identity(s){
  return s;
}
