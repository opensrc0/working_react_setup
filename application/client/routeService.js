import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const renderRoutes = (routes, extraProps = {}, switchProps = {}) => (
    routes ? (
      <Switch {...switchProps}>
        {
          routes.map((route, i) => (
            <Route
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={(props) => {
                const location = route.check && route.check(props);
                if (location) {
                  props.history.push(location);
                  return null;
                }
                return (
                  <route.component
                    {...props}
                    {...extraProps}
                    route={route}
                  />
                );
              }}
            />
          ))
        }
      </Switch>
    ) : null
  );