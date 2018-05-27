import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// import App from './containers/App';
import App from './App'
import * as reducers from './reducers';

import { createLogger } from 'redux-logger'
const logger = createLogger({
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
      applyMiddleware(thunk, logger)
      // other store enhancers if any
    );

const reducer = combineReducers(reducers);

const store = createStore(reducer, enhancer);

// const store = createStore(reducer,
//   applyMiddleware(thunk, logger)
// );


ReactDOM.render(<Provider store={store}>
  <BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
