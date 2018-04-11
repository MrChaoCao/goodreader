import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/')
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to ="/signup">Not a member? Sign up</Link>
    } else {
      return <Link to="/login">Already a member? Sign in</Link>
    }
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={ this.handleSubmit } className="session-form-box">
          <div className="session-form">
            Welcome
            <br/>
            { this.props.formType }
            <label>Username:
                <input
                  type="text"
                  value={ this.state.username }
                  onChange={ this.update('username') }
                  className="session-input"
                  />
            </label>
            <br/>
              <label>Email Address:
                  <input
                    type="text"
                    value={ this.state.email }
                    onChange={ this.update('email') }
                    className="session-input"
                    />
              </label>
            <br/>
            <label>Password:
              <input
                type="password"
                value={ this.state.password }
                onChange={ this.update('password') }
                className="session-input"
                />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
