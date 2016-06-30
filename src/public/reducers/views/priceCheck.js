
export function priceCheck (symbol){
  return {
    type: "PRICE_CHECK",
    payload: {
      symbol: symbol
    }
  }
}

const initialState =  {
    symbol: "",
    price: 0
}

export function reducer (state = initialState, action){
  switch(action.type) {
    case "PRICE_CHECK":
      return Object.assign({}, state, {
        symbol: action.payload.symbol
      })
    default:
      return state;
  }
}
