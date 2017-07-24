import { combineReducers } from 'redux';
import CounterReducer from './counterReducer';

const rootReducer = combineReducers({
  counter_reducer : CounterReducer
});

export default rootReducer;
