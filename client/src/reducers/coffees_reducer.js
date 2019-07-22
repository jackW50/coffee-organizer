function coffeesReducer (state = {
  coffees: [],
  coffeeSearch: [],
  favorites: []
}, action) {

  const indexGenerator = (id, array) => array.findIndex(e => e.id === id);
  const coffeesIndexFind = (id) => indexGenerator(id, state.coffees);
  const favoritesIndexFind = (id) => indexGenerator(id, state.favorites);
  const coffeeSearchIndexFind = (id) => indexGenerator(id, state.coffeeSearch);
  const arrayGeneratorDelete = (index, array) => {
    if (index === -1) {
      return array
    } else {
      return [...array.slice(0, index), ...array.slice(index + 1)]
    }
  }
  const arrayGeneratorUpdate = (index, array, updatedObject) => {
    if (index === -1) {
      return array
    } else {
      return [...array.slice(0, index), updatedObject, ...array.slice(index + 1)]
    }
  }

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
      let coffeeIndex = coffeesIndexFind(action.payload.id);
      let favoriteIndex = favoritesIndexFind(action.payload.id);
      let coffeeSearchIndex = coffeeSearchIndexFind(action.payload.id)
      if (action.payload.favorite) {
        //debugger
        //const coffeeIndex = coffeesIndexFind(action.payload.id);
        return { ...state,
          favorites: [...state.favorites, action.payload],
          coffees: arrayGeneratorUpdate(coffeeIndex, state.coffees, action.payload),
        //  coffees: [...state.coffees.slice(0, coffeeIndex), action.payload, ...state.coffees.slice(coffeeId + 1)],
          coffeeSearch: arrayGeneratorUpdate(coffeeSearchIndexFind(action.payload.id), state.coffeeSearch, action.payload)
         }
      } else {
        //const faveIndex = favoritesIndexFind(action.payload.id);
        return {...state,
          favorites: [...state.favorites.slice(0, favoriteIndex), ...state.favorites.slice(favoriteIndex + 1)],
          coffees: arrayGeneratorUpdate(coffeeIndex, state.coffees, action.payload),
          //coffees: [...state.coffees.slice(0, coffeeId), action.payload, ...state.coffees.slice(coffeeId + 1)],
          coffeeSearch: arrayGeneratorUpdate(coffeeSearchIndex, state.coffeeSearch, action.payload)
        }
      }

    case "DELETE_COFFEE":
      console.log('removing this coffee by its id', action.payload);
      //debugger
      const coffeeInd = coffeesIndexFind(action.payload);
      const favoriteInd = favoritesIndexFind(action.payload);
      const coffeeSearchInd = coffeeSearchIndexFind(action.payload)
      const coffeeArray = [...state.coffees.slice(0, coffeeInd), ...state.coffees.slice(coffeeInd + 1)];
      // const favoritesArray = () => {
      //   if (favoriteIndex === -1) {
      //     return state.favorites
      //   } else {
      //     return [...state.favorites.slice(0, favoriteIndex), ...state.favorites.slice(favoriteIndex + 1)]
      //   }
      // }
      return { ...state,
        coffees: coffeeArray,
        favorites: arrayGeneratorDelete(favoriteInd, state.favorites),
        coffeeSearch: arrayGeneratorDelete(coffeeSearchInd, state.coffeeSearch)
      }

    case "ADD_COMMENT":
      console.log('adding a comment', action.payload);
      //find coffee
      const coffee = state.coffees.find(e => e.id === action.payload.koffee_id);
      //update object
      const updatedCoffee = Object.assign({}, coffee, {comments: [...coffee.comments, action.payload]})
      //const updateCoffee = {...coffee, comments: [...coffee.comments, { id: action.payload.id, text: action.payload.text }]}
      //findIndex of coffee
      const cofIndex = state.coffees.findIndex(e => e.id === action.payload.koffee_id);
      //update the state to include the updated object
      //debugger

      return {...state,
        coffees: [...state.coffees.slice(0, cofIndex), updatedCoffee, ...state.coffees.slice(cofIndex + 1)],
        favorites: arrayGeneratorUpdate(favoritesIndexFind(action.payload.koffee_id), state.favorites, updatedCoffee),
        coffeeSearch: arrayGeneratorUpdate(coffeeSearchIndexFind(action.payload.koffee_id), state.coffeeSearch, updatedCoffee)
      }

    case "DELETE_COMMENT":
      console.log('sending a delete action to the reducer', action.payload);
      return state;

    default:
      return state;

  }
}

export default coffeesReducer;
