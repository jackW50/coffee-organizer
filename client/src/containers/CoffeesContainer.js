import React, { Component } from 'react';
import { connect } from 'react-redux';
import Coffees from '../components/coffees/Coffees.js';
//import CoffeeAdd from '../components/coffees/CoffeeAdd.js';
import CoffeeSearch from '../components/coffees/CoffeeSearch.js';
import { seeFavorites, addCoffee, deleteCoffee, updateCoffee, searchCoffees } from '../actions/coffeeActions';


class CoffeesContainer extends Component {

  render() {
    return(
      <div>
        <CoffeeSearch searchCoffees={this.props.searchCoffees} />
        <Coffees coffees={this.props.coffees}
          deleteCoffee={this.props.deleteCoffee}
          updateCoffee={this.props.updateCoffee}
        />


      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coffees: state.coffees.coffeeSearch
  }
}

export default connect(mapStateToProps, { seeFavorites, addCoffee, deleteCoffee, updateCoffee, searchCoffees })(CoffeesContainer);
