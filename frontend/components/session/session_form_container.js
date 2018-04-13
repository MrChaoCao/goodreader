import { connect } from 'react-redux';
import {
  login,
  logout,
  createNewUser
} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return ({
    loggedIn: Boolean(state.session.currentUser)
  });
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const formAction = (formType === 'sign_in') ? login : createNewUser;
  return {
    formAction: user => dispatch(formAction(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
