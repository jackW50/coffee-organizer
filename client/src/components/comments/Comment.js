import React from 'react';

const Comment = props => {

  function handleDelete(e) {
    const id = props.comment.id;
    const coffeeId = props.comment.koffee_id
    props.deleteComment(id, coffeeId);
  }

  return (
    <li className="comment">
      <span>{props.comment.text}  </span><button onClick={handleDelete}>X</button>
    </li>
  )
}

export default Comment;
