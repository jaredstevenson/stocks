
export function setUser (user){
  return {
    type: "SET_USER",
    payload: {
      user: user
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
        user: action.payload.user
      })
    default:
      return state;
  }
}
