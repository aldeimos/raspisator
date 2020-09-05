import React, {useContext} from 'react';
import {useSelector} from 'react-redux';
import {AuthContext} from '../../context/AuthContext';
import {globalsSelectors} from '../../store/globals';
import {withRouter, RouteComponentProps, Redirect} from 'react-router';

import Loader from '../../components/Loader';
import LoginForm from '../../components/LoginForm';



const SignUp: React.FC<RouteComponentProps> = ({ history, match }) => {
  const isLoaded = useSelector(globalsSelectors.signinStarted);
  const { currentUser } = useContext<any>(AuthContext);

  if (currentUser) {
    return <Redirect to="/"/>
  }

  return (
    <section className="sign-up">
      <LoginForm
        title="Регистрация"
        isLogin={false}
        history={history}
        match={match}
      />
      {isLoaded && <Loader/>}
    </section>
  )
};

export default withRouter(SignUp)
