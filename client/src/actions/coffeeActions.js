export function fetchCoffees() {
  return (dispatch) => {
    return fetch('/koffees')
      .then(response => response.json())
      .then(coffees => dispatch({ type: 'FETCH_COFFEES', payload: coffees }))
  }
}

export function seeFavorites() {
  console.log('send api get request for only favorited coffees, and update state with response.')
  const url = '/koffees/?favorites=true'
  return (dispatch) => {
    return fetch(url)
      .then(response => response.json())
      .then(coffees => dispatch({ type: "SEE_FAVORITES", payload: coffees }))
  }
}

export function searchCoffees(query) {
  console.log('send api get req for coffees that include the query sent, and update state with the response.')
  const url = '/koffees/?search=' + query

  return (dispatch) => {
    return fetch(url)
      .then(response => response.json())
      .then(coffees => dispatch({ type: "SEARCH_COFFEES", payload: coffees }))
  }
}

export function addCoffee(coffee) {
  console.log('send create req to api and add newly created coffee to state.')
  //debugger
  return (dispatch) => {
    return fetch('/koffees', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ koffee: coffee })
    })
    .then(response => response.json())
    .then(coffee => dispatch({ type: "ADD_COFFEE", payload: coffee }))
  }
}

export function updateCoffee(attributes) {
  console.log('this will send and update req to server and update coffee');
  console.log('it will send back the updated coffee that we can change the state with');
  return (dispatch) => {
    return fetch('/koffees/' + attributes.id, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ koffee: { favorite: attributes.favorite }})
    })
      .then(response => response.json())
      .then(coffee => dispatch({ type: "UPDATE_COFFEE", payload: coffee }))
  }

}

export function deleteCoffee(id) {
  console.log('send delete req to api, and remove this coffee from state.')
  return (dispatch) => {
    return fetch('/koffees/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => dispatch({ type: 'DELETE_COFFEE', payload: id }))
  }
}
