import React, { useState } from 'react';

const CoffeeSearch = props => {

  const [ query, setQuery ] = useState('');
  const [ hits, setHits ] = useState([]);

  function handleChange(e) {
    setQuery(e.target.value);
    setHits(props.coffees.filter(e => e.name.toLowerCase().includes(query) ))

  }

  function handleClick(e) {
    props.searchCoffees(query);
  }


  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
      />
      <button type="button" onCLick={handleClick}>
      Search
      </button>

    </div>
  )
}

export default (CoffeeSearch);
