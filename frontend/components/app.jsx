import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <Link to="/" className="">
      <h1>goodreader</h1>
    </Link>

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer}/>
      <Route render={ () => <Redirect to="/"/> } />
      <Route exact path="/"/>
    </Switch>
  </div>
)

export default App;
