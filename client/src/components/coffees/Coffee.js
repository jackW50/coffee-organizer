import React, { useState } from 'react';
import CommentsContainer from '../../containers/CommentsContainer.js'


const Coffee = props => {

  return (
    <div>
      <h5>{props.name}</h5>
      {favorite()}
      <p>{certified()}</p>

      <CommentsContainer comments={props.comments} />
      <button onClick={() => props.deleteCoffee(props.id)}>DELETE</button>

      <div>

      </div>
    </div>
  )
}

export default Coffee;
