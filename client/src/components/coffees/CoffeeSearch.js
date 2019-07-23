import React, { useState } from 'react';

const CoffeeSearch = props => {

  const [ query, setQuery ] = useState('');
  const [ hits, setHits ] = useState([]);

  function handleChange(e) {
    setQuery(e.target.value);
    setHits(props.coffees.filter(e => e.name.toLowerCase().includes(query) ))

  }

  function handleClick(e) {
    e.preventDefault();
  }


  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick}>
      Search
      </button>
      <ul>
        {hits.map(coffee => (
          <li key={coffee.id}>
            <header>{coffee.name}</header>

          </li>
        ))}
      </ul>

    </div>
  )
}

export default (CoffeeSearch);
