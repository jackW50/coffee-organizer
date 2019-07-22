import React from 'react';

const Comment = props => {

  function handleDelete(e) {
    const id = props.comment.id;
    const coffeeId = props.comment.koffee_id
    props.deleteComment(id, coffeeId);
  }

  return (
    <div>
      <span>{props.comment.text}</span><button onClick={handleDelete}>DELETE</button>
    </div>
  )
}

export default Comment;
