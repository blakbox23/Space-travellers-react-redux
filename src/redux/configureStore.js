import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    booksState: booksReducer,
    // additional reducers could be added here
  });

  const store = createStore(
    reducer,
    applyMiddleware(logger, thunk),
  );

  export default store;
