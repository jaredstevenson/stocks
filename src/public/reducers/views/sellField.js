

export function sellField (quant){
  return {
    type: "SELL_QUANTITY",
    payload: {
      numberShares: quant
    }
  }
}

const initialState =  {
    numberShares: 0
}

export function reducer (state = initialState, action){
  switch(action.type) {
    case "SELL_QUANTITY":
      return Object.assign({}, state, {
        numberShares: action.payload.numberShares
      })
      break;

    default:
      return state;
  }
}
