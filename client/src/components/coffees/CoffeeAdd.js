import React, { useState } from 'react';

const CoffeeAdd = props => {

  const [ name, setName ] = useState('')
  const [ RainforestAllianceCertified, setRainforestAllianceCertified ] = useState(false)
  const [ roasts, setRoasts ] = useState([])
  const [ addRoast, setAddRoast ] = useState('')

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleRainforestChange(e) {
    setRainforestAllianceCertified(e.target.checked);
  }

  function handleRoastChange(e) {
    const val = parseInt(e.target.name)
    if (e.target.checked) {
      setRoasts([...roasts, val]);
    } else {
      setRoasts(roasts.filter(roast => roast !== val))
    }
  }

  function handleAddRoastChange(e) {
    setAddRoast(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const coffee = {
      name: name,
      rainforest_alliance_certified: RainforestAllianceCertified,
      roast_ids: roasts,
      roast_attributes: { roast_type: addRoast }
    }

    props.addCoffee(coffee);
  }

  return (
    <div className="container">
      <h3>Add a Coffee</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} placeholder="coffee name"/><br/>
        <input type="checkbox" name="certified" onChange={handleRainforestChange} />Rainforest Alliance Certified <br/>
        <input
          type="checkbox"
          name="1"
          onChange={handleRoastChange}
          value={roasts.light}
        />light
        <input
          type="checkbox"
          name="2"
          onChange={handleRoastChange}
          value={roasts.medium}
        />medium
        <input
          type="checkbox"
          name="3"
          onChange={handleRoastChange}
          value={roasts.medium_dark}
        />medium-dark
        <input
          type="checkbox"
          name="4"
          onClick={handleRoastChange}
          value={roasts.dark}
        />dark <br/>
        <input type="text" value={addRoast} onChange={handleAddRoastChange} placeholder="add roast"/>*optional <br/>
        <input type="submit" value="add coffee" />
      </form>
    </div>
  )
}


export default CoffeeAdd;
