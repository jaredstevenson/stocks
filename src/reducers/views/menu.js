
export function menuDisplay (displayItem){
  return {
    type: "MENU_DISPLAY_ITEM",
    payload: {
      displayItem: displayItem
    }
  }
}

const initialState = {
  openDropDown: null
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case "MENU_DISPLAY_ITEM":
      return Object.assign({}, state, {
        openDropDown: action.payload.displayItem
      })
    default:
      return state;
  }
}
