import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetchCoffees } from './actions/coffeeActions';

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

class App extends React.Component {

  componentDidMount() {
    this.props.fetchCoffees()
  }

  render() {
    return (
      <div className="App">
        <header>Home Page</header>
        <ul>{this.props.coffees.map(coffee => <li key={coffee.id}> {coffee.name} </li>)}</ul>
        <ul>{this.props.coffeeSearch.map(coffee => <li key={coffee.id}> {coffee.name} </li>)}</ul>
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
