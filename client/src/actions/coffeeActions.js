export function fetchCoffees() {
  return (dispatch) => {
    return fetch('/koffees')
      .then(response => response.json())
      .then(coffees => dispatch({ type: 'FETCH_COFFEES', payload: coffees }))
  }
}
