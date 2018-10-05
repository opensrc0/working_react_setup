import React from 'react';
import { matchRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createMemoryHistory from 'history/createMemoryHistory';
import renderHtml from './renderHtml';
import CreateStore from './../../../client/store/store';
import * as routeService from './../../../client/routeService';
import execComponentWillServerRender from './execComponentWillServerRender';
import routes from '../../../client/routes';

const APP_SSR = process.env.APP_SSR === 'true';

export default async (req, res) => {
  const history = createMemoryHistory();
  history.replace(req.originalUrl);
  const branches = matchRoutes(routes, req.originalUrl.split('?')[0]);
  const branch = branches[branches.length - 1];

  // const sheet = new ServerStyleSheet();
  const store = CreateStore({ history, isBrowser: false })();
  const chunks = [];

  if (APP_SSR) {
    await execComponentWillServerRender(
      branches,
      { store, route: branch.route, history, req, res },
    );
  }

  // RenderToStaring is built-in function to convert react to html form fto make SEO friendly
  // To use of JSX use react in preset in .babelrc
  const app = renderToString(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {routeService.renderRoutes(routes)}
        </Switch>
      </Router>
    </Provider>
  );

  const page = renderHtml(
    app,
    req,
  );

  res.send(page);
};
