import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import portfolio from './portfolio';

export default combineReducers({
  user,
  runtime,
  portfolio
});
