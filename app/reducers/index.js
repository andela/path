import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import entities from './entities';
import auth from './auth';
import cycles from './cycles';

export default combineReducers({
  routing,
  entities,
  auth,
  cycles
});
