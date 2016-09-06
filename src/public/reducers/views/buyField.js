import { buyShares } from '../../lib/model.js';

export function buyQuantity (quant){
  return {
    type: "BUY_QUANTITY",
    payload: {
      numberShares: quant
    }
  }
}


///

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

const initialState =  {
    numberShares: 0
}

export function reducer (state = initialState, action){
  switch(action.type) {
    case "BUY_QUANTITY":
      return Object.assign({}, state, {
        numberShares: action.payload.numberShares
      })
      break;
    case "PURCHASE":
      return Object.assign({}, action.payload.wholeState, {
        state:  buyShares(action.payload.wholeState)
      })
      break;
    default:
      return state;
  }
}
