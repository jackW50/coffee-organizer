function coffeesReducer (state = {
  coffees: [],
  coffeeSearch: []
}, action) {

  switch (action.type) {

    case "FETCH_COFFEES":
      console.log('fetched coffees', action)
      return {...state, coffees: action.payload}

    case "SEARCH_COFFEES":
      return state

    case "SEE_FAVORITES":
      return state

    case "UPDATE_COFFEE":
      return state;

    case "DELETE_COMMENT":
      return state;

    case "ADD_COMMENT":
    return state;

    default:
      return state;

  }
}

export default coffeesReducer;

//coffees is an array of Coffee objects.
