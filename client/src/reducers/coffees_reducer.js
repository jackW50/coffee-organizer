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
      const coffeeId = state.coffees.findIndex(e => e.id === action.payload.id);
      if (action.payload.favorite) {
        return { ...state,
          favorites: [...state.favorites, action.payload],
          coffees: [...state.coffees.slice(0, coffeeId), action.payload, ...state.coffees.slice(coffeeId + 1)]
         }
      } else {
        const faveId = state.favorites.findIndex(e => e.id === action.payload.id);
        return {...state,
          favorites: [...state.favorites.slice(0, faveId), ...state.favorites.slice(faveId + 1)],
          coffees: [...state.coffees.slice(0, coffeeId), action.payload, ...state.coffees.slice(coffeeId + 1)]
        }
      }

    case "DELETE_COFFEE":
      console.log('removing this coffee by its id', action.payload);
      const coffeeIndex = state.coffees.findIndex(e => e.id === action.payload);
      const favoritesIndex = state.favorites.findIndex(e => e.id === action.payload);
      const coffeeArray = [...state.coffees.slice(0, coffeeIndex), ...state.coffees.slice(coffeeIndex + 1)];
      const favoritesArray = () => {
        if (favoritesIndex === -1) {
          return state.favorites
        } else {
          return [...state.favorites.slice(0, favoritesIndex), ...state.favorites.slice(favoritesIndex + 1)]
        }
      }
      return { ...state,
        coffees: coffeeArray,
        favorites: favoritesArray()
      }

    case "ADD_COMMENT":
      return state;

    case "DELETE_COMMENT":
      return state;

    default:
      return state;

  }
}

export default coffeesReducer;

//coffees is an array of Coffee objects.
