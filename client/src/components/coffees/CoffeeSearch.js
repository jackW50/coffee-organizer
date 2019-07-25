import React, { useState } from 'react';

const CoffeeSearch = props => {

  const [ name, setName ] = useState('')

  function handleChange(e) {
    setName(e.target.value);

  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = name
    props.searchCoffees(query);

  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <input className="form-submit-button" type="submit" value="search coffee" />
      </form>
    </div>
  )
}

export default (CoffeeSearch);
