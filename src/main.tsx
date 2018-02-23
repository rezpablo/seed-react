import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import {Router} from 'react-router';
import history from './main/config/history';

import 'font-awesome/css/font-awesome.css';

import {PersistGate} from 'redux-persist/integration/react'
import configureStore from './main/config/store';

var {store, persistor} = configureStore();


ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <App />
          </Router>
      </PersistGate>
  </Provider>,
  document.getElementById('app')
);