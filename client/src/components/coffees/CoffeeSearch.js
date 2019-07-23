import React, { useState } from 'react';

const CoffeeSearch = props => {

  const [ name, setName ] = useState('')
  const [ hits, setHits ] = usestate(props.coffees)

  function handleChange(e) {
    setName(e.target.value);

  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = name
    props.searchCoffees(query);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <input type="submit" value="search coffee" />
      </form>
    </div>
  )
}

export default (CoffeeSearch);
