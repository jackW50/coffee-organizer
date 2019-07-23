import React from 'react';
import Coffee from './Coffee.js'

const Coffees = props => {

  const pageNumbers = [];

  let count = 0;
  const sixes = props.coffees.length / 6
  const totalPages = Math.ceil(sixes);

  while (count < totalPages) {
    count++;
    pageNumbers.push(count)
  }

  function pageDisplay(number) {
    const newNumber = number * 6;
     return props.coffees.slice((newNumber - 6), (newNumber));
  }

  return (
    pageDisplay(1).map(coffee =>
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
    )

  )
}

export default Coffees;
