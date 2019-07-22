export function addComment(comment, coffeeId) {
  console.log('send api req to create a comment.');
  return (dispatch) => {
    return fetch(`/koffees/${coffeeId}/comments`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: comment })
    })
    .then(response => response.json())
    .then(comment => dispatch({ type: "ADD_COMMENT", payload: comment }))
  }
}

export function deleteComment() {
  console.log('send api req to destroy comment.');
}
