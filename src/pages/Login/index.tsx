import React, {useContext} from 'react';
import {useSelector} from 'react-redux';
import {globalsSelectors} from '../../store/globals';
import {withRouter, RouteComponentProps, Redirect} from 'react-router';
import {AuthContext} from '../../context/AuthContext';

import LoginForm from '../../components/LoginForm';
import Loader from '../../components/Loader';

import './index.scss';

const Login: React.FC<RouteComponentProps> = ({ history, match }) => {
  const isLoaded = useSelector(globalsSelectors.signinStarted);
  const { currentUser } = useContext<any>(AuthContext);

  if (currentUser) {
    return <Redirect to="/"/>
  }

  return (
    <section className="login">
      <LoginForm
        title="Вход"
        isLogin={true}
        history={history}
        match={match}
      />
      {isLoaded && <Loader/>}
    </section>
  )
};

export default withRouter(Login);
