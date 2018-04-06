import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as sessionActions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  // let store;

  // if (window.currentUser) {
  //   const preloadedState = { session: { currentUser: window.currentUser } };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }
  const store = configureStore();

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing

  const root = document.getElementById('root');
  //testing
  window.receiveCurrentUser = sessionActions.receiveCurrentUser;
  window.createNewUser = sessionActions.createNewUser;
  //testing
  ReactDOM.render(<Root store={ store }/>, root);
});
