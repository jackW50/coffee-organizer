import { combineReducers } from 'redux';
import coffeesReducer from './coffees_reducer';

const rootReducer = combineReducers({
  coffees: coffeesReducer
});

export default rootReducer;
