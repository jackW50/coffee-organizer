import React from 'react';

const Comment = props => {
  return (
    <div>
      <span>{props.comment.text}</span><button onClick={props.deleteComment(props.comment.id)}>DELETE</button>
    </div>
  )
}

export default Comment;
