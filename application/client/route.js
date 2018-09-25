import NotFoundPage from './views/NotFoundPage/NotFoundPage';
import HomePage from './views/HomePage/HomePage';

const routes = [{
    path: '/',
    exact: true,
    strict: true,
    name: 'home',
    component: HomePage,
  },{
    name: 'NotFound',
    component: NotFoundPage,
  }];

export default routes;
