import React, { useState } from 'react';
import CommentsContainer from '../../containers/CommentsContainer.js'


const Coffee = props => {

  function certified() {
    if (props.rainforestAllianceCertified) {
      return "Rainforest Alliance Certified"
    }
  }

  function favorite() {
    if (!props.favorite) {
      return (
        <button onClick={handleFavoriteAdd}>Add to Favorites</button>
      )
    } else {
      return (
        <div>
          <span className="favorite" >**Faved**</span>
          <button onClick={handleRemoveFavorite}>Remove From Favorites</button>
        </div>
      )
    }
  }


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
