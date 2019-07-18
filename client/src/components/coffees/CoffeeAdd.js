import React, { useState } from 'react';

const CoffeeAdd = props => {

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
