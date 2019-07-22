import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetchCoffees, addCoffee, seeFavorites, deleteCoffee, updateCoffee } from './actions/coffeeActions';
import CoffeesContainer from './containers/CoffeesContainer.js';
import CoffeeAdd from './components/coffees/CoffeeAdd.js';
import Coffees from './components/coffees/Coffees.js';


const link = {
  width: '100px',
  height: '30px',
  padding: '5px',
  margin: '0 6px 6px',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div className="flex">
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{ background: 'black' }}
    >Home</NavLink>
    <NavLink
      to="/add_coffee"
      exact
      style={link}
      activeStyle={{ background: 'black' }}
    >Add Coffee</NavLink>
    <NavLink
      to="/favorites"
      exact
      style={link}
      activeStyle={{ background: 'black' }}
    >Favorites</NavLink>
    <NavLink
      to="/see_all"
      exact
      style={link}
      activeStyle={{ background: 'black' }}
    >See All</NavLink>
    </div>;


function App(props) {

  useEffect(() => {
    props.fetchCoffees();
  }, [])

  useEffect(() => {
    props.seeFavorites();
  }, [])

  function favorites() {
    return (
      <Coffees coffees={props.favorites} updateCoffee={props.updateCoffee} deleteCoffee={props.deleteCoffee} />
    )
  }

  function addCoffee() {
    return(
      <CoffeeAdd addCoffee={props.addCoffee} coffees={props.coffees}/>
    )
  }

  function home() {
    return(
      <CoffeesContainer coffees={props.coffeeSearch}/>
    )
  }

  function seeAll() {
    return(
      <Coffees coffees={props.coffees} updateCoffee={props.updateCoffee} deleteCoffee={props.deleteCoffee} />
    )
  }


    return (
      <div className="App">

      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={home} />
          <Route exact path="/favorites" component={favorites} />
          <Route exact path="/add_coffee" component={addCoffee} />
          <Route exact path="/see_all" component={seeAll} />
        </React.Fragment>
      </Router>
      </div>
    );

}

const mapStateToProps = state => {
  return {
    coffees: state.coffees.coffees,
    coffeeSearch: state.coffees.coffeeSearch,
    favorites: state.coffees.favorites
  }
}


export default connect(mapStateToProps, { fetchCoffees, seeFavorites, addCoffee, deleteCoffee, updateCoffee })(App)
