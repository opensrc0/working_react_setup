import React from 'react';
import { matchRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { Router, Route, Switch } from 'react-router-dom';
import createMemoryHistory from 'history/createMemoryHistory';
import renderHtml from './renderHtml';
import routes from '../../../client/route';

const APP_SSR = process.env.APP_SSR === 'true';

export default async (req, res) => {
  const history = createMemoryHistory();
  history.replace(req.originalUrl);
  const branches = matchRoutes(routes, req.originalUrl.split('?')[0]);

  // RenderToStaring is built-in function to convert react to html form fto make SEO friendly
  // To use of JSX use react in preset in .babelrc
  const app = renderToString(
      <Router history={history}>
        <Switch>
          {
            routes.map((route, i) => (
              <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props) => {
                  return (
                    <route.component
                      {...props}
                      route={route}
                    />
                  );
                }}
              />
            ))
          }
        </Switch>
      </Router>
  );

  const page = renderHtml(
    app,
    req,
  );

  res.send(page);
};
