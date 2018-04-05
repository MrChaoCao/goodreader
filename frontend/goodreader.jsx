import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import * as sessionActions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;

  const root = document.getElementById('root');
  window.receiveCurrentUser = sessionActions.receiveCurrentUser;
  window.createNewUser = sessionActions.createNewUser;

  ReactDOM.render(<h1>Welcome to goodreader</h1>, root);
});
