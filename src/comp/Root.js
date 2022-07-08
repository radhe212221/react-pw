// redux file
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const intialstate = {};
function reducer(state = intialstate, action) {
  return state;
}

const store = createStore(reducer);

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
