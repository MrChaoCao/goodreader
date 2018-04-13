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
    this.props.formAction({ user });
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
            <br/>
              {
                this.props.formType === "sign_up" &&
                <div>
                  Sign up for Goodreader
                </div>
              }
              {
                this.props.formType === "sign_in" &&
                <div>
                  Sign in to Goodreader
                </div>
              }
            <br/>
            <label>Username:
                <input
                  type="text"
                  value={ this.state.username }
                  onChange={ this.update('username') }
                  className="session-input"
                  />
            </label>
            <br/>
              {
                this.props.formType === "sign_up" &&
                <label>Email Address:
                    <input
                      type="text"
                      value={ this.state.email }
                      onChange={ this.update('email') }
                      className="session-input"
                      />
                </label>
              }
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
            <input type="submit" value="Sign in" />
            {
              this.props.formType === "sign_up" &&
              <div>
                Already a member?
                <Link to="/sign_in">Sign in</Link>
              </div>
            }
            {
              this.props.formType === "sign_in" &&
              <div>
                Not a member?
                <Link to="/sign_up">Sign up</Link>
              </div>
            }
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
