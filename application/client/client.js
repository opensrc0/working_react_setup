import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
// import cookies from 'js-cookie';
// import makeCreateStore from './services/store/makeCreateStore';
// import * as uiActionCreators from './services/ui/uiDuck';
// import * as authActionCreators from './services/auth/authDuck';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import analyticsService from './services/analytics/analyticsService';
// import androidService from './services/android/androidService';
// import * as authService from './services/auth/authService';
// import * as abService from './services/ab/abService';
// import * as routeService from './services/route/routeService';
import routes from './routes';
console.log(routes, 'client js');
// authService.verifyDomain(window.location.origin);
const history = createBrowserHistory();
// const store = makeCreateStore({ history })(window.__INITIAL_STATE__);
// analyticsService.init(store.getState, history);
// androidService.init();
// abService.init(cookies.getJSON('ab_user'), cookies.getJSON('ab_experiments'));
// store.dispatch(authActionCreators.hydrateUser());
// store.dispatch(uiActionCreators.setSearchParameters(history.location.search));

ReactDOM.hydrate(

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
  ,
  document.getElementById('root'),
);
