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

const App = () => (
  <div>
    <Link to="/" className="">
      <h1>goodreader</h1>
    </Link>

    <Switch>
      <Route exact path="/"/>
      <Route render={ () => <Redirect to="/"/> } />
    </Switch>
  </div>
)

export default App;
