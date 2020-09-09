import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';

import Loader from '../components/Loader';

import app from '../firebase/base';
import {useActions} from '../hooks/bindActions';
import {globalsActions, globalsSelectors} from '../store/globals';

interface AuthContextProps {
  children: React.ReactNode
}

export const AuthContext = React.createContext({});

const AuthProvider: React.ElementType = ({ children }: AuthContextProps) => {
  const {setCurrentUser} = useActions(globalsActions);
  const currentUser = useSelector(globalsSelectors.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      const listener = app.auth().onAuthStateChanged((user) => {

        if (user) {
          setCurrentUser({email: user.email, uid: user.uid});
          listener();
        } else {
          setCurrentUser(null);
        }

        setLoading(false);
      });
    }
  }, [currentUser, setCurrentUser]);

  if (loading) {
    return <Loader/>
  }

  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider
