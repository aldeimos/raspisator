import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './store/';

import App from './App';
import './index.scss';
import 'normalize.css';
import * as serviceWorker from './serviceWorker';

const logger = (store: any) => (next: any) => (action: any) => {
  if (process.env.NODE_ENV !== 'production') console.log('dispatching', action);
  return next(action);
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
