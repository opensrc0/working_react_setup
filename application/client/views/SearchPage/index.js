import Loadable from 'react-loadable';

export default Loadable({
  loader: () => {
    return import('./SearchPage' /* webpackChunkName: 'SearchPage' */);
  },
  loading: () => null,
});
