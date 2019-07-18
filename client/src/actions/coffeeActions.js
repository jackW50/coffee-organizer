export function fetchCoffees() {
  return (dispatch) => {
    return fetch('/koffees')
      .then(response => response.json())
      .then(coffees => dispatch({ type: 'FETCH_COFFEES', payload: coffees }))
  }
}

export function seeFavorites() {
  console.log('send api get request for only favorited coffees, and update state with response.')
}

export function searchCoffees() {
  console.log('send api get req for coffees that include the query sent, and update state with the response.')
}

export function addCoffee() {
  console.log('send create req to api and add newly created coffee to state.')
}

export function updateCoffee() {
  console.log('this will send and update req to server and update coffee');
  console.log('it will send back the updated coffee that we can change the state with');
}

export function deleteCoffee() {
  console.log('send delete req to api, and remove this coffee from state.')
}
