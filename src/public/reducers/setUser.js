
export function setUser (user){
  return {
    type: "SET_USER",
    payload: {
      user: user
    }
  }
}

const initialState = null;

export function reducer(state = initialState, action) {
  switch(action.type) {
    case "SET_USER":
    console.log("reducer setUser", action.payload.user);

      const toReturn = Object.assign({}, state, action.payload.user
      )
      console.log("to Return", toReturn);
      return toReturn;
    default:
      return state;
  }
}
