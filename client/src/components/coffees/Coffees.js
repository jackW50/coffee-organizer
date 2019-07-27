import React, { useState } from 'react';
import Coffee from './Coffee.js';
import Pagination from '../ui/Pagination.js';

const Coffees = props => {
  const [ currentPage, setCurrentPage ] = useState(1);

  const pageNumbers = [];

  let count = 0;

  const threes = props.coffees.length / 3
  const totalPages = Math.ceil(threes);

  while (count < totalPages) {
    count++;
    pageNumbers.push(count);
  }

  function pageDisplay(number) {
    const newNumber = number * 3;
    return props.coffees.slice((newNumber - 3), newNumber);
  }

  function sectionDisplay() {
    if (pageNumbers.length > 0) {
      return (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumbers={pageNumbers} />
      )
    }
  }

  return (
    <div className="coffee-list">
      {pageDisplay(currentPage).map(coffee =>
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
      {sectionDisplay()}
    </div>
  )
}

export default Coffees;
