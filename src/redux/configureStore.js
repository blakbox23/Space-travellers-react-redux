import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/MissionsStore';
import rocketsReduces from './rockets/RocketsStore';

const reducer = combineReducers({
  missionsState: missionsReducer,
  rocketsState: rocketsReduces,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
