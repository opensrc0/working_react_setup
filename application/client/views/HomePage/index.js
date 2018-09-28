import Loadable from 'react-loadable';

export default Loadable({
  loader: () => {
    return import('./HomePage' /* webpackChunkName: 'HomePage' */);
  },
  loading: () => null,
});
