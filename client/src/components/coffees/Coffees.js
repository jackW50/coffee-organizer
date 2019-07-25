import React from 'react';
import Coffee from './Coffee.js'

const Coffees = props => {
  return (
    <div className="coffee-list">
      {props.coffees.map(coffee =>
        <Coffee
          key={coffee.id}
          id={coffee.id}
          name={coffee.name}
          rainforestAllianceCertified={coffee.rainforest_alliance_certified}
          favorite={coffee.favorite}
          comments={coffee.comments}
          deleteCoffee={props.deleteCoffee}
          updateCoffee={props.updateCoffee}
        />
      )}
    </div>
  )
}

export default Coffees;
