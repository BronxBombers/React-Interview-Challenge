import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import homeScreenReducer from '../HomeScreen/HomeScreen.reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  homeScreen: homeScreenReducer,
});