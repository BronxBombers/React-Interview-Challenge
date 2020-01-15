import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';

import store, { history } from './core/store';
import * as paths from './core/paths.constants';
import HomeScreen from './HomeScreen';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            exact
            path={paths.HOME}
            component={HomeScreen}
          />
          <Redirect
            to={paths.HOME}
          />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
