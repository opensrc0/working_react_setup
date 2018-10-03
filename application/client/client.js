import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import * as routeService from './routeService';
import createBrowserHistory from 'history/createBrowserHistory';
import CreateStore from './store/store';
import routes from './routes';
const history = createBrowserHistory();
const store = CreateStore({ history, isBrowser: 'ture' })(window.__INITIAL_STATE__);

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
          {routeService.renderRoutes(routes)}
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root'),
);
