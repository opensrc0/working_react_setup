import NotFoundPage from './views/NotFoundPage';
import HomePage from './views/HomePage';
import SearchPage from './views/SearchPage';

const routes = [
  {
    path: '/',
    exact: true,
    strict: true,
    name: 'home',
    component: HomePage,
  },
  {
    path: '/search',
    exact: true,
    strict: true,
    name: 'search',
    component: SearchPage,
  },
  {
    name: 'NotFound',
    component: NotFoundPage,
  }
];

export default routes;
