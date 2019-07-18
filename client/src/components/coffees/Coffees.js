import React from 'react';
import Coffee from './Coffee.js'

const Coffees = props => {
  return (
    props.coffees.map(coffee =>
      <Coffee
        key={coffee.id}
        name={coffee.name}
        rainforestAllianceCertified={coffee.rainforest_alliance_certified}
        favorite={coffee.favorite}
        comments={coffee.comments}
        deleteCoffee={props.deleteCoffee}
        updateCoffee={props.updateCoffee}
      />
    )
  )
}

export default Coffees;
