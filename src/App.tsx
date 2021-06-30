import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ThemeProvider} from '@fluentui/react-theme-provider'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import MainRoutes from './routes';
import {lightTheme} from './constants/theme'
import './App.css';

import {store, persistor} from './store'

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider applyTo='body' theme={lightTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route path='/' component={MainRoutes} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};
