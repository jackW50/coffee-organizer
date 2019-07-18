import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetchCoffees, addCoffee } from './actions/coffeeActions';
import CoffeesContainer from './containers/CoffeesContainer.js';
import CoffeeAdd from './components/coffees/CoffeeAdd.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const link = {
  width: '100px',
  height: '30px',
  padding: '5px',
  margin: '0 6px 6px',
  background: 'grey',
  textDecoration: 'none',
  color: 'red',
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
    </div>;

    const Home = () => {
      return(
        <CoffeesContainer />
      )
    }

    const AddCoffee = () => {
      return(
        <CoffeeAdd addCoffee={addCoffee} />
      )
    }

class App extends React.Component {


  componentDidMount() {
    this.props.fetchCoffees()
  }

  render() {
    return (
      <div className="App">
  
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/add_coffee" component={AddCoffee} />
        </React.Fragment>
      </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coffees: state.coffees.coffees,
    coffeeSearch: state.coffees.coffeeSearch
  }
}

export default connect(mapStateToProps, { fetchCoffees })(App)
