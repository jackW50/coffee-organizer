function coffeesReducer (state = {
  coffees: [],
  coffeeSearch: []
}, action) {

  switch (action.type) {

    case "FETCH_COFFEES":
      return state

    case "SEARCH_COFFEES":
      return state

    case "SEE_FAVORITES":
      return state

    default:
      return state;

  }
}

export default coffeesReducer;

//coffees is an array of Coffee objects.
