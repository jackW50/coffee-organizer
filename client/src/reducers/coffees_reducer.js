function coffeesReducer (state = {
  coffees: [],
  coffeeSearch: [],
  favorites: []
}, action) {

  switch (action.type) {

    case "FETCH_COFFEES":
      console.log('fetched coffees', action)
      return {...state, coffees: action.payload}

    case "SEARCH_COFFEES":
      console.log('showing the matches of the coffee search', action)
      return { ...state, coffeeSearch: action.payload }

    case "SEE_FAVORITES":
      console.log('showing the favorite coffees', action)
      return { ...state, favorites: action.payload }

    case "ADD_COFFEE":
      console.log('adding a coffee', action.payload)
      return {...state, coffees: [...state.coffees, action.payload]}

    case "UPDATE_COFFEE":
      console.log('updating the coffee', action.payload)
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
