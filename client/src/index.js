import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Home = () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const AddCoffee = () => {
  return(
    <Provider store={store}>
      <form>
        <input type="text" name="coffee-name" placeholder="coffee name" />
        <input type="submit" />
      </form>
    </Provider>
  )
}

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/add_coffee" component={AddCoffee} />
    </React.Fragment>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
