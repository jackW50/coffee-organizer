import React, { useState } from 'react';
import CommentsContainer from '../../containers/CommentsContainer.js';


const Coffee = props => {

  const [fave, setFave] = useState(props.favorite)

  function certified() {
    if (props.rainforestAllianceCertified) {
      return "Rainforest Alliance Certified"
    }
  }

  function favorite() {
    if (!fave) {

      return (
        <button onClick={handleFavoriteClick}>Add to Favorites</button>
      )
    } else {
      return (
        <div>
          <span className="favorite" >**Faved**</span>
          <button onClick={handleFavoriteClick}>Remove From Favorites</button>
        </div>
      )
    }
  }

  function handleFavoriteClick(e) {
    e.preventDefault();
    console.log('handling the favorite button click');
    console.log('update favorite attribute for this coffee. Toggle boolean value for each click.')
    props.updateCoffee({ id: props.id, favorite: fave })

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

export default (Coffee);
