import React, { useState } from 'react';
import Coffee from './Coffee.js';
import uuid from 'uuid';

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
        <section className="pagination" >
          <span onClick={() => setCurrentPage(1)}>&laquo;</span>
          {pageNumbers.map(
            e => (<span key={uuid.v4()} className={e === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(e)}>{e}</span>)
          )}
          <span onClick={() => setCurrentPage(pageNumbers[pageNumbers.length - 1])}>&raquo;</span>
        </section>
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
