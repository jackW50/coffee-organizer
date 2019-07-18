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
    setRainforestAllianceCertified(!e.target.value);
  }

  function handleRoastChange(e) {
    setRoasts(...roasts, e.target.value);
  }

  function handleAddRoastChange(e) {
    setAddRoast(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const coffee = {
      name: name,
      rainforest_alliance_certified: RainforestAllianceCertified,
      roasts: roasts,
      addRoast: { roast_type: addRoast }
    }
    //props.removeCoffeeForm()
    //or send back to home route.
    props.addCoffee(coffee);
  }

  return (
    <div>
      <h3>Add a Coffee</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} placeholder="coffee name"/><br/>
        <input type="radio" name="certified" onClick={handleRainforestChange} />Rainforest Alliance Certified <br/>
        <input
          type="checkbox"
          name="light"
          onClick={handleRoastChange}
          value='1'
        />light
        <input
          type="checkbox"
          name="medium"
          onClick={handleRoastChange}
          value='2'
        />medium
        <input
          type="checkbox"
          name="medium-dark"
          onClick={handleRoastChange}
          value='3'
        />medium-dark
        <input
          type="checkbox"
          name="dark"
          onClick={handleRoastChange}
          value='4'
        />dark <br/>
        <input type="text" value={addRoast} onChange={handleAddRoastChange} placeholder="add roast"/>*optional <br/>
        <input type="submit" value="add coffee" />
      </form>
    </div>
  )
}


export default CoffeeAdd;
