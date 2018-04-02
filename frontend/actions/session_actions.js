import {
  deleteSession,
  postSession,
} from '../util/session_api_util';

import {
  createUser,
} from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = (formUser) => dispatch => (
  createUser(formUser).then(payload => dispatch(
    receiveCurrentUser(payload)
  ))
);

export const login = formUser => dispatch => (
  postSession(formUser).then(payload => dispatch(
    receiveCurrentUser(payload)
  ))
);

export const logout = () => dispatch => (
  deleteSession().then(() => dispatch(
    logoutCurrentUser()
  ))
);
