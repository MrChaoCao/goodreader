import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionActions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.receiveCurrentUser = sessionActions.receiveCurrentUser;
  window.createNewuser = sessionActions.createNewUser;
  ReactDOM.render(<h1>Welcome to goodreader</h1>, root);
});
