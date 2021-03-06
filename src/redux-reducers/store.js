import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from "redux-persist";
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger';

import reducer from './root.reducer';


// set Redux to browser
const composeWithDevTools =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewares = [ thunkMiddleware ];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(reducer, composedEnhancers);
const persistor = persistStore(store);


export {
  store,
  persistor
};