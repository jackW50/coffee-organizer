export function addComment(comment, coffeeId) {
  console.log('send api req to create a comment.');
  return (dispatch) => {
    return fetch(`/koffees/${coffeeId}/comments`, {
      method: 'POST',
      body: comment,
    })
  }
}

export function deleteComment() {
  console.log('send api req to destroy comment.');
}
