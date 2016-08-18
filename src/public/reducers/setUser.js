
export function setUser (user, holdings, transactions){
  return {
    type: "SET_USER",
    payload: {
      user: user,
      holdings: holdings,
      transactions: transactions
    }
  }
}

const initialState = {
  user: null
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case "SET_USER":
      return Object.assign({}, state, {
        user: action.payload.user,
        holdings: action.payload.holdings,
        transactions: action.payload.transactions
      })
    default:
      return state;
  }
}
