import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as SessionActions from '../session_actions';
import * as ApiUtil from '../../util/session_api_util'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const user = {
  username: 'EllisBell',
  password: 'ann3Acton',
  email: 'EmilyBronte@gondal.gov'
}

describe('Simple action creators', () => {
  test('receiveCurrentUser should create an action to receive current user', () => {
    const expectedAction = {
      type: SessionActions.RECEIVE_CURRENT_USER,
      payload: user
    };

    expect(SessionActions.receiveCurrentUser(user)).toEqual(expectedAction);
  });

  test('logoutCurrentUser should create an action to logout current user', () => {
    const expectedAction = {
      type: SessionActions.LOGOUT_CURRENT_USER
    };

    expect(SessionActions.logoutCurrentUser(user)).toEqual(expectedAction);
  });
});

describe('Asynchronous action creators', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => 'ajax promise');
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  test('login creates RECEIVE_CURRENT_USER after posting a new Session', () => {
    const store = mockStore({ user });
    const expectedAction = [{
        type: SessionActions.RECEIVE_CURRENT_USER,
        payload: user
      }];

    ApiUtil.postSession = jest.fn(() => {
      return Promise.resolve(user);
    });

    return store.dispatch(SessionActions.login()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  test('login creates RECEIVE_CURRENT_USER after posting a new Session', () => {
    const store = mockStore({ user });
    const expectedAction = [{
        type: SessionActions.LOGOUT_CURRENT_USER
      }];

    ApiUtil.deleteSession = jest.fn(() => {
      return Promise.resolve(user);
    });

    return store.dispatch(SessionActions.logout()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
