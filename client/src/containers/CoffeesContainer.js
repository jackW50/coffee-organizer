import React, { Component } from 'react';
import { connect } from 'react-redux';
import Coffees from '../components/coffees/Coffees.js';
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

export default connect(null, { seeFavorites, addCoffee, deleteCoffee, updateCoffee, searchCoffees })(CoffeesContainer);
