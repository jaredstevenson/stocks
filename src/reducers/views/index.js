import { reducer as portfolio } from './portfolio.js';
import { reducer as menu } from './menu.js';
import { combineReducers } from 'redux';


export const reducer = combineReducers({
  portfolio: portfolio,
  menu: menu
})
