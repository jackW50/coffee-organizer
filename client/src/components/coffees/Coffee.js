import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer.js';


const Coffee = props => {



  function certified() {
    if (props.rainforestAllianceCertified) {
      return "Rainforest Alliance Certified"
    }
  }

  function favorite() {
    if (!props.favorite) {

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
    props.updateCoffee({ id: props.id, favorite: !props.favorite })

  }

  return (
    <div className="coffee" >
      <h3>{props.name}</h3>
      {favorite()}
      <p className="certification">{certified()}</p>

      <CommentsContainer comments={props.comments} coffeeId={props.id} />
      <button onClick={() => props.deleteCoffee(props.id)}>DELETE COFFEE</button>

      <div>

      </div>
    </div>
  )
}

export default (Coffee);
