import React, { useState } from 'react';
import Coffee from './Coffee.js';
import uuid from 'uuid';

const Coffees = props => {
  const [ currentPage, setCurrentPage ] = useState(1);

  const pageNumbers = [];

  let count = 0;

  const sixes = props.coffees.length / 6
  const totalPages = Math.ceil(sixes);

  while (count < TotalPages) {
    count++;
    pageNumbers.push(count);
  }

  function pageDisplay(number) {
    const newNumber = number * 6;
    return props.coffees.slice((newNumber - 6), newNumber);
  }

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
