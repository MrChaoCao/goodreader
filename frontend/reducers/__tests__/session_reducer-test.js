import SessionReducer from '../session_reducer';
import * as SessionActions from '../../actions/session_actions';

const user = {
  username: 'TheLastTycoon',
  id: '96',
  email: 'ffitzgerald@pg.com'
}

const _nullUser = {
  currentUser: null,
};

describe('SessionReducer', () => {
  test('should return the intial state', () => {
    expect(SessionReducer(undefined, {})).toEqual(
      {
          currentUser: null,
      }
    );
  });

  test('should handle RECEIVE_CURRENT_USER', () => {
    let action = {
      type: SessionActions.RECEIVE_CURRENT_USER,
      payload: user
    }
    expect(SessionReducer(_nullUser, action)).toEqual(Object.assign({}, { currentUser: user }));
  });

  test('should handle LOGOUT_CURRENT_USER', () => {
    let action = {
      type: SessionActions.LOGOUT_CURRENT_USER
    }
    expect(SessionReducer({ currentUser: user }, action)).toEqual(_nullUser);
  });
});
