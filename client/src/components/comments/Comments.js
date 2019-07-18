import React from 'react';
import Comment from './Comment.js';

const Comments = props => {
  return (
    props.comments.map(comment => <Comment key={comment.id} comment={comment} delete={props.delete} />)
  )
}

export default Comments;
