import React from 'react';
import { NavLink } from 'react-router-dom';

 const link = {
  width: '100px',
  height: '30px',
  padding: '5px',
  margin: '0 6px 6px',
  background: 'grey',
  borderRadius: '5px',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        className="link"
        activeStyle={{ background: 'black' }}
      >Home</NavLink>
      <NavLink
        to="/add_coffee"
        exact
        style={link}
        className="link"
        activeStyle={{ background: 'black' }}
      >Add Coffee</NavLink>
      <NavLink
        to="/favorites"
        exact
        style={link}
        className="link"
        activeStyle={{ background: 'black' }}
      >Favorites</NavLink>
      <NavLink
        to="/see_all"
        exact
        style={link}
        className="link"
        activeStyle={{ background: 'black' }}
      >See All</NavLink>
      </div>
    );
  }

  export default Navbar;
