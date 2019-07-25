import React from 'react';
import Comment from './Comment.js';

const Comments = props => {
  return (
    <ul className="comment-list">
      {props.comments.map(comment =>
        <Comment key={comment.id} comment={comment} deleteComment={props.deleteComment} />)
      }
    </ul>
  )
}

export default Comments;
