import React, { useState } from 'react';

const CoffeeAdd = props => {

  const [ name, setName ] = useState('')
  const [ RainforestAllianceCertified, setRainforestAllianceCertified ] = useState(false)
  const [ roasts, setRoasts ] = useState({ light: false, medium: false, medium_dark: false, dark: false })
  const [ addRoast, setAddRoast ] = useState('')

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleRainforestChange(e) {
    setRainforestAllianceCertified(e.target.checked);
  }

  function handleRoastChange(e) {
    const val = e.target.checked;
    const name = e.target.name;
    let updatedRoasts = Object.assign({}, roasts, {[name]: val})
    setRoasts(updatedRoasts);
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
        <input type="checkbox" name="certified" onChange={handleRainforestChange} />Rainforest Alliance Certified <br/>
        <input
          type="checkbox"
          name="light"
          onChange={handleRoastChange}
          value={roasts.light}
        />light
        <input
          type="checkbox"
          name="medium"
          onChange={handleRoastChange}
          value={roasts.medium}
        />medium
        <input
          type="checkbox"
          name="medium-dark"
          onChange={handleRoastChange}
          value={roasts.medium_dark}
        />medium-dark
        <input
          type="checkbox"
          name="dark"
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
