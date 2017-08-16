let defaultState = {
  hits: [
    {
      "name": "Edward Cullen",
      "location": "Tree House",
      "price": 60,
      "wanted": false
    }
  ]
}

let mainReducer = (state = defaultState, action) => {
  if(action.type === "SET_DATA") {
    return {
      ...state,
      hits: action.data
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
