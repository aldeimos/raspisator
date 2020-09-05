import React, { useContext } from 'react';
import { Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';

const PrivateRoute: React.ElementType = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext<any>(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps}/>
        ) : (
          <Redirect to="/login"/>
        )
      }
    />
  )
};

export default PrivateRoute;
