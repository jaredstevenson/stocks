
export function showLogin (shouldLoginShow){
  return {
    type: "SHOW_LOGIN",
    payload: {
      show: shouldLoginShow
    }
  }
}

const initialState = {
  show: false
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case "SHOW_LOGIN":
      return Object.assign({}, state, {
        show: action.payload.show
      })
    default:
      return state;
  }
}
