import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger';
import reducer from 'reducers/index';


// set Redux to browser
const composeWithDevTools =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewares = [ logger, thunkMiddleware ];
const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(reducer, composedEnhancers);


export default store;