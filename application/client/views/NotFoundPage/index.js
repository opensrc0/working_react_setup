import Loadable from 'react-loadable';

export default Loadable({
  loader: () => {
    return import('./NotFoundPage' /* webpackChunkName: 'NotFoundPage' */);
  },
  loading: () => null,
});
