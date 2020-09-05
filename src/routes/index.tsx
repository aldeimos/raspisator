import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthProvider from '../context/AuthContext';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/" component={Home} exact/>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/signup" exact>
            <SignUp/>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
};

export default Routes;
