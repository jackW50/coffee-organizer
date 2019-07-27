import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import {fetchCoffees, addCoffee, seeFavorites, deleteCoffee, updateCoffee } from './actions/coffeeActions';
import CoffeesContainer from './containers/CoffeesContainer.js';
import CoffeeAdd from './components/coffees/CoffeeAdd.js';
import Coffees from './components/coffees/Coffees.js';
import Navbar from './components/ui/Navbar.js';

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
          <footer>
            <small>coffee organizer 2019</small>
          </footer>
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
