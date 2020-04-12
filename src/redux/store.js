import { createStore, applyMiddleware } from 'redux';
/* The middlware (logger) just console out the result. That's it! */
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// we just add this on our array
const middlewares = [logger];

// The parameter is to get the root reducer and also return of the applyMiddleware
// which will spread in all of the methods or all of the values [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
