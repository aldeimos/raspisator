import React, {useEffect, ChangeEvent, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useActions} from '../../hooks/bindActions';
import {globalsActions, globalsSelectors} from '../../store/globals';

import Input from '../Input';
import Button from '../Button';

import './index.scss';

interface LoginFormProps {
  title: string,
  isLogin: boolean,
  match: {
    path: string
  },
  history: {
    push(url: string): void;
  }
}

const LoginForm: React.FC<LoginFormProps> = ({ title, isLogin, history, match}) => {
  const login = useSelector(globalsSelectors.loginData);
  const errorMessage = useSelector(globalsSelectors.errorMessage);
  const signinError = useSelector(globalsSelectors.signinError);
  const { setLoginValues, signInRequest, setSignInError, resetSignUpStatus } = useActions(globalsActions);

  useEffect(() => {
    if (match.path === '/signup') {
      resetSignUpStatus();
    }
  }, [resetSignUpStatus, match]);

  const handleLoginInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginValues(e.target.name, e.target.value);
    signinError && setSignInError(false, '');
  };

  const handleLoginRequest = async () => {
    await signInRequest('login');
  };

  const handleSignIn = useCallback(async () => {
    if (match.path === '/signup') {
      const result = await signInRequest();

      if (result) {
        return;
      }

      history.push('/');
    } else {
      history.push('/signup');
    }
  }, [match, history, signInRequest]);

  return (
    <div className="login-form">
      <h1 className="login-form__header">{title}</h1>
      <Input
        id="email"
        label="Электронная почта"
        placeholder="email@gmail.com"
        value={login.email}
        name="email"
        type="email"
        handler={handleLoginInputs}
      />
      <Input
        id="password"
        label="Пароль"
        placeholder="Минимум 8 символов"
        value={login.password}
        type="password"
        name="password"
        handler={handleLoginInputs}
      />
      {signinError &&
        <div className="login-form__error">
          {errorMessage}
        </div>
      }
      <div className="login-form__controls">
        {isLogin &&
          <Button
            text="Войти"
            handler={handleLoginRequest}
          />
        }
        <Button
          handler={handleSignIn}
          text="Регистрация"
        />
      </div>
    </div>
  )
};

export default LoginForm;
