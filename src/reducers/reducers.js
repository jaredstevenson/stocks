

/// work on reducer and actions


const initialState = {
  holdings: [],
  marketPrices: [],
  user: null,
  views: null,
  transactions: []
}

export function reducer(state = initialState, action){
  switch(action.type) {
    case "DISPLAY-BUY":
    case "":
    default:
    return state;
  }
}
