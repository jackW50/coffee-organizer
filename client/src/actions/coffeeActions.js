export function fetchCoffees() {
  return (dispatch) => {
    return fetch('/koffees')
      .then(response => response.json())
      .then(coffees => dispatch({ type: 'FETCH_COFFEES', payload: coffees }))
  }
}

export function updateCoffee() {
  console.log('this will send and update req to server and update coffee');
  console.log('it will send back the updated coffee that we can change the state with');
}
