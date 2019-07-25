import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import {fetchCoffees, addCoffee, seeFavorites, deleteCoffee, updateCoffee } from './actions/coffeeActions';
import CoffeesContainer from './containers/CoffeesContainer.js';
import CoffeeAdd from './components/coffees/CoffeeAdd.js';
import Coffees from './components/coffees/Coffees.js';
//import Pic from './components/wrappers/PictureWrapper.js';

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
  <div className="navbar">
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
      <div className="flex-center">
        <Coffees coffees={props.favorites} updateCoffee={props.updateCoffee} deleteCoffee={props.deleteCoffee} />
      </div>
    )
  }

  function addCoffee() {
    return(
      <div className="flex-center">
        <CoffeeAdd addCoffee={props.addCoffee} coffees={props.coffees}/>
      </div>
    )
  }

  function home() {
    return(
      <div className="flex-center">
        <CoffeesContainer coffees={props.coffeeSearch}/>
      </div>
    )
  }

  function seeAll() {
    return(
      <div className="flex-center">
        <Coffees coffees={props.coffees} updateCoffee={props.updateCoffee} deleteCoffee={props.deleteCoffee} />
      </div>
    )
  }


    return (

      <div className="wrapper">
        <div className="App">
          <Router>
            <React.Fragment >
              <Navbar />
              <Route exact path="/" component={home} />
              <Route exact path="/favorites" component={favorites} />
              <Route exact path="/add_coffee" component={addCoffee} />
              <Route exact path="/see_all" component={seeAll} />
            </React.Fragment>
          </Router>
        </div>
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
