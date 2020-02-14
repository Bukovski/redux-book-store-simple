import { createStore, compose, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk'
import reducer from 'reducers/index';

/*************** CUSTOM MIDDLEWARE *************************/

const loggerMiddleware = store => next => action => {
  console.group(action.type);
  
  console.log('Before', store.getState());
  const result = next(action);
  console.log('After', store.getState());

  console.groupEnd();
  
  return result
};



// set Redux to browser
const composeWithDevTools =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// const middlewares = [ loggerMiddleware, trimMiddleware, thunkMiddleware ];
const middlewares = [ loggerMiddleware, trimMiddleware ];
const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(reducer, composedEnhancers);


export default store;